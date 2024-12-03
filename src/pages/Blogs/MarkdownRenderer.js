import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownRenderer = ({ markdownFile }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the markdown file
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => {
        // Parse the Markdown to HTML
        console.log(marked(text));
        setContent(marked(text));
      })
      .catch((error) =>
        console.error("Error fetching the Markdown file:", error)
      );
  }, [markdownFile]);

  return (
    <div className="card">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default MarkdownRenderer;
