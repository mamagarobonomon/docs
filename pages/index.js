import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default function Home({ content, frontmatter }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-gray-600">{frontmatter.description}</p>
      </header>
      <main className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'index.mdx');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);

  // Convert MDX to HTML (simplified)
  const htmlContent = await marked(content);

  return {
    props: {
      content: htmlContent,
      frontmatter
    }
  };
}
