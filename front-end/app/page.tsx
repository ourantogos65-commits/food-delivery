import { FoodCardList } from "@/components/Food/FoodCardList";
import { FoodCard } from "../components/Food/FoodCard";
import { Container } from "@/components/Food/Container";

const HomePage = () => {
  return (
    <div className="flex w-[full] flex-col gap-5 items-center justify-center px-5 bg-gray-600 ">
      <Container />
      <FoodCardList />
      <FoodCardList />
      <FoodCardList />
    </div>
  );
};
export default HomePage;
