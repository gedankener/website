import React from "react";
// import BubbleAnimation from "./BubbleAnimation";

const PageTemplate = ({ title, content, isChaos }) => {
  return (
    <div className="content-div">
      <div className="page-content">
        <h1>{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default PageTemplate;
