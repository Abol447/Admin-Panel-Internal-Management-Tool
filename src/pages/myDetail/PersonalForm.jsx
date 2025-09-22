import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../component/UI/Input";
import { Svg } from "../../utils/svg/main";
import IconContainer from "../../component/UI/IconContainer";
import FormSelect from "../../component/UI/FormSelect";

export default function PersonalForm() {
  // const defaultInfo = storage.Get("user");
  const { register } = useForm({
    defaultValues: {
      name: "Dominique Charpentier",
      Practice: "Finance",
      Branch: "Paris",
      Division: "Moonlight - Paris",
      Login: "id/ceo",
      Title: "CEO",
      Contract: "Employee",
      Grade: "MG3",
      DivisionManager: "",
      Status: "Activated",
      StatusDate: "13/05/2009",
    },
  });
  const svgClass = new Svg();
  const inputProp = {
    type: "text",
    register: register,
    lableClassName: "form--titr h-[14px]",
  };
  return (
    <form className="space-y-4 bg-white">
      <div className="flex items-center gap-4">
        <h2 className="font-medium text-[20px]">My details</h2>
        <IconContainer>
          {svgClass.Pen("w-[24px] h-[24px] fill-svgBlue")}
        </IconContainer>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="space-y-[28px]">
          <Input
            {...inputProp}
            label={"Name"}
            registerName={"name"}
            className="w-full md:w-[284px] lg:w-[264px] xl:w-[384px] form--input"
          />
          <div className="flex items-center gap-4">
            <Input
              {...inputProp}
              label={"Practice"}
              registerName={"Practice"}
              className="w-full md:w-[134px] xl:w-[184px] form--input"
            />
            <FormSelect
              opt={["Paris"]}
              label={"Branch"}
              className=""
              registerName={"Branch"}
              {...inputProp}
            />
          </div>
          <Input
            {...inputProp}
            label={"Division"}
            registerName={"Division"}
            className="w-full md:w-[284px] lg:w-[284px] xl:w-[384px] form--input"
          />
          <Input
            {...inputProp}
            label={"Login"}
            registerName={"Login"}
            className="w-full md:w-[284px] lg:w-[284px] xl:w-[384px] form--input"
          />
        </div>
        <div className="space-y-[28px]">
          <Input
            {...inputProp}
            label={"Title"}
            registerName={"Title"}
            className="w-full md:w-[284px] lg:w-[284px] xl:w-[384px] form--input"
          />
          <div className="flex items-center gap-4">
            <Input
              {...inputProp}
              label={"Contract"}
              registerName={"Contract"}
              className="w-full md:w-[134px] xl:w-[184px] form--input"
            />
            <Input
              {...inputProp}
              label={"Grade"}
              registerName={"Grade"}
              className="w-full md:w-[134px] xl:w-[184px] form--input"
            />
          </div>
          <Input
            {...inputProp}
            label={"Division manager"}
            registerName={"DivisionManager"}
            className="w-full md:w-[284px] lg:w-[284px] xl:w-[384px] form--input"
          />
          <div className="flex items-center gap-4">
            <Input
              {...inputProp}
              label={"Status history"}
              registerName={"Status"}
              className="w-full md:w-[134px] xl:w-[184px] form--input"
            />
            <Input
              {...inputProp}
              registerName={"StatusDate"}
              className="w-full md:w-[134px] xl:w-[184px] form--input"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
