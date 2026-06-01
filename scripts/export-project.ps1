#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Exports the entire project structure and file contents into a single file for LLM analysis.
.DESCRIPTION
    This script creates a comprehensive project dump that includes:
    - Complete directory tree structure
    - All source code files with proper formatting
    - Useful for sharing with LLMs or documentation
.PARAMETER OutputPath
    Path to the output file (default: project-export.md)
.PARAMETER ExcludePatterns
    Patterns to exclude (default: node_modules, .git, .next, .vercel, dist, build)
.EXAMPLE
    .\scripts\export-project.ps1
    .\scripts\export-project.ps1 -OutputPath "./project-summary.md"
#>

param(
    [string]$OutputPath = "project-export.md",
    [string[]]$ExcludePatterns = @("node_modules", "\.git", "\.next", "\.vercel", "dist", "build", "\.vercel", "coverage", "\.nyc_output", "tsconfig.tsbuildinfo")
)

$projectRoot = Split-Path -Parent -Path (Split-Path -Parent -Path $PSScriptRoot)
$output = @()

# Add header
$output += @(
    "# Project Export",
    "",
    "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')",
    "Project Root: $projectRoot",
    "",
    "---",
    ""
)

# Build exclude filter
function ShouldExclude([string]$Path) {
    foreach ($pattern in $ExcludePatterns) {
        if ($Path -match $pattern) {
            return $true
        }
    }
    return $false
}

# Get all files and build tree structure
Write-Host "Scanning project structure..." -ForegroundColor Cyan

$allItems = @()
Get-ChildItem -Path $projectRoot -Recurse -Force | Where-Object {
    -not (ShouldExclude $_.FullName)
} | ForEach-Object {
    $allItems += $_
}

# Build directory tree
$output += "## Directory Structure"
$output += ""
$output += "```"

$dirs = $allItems | Where-Object { $_.PSIsContainer } | Sort-Object FullName
$files = $allItems | Where-Object { -not $_.PSIsContainer } | Sort-Object FullName

foreach ($item in ($dirs + $files)) {
    $relativePath = $item.FullName.Substring($projectRoot.Length + 1)
    $level = ($relativePath.Split('\').Count - 1)
    $indent = "  " * $level
    
    if ($item.PSIsContainer) {
        $output += "$indent$($item.Name)/"
    }
    else {
        $output += "$indent$($item.Name)"
    }
}

$output += "```"
$output += ""

# Add file contents
$output += "---"
$output += ""
$output += "## File Contents"
$output += ""

$sourceFiles = $files | Where-Object { 
    $ext = $_.Extension
    $ext -match '\.(ts|tsx|js|jsx|json|css|md|yml|yaml|env|config)$'
}

Write-Host "Processing $($sourceFiles.Count) source files..." -ForegroundColor Cyan

foreach ($file in $sourceFiles) {
    $relativePath = $file.FullName.Substring($projectRoot.Length + 1)
    $ext = $file.Extension -replace "^\."
    
    $output += "### $relativePath"
    $output += ""
    $output += "``````$ext"
    
    try {
        $content = Get-Content -Path $file.FullName -Raw -ErrorAction Stop
        $output += $content
    }
    catch {
        $output += "Error reading file: $_"
    }
    
    $output += "``````"
    $output += ""
}

# Write output
Write-Host "Writing to $OutputPath..." -ForegroundColor Cyan
$output -join "`n" | Out-File -FilePath $OutputPath -Encoding UTF8

$fileSize = (Get-Item $OutputPath).Length / 1KB
Write-Host "✓ Project exported successfully!" -ForegroundColor Green
Write-Host "File: $OutputPath" -ForegroundColor Green
Write-Host "Size: $([math]::Round($fileSize, 2)) KB" -ForegroundColor Green
Write-Host ""
Write-Host "You can now share this file with an LLM for analysis!" -ForegroundColor Green
