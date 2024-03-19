export const PickAddOns = ({ billing, addOnsData, updateAddOns }) => {
  return (
    <div className="shadow-lg md:shadow-none pb-16 pt-9 md:pt-0 rounded-lg bg-white px-7 font-body md:w-[45vw] ">
      <h1 className="text-3xl font-semibold text-bluePrimary">Pick add-ons</h1>
      <p className="text-grayMain mt-2">
        {" "}
        Add-ons help enhance your gaming experience
      </p>

      <div className="mt-11 flex flex-col gap-3">
        <label
          htmlFor="onlineService"
          className={`flex justify-between hover:border-PurplishBlue items-center gap-30 lg:gap-36 p-4 border ${
            addOnsData.onlineService ? "border-PurplishBlue" : ""
          } rounded-lg cursor-pointer`}
        >
          <div className="flex gap-6 items-center">
            <input
              type="checkbox"
              className=" scale-150"
              name="onlineService"
              id="onlineService"
              checked={addOnsData.onlineService}
              onChange={(e) => updateAddOns("onlineService", e.target.checked)}
            />
            <div className="flex flex-col gap-1">
              <p className="text-bluePrimary font-medium">Online service</p>
              <p className="text-grayMain">Access to multiplayer games</p>
            </div>
          </div>
          <p className="text-PurplishBlue">{billing ? "$10/yr" : "$1/mo"}</p>
        </label>

        <label
          htmlFor="largeStorage"
          className={` flex justify-between hover:border-PurplishBlue items-center ${
            addOnsData.largeStorage ? "border-PurplishBlue" : ""
          } p-4 border rounded-lg cursor-pointer`}
        >
          <div className="flex gap-6 items-center">
            <input
              type="checkbox"
              className=" scale-150"
              name="largeStorage"
              id="largeStorage"
              checked={addOnsData.largeStorage}
              onChange={(e) => updateAddOns("largeStorage", e.target.checked)}
            />
            <div className="flex flex-col gap-1">
              <p className="text-bluePrimary font-medium">Large storage</p>
              <p className="text-grayMain">Extra 1TB of cloud save</p>
            </div>
          </div>
          <p className="text-PurplishBlue">{billing ? "$20/yr" : "$2/mo"}</p>
        </label>

        <label
          htmlFor="customizableProfile"
          className={` flex hover:border-PurplishBlue ${
            addOnsData.customizableProfile ? "border-PurplishBlue" : ""
          } justify-between items-center p-4 border rounded-lg cursor-pointer`}
        >
          <div className="flex gap-6 items-center">
            <input
              type="checkbox"
              className=" scale-150"
              name="customizableProfile"
              id="customizableProfile"
              checked={addOnsData.customizableProfile}
              onChange={(e) =>
                updateAddOns("customizableProfile", e.target.checked)
              }
            />
            <div className="flex flex-col gap-1">
              <p className="text-bluePrimary font-medium">
                Customizable Profile
              </p>
              <p className="text-grayMain">Custom theme on your profile</p>
            </div>
          </div>
          <p className="text-PurplishBlue">{billing ? "$20/yr" : "$2/mo"}</p>
        </label>
      </div>
    </div>
  );
};
