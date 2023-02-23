import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CompanyDatasetData, CompanyDatasetDataData } from './types';

type CompanyHistoryDataProps = {
  companyHistoryData: CompanyDatasetData;
};

type ChartItemProps = {
  name: string;
  Close: number;
};

const Chart = ({ companyHistoryData }: CompanyHistoryDataProps) => {
  const chartData = companyHistoryData?.data
    ?.map(
      (item: CompanyDatasetDataData): ChartItemProps => ({
        name: item[0],
        Close: item[4],
      }),
    )
    .reverse();

  const rowsWithCloseData = chartData.filter(item => item.Close !== undefined);
  if (rowsWithCloseData.length === 0) return <>There is no Close data for this company.</>
  return (
    <div className='chart-wrapper'>
      <LineChart
        width={1000}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='Close' stroke='#82ca9d' />
      </LineChart>
    </div>
  );
};

export default Chart;
