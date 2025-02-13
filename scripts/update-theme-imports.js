const fs = require('fs');
const path = require('path');

// Map of old THEME properties to new theme properties
const PROPERTY_MAP = {
  'THEME.colors': 'theme.colors',
  'THEME.spacing': 'theme.spacing',
  'THEME.borderRadius': 'theme.borderRadius',
  'THEME.shadows': 'theme.shadows',
  'THEME.typography': 'theme.typography',
  'THEME.effects': 'theme.effects',
  'THEME.grid': 'theme.grid',
  'THEME.components': 'theme.components',
  'THEME.gradients': 'theme.gradients'
};

function updateImports(content) {
  // Replace old imports
  content = content.replace(
    /import\s*{\s*THEME\s*}\s*from\s*['"]@\/theme\/constants['"];?/g,
    'import { theme } from \'@/theme\';'
  );

  // Replace THEME usage with theme
  Object.entries(PROPERTY_MAP).forEach(([oldProp, newProp]) => {
    content = content.replace(new RegExp(oldProp, 'g'), newProp);
  });

  return content;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = updateImports(content);
  
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  });
}

// Start processing from src directory
walkDir(path.join(__dirname, '../src')); 