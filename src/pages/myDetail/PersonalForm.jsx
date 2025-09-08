import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "../../common/InputContainer";
import Select from "../../common/Select";
import editBtn from "../../asset/pic/Group.png";
export default function PersonalForm() {
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
  return (
    <form className="space-y-4 bg-white">
      <div className="flex items-center gap-4">
        <h2 className="font-medium text-[20px]">My details</h2>
        <img src={editBtn} alt="" />
      </div>
      <div className="flex items-center gap-8">
        <div className="space-y-[28px]">
          <InputContainer>
            <h4 className="form--titr">Name</h4>
            <input className="w-[384px] form--input" {...register("name")} />
          </InputContainer>
          <div className="flex items-center gap-4">
            <InputContainer>
              <h4 className="form--titr">Practice</h4>
              <input
                className="w-[184px] form--input"
                {...register("Practice")}
              />
            </InputContainer>
            <InputContainer>
              <h4 className="form--titr">Branch</h4>
              <Select
                register={register}
                name={"Branch"}
                opt={["Paris"]}
                form={true}
              />
            </InputContainer>
          </div>
          <InputContainer>
            <h4 className="form--titr">Division</h4>
            <input
              className="w-[384px] form--input"
              {...register("Division")}
            />
          </InputContainer>
          <InputContainer>
            <h4 className="form--titr">Login</h4>
            <input className="w-[384px] form--input" {...register("Login")} />
          </InputContainer>
        </div>
        <div className="space-y-[28px]">
          <InputContainer>
            <h4 className="form--titr">Title</h4>
            <input className="w-[384px] form--input" {...register("Title")} />
          </InputContainer>
          <div className="flex items-center gap-4">
            <InputContainer>
              <h4 className="form--titr">Contract</h4>
              <input
                className="w-[184px] form--input"
                {...register("Contract")}
              />
            </InputContainer>
            <InputContainer>
              <h4 className="form--titr">Grade</h4>
              <input className="w-[184px] form--input" {...register("Grade")} />
            </InputContainer>
          </div>
          <InputContainer>
            <h4 className="form--titr">Division manager</h4>
            <input
              className="w-[384px] form--input"
              {...register("DivisionManager")}
            />
          </InputContainer>
          <InputContainer>
            <h4 className="form--titr">Status history</h4>
            <div className="flex gap-4">
              <input
                className="w-[184px] form--input"
                {...register("Status")}
              />
              <input
                className="w-[184px] form--input"
                {...register("StatusDate")}
              />
            </div>
          </InputContainer>
        </div>
      </div>
    </form>
  );
}
