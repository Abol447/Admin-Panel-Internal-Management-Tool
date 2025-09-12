import React from "react";
import Table from "../../common/Table";
import Button from "../../common/Button";
import { Plus } from "../../component/UI/Icon";

export default function ActualVacations({ header, body }) {
  return (
    <div className="space-y-4 bg-white py-[10px] rounded-[14px] w-[1128px] h-[221px]">
      <div className="flex justify-between items-center px-6">
        <div className="font-medium text-[20px]">Actual vacations</div>
        <Button width={"116px"} color={"#2F80ED"} borderWidth={"2px"}>
          <div className="flex justify-center items-center gap-[6px]">
            <Plus fill={"#2F80ED"} style={"w-[14px] h-[14px]"} />
            <div className="h-[24px] font-medium text-[#2F80ED] text-[14px] leading-6">
              Add row
            </div>
          </div>
        </Button>
      </div>
      <Table>
        <Table.header content={header} />
        <Table.body content={body} />
      </Table>
    </div>
  );
}
