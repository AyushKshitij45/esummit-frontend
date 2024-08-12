const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 min-h-screen bg-[#1C371E]">
      <div className="relative w-full max-w-lg p-10 rounded-lg shadow-lg bg-gradient-to-r from-[#1C371E]/40 to-[#1C371E]/10 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/60 to-transparent rounded-lg blur-lg"></div>
        <h1 className="relative text-5xl font-extrabold text-white mb-10 z-10">Contact Us</h1>
        <div className="relative space-y-6 z-10">
          <div>
            <span className="text-2xl text-green-400 font-semibold">Sarvagya: </span>
            <span className="text-xl text-gray-200">+91 6200 024970</span>
          </div>
          <div>
            <span className="text-2xl text-green-400 font-semibold">Shivli: </span>
            <span className="text-xl text-gray-200">+91 73660 26200</span>
          </div>
          <div>
            <span className="text-2xl text-green-400 font-semibold">Manshi: </span>
            <span className="text-xl text-gray-200">+91 70590 91072</span>
          </div>
          <div>
            <span className="text-2xl text-green-400 font-semibold">operations.ecell@kiit.ac.in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
