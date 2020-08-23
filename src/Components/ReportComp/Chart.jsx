import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
    {name: '2020-01-2', uv: 19365, pv: 2400, amt: 2400,},
    {name: '2020-01-9', uv: 14524, pv: 1398, amt: 2210,},
    {name: '2020-01-23', uv: -9760, pv: 9800, amt: 2290,},
    {name: '2020-01-30', uv: 987, pv: 3908, amt: 2000,},
    {name: '2020-02-06', uv: 3682, pv: 4800, amt: 2181,},
    {name: '2020-02-11', uv: 24206, pv: 3800, amt: 2500,},

];

const gradientOffset = () => {
    const dataMax = Math.max(...data.map(i => i.uv));
    const dataMin = Math.min(...data.map(i => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class Example extends PureComponent {

    render() {
        return (
            <div className="right">
                <AreaChart
                    width={1100}
                    height={600}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="green" stopOpacity={1} />
                            <stop offset={off} stopColor="red" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </div>

        );
    }
}
