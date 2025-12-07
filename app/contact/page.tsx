import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';

export default function ContactPage() {
  const filePath = path.join(process.cwd(), 'content', 'contact.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <main className="page-content">
      <div className="container">
        <MarkdownRenderer content={content} />
      </div>
    </main>
  );
}
