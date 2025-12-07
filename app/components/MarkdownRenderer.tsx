interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Eenvoudige markdown parser
  const renderMarkdown = (text: string) => {
    // Verwijder notities sectie
    const notitiesIndex = text.indexOf('## Notities');
    const cleanedText = notitiesIndex !== -1 ? text.substring(0, notitiesIndex) : text;
    
    const lines = cleanedText.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      
      // Headers
      if (line.startsWith('# ')) {
        elements.push(<h1 key={i}>{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i}>{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i}>{line.substring(4)}</h3>);
      }
      // Horizontal rule
      else if (line === '---') {
        elements.push(<hr key={i} />);
      }
      // Bold text with **
      else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={i}><strong>{line.substring(2, line.length - 2)}</strong></p>);
      }
      // Regular paragraph
      else if (line.trim() && !line.startsWith('[')) {
        elements.push(<p key={i}>{line}</p>);
      }
      // Empty line
      else if (!line.trim()) {
        elements.push(<br key={i} />);
      }
      
      i++;
    }

    return elements;
  };

  return <div className="markdown-content">{renderMarkdown(content)}</div>;
}
