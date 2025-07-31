import { Headset } from "lucide-react";

const Help = () => {
  return (
    <div className="group flex flex-row items-center gap-2">
      <a
        href="tel:+97143487362"
        className="flex cursor-pointer items-center justify-center gap-2 group-hover:text-[#c82d8c]"
        aria-label="Call +97143487362 for help"
      >
        <Headset
          size={24}
          className="text-gray-700 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#c82d8c]"
        />
        <div className="hidden flex-col items-start xl:flex">
          <span className="cursor-pointer text-xs font-medium text-gray-800 group-hover:text-[#c82d8c]">
            Need Help?
          </span>
          <span
            className="cursor-pointer text-xs text-gray-600 group-hover:text-[#c82d8c]"
            aria-label="Call +97143487362 for help"
          >
            +97143487362
          </span>
        </div>
      </a>
    </div>
  );
};
export default Help;
