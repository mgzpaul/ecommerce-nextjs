import React from "react";
import { IoStar } from "react-icons/io5";
import { apiService } from "../apis/app.service";
import { Collection } from "../apis/models";

const FeaturedCategories = async () => {
  const collections: Collection[] = await apiService.getCollections();
  return (
    <>
      {collections.map((collection, index) =>
        collection.type == "SINGLE" && collection.viewType == "TILE" ? (
          <div
            key={index}
            className="flex flex-row mx-auto w-[960px] h-[326px] mt-[40px]"
          >
            <div className="w-[240px] h-full">
              <h3 className="font-bold text-xl">{collection.title}</h3>
              <p className="text-sm">{collection.subtitle}</p>
            </div>
            <div className="max-w-[720px] carousel flex flex-row h-full">
              {collection.items.map((item, index) => (
                <div className="card w-[174px]mr-[8px] mr-2">
                  <div
                    key={index}
                    className="w-[174px] h-[174px] rounded mb-[12px]"
                  >
                    <img
                      src={item.publication.media[0].uri}
                      alt="Shoes"
                      className="h-full  rounded object-cover"
                    />
                  </div>
                  <div className="content">
                    <h2 className="text-md">{item.publication.productName}</h2>
                    <h2 className="text-lg font-bold">
                      <span className="text">
                        {item.publication.priceInfo.discountPrice
                          ? `${item.publication.priceInfo.discountRate}% `
                          : null}
                      </span>
                      {item.publication.priceInfo.discountPrice
                        ? `${item.publication.priceInfo.discountPrice}`
                        : item.publication.priceInfo.price}
                    </h2>
                    {item.publication.applyCoupon ? (
                      <div className="badge fontsize-[8px] text-xs bg-gray-100 border-none text-gray-800 mb-2">
                        coupon
                      </div>
                    ) : null}
                    <div className="flex flex-row">
                      <IoStar className="absolute" />
                      <p className="relative bottom-1 left-4">
                        {item.publication.rating}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default FeaturedCategories;
