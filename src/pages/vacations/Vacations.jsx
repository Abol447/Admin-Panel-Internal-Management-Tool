import React from "react";
import DateSelection from "./DateSelection";
import PlannedVacation from "./PlannedVacation";
import EditsIcon from "../../component/UI/EditsIcon";
import StatuseCircle from "../../common/StatuseCircle";
import ActualVacations from "./ActualVacations";

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
const ActualHeader = [
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
    body: "Comments",
  },
];
const vacationsBody = [
  {
    status: true,
    dates: " 112.08.2019 - 22.08.2019",
    duration: "14",
    workdays: "10",
    holidays: "4",
    approved: "Michael Bluemans",
  },
  {
    status: false,
    dates: " 112.08.2019 - 22.08.2019",
    duration: 14,
    workdays: 10,
    holidays: 4,
    approved: "Michael Bluemans",
  },
];
const ActualBody = [
  {
    status: true,
    dates: " 112.08.2019 - 22.08.2019",
    duration: "14",
    workdays: "10",
    holidays: "4",
    Comments: "Approved and paid",
  },
  {
    status: false,
    dates: " 112.08.2019 - 22.08.2019",
    duration: 14,
    workdays: 10,
    holidays: 4,
    Comments: "In processing",
  },
];
export default function Vacations() {
  return (
    <div className="space-y-4">
      <DateSelection />
      <PlannedVacation header={vacationHeader} body={vacationsBody} />
      <ActualVacations header={ActualHeader} body={ActualBody} />
    </div>
  );
}
