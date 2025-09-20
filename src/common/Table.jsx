import React, { createContext, useContext } from "react";

export const TableContext = createContext();
export default function Table({ children, data }) {
  return (
    <TableContext.Provider
      value={{
        data: data,
      }}
    >
      <table className="tbStyle">{children}</table>
    </TableContext.Provider>
  );
}
export function TableHeader({ content }) {
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
export function TableBody({ children, id = null, value = null, fn = null }) {
  let { data } = useContext(TableContext);
  if (fn != null && id != null && value != null) {
    data = fn(id, value, data);
  }

  return <tbody className="bg-white">{children(data)}</tbody>;
}

Table.header = TableHeader;
Table.body = TableBody;
