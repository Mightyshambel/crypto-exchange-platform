import React, { useState } from 'react';
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

// Dummy data for demonstration
const activePositionsData = [
  {
    id: 1,
    asset: 'Bitcoin',
    buyPrice: 1000,
    currentPrice: 1200,
    trailingStop: 1100,
    profitLoss: 200,
  },
  {
    id: 2,
    asset: 'Ethereum',
    buyPrice: 1500,
    currentPrice: 1400,
    trailingStop: 1300,
    profitLoss: -100,
  },
  {
    id: 3,
    asset: 'XRP',
    buyPrice: 1500,
    currentPrice: 1400,
    trailingStop: 1300,
    profitLoss: -100,
  },
];

const tradeHistoryData = [
  { id: 1, asset: 'Bitcoin', action: 'Buy', price: 1000, volume: 2, time: '2025-02-01 10:00' },
  { id: 2, asset: 'Ethereum', action: 'Sell', price: 1300, volume: 5, time: '2025-02-01 12:30' },
  { id: 3, asset: 'Bitcoin', action: 'Sell', price: 1200, volume: 2, time: '2025-02-01 14:00' },
];

const TrailScreen: React.FC = () => {
  const [activePositions, setActivePositions] = useState(activePositionsData);
  const [tradeHistory] = useState(tradeHistoryData);

  const updateTrailingStop = (positionId: number, newStop: number) => {
    setActivePositions((prevPositions) =>
      prevPositions.map((pos) => (pos.id === positionId ? { ...pos, trailingStop: newStop } : pos))
    );
  };

  const styles = {
    container: {
      padding: '16px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: 'white',
      color: 'black',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    section: {
      marginBottom: '24px',
    },
    heading: {
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    positionsList: {
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Responsive grid
    },
    positionItem: {
      backgroundColor: '#f4f4f4',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    positionTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    positionText: {
      margin: '8px 0',
    },
    button: {
      backgroundColor: '#4c00b0',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginTop: '8px',
    },
    tradeHistoryTable: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    trailingStopControl: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center',
    },
    label: {
      fontSize: '16px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #4c00b0',
      backgroundColor: '#f4f4f4',
      color: '#333',
      width: '100%',
      maxWidth: '250px', // Make the input responsive
    },
    trailingButton: {
      backgroundColor: '#4c00b0',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };
  return (
    <SiteLayout>
      <Header icon='sort' title='User' />
      <div
        style={{
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fff',
          color: '#333',
          minHeight: '100vh',
          boxSizing: 'border-box' as const,
        }}
      >
        <section style={styles.section}>
          <p style={styles.heading}>Active Positions</p>
          <div style={styles.positionsList}>
            {activePositions.map((position) => (
              <div key={position.id} style={styles.positionItem}>
                <h3 style={styles.positionTitle}>{position.asset}</h3>
                <p style={styles.positionText}>Buy Price: ${position.buyPrice}</p>
                <p style={styles.positionText}>Current Price: ${position.currentPrice}</p>
                <p style={styles.positionText}>Trailing Stop: ${position.trailingStop}</p>
                <p style={styles.positionText}>Profit/Loss: ${position.profitLoss}</p>
                <button
                  style={styles.button}
                  onClick={() => updateTrailingStop(position.id, position.trailingStop + 50)}
                >
                  Adjust Trailing Stop (+$50)
                </button>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Trade History</h2>
          <table className='data-table mt-10'>
            <thead>
              <tr>
                <th className='center'>Asset</th>
                <th className='center'>Action</th>
                <th className='center'>Price</th>
                <th className='center'>Volume</th>
                <th className='center'>Time</th>
              </tr>
            </thead>
            <tbody>
              {tradeHistory.map((history) => (
                <tr key={history.id}>
                  <td className='center'>{history.asset}</td>
                  <td className='center'>{history.action}</td>
                  <td className='center'>{history.price}</td>
                  <td className='center'>{history.volume}</td>
                  <td className='center'>{history.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Trailing Stop Control</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <label htmlFor='trail-percentage' style={styles.label}>
              Set Trailing Stop Percentage:
            </label>
            <input
              id='trail-percentage'
              type='number'
              defaultValue={5}
              min='1'
              max='20'
              style={styles.input}
            />
            <button style={styles.trailingButton}>Set Trailing Stop</button>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default TrailScreen;
