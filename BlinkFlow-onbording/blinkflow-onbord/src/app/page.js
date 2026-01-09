"use client";

export default function page() {
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
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.55]"
        style={{ backgroundColor: "#4EFFC7" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Hero Section</h1>
      </div>
    </div>
  );
}
