import React from "react";
import { AiFillAmazonSquare } from "react-icons/ai";
import { AiFillChrome } from "react-icons/ai";
import { apiService } from "../apis/app.service";
import { MainShortcut } from "../apis/models";

const MainShortcuts = async () => {
  const mainShortcuts: MainShortcut[] = await apiService.getMainShortcuts();

  return (
    <div className="flex min-w-full flex-row justify-center mt-[40px]">
      <div className="flex  flex-row w-[960px] justify-between">
        {mainShortcuts.map((item, index) => (
          <div key={index} className=" hover:cursor-pointer w-[64px] mx-[18px]">
            <div className="img-wrapper mr-1 md:mt-[10px] h-[62px] w-[62px] ">
              <img
                className="object-cover"
                height={62}
                width={62}
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <h6 className="text-xs text-center mt-2">{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainShortcuts;
