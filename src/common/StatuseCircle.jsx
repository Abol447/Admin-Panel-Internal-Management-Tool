import React from "react";

export default function StatuseCircle({ width, bg }) {
  return (
    <div
      style={{ width: width, height: width, backgroundColor: bg }}
      className="rounded-full"
    ></div>
  );
}
