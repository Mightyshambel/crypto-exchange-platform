import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

// components
import Box from '../../Common/Box';

// interfaces
interface ISeries {
  series: any;
  options: any;
}

const CandleStick: React.FC = () => {
  const [state, setState] = useState<ISeries | null>(null);

  useEffect(() => {
    // Fetch Bitcoin data from CoinGecko API
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=7'
        );

        // Prepare the data for the chart
        const ohlcData = response.data.map((item: any) => ({
          x: new Date(item[0]),
          y: [item[1], item[2], item[3], item[4]], // Open, High, Low, Close
        }));

        const chartData: ISeries = {
          series: [
            {
              data: ohlcData,
            },
          ],
          options: {
            chart: {
              type: 'candlestick',
              height: 470,
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          },
        };

        setState(chartData);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
       Market History
      </div>
      <div className='box-content box-content-height-nobutton'>
        {state && (
          <ReactApexChart
            height={470}
            type='candlestick'
            series={state.series}
            options={state.options}
          />
        )}
      </div>
    </Box>
  );
};

export default CandleStick;
