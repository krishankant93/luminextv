import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container py-4 px-8 md:p-8  md:py-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;