import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../components/MarkdownRenderer';

export default function ZorgprofessionalsPage() {
  const filePath = path.join(process.cwd(), 'content', 'zorgprofessionals.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <main className="page-content">
      <div className="container">
        <MarkdownRenderer content={content} />
      </div>
    </main>
  );
}
