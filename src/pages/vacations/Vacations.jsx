import React from "react";
import DateSelection from "./DateSelection";
import PlannedVacation from "./PlannedVacation";
import EditsIcon from "../../component/UI/EditsIcon";
import StatuseCircle from "../../common/StatuseCircle";

const vacationHeader = [
  {
    width: "104px",
    body: "Status",
  },
  {
    width: "270px",
    body: "Dates",
  },
  {
    width: "128px",
    body: "Duration in days",
  },
  {
    width: "128px",
    body: "Workdays",
  },
  {
    width: "128px",
    body: "Holidays",
  },
  {
    width: "370px",
    body: "Approved",
  },
];
const vacationsBody = [
  [
    <div className="pl-[5px]">
      {" "}
      <StatuseCircle bg={"green"} width={"24px"} />
    </div>,
    " 112.08.2019 - 22.08.2019",
    "14",
    "10",
    "4",
    <div className="flex justify-between items-center pr-6">
      <div>Michael Bluemans</div>
      <EditsIcon />
    </div>,
  ],
  [
    <div className="pl-[5px]">
      {" "}
      <StatuseCircle bg={"green"} width={"24px"} />
    </div>,
    " 112.08.2019 - 22.08.2019",
    "14",
    "10",
    "4",
    <div className="flex justify-between items-center pr-6">
      <div>Michael Bluemans</div>
      <EditsIcon />
    </div>,
  ],
];
export default function Vacations() {
  return (
    <div className="space-y-4 rounded-[14px]">
      <DateSelection />
      <PlannedVacation header={vacationHeader} body={vacationsBody} />
    </div>
  );
}
