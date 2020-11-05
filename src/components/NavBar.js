import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../store/auth/actions";
import { selectUserName } from "../store/auth/selectors";
import "./NavBar.css";

export default function NavBar() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <div className="NavBar">
        <NavLink
          className="home"
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="listings"
          exact
          to={userName ? "/profile" : "/login"}
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          {userName ? userName : "Login"}
        </NavLink>
        {userName ? (
          <button
            onClick={(e) => {
              history.push("/");
              return dispatch(logout);
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}
