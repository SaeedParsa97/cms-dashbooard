import { transactions } from "../data";

const WidgetLg = () => {

    const Approved = {style:'text-[#3bb077] bg-[#e5faf2]', content: 'Approved'};
    const Declined = {style: 'text-[#d95087] bg-[#fff0f1]', content: 'Declined'};
    const Pending = {style: 'text-[#2a7ade] bg-[#ebf1fe]', content: 'Pending'};

    const Button = ({type})=>{
        return <button className={`py-1 px-2 border-none rounded-md bg-slate-100 text-sm w-32 ${type.style}`}>{type.content}</button>
    }

  return (
    <div className="flex-1 p-5 shadow-md shadow-black w-3/4">
        <h3 className="font-[600] text-lg">Latest Transactions</h3>
        <table className="w-full border-spacing-5">
            <tr>
                <th className="text-left text-sm">Customer</th>
                <th className="text-left text-sm">Date</th>
                <th className="text-left text-sm">Amount</th>
                <th className="text-left text-sm">Status</th>
            </tr>
            
            {transactions.map((el)=>{
                return (
                    <tr>
                        <td className="flex items-center">
                            <img src="images/profile.jpg" className="w-10 h-10 rounded-full object-cover m-3" />
                            <span className="text-sm">{el.customer}</span>
                        </td>
                        <td className="font-[300] text-sm">
                            {el.date}
                        </td>
                        <td className="font-[300] text-sm">
                            ${el.amount}
                        </td>
                        <td>
                            <Button type={
                                el.status=== 'Approved' ? Approved :
                                el.status=== 'Declined' ? Declined :
                                Pending

                            }/>
                        </td>
                    </tr>
                );
            })}

        </table>
      
    </div>
  )
}

export default WidgetLg
