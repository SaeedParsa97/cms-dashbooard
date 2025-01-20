import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const TopBar = () => {
  return (
    <div className="w-full h-[50px] bg-white sticky top-0 z-999 p-4">
      <div className="h-full px-0 py-5 flex justify-between items-center mx-1">
        <div>
          <span className="font-bold text-[30px] cursor-pointer text-blue-800">
            Techno Life
          </span>
        </div>
        <div className="flex items-center ">
          <div className="relative cursor-pointer mr-3 text-gray-500">
            <NotificationsIcon />
            <span className="w-4 h-4 absolute -top-1 right-0 bg-red-600 text-white flex items-center justify-center text-[10px] rounded-full">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-3 text-gray-500">
            <LanguageIcon />
            <span className="w-4 h-4 absolute -top-1 right-0 bg-red-600 text-white flex items-center justify-center text-[10px] rounded-full">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-3 text-gray-500">
            <SettingsIcon />
          </div>
          <img
            src="/images/profile.jpg"
            alt="user"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
