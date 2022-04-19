import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      style={{
        color: match ? "#23d89c" : "",
        borderBottom: match ? "3px solid #23d89c" : "",
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
