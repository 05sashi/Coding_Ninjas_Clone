const Page3 = () => {
  return (
    <div className="h-[550px]  bg-slate-50 ">
      <div className="flex flex-col items-center justify-center">
        <div className=" flex flex-row items-center gap-36  mt-24 ml-72">
          <h1 className="text-xl font-bold text-black ">
            Our Ninjas at top tech companies
          </h1>
          <button className="flex gap-3 text-[#ED710A] hover:text-[#ef9e5c] font-bold">
            <img src="/icons/download.png" className=" h-4 mt-1" alt="" />{" "}
            Download placement report
          </button>
        </div>

        <div className="flex items-center bg-slate-50 rounded-xl justify-center h-60 w-[990px] gap-7">
          <div className="h-44 w-36 bg-white rounded-xl flex flex-col items-center">
            <img
              src="/icons/ruchika_citi_bank-32691.png"
              className="h-16 mt-2"
              alt=""
            />
            <img src="/icons/citibank.png" className="h-28 mt-[-23px]" alt="" />
            <span className="text-sm text-neutral-500 mt-[-29px]">
              Non-CS/IT
            </span>
          </div>
          <div className="h-44 w-36 bg-white rounded-xl flex flex-col items-center">
            <img
              src="/icons/tanmay_media-32697.png"
              className="h-16 mt-2"
              alt=""
            />
            <img
              src="/icons/microsoft.png"
              className="h-28 mt-[-23px]"
              alt=""
            />
            <span className="text-sm text-neutral-500 mt-[-29px]">
              Non-CS/IT
            </span>
          </div>
          <div className="h-44 w-36 bg-white rounded-xl flex flex-col items-center">
            <img
              src="/icons/sonu_uber-32695.png"
              className="h-16 mt-2"
              alt=""
            />
            <img src="/icons/uber.png" className="h-28 mt-[-23px]" alt="" />
            <span className="text-sm text-neutral-500 mt-[-29px]">
              Non-CS/IT
            </span>
          </div>
          <div className="h-44 w-36 bg-white rounded-xl flex flex-col items-center">
            <img
              src="/icons/naveen_optum-32719.png"
              className="h-16 mt-2"
              alt=""
            />
            <img src="/icons/optum.png" className="h-28 mt-[-23px]" alt="" />
            <span className="text-sm text-neutral-500 mt-[-29px]">
              Non-CS/IT
            </span>
          </div>
          <div className="h-44 w-36 bg-white rounded-xl flex flex-col items-center">
            <img
              src="/icons/kashish_google-32687.png"
              className="h-16 mt-2"
              alt=""
            />
            <img
              src="/icons/media-net.png"
              className="h-28 mt-[-23px]"
              alt=""
            />
            <span className="text-sm text-neutral-500 mt-[-29px]">
              Non-CS/IT
            </span>
          </div>
          <div className="h-44 w-36 bg-white rounded-xl flex flex-col items-center">
            <img
              src="/icons/pradeep_persistent-32689.png"
              className="h-16 mt-2"
              alt=""
            />
            <img
              src="/icons/persistent.png"
              className="h-28 mt-[-23px]"
              alt=""
            />
            <span className="text-sm text-neutral-500 mt-[-29px]">
              Non-CS/IT
            </span>
          </div>
        </div>
      </div>
      <img src="/icons/frame.webp" className="mt-16" alt="" />
    </div>
  );
};

export default Page3;
