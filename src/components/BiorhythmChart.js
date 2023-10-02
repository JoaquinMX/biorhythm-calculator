import React from 'react';
import dayjs from 'dayjs';
import {
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    ReferenceLine,
    CartesianGrid
} from 'recharts';
import {calculateBiorhythmSeries} from '../calculations';
import './BiorhythmChart.css';


function formatDate(isoStringDate) {
    return dayjs(isoStringDate).format("DD MMM");
}

const BiorhythmChart = ({birthDate, targetDate}) => {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
        .map( (item) => ({...item, date: formatDate(item.date)}))
  return (
    <ResponsiveContainer className='biorhythm-chart' width="100%" height={200}>
        <LineChart data={data}>
            <XAxis dataKey="date"
                ticks={[data[3].date, data[15].date, data[27].date]}/>
            <CartesianGrid vertical={false} strokeDasharray="3 3"/>
            <ReferenceLine x={data[15].date}/>
            <Line className='physical' type="natural" dot={false} dataKey='physical' />
            <Line className='emotional' type="natural" dot={false} dataKey='emotional' />
            <Line className='intellectual' type="natural" dot={false} dataKey='intellectual' />
        </LineChart>
    </ResponsiveContainer>
  )
}

export default BiorhythmChart