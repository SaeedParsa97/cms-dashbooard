import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Features = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 mx-[20px] my-0 p-8 rounded-md cursor-pointer shadow-md shadow-black">
        <span className="text-[20px]">Revanue</span>
        <div className="flex items-center my-[10px] mx-0">
          <span className="text-[30px] font-bold">2,415$</span>
          <span className="flex items-center ml-[20px]">
            -11,4
            <ArrowDownwardIcon className="text-[24px] ml-1 text-red-500" />
          </span>
        </div>
        <span className="text-[15px] text-gray-400">
          Compared to last month
        </span>
      </div>
      <div className="flex-1 mx-[20px] my-0 p-8 rounded-md cursor-pointer shadow-md shadow-black">
        <span className="text-[20px]">Sales</span>
        <div className="flex items-center my-[10px] mx-0">
          <span className="text-[30px] font-bold">2,415$</span>
          <span className="flex items-center ml-[20px]">
            -11,4
            <ArrowDownwardIcon className="text-[24px] ml-1 text-red-500" />
          </span>
        </div>
        <span className="text-[15px] text-gray-400">
          Compared to last month
        </span>
      </div>
      <div className="flex-1 mx-[20px] my-0 p-8 rounded-md cursor-pointer shadow-md shadow-black">
        <span className="text-[20px]">Cost</span>
        <div className="flex items-center my-[10px] mx-0">
          <span className="text-[30px] font-bold">2,415$</span>
          <span className="flex items-center ml-[20px]">
            +11,4
            <ArrowUpwardIcon className="text-[24px] ml-1 text-green-500" />
          </span>
        </div>
        <span className="text-[15px] text-gray-400">
          Compared to last month
        </span>
      </div>
    </div>
  );
};

export default Features;
