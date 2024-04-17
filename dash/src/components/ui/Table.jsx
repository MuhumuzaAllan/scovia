import React, { useState } from "react";
const products = [
  {
    id: 1,
    Category: "Electronics",
    Company: "Apple",
    Product: "iPhone 13",
    Description: "The latest iPhone with advanced features",
    Price: 999,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "John Doe",
        Quantity: 2,
        TotalAmount: 1998,
      },
      {
        Date: "2023-09-04",
        Customer: "Jane Smith",
        Quantity: 1,
        TotalAmount: 999,
      },
    ],
  },
  {
    id: 2,
    Category: "Clothing",
    Company: "Nike",
    Product: "Running Shoes",
    Description: "High-quality running shoes for athletes",
    Price: 89,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "Alice Johnson",
        Quantity: 3,
        TotalAmount: 267,
      },
      {
        Date: "2023-09-03",
        Customer: "Bob Brown",
        Quantity: 2,
        TotalAmount: 178,
      },
    ],
  },
  {
    id: 3,
    Category: "Books",
    Company: "Penguin Books",
    Product: "The Great Gatsby",
    Description: "Classic novel by F. Scott Fitzgerald",
    Price: 12,
    CustomDetails: [
      {
        Date: "2023-09-02",
        Customer: "Ella Williams",
        Quantity: 5,
        TotalAmount: 60,
      },
    ],
  },
  {
    id: 4,
    Category: "Home Appliances",
    Company: "Samsung",
    Product: "Smart Refrigerator",
    Description: "Refrigerator with smart features and spacious design",
    Price: 14,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "David Wilson",
        Quantity: 1,
        TotalAmount: 14,
      },
    ],
  },
];
const TableReact = () => {
  const [sortingData, setSortingData] = useState(products);
  return (
    <div className="min-h-screen h-full bg-white flex  items-center justify-center py-10">
      <div className="w-full max-w-4xl px-2">
        <h1 className="text-2xl font-medium">Events</h1>
        <h2 className="text-xl font-medium">Today</h2>
        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
          <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-0 borer ">
            <thead className="rounded-lg text-base text-white font-semibold w-full">
              <tr className="">
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  ID
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Category
                </th>
                <th className="py-3 px-3  justify-center gap-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Company
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Product
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Description
                </th>
                <th className="flex items-center py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap gap-1">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {sortingData?.map((data, index) => (
                <tr
                  className={`${
                    index % 2 == 0 ? "bg-white" : "bg-[#222E3A]/[6%]"
                  }`}
                  key={index}
                >
                  <td
                    className={`py-2 px-3 font-normal text-base ${
                      index == 0
                        ? "border-t-2 border-black"
                        : index == sortingData?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`py-2 px-3 font-normal text-base ${
                      index == 0
                        ? "border-t-2 border-black"
                        : index == sortingData?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {data?.Category}
                  </td>
                  <td
                    className={`py-2 px-3 font-normal text-base ${
                      index == 0
                        ? "border-t-2 border-black"
                        : index == sortingData?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {data?.Company}
                  </td>
                  <td
                    className={`py-2 px-3 text-base  font-normal ${
                      index == 0
                        ? "border-t-2 border-black"
                        : index == sortingData?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {data?.Product}
                  </td>
                  <td
                    className={`py-2 px-3 text-base  font-normal ${
                      index == 0
                        ? "border-t-2 border-black"
                        : index == sortingData?.length
                        ? "border-y"
                        : "border-t"
                    } min-w-[250px]`}
                  >
                    {data?.Description}
                  </td>
                  <td
                    className={`py-5 px-4 text-base  font-normal ${
                      index == 0
                        ? "border-t-2 border-black"
                        : index == sortingData?.length
                        ? "border-y"
                        : "border-t"
                    }`}
                  >
                    {"$" + data?.Price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TableReact;
