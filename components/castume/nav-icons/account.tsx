import { UserRound } from "lucide-react";

const Account = () => {
  return (
    <div className="group flex flex-row items-center lg:space-x-2">
      <span className="flex cursor-pointer items-center justify-center">
        <UserRound
          size={24}
          className="text-gray-700 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#c82d8c]"
        />
      </span>

      <div className="hidden flex-col items-start xl:flex">
        <span className="cursor-pointer text-xs font-medium text-gray-800 group-hover:text-[#c82d8c]">
          My Account
        </span>
        <span className="cursor-pointer text-xs text-gray-600 group-hover:text-[#c82d8c]">
          fazisb456
        </span>
      </div>
    </div>
  );
};

export default Account;
