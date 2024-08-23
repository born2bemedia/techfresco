"use client";
import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

const PostsWrap = ({ posts }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleTabs = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredPosts(posts);
    } else if (activeTab === "research") {
      setFilteredPosts(posts.filter((post) => post.category === "Market Research"));
    } else if (activeTab === "news") {
      setFilteredPosts(posts.filter((post) => post.category === "Market News"));
    }
  }, [activeTab, posts]);

  return (
    <>
      <div className="insights-loop__tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => handleTabs("all")}
        >
          All
        </button>
        <span>|</span>
        <button
          className={activeTab === "research" ? "active" : ""}
          onClick={() => handleTabs("research")}
        >
          Market Research
        </button>
        <span>|</span>
        <button
          className={activeTab === "news" ? "active" : ""}
          onClick={() => handleTabs("news")}
        >
          Market News
        </button>
      </div>
      <div className="insights-loop__body">
        {filteredPosts.map((post, index) => (
          <PostCard key={index} post={post} index={index} tab={activeTab} />
        ))}
      </div>
    </>
  );
};

export default PostsWrap;
