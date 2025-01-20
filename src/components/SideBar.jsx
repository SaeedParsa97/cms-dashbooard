import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

import { NavLink } from "react-router-dom";

const activeLink = ({isActive})=>isActive? "text-red-500" : "";
// const activeLink = ({isActive})=>isActive? "":"";

const SideBar = () => {
  return (
    <div className="flex h-full bg-slate-50 sticky top-[50px]">
      <div className="p-6 text-gray-400">
        <div className="mb-[10px]">
          <h3 className="text-[13px] text-slate-300">Dashboard</h3>
          <ul className="p-1">
            <NavLink to="/" className={activeLink}>
              <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
                <LineStyleIcon className="mr-[5px] text-[10px]" />
                Home
              </li>
            </NavLink>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
            <TimelineIcon className="mr-[5px] text-[10px]" />
            Analiytics
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
            <TrendingUpIcon className="mr-[5px] text-[10px]" />
            Sales
            </li>
            
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-[13px] text-slate-300">Quick Menu</h3>
          <ul className="p-1">
            <NavLink to="/users" className={activeLink}>
              <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
                <PermIdentityIcon className="mr-[5px] text-[10px]" />
                Users
              </li>
            </NavLink>
            <NavLink to="/newUser" className={activeLink}>
              <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
                <PermIdentityIcon className="mr-[5px] text-[10px]" />
                New User
              </li>
            </NavLink>
            <NavLink to="/products" className={activeLink}>
              <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
                <StorefrontIcon className="mr-[5px] text-[10px]" />
                Products
              </li>
            </NavLink>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <AttachMoneyIcon className="mr-[5px] text-[10px]" />
              Transaction
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <BarChartIcon className="mr-[5px] text-[10px]" />
              Reports
            </li>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-[13px] text-slate-300">Notifications</h3>
          <ul className="p-1">
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <MailOutlineIcon className="mr-[5px] text-[10px]" />
              Mail
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <DynamicFeedIcon className="mr-[5px] text-[10px]" />
              Feedback
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <ChatBubbleOutlineIcon className="mr-[5px] text-[10px]" />
              Message
            </li>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-[13px] text-slate-300">Mange</h3>
          <ul className="p-1">
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <WorkOutlineIcon className="mr-[5px] text-[10px]" />
              Mange
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <TimelineIcon className="mr-[5px] text-[10px]" />
              Analytics
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-[10px] hover:bg-blue-100">
              <ReportIcon className="mr-[5px] text-[10px]" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
