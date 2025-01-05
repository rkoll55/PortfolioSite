import React from "react";

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;