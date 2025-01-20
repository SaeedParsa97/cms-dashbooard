import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../data';

const WidgetSm = () => {
  return (
    <div className="flex-2 p-5 mr-5 shadow-md shadow-black w-1/4">
      <span className='text-lg font-[600]'>New Join Members</span>
      <ul className='m-0 p-0'>

        {newMembers.map((user)=>{
            return (
            <li key={user.id} className='flex justify-between items-center my-5 mx-0'>
                <img src={user.img} className="w-10 h-10 rounded-full object-cover" />
                <div className=" flex flex-col">
                    <span className='font-[600] text-sm'>{user.username}</span>
                    <span className='font-[300] text-sm'>{user.title}</span>
                </div>
                <button className='flex items-center border-none rounded-md py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer'>
                    <VisibilityIcon className='text-[16px]' />
                </button>
            </li>
        )
        })}


      </ul>
    </div>
  )
}

export default WidgetSm
