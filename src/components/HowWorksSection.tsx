"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Switch from "./Switch";

export default function HowWorksSection() {
  const slides = [
    {
      title: "Onboard Your Facility",
      description:
        "Skip the messy back-and-forth. Our smart intake form makes it fast and easy to add your facility info in one place.",
    },
    {
      title: "Onboard Your Facility",
      description:
        "Skip the messy back-and-forth. Our smart intake form makes it fast and easy to add your facility info in one place.",
    },
    {
      title: "Open a Coverage Project",
      description:
        "Create a project during renewal season and let licensed brokers submit applications to represent your facility.",
    },
    {
      title: "Review Broker Applications",
      description:
        "Compare cover letters, credentials, and experience — then interview or shortlist your top picks.",
    },
    {
      title: "Share a Submission Packet",
      description:
        "Once you choose a broker, we generate a clean, underwriter-ready packet to help them quote faster.",
    },
  ];

  const SlideContent = ({
    slideNumber,
    title,
    description,
    children,
  }: {
    slideNumber: number;
    title: string;
    description: string;
    children: React.ReactNode;
  }) => {
    return (
      <div className="">
        <span className="font-semibold ml-2">{slideNumber}</span>
        <h2 className="font-semibold mt-2">{title}</h2>
        <p className="text-sm mt-2">{description}</p>

        <div className="flex justify-center items-center h-[260px] p-[30px]">
          {children}
        </div>
      </div>
    );
  };

  return (
    <section className="mt-24">
      <h1 className="text-center text-4xl font-semibold text-gray-900">
        How it works
      </h1>
      <p className="text-center text-gray-600 px-4 mt-2">
        We Match the Right Brokers to the Right Nursing Homes.
      </p>

      <div className="flex justify-center items-center mt-10 mx-auto">
        <Switch />
      </div>

      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        // centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        grabCursor={true}
        initialSlide={2}
        slideToClickedSlide={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="rounded-4xl bg-white px-8 py-5 text-gray-500 overflow-hidden shadow-xl my-20"
          >
            <SlideContent
              slideNumber={index + 1}
              title={slide.title}
              description={slide.description}
            >
              <Image
                src="/slider/onboard-facility.png"
                alt="how-works"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
