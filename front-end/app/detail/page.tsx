import { FoodDetail } from "@/components/Food/FoodDetail";
import { Navication } from "@/components/layout/Navication";

const detailPage = () => {
  return (
    <div className="m-0">
      <Navication />
      <div className="flex w-[full] h-screen flex-col gap-5 items-center justify-center  bg-gray-600 ">
        <FoodDetail />
      </div>
    </div>
  );
};
export default detailPage;
