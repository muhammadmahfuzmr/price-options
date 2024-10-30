import Feature from "../Feature/Feature";

const PriceOption = ({ priceOption }) => {
  const { name, price, features } = priceOption;
  return (
    <div className="bg-blue-600 hover:bg-blue-900 rounded-xl p-4 text-white flex flex-col ">
      <h2 className="text-center mb-2">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-3xl font-bold">/month</span>
      </h2>
      <p className="text-center text-3xl font-medium mb-5">{name}</p>

     <div className="flex-grow"> {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}</div>
      <button className="text-center  w-full bg-green-500 p-2 rounded-md hover:bg-green-700 mt-4 font-medium text-xl">Buy Now</button>
      
    </div>
  );
};

export default PriceOption;
