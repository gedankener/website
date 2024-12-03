import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import MarkdownRenderer from "./MarkdownRenderer";

const Blog = ({ isChaos }) => {
  const [blogFilesPaths, setBlogFilesPaths] = useState([]);

  useEffect(() => {
    const blogFiles = require.context("/public/blogs", false, /\.(js|md)$/); // Adjust the regex for your file types
    const blogFilesPaths = blogFiles.keys(); // Returns an array of file paths
    console.log(blogFilesPaths);
    setBlogFilesPaths(blogFilesPaths);
    return () => {
      setBlogFilesPaths([]);
    };
  }, []);

  const content = (
    <div className="blogList">
      <h2>My Blogs</h2>
      <article>
        <div className="cardgrid">
          {/* <div className="leftcolumn"> */}
          {blogFilesPaths.map((filePath) => (
            <MarkdownRenderer
              key={filePath}
              markdownFile={filePath.replaceAll("./", "/blogs/")}
            />
          ))}
          {/* </div> */}
        </div>
      </article>
    </div>
  );

  return <PageTemplate title="Blog" content={content} isChaos={false} />;
};

export default Blog;
