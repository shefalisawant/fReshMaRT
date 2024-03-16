import bg from "../../public/assets/images/bg2.jpg";
const features = [
  {
    id: "1",
    highlightText: "5+",
    title: "Years Experience",
  },
  {
    id: "2",
    highlightText: "100+",
    title: "Young Riders",
  },
  {
    id: "3",
    highlightText: "10K",
    title: "Regular Customers",
  },
];

const Achievements = () => {
  return (
    <div className="px-4 py-8">
      <div className="flex-col content-center justify-center items-center">
        <div className="flex">
          <div className="flex text-5xl text-dark-green font-display">
            We Always Provide You The Best In Town
          </div>
          <div className="mt-2 text-center font-mont px-4">
            We prioritize quality and freshness in every product we deliver,
            ensuring your complete satisfaction.
          </div>
        </div>
      </div>
      <div
        className="w-full mt-2 h-138 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="flex mt-2 justify-between items-center">
        <div>
          <button className="text-white text-sm font-semibold bg-dark-green px-4 py-2 rounded-full font-mont hover:font-bold">
            Partner with Us
          </button>
        </div>
        <div className="flex justify-between font-mont text-2xl border-y-2 border-dark-green px-2">
          {features.map((item) => (
            <div className="p-2" key={item?.id}>
              <div className="text-dark-green font-display text-3xl font-semibold mr-1">
                {item?.highlightText}
              </div>
              <div>{item?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Achievements;
