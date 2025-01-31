import React from "react";

export default function Footer() {
  return (
    <div className="pt-20 pb-12 px-6 md:px-8 lg:px-16 2xl:px-24">
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-12 pb-8">
        <div className="col-span-2 lg:col-span-3 space-y-5">
          <h2 className="font-bold text-2xl md:text-[32px] text-primary">
            MORENT
          </h2>
          <p className="font-medium text-xs md:text-base text-[#90A3BF] max-w-72">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-semibold text-base md:text-xl">About</h3>
          <div className="space-y-3 md:space-y-4">
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              How it works.
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Featured
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Partnership
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Business Relation
            </p>
          </div>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-semibold text-base md:text-xl">Community</h3>
          <div className="space-y-3 md:space-y-4">
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Events
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Blog
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Podcast
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Invite a friend
            </p>
          </div>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h3 className="font-semibold text-base md:text-xl">Socials</h3>
          <div className="space-y-3 md:space-y-4">
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Discord
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Instagram
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Twitter
            </p>
            <p className="font-medium text-xs md:text-base text-[#90A3BF]">
              Facebook
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center pt-8 gap-3">
        <p className="font-semibold text-xs md:text-base">
          ©2022 MORENT. All rights reserved
        </p>
        <div className="flex justify-between items-center gap-12 w-full sm:w-auto">
          <p className="font-semibold text-xs md:text-base">Privacy & Policy</p>
          <p className="font-semibold text-xs md:text-base">
            Terms & Condition
          </p>
        </div>
      </div>
    </div>
  );
}
