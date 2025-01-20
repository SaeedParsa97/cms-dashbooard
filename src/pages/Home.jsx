import Features from "../components/Features";
import Charts from "../components/Charts";
import {xAxisData} from "../data";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";



const Home = () => {
  return (
    <div className="flex-4 w-full">
      <Features/>
      <Charts grid title="Month sale" data={xAxisData} dataKey="sale" />
      <div className="flex m-5">
          <WidgetSm />
          <WidgetLg />
      </div>
    </div>
  )
}

export default Home
