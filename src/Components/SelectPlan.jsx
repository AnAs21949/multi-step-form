import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useState } from "react";

export const SelectPlan = ({ Plan, planNeeded, planData, updatePlan }) => {
  const [billing, setBilling] = useState({
    monthly: true,
  });

  const handleBilling = (e) => {
    const { checked: isChecked } = e.target;

    setBilling(() => ({
      monthly: isChecked,
    }));

    Plan(billing.monthly);
  };

  return (
    <div className="shadow-lg md:shadow-none pb-16 pt-9 md:pt-0 rounded-lg bg-white px-7 font-body md:w-[45vw]">
      <h1 className="text-3xl font-semibold text-bluePrimary">
        Select Your Plan
      </h1>
      <p className="text-grayMain mt-2">
        You have the option of yearly or monthly billing
      </p>

      <div className=" mt-9 flex flex-col md:flex-row  gap-8 ">
        <label
          className={`flex md:flex-col flex-1 items-start border cursor-pointer p-4 md:w-[20vw] md:h-[30vh] ${
            planData.arcade ? "border-PurplishBlue" : ""
          } rounded-lg  flex gap-5 shadow-sm`}
        >
          <img src={arcade} alt="" className="" />
          <div className="">
            <p className="text-bluePrimary font-medium">Arcade</p>
            <input
              type="checkbox"
              id="arcade"
              className="hidden"
              value="arcade"
              name="arcade"
              onChange={(e) => updatePlan("arcade", e.target.checked)}
            />
            <p className="text-cd text-sm">{` ${
              billing.monthly ? "$9/mo" : "$90/yr"
            }`}</p>
            {!billing.monthly && (
              <p className="text-bluePrimary text-sm font-medium">
                2 months free
              </p>
            )}
          </div>
        </label>

        <label
          className={`flex md:flex-col flex-1 items-start border cursor-pointer p-4 md:w-[20vw] md:h-[30vh] ${
            planData.advanced ? "border-PurplishBlue" : ""
          } rounded-lg  flex gap-5 shadow-sm`}
        >
          <img src={advanced} alt="" className="" />
          <div className="">
            <p className="text-bluePrimary font-medium">Advanced</p>
            <input
              type="checkbox"
              id="advanced"
              value="advanced"
              name="advanced"
              onChange={(e) => updatePlan("advanced", e.target.checked)}
              className="hidden"
            />
            <p className="text-cd text-sm">{` ${
              billing.monthly ? "$12/mo" : "$120/yr"
            }`}</p>
            {!billing.monthly && (
              <p className="text-bluePrimary text-sm font-medium">
                2 months free
              </p>
            )}
          </div>
        </label>

        <label
          className={`flex md:flex-col flex-1 items-start border cursor-pointer p-4 md:w-[20vw] md:h-[30vh] ${
            planData.pro ? "border-PurplishBlue" : ""
          } rounded-lg  flex gap-5 shadow-sm`}
        >
          <img src={pro} alt="" className="" />
          <div className="">
            <p className="text-bluePrimary font-medium">Pro</p>
            <input
              type="checkbox"
              id="pro"
              value="pro"
              name="pro"
              onChange={(e) => updatePlan("pro", e.target.checked)}
              className="hidden"
            />
            <p className="text-cd text-sm">{` ${
              billing.monthly ? "$15/mo" : "$150/yr"
            }`}</p>
            {!billing.monthly && (
              <p className="text-bluePrimary text-sm font-medium">
                2 months free
              </p>
            )}
          </div>
        </label>
      </div>

      <label
        htmlFor="monthly"
        className="mt-7 bg-mangolia flex gap-3 py-4 justify-center items-center cursor-pointer"
      >
        <div className="">
          <p
            className={` font-medium ${
              billing.monthly ? "text-bluePrimary" : "text-cd"
            }`}
          >
            Monthly
          </p>
          <input
            type="checkbox"
            id="monthly"
            name="monthly"
            onChange={handleBilling}
            checked={billing.monthly}
            className="hidden"
          />
        </div>

        <div className="w-10 h-5 rounded-2xl bg-slate-700 relative">
          <div
            className={`w-[13px] h-[13px] bg-white absolute rounded-full ${
              billing.monthly ? "" : "translate-x-5"
            }  left-1 top-[3px]  `}
          ></div>
        </div>

        <div className="">
          <p
            className={` font-medium ${
              billing.monthly ? " text-cd" : "text-bluePrimary"
            }`}
          >
            Yearly
          </p>
        </div>
      </label>
      {planNeeded && (
        <p className="mt-8 text-red-600 font-medium text-center">
          Please Select a plan
        </p>
      )}
    </div>
  );
};
