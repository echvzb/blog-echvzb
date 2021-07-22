import React from "react";
import { Link } from "gatsby";

const ChevronRight = () => <i className="bi bi-chevron-right" />;

const GoToPath = ({ elem: { path, nameLink }, last }) => (
  <div>
    <Link to={path}>
      <span className="pathName">{nameLink}</span>
    </Link>
    {!last ? <ChevronRight /> : ""}
  </div>
);

export default ({ pathElems }) => {
  return (
    <div className="breadcrumb">
      <Link to="/">
        <i className="bi bi-house-door-fill" />
      </Link>
      <ChevronRight />
      {pathElems.map((elem, i) => {
        let last = i + 1 === pathElems.length;
        return <GoToPath elem={elem} last={last} />;
      })}
    </div>
  );
};
