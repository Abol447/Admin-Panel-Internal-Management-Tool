import React from "react";
import personalImg from "../../asset/pic/personImg.png";
import email from "../../asset/pic/Group (1).png";
import phone from "../../asset/pic/Group (2).png";
import more from "../../asset/pic/Group (3).png";
import calender from "../../asset/pic/_ionicons_svg_md-calendar1.png";
import time from "../../asset/pic/_ionicons_svg_md-hourglass1.png";
import doc from "../../asset/pic/_ionicons_svg_md-document1.png";
import umbrella from "../../asset/pic/baseline-beach_access-24px1.png";
export default function PersonalInfo() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          src={personalImg}
          alt=""
          className="rounded-full w-[160px] h-[160px]"
        />
        <div className="flex flex-col justify-center items-center">
          <div className="font-medium text-[20px]">Dominique Charpentier</div>
          <div className="text-[#8E8E93] text-[16px]">CEO</div>
        </div>
        <div className="flex gap-[26px]">
          <img src={email} alt="" />
          <img src={phone} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <ul className="flex flex-col justify-center items-center space-y-2 bg-[#F8F8F8] py-2 rounded-[14px] w-[224px] h-[138px]">
        <li className="form--list">
          <img src={calender} alt="" />
          <span>Calendar</span>
        </li>
        <li className="form--list">
          <img src={umbrella} alt="" />
          <span>Vacations</span>
        </li>
        <li className="form--list">
          <img src={time} alt="" />
          <span>Timesheet</span>
        </li>
        <li className="underline form--list">
          <img src={doc} alt="" />
          <span>Corporate CV</span>
        </li>
      </ul>
    </div>
  );
}
