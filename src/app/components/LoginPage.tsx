"use client";
import React, { useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { useFormik } from "formik";
import validationSchema from "../utils/validationSchema";

interface Values {
  usernameOrEmail: string;
  password: string;
}

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="flex">
      <div className="py-[32px] px-[40px] flex flex-col">
        <div className="flex  gap-[60px] items-center">
          <img
            className="w-[110px] cursor-pointer"
            src="https://app.getgrass.io/_next/image?url=%2Fimages%2Flogos%2Fgrass-logo-light.png&w=1920&q=75"
            alt=""
          />
          <div className="flex justify-end w-full space-x-3 font-semibold text-[14px]">
            <p className="tracking-[2px] cursor-pointer ">ABOUT US</p>
            <p className="tracking-[2px] cursor-pointer">FAQ</p>
          </div>
        </div>
        <h1 className="text-[48px] w-fit px-[8px] flex items-center h-[50px] font-extrabold bg-[#f2fed1] mt-[25px] ml-[10px] mb-[120px]">
          Sign In.
        </h1>
        <div className="mb-[50px]">
          <p className="tracking-wide text-[18px] font-extrabold">
            Don't have an account?{" "}
            <span className="ml-1 underline bg-[#ABF600] px-[8px] hover:no-underline cursor-pointer rounded-lg py-1">
              Register
            </span>
          </p>
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div
            className={` flex rounded-[15px] pl-[25px]  ${
              formik.touched.usernameOrEmail && formik.errors.usernameOrEmail
                ? "border-red-600 border-2 bg-red-100"
                : "border-black bg-gray-100"
            } items-center w-[287px] h-[48px] border-[1px] hover:border-[1.75px] `}
          >
            <CiUser className="text-[24px]" />
            <input
              type="text"
              placeholder="Username or Email"
              name="usernameOrEmail"
              className={`${
                formik.touched.usernameOrEmail && formik.errors.usernameOrEmail
                  ? "bg-red-100"
                  : "bg-gray-100"
              } h-full outline-none font-bold pl-2 tracking-widest  placeholder-black`}
              value={formik.values.usernameOrEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
            <div className="text-red-500">{formik.errors.usernameOrEmail}</div>
          ) : null}
          <div
            className={`flex rounded-[15px] mt-[15px] pl-[25px] ${
              formik.touched.password && formik.errors.password
                ? "bg-red-100 border-2 border-red-500"
                : " bg-gray-100 border-black"
            } items-center w-[287px] h-[48px] border-[1px] hover:border-[1.75px]`}
          >
            <CiLock className="text-[24px]" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="passwordInput"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.touched.password && formik.errors.password
                  ? "bg-red-100 "
                  : " bg-gray-100 "
              } h-full outline-none font-bold pl-2 w-[85%]  rounded-[15px] tracking-widest placeholder-black `}
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 flex items-center bg-transparent border-transparent rounded-md focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                id="eyeIcon"
              >
                {showPassword ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.98 9c-2.2-4.08-6.3-7-9.98-7C6.32 2 2.22 4.92 0 9c2.2 4.08 6.3 7 9.98 7 3.68 0 7.78-2.92 9.98-7zM10 15a7.45 7.45 0 01-3.04-.64c-.41-.17-.84-.37-1.29-.59a.75.75 0 01-.45-.68c0-.34.26-.62.6-.68.55-.1 1.08-.23 1.59-.4a7.77 7.77 0 002.6-1.3c.23-.17.46-.35.69-.54a.75.75 0 01.5-.17c.32.04.59.28.68.6a10.3 10.3 0 01-2.47 3.12c-.23.22-.46.42-.7.6-.12.1-.25.2-.39.3-.35.25-.71.44-1.08.6a.75.75 0 01-.75-.36 1 1 0 00-.59-.37zm0-2a2 2 0 100-4 2 2 0 000 4z"
                  />
                )}
              </svg>
            </button>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
          <p className="mt-[20px] cursor-pointer">Forgot Password?</p>
          <button
            disabled={
              !!(formik.errors.password || formik.errors.usernameOrEmail)
            }
            className="flex w-[287px] h-[49px] rounded-full border-[1px] tracking-wide border-black bg-[#8b8b8b] mt-[40px] font-extrabold  items-center justify-center"
          >
            ACCESS MY ACCOUNT
            <BsArrowRightShort />
          </button>
        </form>
      </div>
      <div>
        <img
          className="w-[65%] h-[100vh] object-cover  right-0 absolute"
          src="https://app.getgrass.io/_next/image?url=%2Fimages%2Fothers%2Fauth-background.png&w=1920&q=75"
          alt=""
        />
      </div>
    </div>
  );
};
