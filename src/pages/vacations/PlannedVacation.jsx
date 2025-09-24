import React, { useState } from "react";
import Button from "../../common/Button";
import { Plus } from "../../component/UI/Icon";
import Table from "../../common/Table";
import TableBody from "./TableBody";
import filterByDate from "../../utils/filterByDate";

export default function PlannedVacation({
  header,
  body,
  year,
  modalOpen,
  setModalOpen,
}) {
  return (
    <div className="relative space-y-4 bg-white py-[10px] rounded-[14px] w-[1128px] ]">
      <div className="flex justify-between items-center px-6">
        <div className="font-medium text-[20px]">Planned vacations</div>
        <div onClick={() => setModalOpen((value) => !value)}>
          {" "}
          <Button width={"116px"} color={"#2F80ED"} borderWidth={"2px"}>
            <div className="flex justify-center items-center gap-[6px]">
              <Plus fill={"#2F80ED"} style={"w-[14px] h-[14px]"} />
              <div className="h-[24px] font-medium text-[#2F80ED] text-[14px] leading-6">
                Add row
              </div>
            </div>
          </Button>
        </div>
      </div>
      <Table data={body}>
        <Table.header content={header} />
        <Table.body fn={filterByDate} id={"startDate"} value={year}>
          {(rows) => <TableBody rows={rows} />}
        </Table.body>
      </Table>
    </div>
  );
}
