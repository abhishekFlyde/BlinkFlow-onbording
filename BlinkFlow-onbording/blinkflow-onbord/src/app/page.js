"use client";


import { useState } from "react";
import Typography from "@/Components/ui-kit/typography";
import GlassContainer from "@/Components/ui-kit/glassContainer";
import Button from "@/Components/ui-kit/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const features = [
    "No credit card required",
    "Launch in minutes",
    "Fully responsive design",
    "Built for conversions",
  ];
  const [step, setStep] = useState(0);
  return (
    <div className="hero">
      <video className="hero__video" autoPlay muted loop playsInline>
        <source
          src="https://ik.imagekit.io/75zj3bigp/gradient-background-2025-12-09-04-19-26-utc.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="container">
          {step === 0 && (
            <div className="hero__flex">
              {/* Left */}
              <div className="hero__left">
                <div className="hero__logo">
                  <img src="https://ik.imagekit.io/a9uxeuyhx/blinkflo.png" />
                </div>

                <Typography
                  variant="subtitleSizeBase"
                  colorVariant="white1"
                  className="mb-[24px]"
                >
                  Launch-ready landing pages. Zero effort.
                </Typography>

                <Typography
                  variant="subheadingSizeMedium"
                  colorVariant="white2"
                  className="hero__desc"
                >
                  Create beautiful, high-converting landing pages in minutes. No
                  design or coding skills needed.
                </Typography>
<<<<<<< HEAD
                <br />
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight />}
                >
                  Start Journey
                </Button>
                <br />
                <Typography variant="subheadingSizeMedium" colorVariant="white">
                  Enter your number to receive instant access
                </Typography>
                <br />
                <Typography variant="bodySizeSmall" colorVariant="white">
                  By signing up, you agree to our Terms of Service
                </Typography>
              </GlassContainer>
=======

                <div className="hero__features">
                  {features.map((text, i) => (
                    <div key={i} className="hero__feature">
                      <span className="hero__icon">
                        <img src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(10).png" />
                      </span>
                      <Typography
                        variant="bodySizeMedium"
                        colorVariant="white1"
                      >
                        {text}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="w-[448px]">
                <GlassContainer>
                  <Typography variant="subtitleSizeBase" colorVariant="white">
                    Get Started Free
                  </Typography>
                  <br />
                  <Typography variant="bodySizeMedium" colorVariant="white">
                    Launch-ready landing pages. Zero effort.
                  </Typography>
                  <br />
                  <Typography variant="h3" colorVariant="white">
                    Create beautiful, high-converting landing pages in minutes.
                    No design or coding skills needed.
                  </Typography>
                  <br />
                  <Button
                    onClick={() => setStep(1)}
                    variant="primary"
                    showIcon={true}
                    icon={<ArrowRight />}
                  >
                    Next
                  </Button>
                  <Button variant="link">click kro link ko</Button>
                  <br />
                  <Typography
                    variant="subheadingSizeMedium"
                    colorVariant="white"
                  >
                    Enter your number to receive instant access
                  </Typography>
                  <br />
                  <Typography variant="bodySizeSmall" colorVariant="white">
                    By signing up, you agree to our Terms of Service
                  </Typography>
                </GlassContainer>
              </div>
>>>>>>> 9082ba4bafbe47f64d39b7882c238d721941ddd7
            </div>
          )}
          {step === 1 && (
            <div>
              <div className="w-[163px] h-[33px]">
                <img src="https://ik.imagekit.io/a9uxeuyhx/blinkflo.png" />
              </div>
              <div className="items-center">
                <GlassContainer>
                  {/* Heading */}
                  <h2 className="text-white text-[22px] font-medium mb-[6px]">
                    Colour Scheme & Logo
                  </h2>
                  <p className="text-white/70 text-[14px] mb-[28px]">
                    Select your brand colours
                  </p>

                  {/* Color Inputs */}
                  <div className="flex flex-col gap-[16px]">
                    {[
                      "Primary Colour",
                      "Accent Colour",
                      "Secondary Colour",
                    ].map((label) => (
                      <div
                        key={label}
                        className="flex items-center justify-between bg-white/15 rounded-[12px] px-[16px] py-[12px]"
                      >
                        <span className="text-white text-[14px]">{label}</span>
                        <input
                          type="color"
                          className="w-[28px] h-[28px] rounded-full border-none cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Upload Logo */}
                  <div className="mt-[28px] border border-white/20 rounded-[16px] py-[28px] text-center text-white/70">
                    <p className="text-white text-[16px] mb-[6px]">
                      Upload Logo
                    </p>
                    <p className="text-[13px] mb-[12px]">
                      Choose or drag and drop your file here
                    </p>
                    <p className="text-[12px] mb-[16px]">
                      JPEG, PNG up to 50 MB
                    </p>
                    <button className="bg-[#4EFFC7] text-black text-[14px] px-[18px] py-[8px] rounded-[10px]">
                      Browse Files
                    </button>
                  </div>

                  {/* Next Button */}
                  <button className="mt-auto h-[56px] bg-[#4EFFC7] rounded-[14px] text-black text-[16px] font-medium flex items-center justify-center gap-[8px]">
                    Next <span>→</span>
                  </button>
                </GlassContainer>

                {/* RIGHT PHONE PREVIEW */}
                <div className="w-[360px] h-[720px] flex items-center justify-center">
                  <div className="w-[320px] h-[660px] rounded-[36px] bg-gradient-to-b from-[#5C7CFA] to-[#7B4CE2] p-[20px] flex flex-col">
                    <div className="h-[30px]" />

                    <h2 className="text-white text-center font-semibold mb-[20px]">
                      BUILDFLO
                    </h2>

                    <input
                      placeholder="Company Name"
                      className="mb-[12px] h-[40px] rounded-full px-[16px] text-[14px] outline-none"
                    />

                    <select className="mb-[12px] h-[40px] rounded-full px-[16px] text-[14px] outline-none">
                      <option>Industry</option>
                    </select>

                    <input
                      placeholder="Business Description"
                      className="h-[40px] rounded-full px-[16px] text-[14px] outline-none"
                    />

                    <button className="mt-auto h-[44px] rounded-full bg-[#4EFFC7] text-black text-[14px] flex items-center justify-center gap-[6px]">
                      Next →
                    </button>

                    <p className="mt-[12px] text-[11px] text-white/70 text-center leading-[16px]">
                      This sets the core identity of the landing page. Without
                      this, the AI can't position the brand or craft a relevant
                      narrative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
