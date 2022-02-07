import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip , Legend} from 'recharts';

export default function Rechart (props) {
    return ( 
        <LineChart width={650} height={250} data={props.rows} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line name={props.name}  dataKey="value"  />
            <Legend verticalAlign="top" height={36}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
            <XAxis dataKey="t" />
            <YAxis />
            <Tooltip />
        </LineChart>
    )
}