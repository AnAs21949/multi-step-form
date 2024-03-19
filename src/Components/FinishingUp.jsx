import { useEffect, useState } from "react";

export const FinishingUp = ({ billing, chosen, addOnsData, changeInfo }) => {
  const addOnsValue = billing ? 20 : 2;

  const planValue =
    chosen === "arcade" && !billing
      ? 9
      : chosen === "advanced" && !billing
      ? 12
      : chosen === "pro" && !billing
      ? 15
      : chosen === "arcade" && billing
      ? 90
      : chosen === "advanced" && billing
      ? 120
      : chosen === "pro" && billing
      ? 150
      : "unknown";

  const calculateTotal = () => {
    let total = planValue;

    if (addOnsData.onlineService) {
      total += billing ? addOnsValue - 10 : addOnsValue - 1;
    }

    if (addOnsData.largeStorage) {
      total += addOnsValue;
    }

    if (addOnsData.customizableProfile) {
      total += addOnsValue;
    }

    return total;
  };

  const [total, setTotal] = useState(calculateTotal);

  useEffect(() => {
    setTotal(calculateTotal());
  }, [chosen, billing, addOnsData]);

  return (
    <div className="shadow-lg md:shadow-none pb-16 pt-9 md:pt-0 rounded-lg bg-white px-7 font-body md:w-[45vw]">
      <h1 className="text-3xl font-semibold text-bluePrimary">Finishing up</h1>
      <p className="text-grayMain mt-2">
        Double-check everything looks okay before confirming.
      </p>

      <div className=" bg-mangolia mt-10 p-5 rounded-md">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-bluePrimary font-medium">
              {chosen} {billing ? "(Yearly)" : "(Monthly)"}
            </p>

            <button
              type="button"
              className="underline text-grayMain cursor-pointer"
              onClick={() => changeInfo(0)}
            >
              Change
            </button>
          </div>
          <p className="text-bluePrimary font-semibold">
            {billing ? `$${planValue}/yr` : `$${planValue}/mo`}
          </p>
        </div>
        <hr className="my-6" />

        {addOnsData.onlineService && (
          <div className="flex justify-between items-center">
            <p className="text-grayMain">Online service</p>
            <p className="text-bluePrimary font-medium">
              {" "}
              {billing ? `$${addOnsValue - 10}/yr` : `$${addOnsValue - 1}/mo`}
            </p>
          </div>
        )}
        {addOnsData.largeStorage && (
          <div className="flex justify-between items-center mt-3">
            <p className="text-grayMain">Larger storage</p>
            <p className="text-bluePrimary font-medium">
              {billing ? `$${addOnsValue}/yr` : `$${addOnsValue}/mo`}
            </p>
          </div>
        )}
        {addOnsData.customizableProfile && (
          <div className="flex justify-between items-center mt-3 ">
            <p className="text-grayMain">Customizable Profile</p>
            <p className="text-bluePrimary font-medium">
              {billing ? `$${addOnsValue}/yr` : `$${addOnsValue}/mo`}
            </p>
          </div>
        )}

        <div className="mt-12 flex justify-between items-center">
          <p className="text-grayMain">Total (per month)</p>
          <p className="text-PurplishBlue font-semibold text-xl">
            {billing ? `$${total}/yr` : `$${total}/mo`}
          </p>
        </div>
      </div>
    </div>
  );
};
