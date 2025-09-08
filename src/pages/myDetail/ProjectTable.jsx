import React from "react";
import Table from "../../common/Table";
import ElementDropDown from "../../common/ElementDropDown";
import openIcon from "../../asset/pic/up_drop_down.svg";
import closeIcon from "../../asset/pic/arrow_drop_down.svg";
import Select from "../../common/Select";
export default function ProjectTable({ header, body }) {
  return (
    <div>
      <ElementDropDown>
        <ElementDropDown.header openIcon={openIcon} closeIcon={closeIcon}>
          <div className="flex justify-between w-[1024px]">
            <div className="font-medium text-[20px]">Projects</div>
            <Select opt={["filter"]} />
          </div>
        </ElementDropDown.header>
        <ElementDropDown.body>
          <Table>
            <Table.header content={header} />
            <Table.body content={body} />
          </Table>
        </ElementDropDown.body>
      </ElementDropDown>
    </div>
  );
}
