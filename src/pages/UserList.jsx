import { useState } from "react";
import { userRow } from "../data";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const UserList = () => {

  const [userDatas, setUserData] = useState(userRow);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field : 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) =>{
        return (
          <>
          <Link to={`/user/${params.row.id}`}>
            <div className="flex items-center">
                <img src={params.row.avatar} className="w-8 h-8 rounded-[50%] mr-[10px] object-cover" />
                {params.row.username}
            </div>
          </Link>
          </>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width:120
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width:160
    },
    {
      field: 'action',
      headerName: 'Action',
      width:150,
      renderCell: (params)=>{
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="rounded-md px-2 py-1 text-[#fff] bg-[#3bb077] mr-5 cursor-pointer text-sm">
                Edit
              </button>
            </Link>  
            <DeleteOutlineIcon 
            className="text-red-600 cursor-pointer"
            onClick={() =>userDelete(params.row.id)}
            />
          </>
        )
      }
    },

  ]

  const userDelete = (id)=>{
    setUserData(userDatas.filter(user => user.id != id))
  }

  return (
    <div className="flex-4 w-full m-5">
      <DataGrid
        rows = {userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
      />
    </div>
  )
}

export default UserList
