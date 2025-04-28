import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="row">
        <div className="col">
          <label htmlFor="editor" className="form-label">Editor</label>
          <textarea 
          className="markdown-input" 
          id="editor"
          placeholder="Enter markdown here..."
          value={text}
          onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <div className="col">
          <label htmlFor="preview" className="form-label">Previewer</label>
          <div className="markdown-preview" id="preview">{text}</div>
        </div>
      </div>
    </>
  )
}

export default App;
