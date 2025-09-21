import React from "react";
import PersonalForm from "./PersonalForm";
import PersonalInfo from "./PersonalInfo";
import ProjectTable from "./ProjectTable";
import StatuseCircle from "../../common/StatuseCircle";
import useGet from "../../hooks/useGet";
const projectHeader = [
  {
    width: "104px",
    body: "Status",
  },
  {
    width: "270px",
    body: "Project Task",
  },
  {
    width: "128px",
    body: "Role",
  },
  {
    width: "128px",
    body: "Task",
  },
  {
    width: "128px",
    body: "Start date",
  },
  {
    width: "370px",
    body: "Capacity",
  },
];
// const ProjectInfo = useGet("url", "getProject");
const projectBody = [
  {
    status: true,
    ProjectTask: "name",
    Role: "Specialist",
    Task: "Management",
    StartDate: "11.06.2019",
    Capacity: "35%",
  },
  {
    status: false,
    ProjectTask: "name",
    Role: "apecialist",
    Task: "Management",
    StartDate: "11.06.2019",
    Capacity: "35%",
  },
];
export default function MyDetail() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-10 bg-white px-6 py-[16px] rounded-[14px] w-[1128px] h-[472px]">
        <PersonalForm />
        <PersonalInfo />
      </div>
      <ProjectTable header={projectHeader} body={projectBody} />
    </div>
  );
}
