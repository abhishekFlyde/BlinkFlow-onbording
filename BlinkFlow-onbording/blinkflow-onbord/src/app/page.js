"use client";

import Typography from "@/Components/ui-kit/typography";
import GlassContainer from "@/Components/ui-kit/glassContainer";
import Button from "@/Components/ui-kit/button";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const features = [
    "No credit card required",
    "Launch in minutes",
    "Fully responsive design",
    "Built for conversions",
  ];
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
          <div className="hero__flex">
            {/* Left */}
            <div className="hero__left">
              <div className="hero__logo">
                <img src="https://ik.imagekit.io/a9uxeuyhx/blinkflo.png" />
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
                className="hero__desc"
              >
                Create beautiful, high-converting landing pages in minutes. No
                design or coding skills needed.
              </Typography>

              <div className="hero__features">
                {features.map((text, i) => (
                  <div key={i} className="hero__feature">
                    <span className="hero__icon">
                      <img src="https://ik.imagekit.io/a9uxeuyhx/Icon%20(10).png" />
                    </span>
                    <Typography variant="body-2" colorVariant="white1">
                      {text}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="w-[448px]">
              <GlassContainer>
                <Typography variant="h1" colorVariant="white">
                  Get Started Free
                </Typography>
                <br />
                <Typography variant="h2" colorVariant="white">
                  Launch-ready landing pages. Zero effort.
                </Typography>
                <br />
                <Typography variant="h3" colorVariant="white">
                  Create beautiful, high-converting landing pages in minutes. No
                  design or coding skills needed.
                </Typography>
                <br />
                <Button
                 
                  variant="primary"
                  size="md"
                  icon={<ArrowRight />}
                >
                  Start Journey
                </Button>
                <br />
                <Typography variant="body-2" colorVariant="white">
                  Enter your number to receive instant access
                </Typography>
                <br />
                <Typography variant="body-3" colorVariant="white">
                  By signing up, you agree to our Terms of Service
                </Typography>
              </GlassContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
