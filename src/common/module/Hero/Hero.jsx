import Image from "@/common/component/Image";
import React from "react";

export default function Hero() {
  return (
    <header className="flex justify-center w-full max-w-[1500px]">
      <div className="w-full h-[100vh] flex justify-center items-start relative overflow-hidden">
        <div className="relative w-full px-20 flex flex-col gap-5 py-5 justify-center items-start h-full ">
          <h1 className="text-white text-sm font-medium">TEASER STORE</h1>
          <p className="text-base text-white w-[40%] font-mono">
            Teaser Store is your go-to boutique for curated fashion pieces that
            effortlessly elevate your wardrobe. Our collection features a
            carefully selected range of clothing and accessories that cater to
            both bold and understated tastes. Whether you`re looking for the
            perfect outfit for a special occasion or everyday essentials with a
            twist, Teaser Store has something for everyone.
          </p>
        </div>
        <video
          src="/herovid.mp4"
          className="w-full fixed inset-0 z-[-9]"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>

        {/* <Image
          className="w-full h-auto top-[-150%] absolute inset-0 z-[-9]"
          alt="Hero Image"
          src="/heroimg.jpeg"
          width={400}
          height={400}
        /> */}
        <span className="bg-[#000000a1] absolute inset-0 backdrop-blur-sm z-[-9]"></span>
      </div>
    </header>
  );
}
