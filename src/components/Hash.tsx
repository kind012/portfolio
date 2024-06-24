const Hash = () => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <div className="rounded-full border border-white/40 px-3 flex items-center justify-center h-[36.6px]">
        <span className="uppercase text-base font-normal text-[#a29e9a]">
          design
        </span>
      </div>
      <div className="rounded-full border border-white/40 px-3 flex items-center justify-center h-[36.6px]">
        <span className="uppercase text-base font-normal text-[#a29e9a]">
          development
        </span>
      </div>
      <div className="rounded-full px-3 flex items-center justify-center h-[36.6px] bg-[#a29e9a]">
        <span className="uppercase text-base font-normal text-black">2024</span>
      </div>
    </div>
  );
};

export default Hash;
