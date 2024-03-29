"use client";

import bgImg from "@/assets/bgImg.jpg";
const data = [
  {
    title: "Beef Burger Meal",
    ingredients: "Classic green salad, barrel aged feta chesse, bread",
    price: 50,
  },
  {
    title: "Beef Burger Meal",
    ingredients: "Classic green salad, barrel aged feta chesse, bread",
    price: 50,
  },
  {
    title: "Beef Burger Meal",
    ingredients: "Classic green salad, barrel aged feta chesse, bread",
    price: 50,
  },
  {
    title: "Beef Burger Meal",
    ingredients: "Classic green salad, barrel aged feta chesse, bread",
    price: 50,
  },
  {
    title: "Beef Burger Meal",
    ingredients: "Classic green salad, barrel aged feta chesse, bread",
    price: 50,
  },
  {
    title: "Beef Burger Meal a;lskdjaslkdjasld;asjd;sa",
    ingredients:
      "Classic green salad, barrel aged feta chesse, bread ajdhasdlkasdk;lasdjasklda",
    price: 50,
  },
  {
    title: "Beef Burger Meal",
    ingredients: "Classic green salad, barrel aged feta chesse, bread",
    price: 50,
  },
  {
    title: "Beef Burger Meal",
    ingredients: "Classic green salad, barrel aged feta chesse, bread",
    price: 50,
  },
];

const MenuPage = () => {
  return (
    <div
      className=" gap-7 justify-center items-center text-white bg-cover pt-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImg.src})`,
      }}
    >
      <div className="flex flex-col w-full items-center justify-center gap-7 mb-11">
        <h2 className="font-[JosefinSans] font-semibold italic text-2xl text-[#C9AB81]">
          Special Selection
        </h2>
        <h1 className="font-[CormorantGaramond] text-7xl tracking-wider">
          From Our Menu
        </h1>
        <ul className="flex flex-row gap-40 mt-12 text-xl font-[Poppins]">
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              value="Appetizers"
              className="input-radio"
              id="Appetizers"
              checked
            />

            <label htmlFor="Appetizers">Appetizers</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="mainDish"
              className="input-radio"
            />
            <label htmlFor="mainDish">Main Dish</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="Desert"
              className="input-radio"
            />
            <label htmlFor="Desert">Desert</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="Drinks"
              className="input-radio"
            />
            <label htmlFor="Drinks">Drinks</label>
          </li>
          <li className="text-white p-2">
            <input
              type="radio"
              name="categories"
              id="Cocktails"
              className="input-radio"
            />
            <label htmlFor="Cocktails">Cocktails</label>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-5 w-[80%] mb-24">
          {data.map((item, index) => (
            <>
              <div key={index} className="p-4">
                <div className="flex flex-col">
                  <div className="dish-name flex items-center">
                    <div className="w-[90%] flex items-center gap-3 flex-grow">
                      <h1 className="text-[#C9AB81] text-[1.4rem] font-semibold">
                        {item.title}
                      </h1>
                      <div className=" border border-l-transparent border-r-transparent border-t-[#715B3E] border-b-[#715B3E] py-[2px] flex-grow"></div>
                    </div>
                    <div className="w-[10%] flex justify-center">
                      <p className="text-[#C9AB81] font-semibold text-[1.4rem]">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-[josefin_sans] italic">
                      {item.ingredients}
                    </h1>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
