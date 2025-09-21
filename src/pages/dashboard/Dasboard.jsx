import React, { lazy, Suspense } from "react";
import WidgetContainer from "./WidgetContainer";
import Pagination from "../../common/Pagination";
const TiPlus = lazy(() =>
  import("react-icons/ti").then((mod) => ({ default: mod.TiPlus }))
);
import rightBtn from "../../asset/pic/Chevron right.svg";
import leftBtn from "../../asset/pic/Chevron left.svg";
import Button from "../../common/Button";
import { Svg } from "../../utils/svg/main";
import useGet from "../../hooks/useGet";
const PieChart = React.lazy(() => import("./PieChart"));
const Chart = React.lazy(() => import("./Chart"));
export default function Dasboard() {
  // const { data } = useGet("url", "getChartData");
  // const { data: pie } = useGet("url", "getPieChartInfo");
  const chartInfo = [
    {
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
    },
    {
      data: [
        { year: "2015", paris: 350, bangkok: 400, SanFrancisco: 150 },
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
    },
  ];
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
  const svg = new Svg();
  return (
    <div className="flex gap-[43px]">
      <div className="flex flex-wrap justify-center tablet:justify-start gap-4 w-full">
        <WidgetContainer>
          <Pagination lenght={2}>
            <Pagination.leftBtn
              icon={<img src={leftBtn} className="fill-dotBg w-6 h-6" />}
            />
            <Pagination.content>
              <Suspense fallback={<div>loading</div>}>
                <Chart
                  width={384}
                  lable={"total"}
                  category={"Employees"}
                  titr={"Company Facts"}
                  chartInfo={chartInfo}
                />
              </Suspense>
              <Pagination.dot lenght={3} />
            </Pagination.content>
            <Pagination.rightBtn
              icon={<img src={rightBtn} className="fill-dotBg w-6 h-6" />}
            />
          </Pagination>
        </WidgetContainer>
        <WidgetContainer>
          <Pagination lenght={3}>
            <Pagination.leftBtn
              icon={<img src={leftBtn} className="fill-dotBg w-6 h-6" />}
            />
            <Pagination.content>
              <Suspense fallback={<div>loading</div>}>
                <PieChart titr={"Statistics"} data={pieChart} />
              </Suspense>
              <Pagination.dot lenght={3} />
            </Pagination.content>
            <Pagination.rightBtn
              icon={<img src={rightBtn} className="fill-dotBg w-6 h-6" />}
            />
          </Pagination>
        </WidgetContainer>
        <WidgetContainer>
          <div className="mx-auto w-[330px] tablet:w-[384px] min-h-[403px]">
            <div className="font-medium text-[20px]">Assigned Risks</div>
            <div className="mx-auto mt-[181px] w-fit h-full font-normal text-[#8E8E93] text-[12px]">
              <span>There are no risks assigned.</span>
            </div>
          </div>
        </WidgetContainer>
        <WidgetContainer>
          <div className="mx-auto w-[330px] tablet:w-[384px] min-h-[403px]">
            <div className="font-medium text-[20px]">Assigned Risks</div>
            <div className="mx-auto mt-[181px] w-fit h-full font-normal text-[#8E8E93] text-[12px]">
              <span>There are no risks assigned.</span>
            </div>
          </div>
        </WidgetContainer>
      </div>
      <div className="hidden xtablet:block">
        <Button
          color={"#27AE60"}
          bgColor={"#27AE60"}
          width={"129px"}
          height={"40px"}
        >
          <div className="flex justify-center items-center gap-1">
            {svg.Plus("w-[14px] h-[14px]", "white")}
            <div className="font-medium text-[14px] text-white">Add widget</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
