import { useEffect, useState } from "react";

export const Step1 = ({ data, updateFields, errors }) => {
  // const myVal = JSON.parse(localStorage.getItem("items"));

  // const [errors, setErrors] = useState({
  //   name: false,
  //   email: false,
  //   number: false,
  // });

  // const handleBlur = (e) => {
  //   const { name, value } = e.target;
  //   if (value === "") {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [name]: true,
  //     }));
  //   } else if (value !== "") {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [name]: false,
  //     }));
  //   }

  //   if (Object.values(errors).every((value) => !value)) {
  //     change(true);
  //   } else {
  //     change(false);
  //   }
  // };

  useEffect(() => {
    console.log(errors);
    console.log("name:", errors.name);
  }, [errors]);
  return (
    <div className="shadow-lg md:shadow-none pb-16 pt-9 md:pt-0 rounded-lg bg-white px-7 font-body md:w-[45vw]">
      <h1 className="text-3xl font-semibold text-bluePrimary">
        Personal infos
      </h1>
      <p className="text-grayMain mt-2 pr-10">
        Please provide your name, email address, and phone number
      </p>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <label htmlFor="name">Name</label>
            {errors.name && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              updateFields({ name: e.target.value }, "name", e.target.required)
            }
            value={data.name}
            placeholder="e.g Stephen King"
            // placeholder={data.name}
            className="outline-none border invalid:border-red-500 py-3 focus:border-PurplishBlue border-borderColor rounded-md pl-3 text-bluePrimary font-medium"
          />
        </div>

        <div className="flex flex-col ">
          <div className="flex justify-between">
            <label htmlFor="email">Email Address</label>
            {errors.email && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              updateFields(
                { email: e.target.value },
                "email",
                e.target.required
              )
            }
            // onBlur={(e) => {
            //   handleErrors("email", e.target.required);
            // }}
            value={data.email}
            placeholder="e.g StephenKing@lorem.com"
            className="outline-none border py-3 focus:border-PurplishBlue border-borderColor rounded-md pl-3 text-bluePrimary font-medium"
          />
        </div>

        <div className="flex flex-col ">
          <div className="flex justify-between">
            <label htmlFor="number">Phone Number</label>
            {errors.number && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
          <input
            type="tel"
            name="number"
            onChange={(e) =>
              updateFields(
                { number: e.target.value },
                "number",
                e.target.required
              )
            }
            value={data.number}
            placeholder="e.g. +1 234 567 890"
            className="outline-none border py-3 focus:border-PurplishBlue border-borderColor rounded-md pl-3 text-bluePrimary font-medium"
          />
        </div>
      </div>
    </div>
  );
};
