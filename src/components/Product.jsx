import { Link } from "react-router-dom";
import Charts from './Charts';
import { productsData } from "../data";
import PublishIcon from "@mui/icons-material/Publish"

const Product = () => {
  return (
    <div className="flex-4 p-5 w-full">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Product</h1>
        <Link to="/newProduct">
          <button className="w-20 p-1 cursor-pointer text-white
          text-lg rounded-md bg-teal-600">Create</button>
        </Link>
      </div>

      <div className="flex">

        <div className="flex-1">
          <Charts 
          title="Sale Per Month" 
          data={productsData}
          dataKey="sales"/>
        </div>

        <div className="flex-1 p-5 m-5 shadow-md shadow-black">
          <div className="flex items-center">
            <img src="/images/hp.jpg" className="w-10 h-10 rounded-full mr-5"/>
            <span className="font-bold">Dell Laptop</span>
          </div>

          <div className="mt-8">
            <div className="flex justify-between w-44">
              <div className="font-[600]">ID: </div>
              <div className="font-[300]">132</div>
            </div>
            <div className="flex justify-between w-44">
              <div className="font-[600]">Name: </div>
              <div className="font-[300]">Acer Laptop</div>
            </div>
            <div className="flex justify-between w-44">
              <div className="font-[600]">Sales: </div>
              <div className="font-[300]">$90000</div>
            </div>
            <div className="flex justify-between w-44">
              <div className="font-[600]">Active: </div>
              <div className="font-[300]">Yes</div>
            </div>
            <div className="flex justify-between w-44">
              <div className="font-[600]">In Stock: </div>
              <div className="font-[300]">No</div>
            </div>

          </div>
        </div>
      </div>

      <div className="p-5 m-5 shadow-md shadow-black rounded-md">
          <form className="flex justify-between">
            <div className="flex flex-col">
              <label className="mb-4 text-gray-400">Product Name</label>
              <input type="text"  placeholder="Dell Laptop"  className="mb-2 p-1 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"/>

              <label className="mb-2 text-gray-400">In Stock</label>
              <select id="inStock" className="mb-3 border-2 rounded-md border-gray-400 focus:outline-blue-500">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label className="mb-2 text-gray-400">Active</label>
              <select id="active" className="mb-3 border-2 rounded-md border-gray-400 focus:outline-blue-500">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="flex flex-col justify-around">
              <div className="flex items-center">
                <img src="/images/lenevo.jpg" alt="" className="w-24 h-24 rounded-md"/>
                <label >
                    <PublishIcon/>
                </label>
                <input type="file" className="hidden" />
              </div>
              <button className="p-1 rounded-md bg-blue-950 text-white font-bold text-sm cursor-pointer">Upload (Edit)</button>
            </div>

          </form>
      </div>

    </div>
  )
}

export default Product
