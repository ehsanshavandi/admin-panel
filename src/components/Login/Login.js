import React from "react";

export default function Login() {
  const onSubmitLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container flex flex-col-center ui cards">
      <div className="card">
        <div className="content">
          <div className="header">Login</div>
          <form className="ui form">
            <div className="field">
              <label>First Name</label>
              <input type="text" name="first-name" placeholder="First Name" />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <button
              className="btn-fill ui button"
              onClick={onSubmitLogin}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
