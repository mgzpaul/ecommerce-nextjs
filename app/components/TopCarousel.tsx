import React, { useState } from "react";
import { Banner } from "../apis/models";
import { apiService } from "../apis/app.service";

const TopCarousel = async () => {
  const banners: Banner[] = await apiService.getBanners();

  return (
    <div className="mx-auto carousel carousel-center w-full">
      {banners.map((banner, index) => (
        <div
          key={index}
          id={`img${index + 1}`}
          className="carousel-item relative w-[960px] h-[320px] mr-[32px]"
        >
          <img src={banner.pcImageUrl} className="w-full" />

          {/* controls */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#img${index}`}
              className={`btn ${index == 1 ? "btn-disabled" : null} btn-circle`}
            >
              ❮
            </a>
            <a
              href={`#img${index + 2}`}
              className={`btn ${
                index == banners.length ? "btn-disabled" : null
              } btn-circle`}
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCarousel;
