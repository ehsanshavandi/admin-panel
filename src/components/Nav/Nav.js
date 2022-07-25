import React from "react";

export default function Nav() {
  return (
    <nav class="ui inverted menu">
      <a class="item">Home</a>
      <a class="item">Messages</a>
      <a class="item active">Friends</a>
      <div class="right menu">
        <a class="ui item">Sign Up</a>
        <a class="ui item active">Sign In</a>
      </div>
    </nav>
  );
}
