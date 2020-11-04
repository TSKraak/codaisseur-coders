// src/components/PostsFeed.js
import React, { useEffect } from "react";
// import axios from "axios";
import moment from "moment";
import "./PostsFeed.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { fetchNext5Posts } from "../store/feed/actions";
import { NavLink } from "react-router-dom";

export default function PostsFeed() {
  const posts = useSelector(selectFeedPosts);
  const loading = useSelector(selectFeedLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {posts.map((post) => {
        return (
          <NavLink exact to={`/post/${post.id}`} key={post.id}>
            <div className="post-container" key={post.id}>
              <h3 className="card-post-title">{post.title}</h3>
              <p className="card-post-title">
                {moment(post.createdAt).format("DD-MM-YYYY")}{" "}
                <span className="tags">
                  {post.tags.map((tag) => {
                    return (
                      <React.Fragment key={tag.id}>
                        <span className="Tag">{tag.tag}</span>{" "}
                      </React.Fragment>
                    );
                  })}
                </span>
              </p>
            </div>
          </NavLink>
        );
      })}

      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={(e) => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
