const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Simple build script to generate static HTML from MDX files
function buildStaticSite() {
  const sourceDir = path.join(__dirname);
  const outputDir = path.join(__dirname, '..', '.vercel', 'output', 'static');

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Copy static assets
  const publicDir = path.join(__dirname, 'public');
  if (fs.existsSync(publicDir)) {
    copyDir(publicDir, path.join(outputDir, 'public'));
  }

  // Process index.mdx
  const indexPath = path.join(sourceDir, 'index.mdx');
  if (fs.existsSync(indexPath)) {
    const fileContent = fs.readFileSync(indexPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);

    const html = generateHTML(content, frontmatter);
    fs.writeFileSync(path.join(outputDir, 'index.html'), html);
  }

  console.log('Static build completed');
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
