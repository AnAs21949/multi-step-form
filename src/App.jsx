import { useEffect, useState } from "react";
import "./App.css";
import { FinishingUp } from "./Components/FinishingUp";
import { PickAddOns } from "./Components/PickAddOns";
import { SelectPlan } from "./Components/SelectPlan";
import { Step1 } from "./Components/Step1";
import { MultiStepForm } from "./MultiStepForm";
import mainImgDesktop from "./assets/images/bg-sidebar-desktop.svg";
import mainImgMobile from "./assets/images/bg-sidebar-mobile.svg";
import thankYouImg from "./assets/images/icon-thank-you.svg";

function App() {
  const [word, setWord] = useState(false);
  const [plan, setPlan] = useState("");
  const [chosenPlan, setChosenPlan] = useState("");
  const [planNeeded, setPlanNeeded] = useState(false);
  const [thankMsg, setThankMsg] = useState(false);

  // const [goToVal, setGoToVal] = useState(false);

  const [stepState, setStepState] = useState({
    oneIsOn: false,
    twoIsOn: false,
    threeIsOn: false,
    fourIsOn: false,
  });

  //step1 data(personal information)

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });
  function updateFields(fields, name, value) {
    setData((prev) => {
      return { ...prev, ...fields };
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value,
    }));

    console.log("done");
  }

  const [errors, setErrors] = useState({
    name: true,
    email: true,
    number: true,
  });
  // const handleErrors = (name, value) => {
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: value,
  //   }));
  //   console.log("done");
  // };
  //step 2 Data (plan)

  const [planData, setPlanData] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });
  const updatePlan = (name, isChecked) => {
    setPlanData(() => ({
      arcade: false,
      advanced: false,
      pro: false,
      [name]: isChecked,
    }));
    setChosenPlan(name);
  };

  //step 3 Data (AddOns)

  const [addOnsData, setAddOnsData] = useState({
    onlineService: false,
    largeStorage: false,
    customizableProfile: false,
  });
  const updateAddOns = (name, isChecked) => {
    setAddOnsData((prev) => ({
      ...prev,
      [name]: isChecked,
    }));
  };

  const changeInfo = (index) => {
    goTo(index);
  };
  const { step, back, goTo, next, isFirstStep, isLastStep } = MultiStepForm([
    <Step1 data={data} updateFields={updateFields} errors={errors} key={2} />,
    <SelectPlan
      planNeeded={planNeeded}
      Plan={(plan) => setPlan(plan)}
      planData={planData}
      key={3}
      updatePlan={updatePlan}
    />,
    <PickAddOns
      addOnsData={addOnsData}
      updateAddOns={updateAddOns}
      billing={plan}
      key={4}
    />,

    <FinishingUp
      billing={plan}
      addOnsData={addOnsData}
      chosen={chosenPlan}
      changeInfo={changeInfo}
      key={5}
    />,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (step.key) {
      case "2":
        if (word) {
          next();
        }
        break;
      case "3":
        if (chosenPlan !== "") {
          next();
        } else {
          setPlanNeeded(true);
          goTo(1);
          setTimeout(() => {
            setPlanNeeded(false);
          }, "2000");
        }
        break;
      case "4":
        next();
        break;
      case "5":
        setThankMsg(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log("errorStatus is", errors);
    if (
      errors.name === false &&
      errors.email === false &&
      errors.number === false
    ) {
      setWord(true);
      console.log("word: ", word);
    } else {
      console.log("word: ", word);
      setWord(false);
    }
    switch (step.key) {
      case "2":
        setStepState(() => ({
          oneIsOn: true,
          twoIsOn: false,
          threeIsOn: false,
          fourIsOn: false,
        }));

        break;
      case "3":
        setStepState(() => ({
          oneIsOn: false,
          twoIsOn: true,
          threeIsOn: false,
          fourIsOn: false,
        }));

        break;
      case "4":
        setStepState(() => ({
          oneIsOn: false,
          twoIsOn: false,
          threeIsOn: true,
          fourIsOn: false,
        }));

        break;
      case "5":
        setStepState(() => ({
          oneIsOn: false,
          twoIsOn: false,
          threeIsOn: false,
          fourIsOn: true,
        }));

        break;
      default:
        break;
    }
  }, [step.key, errors]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mainImg = windowWidth >= 768 ? mainImgDesktop : mainImgMobile;
  return (
    <div className="min-h-[650px] *:box-border md:flex md:justify-center">
      <form
        onSubmit={handleSubmit}
        className="md:flex md:gap-[4vw] md:bg-white md:absolute md:top-[15%]  md:p-3 rounded-lg "
      >
        <div className="md:w-[274px] md:h-[568px]">
          <img src={mainImg} className="w-full object-cover" alt="style" />
          <div className="justify-center absolute left-[25%] right-[25%] md:left-[5%] md:top-14 md:right-[70%] top-7 z-30 flex md:flex-col gap-7">
            <div className="flex items-center gap-4">
              <div
                className={`w-7 h-7 rounded-full border text-xs text-center border-borderColor ${
                  stepState.oneIsOn ? " bg-white" : ""
                }  text-white relative`}
              >
                <span
                  className={`absolute top-1 left-[9px] ${
                    stepState.oneIsOn ? " text-black" : ""
                  }  font-bold`}
                >
                  1
                </span>
              </div>
              <div className="hidden md:block">
                <p className="uppercase text-grayMain font-medium tracking-wide text-[12px]">
                  STEP 1
                </p>
                <p className="uppercase font-medium text-white tracking-widest text-xs">
                  your info
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`w-7 h-7 rounded-full border text-xs text-center border-borderColor ${
                  stepState.twoIsOn ? " bg-white" : ""
                }  text-white relative`}
              >
                <span
                  className={`absolute top-1 left-[9px] ${
                    stepState.twoIsOn ? " text-black" : ""
                  }  font-bold`}
                >
                  2
                </span>
              </div>
              <div className="hidden md:block">
                <p className="uppercase text-grayMain font-medium tracking-wide text-[12px]">
                  STEP 2
                </p>
                <p className="uppercase font-medium text-white tracking-widest text-xs">
                  select plan
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`w-7 h-7 rounded-full border text-xs text-center border-borderColor ${
                  stepState.threeIsOn ? " bg-white" : ""
                }  text-white relative`}
              >
                <span
                  className={`absolute top-1 left-[9px] ${
                    stepState.threeIsOn ? " text-black" : ""
                  }  font-bold`}
                >
                  3
                </span>
              </div>
              <div className="hidden md:block">
                <p className="uppercase text-grayMain font-medium tracking-wide text-[12px]">
                  STEP 3
                </p>
                <p className="uppercase font-medium text-white tracking-widest text-xs">
                  add-ons
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`w-7 h-7 rounded-full border text-xs text-center border-borderColor ${
                  stepState.fourIsOn ? " bg-white" : ""
                }  text-white relative`}
              >
                <span
                  className={`absolute top-1 left-[9px] ${
                    stepState.fourIsOn ? " text-black" : ""
                  }  font-bold`}
                >
                  4
                </span>
              </div>
              <div className="hidden md:block">
                <p className="uppercase text-grayMain font-medium tracking-wide text-[12px]">
                  STEP 4
                </p>
                <p className="uppercase font-medium text-white tracking-widest text-xs">
                  summary
                </p>
              </div>
            </div>
          </div>
        </div>
        {!thankMsg && (
          <div className=" w-[95%] left-[2.5%] flex-1 absolute md:static md:top-0 top-28  flex flex-col ">
            <div className=" md:mt-16">{step}</div>
            <div className="flex px-8 justify-between -left-[2.5%] py-10 w-[105%] md:w-[70%] h-[15%] md:left-[30%] md:bg-transparent bg-white -bottom-[40%] sm:-bottom-[85%] md:bottom-0 absolute items-center ">
              {isFirstStep && (
                <button
                  type="button"
                  className="text-grayMain font-medium md:ml-14 hover:text-bluePrimary "
                  onClick={back}
                >
                  Go Back
                </button>
              )}
              <button
                type="submit"
                className={`text-white ${
                  isLastStep
                    ? "bg-bluePrimary px-6"
                    : "bg-PurplishBlue px-[30px]"
                }  py-3 absolute right-[10%] rounded-lg `}
              >
                {isLastStep ? "Next Step" : "Confirm"}
              </button>
            </div>
          </div>
        )}

        {thankMsg && (
          <div className="w-[95%] left-[2.5%] flex-1 absolute md:static md:top-0 top-28  flex flex-col md:w-[45vw] md:mt-[17%]">
            <div className="px-8 rounded-lg pb-16 pt-9 text-center bg-white flex flex-col items-center mt-auto mb-auto flex-1">
              <img src={thankYouImg} alt="" />
              <p className="font-bold text-bluePrimary text-3xl mt-7">
                Thank you!
              </p>
              <p className="text-grayMain max-w-[43ch] mt-4">
                Thank you for confirming your subscription! We you have fun
                using our platform. If ever need support. Please feel free to
                email us
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
