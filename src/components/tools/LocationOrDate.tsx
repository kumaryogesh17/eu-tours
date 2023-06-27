import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import type { SelectionType } from "src/types/types";

const LocationOrDate = ({
  choose,
  location,
  date,
}: {
  choose: SelectionType;
  location?: string;
  date?: string;
}): JSX.Element => {
  return (
    <div className="flex items-center space-x-4 sm:w-fit">
      {choose === "Location" ? (
        <SlLocationPin className="text-lg text-green-600 sm:text-2xl xl:text-3xl" />
      ) : (
        <MdOutlineCalendarMonth className="text-lg text-green-600 sm:text-2xl xl:text-3xl" />
      )}
      <div className="hoverEffect cursor-pointer">
        <p className="space-x-2">
          <span>{choose}</span>
          <IoIosArrowDown className="hoverEffect inline text-secondary" />
        </p>
        <p className="text-white">{choose === "Location" ? location : date}</p>
      </div>
    </div>
  );
};

export default LocationOrDate;
