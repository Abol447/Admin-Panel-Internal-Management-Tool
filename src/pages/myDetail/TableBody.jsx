import React, { useContext, useState } from "react";
import StatuseCircle from "../../common/StatuseCircle";
import { TableContext } from "../../common/Table";
export default function TableBody({ rows }) {
  return rows
    ? rows.map((item, rowIndex) => (
        <tr
          className={`TbRowStyle ${
            rowIndex % 2 == 0 ? "EvenStyle" : "OddStyle"
          }`}
          key={rowIndex}
        >
          <td className="TbCellStyle">
            <div className="pl-[4px]">
              <StatuseCircle
                bg={item["status"] ? "green" : "red"}
                width={"24px"}
              />
            </div>
          </td>
          <td className="TbCellStyle">{item.ProjectTask}</td>
          <td className="TbCellStyle">{item.Role}</td>
          <td className="TbCellStyle">{item.Task}</td>
          <td className="TbCellStyle">{item.StartDate}</td>
          <td className="TbCellStyle">{item.Capacity}</td>
        </tr>
      ))
    : null;
}
