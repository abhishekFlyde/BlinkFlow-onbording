"use client";

import Typography from "@/Components/ui-kit/typography";

export default function Page() {
  const features = [
    "No credit card required",
    "Launch in minutes",
    "Fully responsive design",
    "Built for conversions",
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://ik.imagekit.io/75zj3bigp/gradient-background-2025-12-09-04-19-26-utc.mp4"
          type="video/mp4"
        />
      </video>

      {/* Color Overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.55]"
        style={{ backgroundColor: "#4EFFC7" }}
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full">
        <div className="container  h-full px-[109px] py-[90px]">
          <div className="flex h-full items-center justify-between gap-10">
            {/* Left Text */}
            <div className="w-[652px]">
              <div className="h-[64px] w-[282px] mb-[38px]">
                <img
                  src="https://ik.imagekit.io/a9uxeuyhx/blinkflo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <Typography
                variant="h1"
                colorVariant="white1"
                className="mb-[24px]"
              >
                Launch-ready landing pages. Zero effort.
              </Typography>
              <Typography
                variant="h3"
                colorVariant="white2"
                className="mb-[42px] w-[556px]"
              >
                Create beautiful, high-converting landing pages in minutes. No
                design or coding skills needed.
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                {features.map((text, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-[8px]"
                  >
                    <div className="h-[20px] w-[20px]">
                      <img
                        src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(10).png"
                        alt="Icon"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <Typography variant="body-2" colorVariant="white1">
                      {text}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="w-[380px] rounded-2xl bg-white/90 p-6 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-semibold text-black">Get Started</h3>
              <p className="mt-2 text-sm text-gray-600">
                Fill the form to connect with us
              </p>

              <button className="mt-6 w-full rounded-lg bg-black py-3 text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
