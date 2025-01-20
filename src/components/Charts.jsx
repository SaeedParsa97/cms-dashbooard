
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

const Charts = ({title, data, dataKey, grid}) => {
  return (
    <div className='m-5 p-5 shadow-md shadow-black rounded-md'>
      <h3 className='mb-5 font-serif font-bold'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="6"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts
