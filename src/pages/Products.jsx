import { useState } from "react";
import { products } from "../data";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const Products = () => {

  const [productDatas, setProductData] = useState(products);

  const productDelete = (id)=>{
    setProductData(productDatas.filter(product => product.id != id))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field : 'product',
      headerName: 'Name',
      width: 200,
      renderCell: (params) =>{
        return (
          <>
          <Link to={`/product/${params.row.id}`}>
            <div className="flex items-center">
                <img src={params.row.avatar} className="w-8 h-8 rounded-[50%] mr-[10px] object-cover" />
                {params.row.title}
            </div>
          </Link>
          </>
        )
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width:120
    },
    {
      field: 'action',
      headerName: 'Action',
      width:150,
      renderCell: (params)=>{
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="rounded-md px-2 py-1 text-[#fff] bg-[#3bb077] mr-5 cursor-pointer text-sm">
                Edit
              </button>
            </Link>  
            <DeleteOutlineIcon 
            className="text-red-600 cursor-pointer"
            onClick={() =>productDelete(params.row.id)}
            />
          </>
        )
      }
    },

  ]

  

  return (
    <div className="flex-4 w-full m-5">
      <DataGrid
        rows = {productDatas}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={3}
        checkboxSelection
      />
    </div>
  )
}

export default Products
