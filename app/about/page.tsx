import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-12 rounded-lg bg-gray-700 px-8 py-16 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          We Help Everyone
          <br />
          Enjoy Amazing Products
        </h1>

        <div className="mt-12 flex flex-col items-center justify-center gap-12 md:flex-row">
          <div>
            <div className="text-5xl font-bold md:text-6xl">25,000K+</div>
            <div className="text-xl text-gray-300">Happy Clients</div>
          </div>
          <div>
            <div className="text-5xl font-bold md:text-6xl">1,000K+</div>
            <div className="text-xl text-gray-300">Great Products</div>
          </div>
        </div>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-3">
        <div>
          ## Who We Are Jazaa is a trusted provider of both Pre-Owned and
          brand-new electronics, offering high-quality products at competitive
          prices. We are committed to sustainability and accessibility, ensuring
          that customers have access to the latest technology, whether they are
          looking for new gadgets or reliable pre-owned devices. Quality and
          customer satisfaction are our priorities. We are a team of experts on
          a mission to change the way we buy Tech.
        </div>

        <div>
          ## Jazaa Warranty Jazaa offers a comprehensive 12-month warranty for
          both Pre-Owned and new electronics, ensuring peace of mind with every
          purchase. Our warranty covers product defects and malfunctions,
          providing reliable support for repairs or replacements. We stand by
          the quality of our products, aiming for customer satisfaction and
          long-term trust. We make it risk free and hassle free All our devices
          come with.
        </div>

        <div>
          ## Check Points Jazaa ensures the highest quality for Pre-Owned/Used
          and new electronics through rigorous checkpoints. Each product
          undergoes thorough inspection, testing for functionality, performance,
          and appearance. We replace faulty parts, guarantee device quality, and
          ensure reliability. Our goal is to provide customers with electronics
          that meet industry standards and offer long-lasting value.
        </div>
      </div>

      <div className="mb-16 rounded-lg bg-gray-50 p-8">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="w-full text-left md:w-[45%]">
            <h2 className="mb-6 text-[30px] font-bold leading-tight text-red-500 xl:text-[40px] 2xl:text-[52px]">
              You choose the condition and the price that suits you
            </h2>
            <p className="text-[20px] leading-relaxed text-gray-700">
              Because we don't have the same needs and budget and also because
              we want to know what to expect.
            </p>
          </div>

          <div className="flex w-full justify-center md:w-[55%]">
            <div className="relative">
              <Image
                src="/about-iphone-1.webp"
                alt="iPhone and smartphone devices"
                width={300}
                height={300}
                className="h-[300px] w-[300px] object-contain sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] 2xl:h-[500px] 2xl:w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 border-t border-gray-200 py-8 md:grid-cols-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-red-500">FREE DELIVERY</div>
            <div className="text-sm text-gray-600">
              Free Delivery On All Orders
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-red-500">RETURNS</div>
            <div className="text-sm text-gray-600">10 Days To Return</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z"
              />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-red-500">SUPPORT 24/7</div>
            <div className="text-sm text-gray-600">
              12 Months Warranty On All Orders
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-red-500">PAYMENTS</div>
            <div className="text-sm text-gray-600">100% payment security</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
