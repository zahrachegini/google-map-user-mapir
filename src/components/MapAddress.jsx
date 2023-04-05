import React from "react";
import MyMap from "./MyMap";
const MapAddress = () => {
  return (
    <div className="container mx-auto border border-teal-600 mt-10 p-3 rounded">
      <div className="">
        {/* <img src={map} alt="" className="w-full"/> */}
        <MyMap />
      </div>
      <div className="">
        <form className="">
          <div className=" my-8">
            <lable className="block text-lx font-bold">کد پستی</lable>
            <input
              type="text"
              className="border-2 border-teal-600 rounded w-full md:w-1/3 p-3 focus:outline-teal-600 mt-2"
            />
          </div>
          <div className="">
            <lable className="block text-lx font-bold">آدرس</lable>
            <textarea
              type="text"
              className="border-2 border-teal-600 rounded w-full md:w-1/3 p-3 focus:outline-teal-600 mt-2"
              rows="4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MapAddress;
