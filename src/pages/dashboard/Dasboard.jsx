import React from "react";
import { TiPlus } from "react-icons/ti";
import WidgetContainer from "./WidgetContainer";
import Pagination from "../../common/Pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Chart from "./Chart";
import PieChart from "./PieChart";
import Button from "../../common/Button";
export default function Dasboard() {
  const chartInfo = {
    data: [
      { year: "2016", paris: 150, bangkok: 200, SanFrancisco: 15 },
      { year: "2017", paris: 120, bangkok: 250, SanFrancisco: 180 },
      { year: "2018", paris: 180, bangkok: 30, SanFrancisco: 200 },
      { year: "2019", paris: 220, bangkok: 320, SanFrancisco: 240 },
    ],
    areas: [
      { title: "paris", color: "#F4A26C" },
      { title: "bangkok", color: "#3FAEA3" },
      { title: "SanFrancisco", color: "#914DF0" },
    ],
  };
  const pieChart = {
    data: [
      { x: "KFC", y: 30 },
      { x: "FIAT-Chrysler LLC", y: 35 },
      { x: "KLM", y: 25 },
      { x: "Aeroflot", y: 10 },
      { x: "Lukoil", y: 30 },
      { x: "American Express", y: 35 },
      { x: "Daimler", y: 25 },
    ],
    colors: [
      "#EB5757",
      "#EAAB00",
      "#A84069",
      "#00B2A9",
      "#2D9CDB",
      "#BB6BD9",
      "#4CD964",
    ],
  };
  // //   const opt = {

  //     axes: [
  //       {
  //         type: "category",
  //         position: "bottom",
  //         tick: {
  //           interval: 50,
  //         },
  //         min: 2015,
  //       },
  //       {
  //         type: "number",
  //         position: "right",
  //       },
  //     ],
  //     series: [
  //       {
  //         type: "area",
  //         xKey: "year",
  //         yKey: "SanFrancisco",
  //         fill: "",
  //         yName: "San Francisco",
  //         stacked: true,
  //         stroke: "#ffff",
  //         strokeWidth: 3,
  //       },

  //       {
  //         type: "area",
  //         xKey: "year",
  //         fill: "#3FAEA3",
  //         stroke: "#ffff",
  //         yKey: "bangkok",
  //         yName: "bangkok",
  //         strokeWidth: 3,
  //         stacked: true,
  //       },
  //       {
  //         type: "area",
  //         stroke: "#ffff",
  //         xKey: "year",
  //         yKey: "paris",
  //         yName: "paris",
  //         fill: "#F4A26C",
  //         stacked: true,
  //       },
  //     ],
  // //   };
  return (
    <div className="flex gap-[43px]">
      <div className="flex flex-wrap gap-4 w-[960px]">
        <WidgetContainer>
          <Pagination>
            <Pagination.leftBtn
              icon={<FaAngleLeft className="fill-dotBg w-6 h-6" />}
            />
            <Pagination.content>
              <Chart
                width={384}
                lable={"total"}
                category={"Employees"}
                titr={"Company Facts"}
                data={chartInfo}
              />
              <Pagination.dot lenght={3} />
            </Pagination.content>
            <Pagination.rightBtn
              icon={<FaAngleRight className="fill-dotBg w-6 h-6" />}
            />
          </Pagination>
        </WidgetContainer>
        <WidgetContainer>
          <Pagination>
            <Pagination.leftBtn
              icon={<FaAngleLeft className="fill-dotBg w-6 h-6" />}
            />
            <Pagination.content>
              <PieChart titr={"Statistics"} data={pieChart} />
              <Pagination.dot lenght={3} />
            </Pagination.content>
            <Pagination.rightBtn
              icon={<FaAngleRight className="fill-dotBg w-6 h-6" />}
            />
          </Pagination>
        </WidgetContainer>
        <WidgetContainer>
          <div className="mx-auto w-[384px] min-h-[403px]">
            <div className="font-medium text-[20px]">Assigned Risks</div>
            <div className="mx-auto mt-[181px] w-fit h-full font-normal text-[#8E8E93] text-[12px]">
              <span>There are no risks assigned.</span>
            </div>
          </div>
        </WidgetContainer>
        <WidgetContainer>
          <div className="mx-auto w-[384px] min-h-[403px]">
            <div className="font-medium text-[20px]">Assigned Risks</div>
            <div className="mx-auto mt-[181px] w-fit h-full font-normal text-[#8E8E93] text-[12px]">
              <span>There are no risks assigned.</span>
            </div>
          </div>
        </WidgetContainer>
      </div>
      <Button
        color={"#27AE60"}
        bgColor={"#27AE60"}
        width={"129px"}
        height={"40px"}
      >
        <div className="flex justify-center items-center gap-1">
          <TiPlus className="w-6 h-6 text-white" />
          <div className="font-medium text-[14px] text-white">Add widget</div>
        </div>
      </Button>
    </div>
  );
}
