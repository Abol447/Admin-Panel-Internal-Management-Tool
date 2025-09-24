import React, { useContext } from "react";
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import { paginationContext } from "../../common/Pagination";

export default function Chart({ titr, category, width, chartInfo, lable }) {
  const { index } = useContext(paginationContext);
  const data = chartInfo[index];

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="space-y-2">
        <div className="flex items-center h-[32px] font-medium text-[20px]">
          {titr}
        </div>
        <div className="text-[#8E8E93] text-[16px]">{category}</div>
      </div>

      <div className="flex justify-center items-center w-[300px] desktop:w-[384px] h-[315px]">
        <VictoryChart
          height={258}
          width={384}
          padding={{ top: 0, bottom: 50, left: 20, right: 40 }}
          containerComponent={<VictoryVoronoiContainer />}
        >
          <VictoryAxis
            style={{
              ticks: { stroke: "#8E8E93", size: 10 },
              tickLabels: {
                padding: 5,
                fontSize: 16,
                color: "#4F4F4F",
              },
            }}
            tickValues={data.data.map((d) => d.year)}
            tickFormat={data.data.map((d) => `  ${d.year}  `)}
          />
          <VictoryAxis
            dependentAxis
            orientation="right"
            style={{
              grid: {
                stroke: "#CFD8DC",
                strokeDasharray: "10, 5",
              },
              tickLabels: {
                color: "#4F4F4F",
                fontSize: 16,
              },
            }}
          />

          <VictoryLabel
            text={lable}
            x={340}
            y={-15}
            style={{
              fontSize: 16,
              fill: "#4F4F4F",
              fontWeight: "normal",
            }}
          />

          <VictoryStack>
            {data.areas.map((area) => (
              <VictoryArea
                key={area.title}
                data={data.data.map((d) => ({
                  x: d.year,
                  y: d[area.title],
                }))}
                labels={({ datum }) => `${area.title}: ${datum.y}`}
                labelComponent={
                  <VictoryTooltip
                    dy={-10}
                    cornerRadius={0}
                    flyoutStyle={{ fill: "white" }}
                    style={{ fontSize: 12 }}
                  />
                }
                style={{
                  data: {
                    fill: area.color,
                    stroke: "#fff",
                    strokeWidth: 3,
                    fillOpacity: 1,
                  },
                }}
              />
            ))}
          </VictoryStack>

          <VictoryLegend
            x={50}
            y={250}
            orientation="horizontal"
            style={{
              labels: { fontSize: 14, fontWeight: "normal" },
            }}
            gutter={16}
            data={data.areas.map((area) => ({
              name: area.title,
              symbol: { fill: area.color },
            }))}
          />
        </VictoryChart>
      </div>
    </div>
  );
}
