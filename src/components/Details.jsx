import delivery from "../../public/assets/images/section2.jpg";
import benefitLogo from "../../public/assets/images/vegetables.png";
const benefits = [
  {
    id: "1",
    title: "Quality",
    description:
      "Sourcing the highest quality products from trusted suppliers.",
  },
  {
    id: "2",
    title: "Convenience",
    description:
      "Shop for groceries anytime, anywhere, with just a few taps on your smartphone.",
  },
  {
    id: "3",
    title: "Satisfaction",
    description:
      "Your satisfaction is our top priority, our friendly customer support team is here to help.",
  },
];
const Details = () => {
  const renderBenefits = () => (
    <div>
      {benefits.map((item, idx) => (
        <div
          className={`flex font-mont rounded-xl mt-2 p-2 ${
            idx % 2 == 0 ? "bg-pale-green" : "bg-dark-green text-white"
          }`}
          key={idx}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <div className="flex-col">
            <div className="font-semibold">{item.title}</div>
            <div className="text-xs">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="py-8 bg-white">
      <div className="flex-col content-center justify-center items-center pl-4">
        <div className="flex items-center">
          <div className="mr-2">
            <div className="flex text-6xl text-dark-green font-display">
              Who we are & What we do
            </div>
            <div className="mt-2 font-mont text-xs">
              At FreshMart, we are passionate about revolutionizing the way you
              shop for groceries. Founded with a vision to make grocery shopping
              convenient, efficient, and enjoyable, we strive to provide you
              with a seamless and hassle-free shopping experience.
            </div>
            {renderBenefits()}
          </div>
          <div>
            <img src={delivery} alt="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
