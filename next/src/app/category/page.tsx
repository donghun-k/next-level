import { redirect } from "next/navigation";
import React from "react";

const Redirect = () => {
  redirect("/category/All");
  return <div>Redirect</div>;
};

export default Redirect;
