import { redirect } from "next/navigation";
import React from "react";

const Redirect = () => {
  redirect("/posts/All");
  return <div>Redirect</div>;
};

export default Redirect;
