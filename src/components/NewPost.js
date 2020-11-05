import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { addNewPost } from "../store/feed/actions";
import moment from "moment";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const timeStamp = moment(title.createdAt).format();

    dispatch(addNewPost(title, content, tags.split(/[, ]+/), user, timeStamp));
    // setTitle("")
    // setContent("")
    // setTags("")
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <p>Submit a new post:</p>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Title:{" "}
            <input
              type="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Content:{" "}
            <input
              type="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Tags:{" "}
            <input
              type="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
