import React, { useState } from "react";
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
    startDate: "2019-08-12",
    endDate: "2019-08-22",
    duration: "14",
    workdays: "10",
    holidays: "4",
    approved: "Michael Bluemans",
  },
  {
    status: false,
    startDate: "2019-08-12",
    endDate: "2019-08-22",
    duration: 14,
    workdays: 10,
    holidays: 4,
    approved: "Michael Bluemans",
  },
];
const ActualBody = [
  {
    status: true,
    startDate: "2019-08-12",
    endDate: "2019-08-22",
    duration: "14",
    workdays: "10",
    holidays: "4",
    Comments: "Approved and paid",
  },
  {
    status: false,
    startDate: "2020-08-12",
    endDate: "2019-08-22",
    duration: 14,
    workdays: 10,
    holidays: 4,
    Comments: "In processing",
  },
];
export default function Vacations() {
  const [selectedDate, setSelectedDate] = useState(new Date().getFullYear());
  return (
    <div className="space-y-4">
      <DateSelection
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <PlannedVacation
        header={vacationHeader}
        body={vacationsBody}
        year={selectedDate}
      />
      <ActualVacations
        header={ActualHeader}
        body={ActualBody}
        year={selectedDate}
      />
    </div>
  );
}
