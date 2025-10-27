const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Simple build script to generate static HTML from MDX files
function buildStaticSite() {
  const sourceDir = path.join(__dirname);
  const outputDir = path.join(__dirname, '.vercel', 'output', 'static');

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Copy static assets
  const publicDir = path.join(__dirname, 'public');
  if (fs.existsSync(publicDir)) {
    copyDir(publicDir, path.join(outputDir, 'public'));
  }

  // Copy favicon and images
  const faviconPath = path.join(sourceDir, 'favicon.svg');
  if (fs.existsSync(faviconPath)) {
    fs.copyFileSync(faviconPath, path.join(outputDir, 'favicon.svg'));
  }

  const imagesDir = path.join(sourceDir, 'images');
  if (fs.existsSync(imagesDir)) {
    copyDir(imagesDir, path.join(outputDir, 'images'));
  }

  const logoDir = path.join(sourceDir, 'logo');
  if (fs.existsSync(logoDir)) {
    copyDir(logoDir, path.join(outputDir, 'logo'));
  }

  // Process all MDX files
  processDirectory(sourceDir, outputDir, '');

  console.log('Static build completed');
}

function processDirectory(sourceDir, outputDir, relativePath) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(sourceDir, entry.name);
    const relPath = path.join(relativePath, entry.name);

    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      // Recursively process subdirectories
      const newOutputDir = path.join(outputDir, entry.name);
      fs.mkdirSync(newOutputDir, { recursive: true });
      processDirectory(srcPath, newOutputDir, relPath);
    } else if (entry.name.endsWith('.mdx')) {
      // Process all MDX files
      const fileContent = fs.readFileSync(srcPath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);

      const html = generateHTML(content, frontmatter);
      const outputName = entry.name === 'index.mdx' ? 'index.html' : entry.name.replace('.mdx', '.html');
      const outputPath = path.join(outputDir, outputName);
      fs.writeFileSync(outputPath, html);
    }
  }
}

function generateHTML(content, frontmatter) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${frontmatter.title || 'Nimbus Documentation'}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .content {
            line-height: 1.8;
        }
        h1, h2, h3, h4, h5, h6 {
            color: #2c3e50;
        }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', monospace;
        }
        pre {
            background: #f4f4f4;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
        }
        .card {
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            padding: 16px;
            margin: 16px 0;
            background: #f8f9fa;
        }
        .card-group {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 16px;
            margin: 16px 0;
        }
        .steps {
            margin: 16px 0;
        }
        .step {
            margin: 8px 0;
            padding: 8px;
            border-left: 3px solid #007acc;
            background: #f8f9fa;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${frontmatter.title || 'Nimbus Documentation'}</h1>
        ${frontmatter.description ? `<p>${frontmatter.description}</p>` : ''}
    </div>
    <div class="content">
        ${content.replace(/\n/g, '<br>')}
    </div>
</body>
</html>`;
}

function copyDir(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

buildStaticSite();
