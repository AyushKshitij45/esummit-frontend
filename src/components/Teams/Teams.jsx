import Team_card from "@/components/Team_card/Team_card";
const facultyData = [
  {
    name: "Dr. Saranjit Singh",
    image:
      "/images/Prof.-Saranjit-Singh Vice Chancellor .jpg",
    designation:"Vice Chancellor, KIIT University"
  },
  {
    name: "Dr. Suman Bhattacharya",
    image:
      "/images/director-Suman-Bhattacharya.jpg",
      designation: "Director, KIIT Kareer School"
  },
  {
    name: "Dr. Priyadarshi Biswal",
    image:
      "/images/priyadarshi.jpeg",
      designation: "Dean, KIIT Kareer School"
  },
  {
    name: "Name",
    image:
      "/images/team_img.png",
    designation:"c"
  },
  {
      name: "Name",
      image:
        "/images/team_img.png",
  },
];

const page = () => {
  return (
    <>
      <div className="flex  flex-col items-start justify-center gap-10 p-6 px-10 font-Gilroy-Medium">
        <button className="text-white  border-[1.5px] border-[#8F9D91] [backdrop-filter:blur(17.79px)] shadow-lg [background:linear-gradient(124.26deg,_rgba(255,_255,_255,_0.42),_rgba(255,_255,_255,_0))] rounded-full bg-[#ffffff] p-2 px-6 text-2xl laptop:text-3xl tbLandscape:text-4xl tracking-wider stroke-black stroke-2 ">
          Our Mentors
        </button>
        <div className="flex items-center justify-around gap-16 flex-wrap w-full">
          <Team_card
          name={facultyData[0].name} 
          image={facultyData[0].image}
          designation={facultyData[0].designation}/>
          <Team_card 
          name={facultyData[1].name}
          image={facultyData[1].image}
          designation={facultyData[1].designation}/>
          <Team_card 
          name={facultyData[2].name}
          image={facultyData[2].image}
          designation={facultyData[2].designation}/>

        </div>
      </div>
    </>
  );
};

export default page;
