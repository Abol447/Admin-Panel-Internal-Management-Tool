import React, { useRef, useState } from "react";
import Pagination from "../../common/Pagination";
import IconContainer from "../../component/UI/IconContainer";
import { Svg } from "../../utils/svg/main";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Counter from "../../common/Counter";
export default function DateSelection({ selectedDate, setSelectedDate }) {
  const [open, setOpen] = useState(false);
  const calenderOpen = useRef();
  const svgClass = new Svg();
  return (
    <div className="flex items-end gap-2 bg-white px-6 py-[14px] rounded-[14px] w-[276px] h-[86px]">
      <div className="space-y-2">
        <div className="flex flex-col font-normal text-[12px]">
          Select the date
        </div>
        <div className="gap-[6px] bg-[#F1F1F1] w-[184px] h-9">
          <Counter>
            <Counter.decBtn
              icon={svgClass.LeftArrow("w-6 h-6 fill-svgBlue")}
              decFn={setSelectedDate}
            />
            <Counter.body>
              {" "}
              <DataShow selectedDate={selectedDate} />
            </Counter.body>
            <Counter.incBtn
              icon={svgClass.RightArrow("w-6 h-6 fill-svgBlue")}
              incFn={setSelectedDate}
            />
          </Counter>
        </div>
      </div>
      <div
        onClick={() => {
          setOpen((pre) => !pre);
          open
            ? calenderOpen.current.setOpen(false)
            : calenderOpen.current.setOpen(true);
        }}
      >
        <IconContainer>
          {svgClass.Calender("w-6 h-6 fill-svgBlue")}
        </IconContainer>
      </div>
      <DatePicker
        ref={calenderOpen}
        customInput={<DataShow />}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date.getFullYear())}
        showYearPicker
        popperPlacement="top-start"
        dateFormat="yyyy"
        className="mr-2"
      />
    </div>
  );
}

function DataShow({ selectedDate }) {
  return (
    <div className="flex justify-center items-center h-full">
      {selectedDate}
    </div>
  );
}
