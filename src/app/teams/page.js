import Team_card from "@/components/Team_card/Team_card";
const page = () => {
  return (
    <>
      <div className="flex  flex-col items-start justify-center gap-10 p-6 px-10 font-Gilroy-ExtraBold bg-[#1C371E]">
        <button className="text-red  border-[1.5px] border-[#8F9D91] [backdrop-filter:blur(17.79px)] shadow-lg [background:linear-gradient(124.26deg,_rgba(255,_255,_255,_0.42),_rgba(255,_255,_255,_0))] rounded-full bg-[#ffffff] p-2 px-6 text-2xl laptop:text-3xl tbLandscape:text-4xl tracking-wider stroke-black stroke-2 ">
          Our Teams
        </button>
        <div className="flex items-center justify-around gap-16 flex-wrap w-full">
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
          <Team_card />
        </div>
      </div>
    </>
  );
};


export default page;

