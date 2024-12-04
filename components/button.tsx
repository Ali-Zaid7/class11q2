"use client";
import React from "react";

const button = (props: { name?: string }) => {
  console.log("Props ===>", props);
  return <div>{props.name}</div>;
};

export default button;