import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  
  const [text, setText] = useState(`
# Markdown Previewer

## Let me show you how it works

This is a link: [Press to see my Github](https://github.com/Milda100)

We can make text **Bold**

Inline code: \`const x = 42;\`
or
\'<div>COOL</div>\'

Block code:
\`\`\`
function example() {
  console.log("This is a code block!");
}
\`\`\`

We can make lists:
- Coffee
- Tea
- Milk

> For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.

![Snow Leopard in Nepal](https://files.worldwildlife.org/wwfcmsprod/images/Snow_Leopard_Nepal/magazine_large/5x3gn6kpzo_Snow_leopard_Nepal.jpg)

`);

marked.setOptions({
  breaks: true, // Enables single carriage returns to become <br>
});


  return (
    <>
      <div className="container mt-4">
      <div className="row">
        {/* Editor Section */}
        <div className="col-12 col-md-6" id="editor-container" >
          <label htmlFor="editor" className="form-label fw-bold">Editor</label>
          <textarea
            className="form-control"
            id="editor"
            placeholder="Enter markdown here..."
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {/* Preview Section */}
        <div className="col-12 col-md-6" id="preview-container">
          <label htmlFor="preview" className="form-label fw-bold">Previewer</label>
          <div
            className="border p-3"
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default App;