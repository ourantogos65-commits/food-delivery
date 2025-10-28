import { FoodOrderDetail } from "../FoodOrder/FoodOrderDetail";

export const Navication = () => {
  return (
    <div className="px-[88px] py-[3px] flex  justify-between w-full bg-gray-800">
      <div className="flex w-[146px] items-center  ">
        <div className="w-[46px] h-[37.29px] bg-red-300 " />
        <div className="flex flex-col gap-0.5">
          <h1 className=" text-lg">
            <span className="text-red-400">Nom</span>Nom
          </h1>
          <p>swift delivery</p>
        </div>
      </div>
      {/* <FoodOrderDetail /> */}
    </div>
  );
};
