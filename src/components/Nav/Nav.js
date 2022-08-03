import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { locState } from "../App-States/states";

export default function Nav() {
  const loc = useRecoilValue(locState);
  const homeActivated = () => {
    if (loc === "MAIN") return "active";
    else return "";
  };
  const loginActivated = () => {
    if (loc === "LOGIN") return "active";
    else return "";
  };

  return (
    <>
      <nav className="ui inverted menu">
        <Link to="/" className={`ui item ${homeActivated()}`}>
          Home
        </Link>
        <div className="right menu">
          <Link to="/login" className={`ui item ${loginActivated()}`}>
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
