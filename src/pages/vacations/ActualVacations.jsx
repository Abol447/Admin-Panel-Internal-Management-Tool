import React from "react";
import Table from "../../common/Table";
import Button from "../../common/Button";
import { Plus } from "../../component/UI/Icon";
import TableBoduActual from "./TableBodyActual";
import filterByDate from "../../utils/filterByDate";

export default function ActualVacations({ header, body, year }) {
  return (
    <div className="space-y-4 bg-white py-[10px] rounded-[14px] w-[380px] desktop:w-[1128px]">
      <div className="flex justify-between items-center px-6">
        <div className="font-medium text-[20px]">Actual vacations</div>
      </div>
      <Table data={body}>
        <Table.header content={header} />
        <Table.body fn={filterByDate} id={"startDate"} value={year}>
          {(rows) => <TableBoduActual rows={rows} />}
        </Table.body>
      </Table>
    </div>
  );
}
