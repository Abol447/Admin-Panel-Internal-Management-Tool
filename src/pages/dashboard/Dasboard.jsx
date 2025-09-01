




import React from "react";
import WidgetContainer from "./WidgetContainer";
import Pagination from "../../common/Pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Chart from "./Chart";
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
    <div className=" ">
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
    </div>
  );

}
