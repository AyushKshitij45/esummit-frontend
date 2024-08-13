import Image from "next/image";

const Footer = () => {
  const iconsSrc = [
    "/icons/linkedin.png",
    "/icons/instagram.png",
  ];

  const socials=[
    "https://www.linkedin.com/company/kiit-e-cell",
    "https://www.instagram.com/ecell_kiit/",
  ]
  return (
    <div className="text-[0.4rem] mbXSmall:text-[0.5rem] mbSmall:text-xs mbMedium:text-sm laptop:text-base tbMedium:text-xl tbLandscape:text-2xl bg-footer-bg bg-cover bg-center h-[40vh] mbSmall:h-[50vh] w-screen max-w-full flex items-center justify-around p-6 px-1 mbSmall:px-3 mbMedium:px-8 laptop:px-10 tbPortrait:px-16 text-white font-Plus-Jakarta-Sans">
      <div className="flex flex-col items-start justify-evenly mbSmall:justify-around w-1/3 h-full">
        <div className="flex items-center justify-center gap-3 ">
          <Image src="/icons/mail.png" alt="" width={20} height={20} />
          <h1 className="font-semibold">Get in Touch</h1>
        </div>
        <div className="">
          <h1 className="font-semibold">Marketing & Partnership:</h1>
          <div><a href="mailto:pcr.ecell@kiit.ac.in"             target="_blank"
            rel="noopener noreferrer">pcr.ecell@kiit.ac.in</a></div>
        </div>
        <div className="">
          <h1 className="font-semibold">Resources:</h1>
          <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSdrDnQBwt-BUoJ-bdWgjKNpjXiSmxwauTGN2-wdRIzcR8R8qw/viewform"             target="_blank"
            rel="noopener noreferrer">Campus Ambassador</a></div>
          {/* <div><a href="">Campus Ambassador</a></div> */}
        </div>
        <div className="">
          <Image
            src="/icons/Ecell_logo.png"
            alt=""
            width={80}
            height={80}
            className="w-[3.5rem] h-[1.7rem] mbXSmall:w-[4rem] mbXSmall:h-[2rem] mbSmall:w-[4.5rem] mbSmall:h-[2.3rem] mbMedium:w-[5rem] mbMedium:h-[2.6rem]  laptop:w-[6rem] laptop:h-[2.8rem] tbMedium:w-[7rem] tbMedium:h-[3.5rem] tbLandscape:w-[9rem] tbLandscape:h-[4.5rem]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly mbSmall:justify-around w-1/3 h-full">
        <h1 className="font-semibold">Socials</h1>
        <div className="flex items-center justify-around w-full  cursor-pointer">
          {iconsSrc.map((icon, i) => (
            <a
            key={i}
            href={socials[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[0.8rem] h-[0.8rem] mbXSmall:w-[1rem] mbXSmall:h-[1rem] mbSmall:w-[1.5rem] mbSmall:h-[1.5rem] mbMedium:w-[2rem] mbMedium:h-[2rem] laptop:w-[2.5rem] laptop:h-[2.5rem] tbMedium:w-[3rem] tbMedium:h-[3rem] tbLandscape:w-[4rem] tbLandscape:h-[4rem]"
          >
            <Image
              key={i}
              src={icon}
              alt="img"
              width={40}
              height={40}
              className="w-[0.8rem] h-[0.8rem] mbXSmall:w-[1rem] mbXSmall:h-[1rem] mbSmall:w-[1.5rem] mbSmall:h-[1.5rem] mbMedium:w-[2rem] mbMedium:h-[2rem]  laptop:w-[2.5rem] laptop:h-[2.5rem] tbMedium:w-[3rem] tbMedium:h-[3rem] tbLandscape:w-[4rem] tbLandscape:h-[4rem]"
            />
            </a>
          ))}
        </div>
        <div className="">
          <Image
            src="/images/Esummit_logo.png"
            alt=""
            width={170}
            height={170}
            className="w-[5.5rem] h-[1.6rem] mbXSmall:w-[7rem] mbXSmall:h-[2rem] mbSmall:w-[9rem] mbSmall:h-[2.4rem] mbMedium:w-[10.5rem] mbMedium:h-[2.7rem]  laptop:w-[11rem] laptop:h-[3rem] tbMedium:w-[13rem] tbMedium:h-[3.5rem] tbLandscape:w-[15rem] tbLandscape:h-[4rem]"
          />
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col items-end justify-evenly mbSmall:justify-around">
        <h1 className="font-semibold">Quick Links</h1>
        <div className="flex flex-col items-end justify-around w-full">
          <h1 className="font-semibold">Event Location:</h1>
          <div>KIIT University, Patia,</div>
          <div>Bhubaneswar, Odisha 751024</div>
        </div>
        <div className="">
          <Image
            src="/images/KIIT_logo.png"
            alt=""
            width={90}
            height={90}
            className="w-[2.5rem] h-[1.5rem] mbXSmall:w-[3.5rem] mbXSmall:h-[2.2rem] mbSmall:w-[4.8rem] mbSmall:h-[3.3rem] mbMedium:w-[5.5rem] mbMedium:h-[3.7rem]  laptop:w-[6rem] laptop:h-[4rem] tbMedium:w-[7rem] tbMedium:h-[5rem] tbLandscape:w-[8rem] tbLandscape:h-[6rem] object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
