import React from "react";
import Pagination from "../../common/Pagination";
import rightBtn from "../../asset/pic/Chevron right.svg";
import leftBtn from "../../asset/pic/Chevron left.svg";
import { Calender } from "../../component/UI/Icon";
import IconContainer from "../../component/UI/IconContainer";
import { Svg } from "../../utils/svg/main";
export default function DateSelection() {
  const svgClass = new Svg();
  return (
    <div className="flex items-end gap-2 bg-white px-6 py-[14px] rounded-[14px] w-[276px] h-[86px]">
      <div className="space-y-2">
        <div className="flex flex-col font-normal text-[12px]">
          Select the date
        </div>
        <div className="gap-[6px] bg-[#F1F1F1] w-[184px] h-9">
          <Pagination>
            <Pagination.leftBtn
              icon={svgClass.LeftArrow("w-6 h-6 fill-svgBlue")}
            />
            <Pagination.content>
              <div className="flex items-center h-full">217</div>
            </Pagination.content>
            <Pagination.rightBtn
              icon={svgClass.RightArrow("w-6 h-6 fill-svgBlue")}
            />
          </Pagination>
        </div>
      </div>
      <IconContainer>{svgClass.Calender("w-6 h-6 fill-svgBlue")}</IconContainer>
    </div>
  );
}
