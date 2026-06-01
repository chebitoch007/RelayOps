#!/usr/bin/env node

/**
 * Export Project Structure
 * 
 * Concatenates all project files into a single markdown file
 * that can be shared with LLMs or used for documentation.
 * 
 * Usage:
 *   node scripts/export-project.js
 *   node scripts/export-project.js --output project-summary.md
 */

const fs = require('fs');
const path = require('path');

// Configuration
const excludePatterns = [
  'node_modules',
  '\\.git',
  '\\.next',
  '\\.vercel',
  'dist',
  'build',
  'coverage',
  '\\.nyc_output',
  'tsconfig\\.tsbuildinfo',
  '\\.env',
  '\\.env\\.local',
];

const sourceFileExtensions = [
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.json',
  '.css',
  '.md',
  '.yml',
  '.yaml',
  '.config.js',
  '.config.mjs',
];

const projectRoot = path.resolve(__dirname, '..');
const outputPath = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]
  : 'project-export.md';

// Helper functions
function shouldExclude(filePath) {
  return excludePatterns.some(pattern => {
    const regex = new RegExp(pattern);
    return regex.test(filePath);
  });
}

function getRelativePath(filePath) {
  return path.relative(projectRoot, filePath);
}

function isSourceFile(filePath) {
  return sourceFileExtensions.some(ext => filePath.endsWith(ext));
}

function getLanguageFromExtension(filePath) {
  const ext = path.extname(filePath).slice(1);
  const langMap = {
    ts: 'typescript',
    tsx: 'typescript',
    js: 'javascript',
    jsx: 'javascript',
    json: 'json',
    css: 'css',
    md: 'markdown',
    yml: 'yaml',
    yaml: 'yaml',
    mjs: 'javascript',
  };
  return langMap[ext] || ext;
}

// Main export function
function exportProject() {
  console.log('Scanning project structure...'.cyan || 'Scanning project structure...');

  const output = [];
  const allFiles = [];
  const allDirs = [];

  // Walk directory tree
  function walkDir(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = getRelativePath(fullPath);

        if (shouldExclude(relativePath)) {
          continue;
        }

        if (entry.isDirectory()) {
          allDirs.push(fullPath);
          walkDir(fullPath);
        } else {
          allFiles.push(fullPath);
        }
      }
    } catch (err) {
      console.error(`Error reading directory ${dir}:`, err.message);
    }
  }

  // Start walking
  walkDir(projectRoot);

  // Generate output
  output.push('# Project Export');
  output.push('');
  output.push(`Generated: ${new Date().toLocaleString()}`);
  output.push(`Project Root: ${projectRoot}`);
  output.push('');
  output.push('---');
  output.push('');

  // Directory structure
  output.push('## Directory Structure');
  output.push('');
  output.push('```');

  allDirs.sort().forEach(dir => {
    const relativePath = getRelativePath(dir);
    const depth = relativePath.split(path.sep).length - 1;
    const indent = '  '.repeat(depth);
    output.push(`${indent}${path.basename(dir)}/`);
  });

  allFiles.sort().forEach(file => {
    const relativePath = getRelativePath(file);
    const depth = relativePath.split(path.sep).length - 1;
    const indent = '  '.repeat(depth);
    output.push(`${indent}${path.basename(file)}`);
  });

  output.push('```');
  output.push('');

  // File contents
  const sourceFiles = allFiles.filter(isSourceFile).sort();

  output.push('---');
  output.push('');
  output.push('## File Contents');
  output.push('');

  console.log(`Processing ${sourceFiles.length} source files...`);

  sourceFiles.forEach(file => {
    const relativePath = getRelativePath(file);
    const lang = getLanguageFromExtension(file);

    output.push(`### ${relativePath}`);
    output.push('');
    output.push(`\`\`\`${lang}`);

    try {
      const content = fs.readFileSync(file, 'utf-8');
      output.push(content);
    } catch (err) {
      output.push(`Error reading file: ${err.message}`);
    }

    output.push('```');
    output.push('');
  });

  // Write output
  const fullOutputPath = path.resolve(outputPath);
  fs.writeFileSync(fullOutputPath, output.join('\n'), 'utf-8');

  const fileSize = (fs.statSync(fullOutputPath).size / 1024).toFixed(2);
  console.log('✓ Project exported successfully!');
  console.log(`File: ${fullOutputPath}`);
  console.log(`Size: ${fileSize} KB`);
  console.log('');
  console.log('You can now share this file with an LLM for analysis!');
}

// Run export
exportProject();
