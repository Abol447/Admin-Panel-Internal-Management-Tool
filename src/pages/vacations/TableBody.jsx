import React from "react";
import StatuseCircle from "../../common/StatuseCircle";
import EditsIcon from "../../component/UI/EditsIcon";

export default function TableBody({ rows }) {
  return rows ? (
    <>
      {rows.map((item, rowIndex) => (
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
          <td className="TbCellStyle">
            {item.startDate}_{item.endDate}
          </td>
          <td className="TbCellStyle">{item.duration}</td>
          <td className="TbCellStyle">{item.workdays}</td>
          <td className="TbCellStyle">{item.holidays}</td>
          <td className="TbCellStyle">
            <div className="flex justify-between items-center pr-6 h-full max-h-5">
              <div>{item.approved}</div>
              <EditsIcon />
            </div>
          </td>
        </tr>
      ))}
      <tr>
        <td className="TbCellStyle"></td>
        <td className="TbCellStyle">
          <div className="pr-[70px] text-right">totals</div>
        </td>
        <td className="TbCellStyle">
          {rows.reduce((pre, curr) => pre + Number(curr["duration"]), 0)}
        </td>
        <td className="TbCellStyle">
          {rows.reduce((pre, curr) => pre + Number(curr["workdays"]), 0)}
        </td>
        <td className="TbCellStyle">
          {rows.reduce((pre, curr) => pre + Number(curr["holidays"]), 0)}
        </td>
      </tr>
    </>
  ) : null;
}
