import React, { useState } from 'react';
import { marked } from 'marked';
import 'tailwindcss/tailwind.css';

const initialMarkdown = `# This is an H1 Header

## This is an H2 Subheader

Here is a [link](https://www.example.com) to an example website.

Inline code looks like this: \`inline code\`.

A code block:
\`\`\`
function example() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![Image](https://via.placeholder.com/150)

**Bolded text**`;

marked.setOptions({
  breaks:true
})

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5">Markdown Previewer</h1>
      <div className="flex flex-col md:flex-row">
        <textarea
          id="editor" // Added id attribute
          className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
          value={markdown}
          onChange={handleChange}
          rows="10"
        />
        <div
          id="preview" // Added id attribute
          className="flex-1 p-2 border border-gray-300 rounded-md prose max-w-none bg-white"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
