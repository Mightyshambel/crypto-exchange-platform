import axios from 'axios';
import { useState, useEffect } from 'react';
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import {
  faArrowUpRightFromSquare,
  faQrcode,
  faHistory,
  faWallet,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
const styles = {
  container: {
    padding: '16px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#121212',
    color: 'white',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  balance: { fontSize: '32px', fontWeight: 'bold' },
  actionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '8px',
    margin: '24px 0',
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '12px',
  },
  actionIcon: {
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '75%',
    border: '2px solid #4c00b0',
  },
  card: {
    backgroundColor: '#eff5ff',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '16px',
    boxShadow: '0 4px 6px -1px rgb(209 213 219 / 0.5)',
  },
  tabContainer: { display: 'flex', gap: '8px', marginBottom: '16px' },
  tabButton: {
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: '#EBF4FA',
    fontSize: '14px',
  },
  marketItem: {
    backgroundColor: '#eff5ff',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
const actionButtons = [
  { icon: <FontAwesomeIcon icon={faArrowUpRightFromSquare} />, label: 'Send' },
  { icon: <FontAwesomeIcon icon={faQrcode} />, label: 'Scan' },
  { icon: <FontAwesomeIcon icon={faHistory} />, label: 'History' },
  { icon: <FontAwesomeIcon icon={faWallet} />, label: 'Earn' },
  { icon: <FontAwesomeIcon icon={faEllipsisV} />, label: 'More' },
];

const marketData = [
  { name: 'ALON', price: '$0.011024', change: '+5.49%', color: 'green', volume: '$3.93M' },
  { name: 'BID', price: '$0.093811', change: '-17.6%', color: 'red', volume: '$549.41K' },
  { name: 'BUZZ', price: '$0.08486', change: '+1.04%', color: 'green', volume: '$13.38M' },
];

const WalletScreen: React.FC = () => {
  const [, setData] = useState<ICryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <SiteLayout>
      <Header icon='sort' title='User' />
      <h1>Total Balance</h1>
      <div style={styles.header}>
        <h1>0$</h1>
        <button className='button button-purple button-small'>Receive</button>
      </div>
      <div style={styles.actionGrid}>
        {actionButtons.map((btn, index) => (
          <div key={index} style={styles.actionItem as React.CSSProperties}>
            <div style={styles.actionIcon}>{btn.icon}</div>
            <span>{btn.label}</span>
          </div>
        ))}
      </div>
      {/* Add Funds Section */}
      <div style={styles.card as React.CSSProperties}>
        <p className='m-10'>Add the first assets to your Wallet</p>
        <button className='button button-purple button-small marginTop-10'>Add Funds</button>
      </div>

      {/* Markets Section */}
      <h3>Markets</h3>
      <div style={styles.tabContainer}>
        {['Favorites', 'Alpha', 'Trump', 'CTO', 'Hot', 'Musk'].map((tab, i) => (
          <button key={i} style={styles.tabButton}>
            {tab}
          </button>
        ))}
      </div>

      {/* Market List */}
      {marketData.map((market, index) => (
        <div key={index} style={styles.marketItem}>
          <div>
            <h4>{market.name}</h4>
            <p style={{ color: '#BBB' }}>{market.volume}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <p style={{ textAlign: 'right' }}>{market.price}</p>
            <button
              className='button button-purple button-small'
              style={{
                backgroundColor: market.change.startsWith('+') ? 'green' : 'red',
                color: 'white',
              }}
            >
              {market.change}
            </button>
          </div>
        </div>
      ))}
      <div>
        <h1>Earn</h1>
        <div></div>
      </div>
    </SiteLayout>
  );
};

export default WalletScreen;
