import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Newsletter from "../components/newsletter/Newsletter";

const HomePage = () => {
  return (
    <>
      <div className="mslider h-[90vh] mt-5 shadow-xl ">
        <Slider />
      </div>
      <div className=" mt-10 ">
        <Categories />
      </div>
      <div className="mt-10">
        <div className="flex justify-center">
          <span className="mx-auto text-2xl font-bold">Products</span>
        </div>
        <Products />
      </div>
      <div className="mt-10">
        <Newsletter />
      </div>
    </>
  );
};

export default HomePage;
