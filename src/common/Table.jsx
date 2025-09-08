import React from "react";

export default function Table({ children }) {
  return <table className="tbStyle">{children}</table>;
}
export function TableHeader({ content = [] }) {
  return (
    <thead>
      <tr className="TbHeaderStyle">
        {content.map((item, index) => (
          <th
            key={index}
            className="TbHeaderCellStyle"
            style={{ width: item["width"] }}
          >
            {item["body"]}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export function TableBody({ content = [] }) {
  return (
    <tbody className="bg-white">
      {content.map((row, rowIndex) => (
        <tr
          className={`TbRowStyle ${
            rowIndex % 2 == 0 ? "EvenStyle" : "OddStyle"
          }`}
          key={rowIndex}
        >
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="TbCellStyle">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
Table.header = TableHeader;
Table.body = TableBody;
