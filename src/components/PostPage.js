import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/post/actions";
import {
  selectPostAndComments,
  selectPostLoading,
} from "../store/post/selectors";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import "./PostPage.css";

export default function PostPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  const loading = useSelector(selectPostLoading);
  const postAndComments = useSelector(selectPostAndComments);

  console.log("loading", loading);
  console.log("postAndComments", postAndComments);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {!postAndComments ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postAndComments.post.title}</h1>
          <p className="meta">
            By <strong>{postAndComments.post.developer.name}</strong> &bull;{" "}
            {moment(postAndComments.post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
            <span className="tags">
              {postAndComments.post.tags.map((tag) => {
                return (
                  <React.Fragment key={tag.id}>
                    <span className="Tag">{tag.tag}</span>{" "}
                  </React.Fragment>
                );
              })}
            </span>
          </p>
          <ReactMarkdown source={postAndComments.post.content} />

          <h2>Comments</h2>
          {postAndComments.comments.rows.length === 0 ? (
            <p>
              <em>No comments left behind yet :(</em>
            </p>
          ) : (
            postAndComments.comments.rows.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p className="meta">
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")} <br></br>
                    ____________________________________________
                  </p>
                </div>
              );
            })
          )}
        </>
      )}
    </div>
  );
}
