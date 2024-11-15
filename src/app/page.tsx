import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Main container with max-width and centering */}
      <div className="relative w-full overflow-hidden bg-opacity-70 bg-cover bg-center  z-0" style={{ backgroundImage: "url('/bg_house.jpg')" }}>
        {/* Overlay div to add opacity to background image */}
        <div className="absolute inset-0 w-full h-full bg-zinc-50  bg-opacity-80 -z-50"></div>

        {/* Content container with max-width and centered */}
        <div className="w-[100%] h-[100%] lg:flex relative z-20 ">
          {/* Left div */}
          <div className=" mt-[10vh] w-[100%] h-full lg:w-[50%]">
            <h1 className="w-[100%] h-15 text-blue-900 font-extrabold text-center text-4xl md:text-6xl">Governor Sindh</h1>
            <h1 className="mt-1 w-[100%] h-15 text-blue-900 text-center text-2xl md:text-5xl lg:w-[100%]">Kamran Khan Tessori</h1>
            <p className="mt-5 w-[100%] h-15 text-sky-400 text-center font-bold text-2xl lg:text-4xl">
              Certified Cloud Applied Generative AI Engineer (Gen Eng)
            </p>
            <p className="mt-5 w-[100%] h-15 text-blue-900 font-bold text-center text-2xl">Earn up to $5,000 / month</p>
            <p className="mt-5 w-[100%] h-15 text-blue-900 text-center font-extrabold text-2xl lg:w-[100%]">
              Now admissions are open in Hyderabad
            </p>

            <section className="md:flex mt-5 m-5 gap-10">
              <button className="w-[100%] h-[10vh] bg-blue-900 text-white text-lg rounded md:ml-5 md:mt-5 lg:w-[100%]">APPLY NOW</button>
              <p className="text-blue-900 w-[100%] py-5 text-center">
                <span className=" w-[100%] h-[10vh] space-x-3  text-blue-900 font-extrabold text-2xl">562,143</span>
                <br /> Accepted Applications
              </p>
            </section>
          </div>

          {/* Right div */}
          <div className="w-[100%] lg:h-full lg:w-[55%]">
            <Image
              src="/governer.png"
              alt="Governor Pic"
              width={500}
              height={500}
              className="w-[100%] lg:ml-40 lg:h-auto lg-70 object-cover mt-10"
            />
          </div>
        </div>

        
      </div>

      <div>
         <h1 className="px-3 py-10 w-[100%] h-30 text-blue-900 text-xl lg:3xl font-bold text-center bg-zinc-50">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
         </h1>
         <p className="px-3 py-5 w-[100%] h-50 bg-zinc-50 text-center text-gray-700 text-md md:text-lg lg:text-xl lg:font-semibold">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.

</p>

<div className="w-[100%] h-[100vh] lg:h-[100vh] bg-zinc-50 ">
      <div className="p-10 w-[100%] gap-5 h-[80vh] lg:h-[60vh] md:h-[45vh] md:flex md:w-[100%] ">
        <img src="/earn_as_you_learn.jpg" className="mt-3 w-[100%] h-[30vh] md:w-[50%] shadow-lg lg:h-[60vh] rounded-lg"></img>
        <img src="/automation.jpg" className="mt-3 w-[100%] h-[30vh] md:w-[50%] md:[h-40vh] lg:h-[60vh] h-30 shadow-lg rounded-lg"></img>
      </div>
      <div className="w-[100%] h-[100vh] md:h-[55vh] mr-3 mt-5 p-10 gap-5 md:flex bg-zinc-50">
             <img src="/genomics.jpg" className="mt-3 w-[100%] h-[25vh] md:w-[31%] md:h-[40vh]   shadow-lg rounded-lg"></img>
             <img src="prog-basics.jpg" className="mt-3 w-[100%] h-[25vh] md:w-[31%] md:h-[40vh] shadow-lg rounded-lg"></img>
             <img src="metaverse.jpg" className="mt-3  w-[100%] h-[25vh] md:w-[31%] md:h-[40vh]  shadow-lg rounded-lg"></img>
      </div>
    </div>
        </div>


    </>
  );
}
