import React from "react";
import { VictoryLabel, VictoryLegend, VictoryPie, VictoryTheme } from "victory";

export default function PieChart({ titr, data }) {
  return (
    <div className="flex flex-col justify-start gap-4 w-[330px] tablet:w-[408px] min-h-[403px]">
      <div className="font-medium text-[20px]">{titr}</div>
      <div className="flex justify-center">
        <svg width={384} height={350}>
          <g className="translate-x-[35px] translate-y-[0px] desktop:translate-x-[55px] transform">
            <VictoryPie
              standalone={false}
              height={264}
              width={264}
              padding={0}
              colorScale={data.colors}
              innerRadius={100}
              data={data["data"]}
              theme={VictoryTheme.clean}
              labels={() => null}
              x={150}
            />

            <VictoryLabel
              standalone={false}
              textAnchor="middle"
              style={{ fontSize: 20, width: "134px" }}
              x={134}
              y={136}
              text={["Projects", "by account"]}
            />
          </g>

          <VictoryLegend
            standalone={false}
            height={30}
            x={0}
            y={290}
            orientation="horizontal"
            gutter={16}
            data={data["data"].slice(0, 4).map((item, i) => ({
              name: item.x,
              symbol: { fill: data.colors[i] },
            }))}
          />
          <VictoryLegend
            height={30}
            standalone={false}
            x={0}
            y={321}
            orientation="horizontal"
            gutter={20}
            data={data["data"].slice(4).map((item, i) => ({
              name: item.x,
              symbol: { fill: data.colors[i + 4] },
            }))}
          />
        </svg>
      </div>
    </div>
  );
}
