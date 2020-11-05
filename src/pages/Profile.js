import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bootstrapLoginState } from "../store/auth/actions";
import { selectUser } from "../store/auth/selectors";
import "./Profile.css";

export default function Profile() {
  const user = useSelector(selectUser);
  //   console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Profile page of {user.name}</h1>
      <h3 className="intro-line">Intro: {user.intro}</h3>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Email address:</strong> {user.email}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Technologies:</strong>
      </p>
      <ul>
        {user.technologies.map((tech) => (
          <li key={tech.id}>{tech.title}</li>
        ))}
      </ul>
    </div>
  );
}
