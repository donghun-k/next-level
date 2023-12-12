import React from "react";

const Banner = () => {
  return (
    <section className="relative flex h-[250px] w-[100vw] justify-center bg-gray-500">
      <div className="flex h-full w-full max-w-screen-lg flex-col px-4 py-10">
        <h3 className="mb-2 font-bold text-white">Lorem</h3>
        <h2 className="mb-20 text-3xl font-bold text-white">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="text-sm text-gray-300">2023.11.06</p>
      </div>
    </section>
  );
};

export default Banner;
