import React from "react";
import personalImg from "../../asset/pic/personImg.png";
import { Svg } from "../../utils/svg/main";
import IconContainer from "../../component/UI/IconContainer";

export default function PersonalInfo() {
  const svgClass = new Svg();
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src={personalImg}
          alt=""
          className="rounded-full w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] xl:h-[160px]"
        />
        <div className="flex flex-col justify-center items-center">
          <div className="font-medium text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]">
            Dominique Charpentier
          </div>
          <div className="text-[#8E8E93] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
            CEO
          </div>
        </div>
        <div className="flex gap-[26px]">
          <IconContainer>
            {svgClass.Mail("w-[24px] h-[24px] fill-svgBlue")}
          </IconContainer>
          <IconContainer>
            {svgClass.Phone("w-[24px] h-[24px] fill-svgBlue")}
          </IconContainer>
          <IconContainer>
            {svgClass.VerticalEllipsis("w-[24px] h-[24px] fill-svgBlue")}
          </IconContainer>
        </div>
      </div>
      <ul className="md:flex flex-col justify-center items-center space-y-2 grid grid-cols-2 bg-[#F8F8F8] p-5 py-2 rounded-[14px] xl:w-[224px] md:h-[138px]">
        <li className="form--list">
          {svgClass.Calender("w-[18px] h-[18px] fill-svgBlue")}
          <span>Calendar</span>
        </li>
        <li className="form--list">
          {svgClass.umbrella("w-[18px] h-[18px] fill-svgBlue")}
          <span>Vacations</span>
        </li>
        <li className="form--list">
          {svgClass.Hourglass("w-[18px] h-[18px] fill-svgBlue")}
          <span>Timesheet</span>
        </li>
        <li className="underline form--list">
          {svgClass.Doc("w-[18px] h-[18px] fill-svgBlue")}
          <span>Corporate CV</span>
        </li>
      </ul>
    </div>
  );
}
