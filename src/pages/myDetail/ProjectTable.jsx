import React, { useEffect, useState } from "react";
import Table from "../../common/Table";
import ElementDropDown from "../../common/ElementDropDown";
import openIcon from "../../asset/pic/up_drop_down.svg";
import closeIcon from "../../asset/pic/arrow_drop_down.svg";
import Select from "../../common/Select";
import TableBody from "./TableBody";
import { useSearchParams } from "react-router-dom";
import { SearchParams } from "../../utils/searchParams";
import usefilterProject from "./hooks/usefilterProject";
export default function ProjectTable({ header, body }) {
  const filterOpt = ["active", "inactive", "All"];
  const [searchParams, setSearchParams] = useSearchParams();
  const query = new SearchParams(searchParams, setSearchParams);
  function filterFn(selectedItem) {
    setSelectedFilter(selectedItem);
    query.set("project", selectedItem);
  }
  const { setSelectedFilter, filterParam, selectedFilter } =
    usefilterProject(query);
  return (
    <div>
      <ElementDropDown>
        <ElementDropDown.header openIcon={openIcon} closeIcon={closeIcon}>
          <div className="flex justify-between w-[1024px]">
            <div className="font-medium text-[20px]">Projects</div>
            <Select value={selectedFilter} fn={filterFn} opt={filterOpt} />
          </div>
        </ElementDropDown.header>
        <ElementDropDown.body>
          <Table data={body}>
            <Table.header content={header} sortFn={sortFn} />

            <Table.body
              value={filterParam.value}
              id={filterParam.id}
              fn={(id, value, data) =>
                data.filter((item) => item[id] === value)
              }
            >
              {(rows) => <TableBody rows={rows} />}
            </Table.body>
          </Table>
        </ElementDropDown.body>
      </ElementDropDown>
    </div>
  );
}

function sortFn(data, columnIndex, direction) {
  const key = [
    "status",
    "ProjectTask",
    "Role",
    "Task",
    "StartDate",
    "Capacity",
  ];
  const sorted = [...data].sort((a, b) => {
    const aVal = a[key[columnIndex]];
    const bVal = b[key[columnIndex]];

    if (!isNaN(aVal) && !isNaN(bVal)) {
      return direction === "asc"
        ? Number(aVal) - Number(bVal)
        : Number(bVal) - Number(aVal);
    }

    return direction === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  return sorted;
}
