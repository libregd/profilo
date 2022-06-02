import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import "./mp.css";
const MarkdownPreview = () => {
  const [markdown, setMarkdown] = useState(`A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `);
  return (
    <div className="mp-box">
      <textarea
        className="mp-input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <article className="mp-result">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
};
export default MarkdownPreview;
