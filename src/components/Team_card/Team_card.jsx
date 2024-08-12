import "./style.css";
import Image from "next/image";

const Team_card = ({ name, image, designation }) => {
  return (
    <div className="nft rounded-lg [backdrop-filter:blur(17.79px)] shadow-lg [background:linear-gradient(124.26deg,_rgba(255,_255,_255,_0.42),_rgba(255,_255,_255,_0))] border-[1.5px] border-[#8F9D91] flex flex-col items-center justify-between p-4">
      <div className="w-full mb-4">
        <Image
          className="tokenImage w-full h-48 object-cover rounded-t-lg"
          src={image}
          alt="Faculty Image"
          width={100}
          height={100}
        />
      </div>
      <h2 className="text-xl mbXSmall:text-xl tbLandscape:text-xl text-center text-white font-bold">
        {name}
      </h2>
      <div className="description text-m mbXSmall:text-l tbLandscape:text-l text-white text-center">
        {designation}
      </div>
    </div>
  );
};

export default Team_card;
