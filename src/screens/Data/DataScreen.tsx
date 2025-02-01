// import React, { useState } from 'react';

// // Dummy data for demonstration
// const marketOverviewData = {
//   marketCap: '1,200,000,000 USD',
//   volume: '100,000,000 USD',
//   change: 4.5, // 24-hour percentage change
// };

// const assetPricesData = [
//   { asset: 'Bitcoin', price: 45000, change: 2.3 },
//   { asset: 'Ethereum', price: 3200, change: -1.5 },
//   { asset: 'Ripple', price: 1.2, change: 0.8 },
// ];

// const orderBookData = [
//   { type: 'Buy', price: 44950, volume: 3.5 },
//   { type: 'Sell', price: 45010, volume: 2.0 },
//   { type: 'Buy', price: 44800, volume: 1.2 },
// ];

// const tradeHistoryData = [
//   { asset: 'Bitcoin', action: 'Buy', price: 44000, volume: 0.5, time: '2025-02-01 10:00' },
//   { asset: 'Ethereum', action: 'Sell', price: 3150, volume: 1.0, time: '2025-02-01 11:30' },
//   { asset: 'Bitcoin', action: 'Sell', price: 44500, volume: 0.8, time: '2025-02-01 12:45' },
// ];

// const DataPage: React.FC = () => {
//   const [selectedAsset, setSelectedAsset] = useState('Bitcoin');
//   const [tradeHistory, setTradeHistory] = useState(tradeHistoryData);

//   const styles = {
//     container: {
//       padding: '16px',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       backgroundColor: 'white',
//       color: 'black',
//       minHeight: '100vh',
//       boxSizing: 'border-box',
//     },
//     section: {
//       marginBottom: '24px',
//     },
//     heading: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       marginBottom: '16px',
//     },
//     marketOverview: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       gap: '16px',
//       flexWrap: 'wrap',
//       backgroundColor: '#f4f4f4',
//       padding: '16px',
//       borderRadius: '8px',
//     },
//     marketInfoCard: {
//       padding: '16px',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       width: 'calc(33% - 16px)',
//       boxSizing: 'border-box',
//     },
//     assetList: {
//       display: 'grid',
//       gap: '16px',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Responsive grid
//     },
//     assetCard: {
//       backgroundColor: '#f4f4f4',
//       padding: '16px',
//       borderRadius: '8px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     },
//     assetTitle: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//     },
//     assetPrice: {
//       fontSize: '16px',
//       margin: '8px 0',
//     },
//     priceChange: {
//       fontSize: '14px',
//       color: '#4CAF50', // Green for positive changes
//     },
//     orderBook: {
//       backgroundColor: '#fff',
//       padding: '16px',
//       borderRadius: '8px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     },
//     orderBookHeader: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       marginBottom: '8px',
//     },
//     orderBookTable: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       marginBottom: '16px',
//     },
//     orderBookCell: {
//       padding: '8px',
//       borderBottom: '1px solid #ccc',
//     },
//     tradeHistoryTable: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       marginTop: '16px',
//     },
//     tableHeader: {
//       backgroundColor: '#333',
//       color: '#fff',
//       padding: '12px',
//       fontWeight: 'bold',
//       textAlign: 'left',
//     },
//     tableCell: {
//       padding: '12px',
//       borderBottom: '1px solid #ccc',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <section style={styles.section}>
//         <h2 style={styles.heading}>Market Overview</h2>
//         <div style={styles.marketOverview}>
//           <div style={styles.marketInfoCard}>
//             <h3>Market Cap</h3>
//             <p>{marketOverviewData.marketCap}</p>
//           </div>
//           <div style={styles.marketInfoCard}>
//             <h3>Volume</h3>
//             <p>{marketOverviewData.volume}</p>
//           </div>
//           <div style={styles.marketInfoCard}>
//             <h3>24H Change</h3>
//             <p style={styles.priceChange}>{marketOverviewData.change}%</p>
//           </div>
//         </div>
//       </section>

//       <section style={styles.section}>
//         <h2 style={styles.heading}>Asset Prices</h2>
//         <div style={styles.assetList}>
//           {assetPricesData.map((asset) => (
//             <div key={asset.asset} style={styles.assetCard}>
//               <h3 style={styles.assetTitle}>{asset.asset}</h3>
//               <p style={styles.assetPrice}>${asset.price}</p>
//               <p style={styles.priceChange}>{asset.change > 0 ? `+${asset.change}%` : `${asset.change}%`}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section style={styles.section}>
//         <h2 style={styles.heading}>Order Book</h2>
//         <div style={styles.orderBook}>
//           <h3 style={styles.orderBookHeader}>Buy Orders</h3>
//           <table style={styles.orderBookTable}>
//             <thead>
//               <tr>
//                 <th style={styles.tableHeader}>Price</th>
//                 <th style={styles.tableHeader}>Volume</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orderBookData.filter((order) => order.type === 'Buy').map((order, index) => (
//                 <tr key={index}>
//                   <td style={styles.orderBookCell}>{order.price}</td>
//                   <td style={styles.orderBookCell}>{order.volume}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h3 style={styles.orderBookHeader}>Sell Orders</h3>
//           <table style={styles.orderBookTable}>
//             <thead>
//               <tr>
//                 <th style={styles.tableHeader}>Price</th>
//                 <th style={styles.tableHeader}>Volume</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orderBookData.filter((order) => order.type === 'Sell').map((order, index) => (
//                 <tr key={index}>
//                   <td style={styles.orderBookCell}>{order.price}</td>
//                   <td style={styles.orderBookCell}>{order.volume}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       <section style={styles.section}>
//         <h2 style={styles.heading}>Trade History</h2>
//         <table style={styles.tradeHistoryTable}>
//           <thead>
//             <tr>
//               <th style={styles.tableHeader}>Asset</th>
//               <th style={styles.tableHeader}>Action</th>
//               <th style={styles.tableHeader}>Price</th>
//               <th style={styles.tableHeader}>Volume</th>
//               <th style={styles.tableHeader}>Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tradeHistory.map((history) => (
//               <tr key={history.time}>
//                 <td style={styles.tableCell}>{history.asset}</td>
//                 <td style={styles.tableCell}>{history.action}</td>
//                 <td style={styles.tableCell}>{history.price}</td>
//                 <td style={styles.tableCell}>{history.volume}</td>
//                 <td style={styles.tableCell}>{history.time}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default DataPage;
