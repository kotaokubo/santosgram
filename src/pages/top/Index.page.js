import React from "react";
import From from "./component/form";
import Messages from "./component/topMessages";

export default function indexPage() {
  return (
    <React.Fragment>
      <Messages />
      <From />
    </React.Fragment>
  );
}
