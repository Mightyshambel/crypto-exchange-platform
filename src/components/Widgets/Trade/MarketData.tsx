interface ICryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

interface IProps {
  item: ICryptoData;
}

const MarketData: React.FC<IProps> = ({ item }) => (
  <tr>
    <td className='center'>
      <div className='icon cover' style={{ backgroundImage: `url('${item.image}')` }} />
      <strong>{item.name}</strong>
    </td>
    <td className='center'>${item.current_price.toFixed(2)}</td>
    <td className={`center ${item.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
      {item.price_change_percentage_24h.toFixed(2)}%
    </td>
    <td className='center'>${item.total_volume.toLocaleString()}</td>
    <td className='center'>${item.market_cap.toLocaleString()}</td>
    <td className='center'>
      <button className='button button-purple button-small'>Trade</button>
    </td>
  </tr>
);

export default MarketData;
