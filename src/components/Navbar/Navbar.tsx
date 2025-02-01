import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarButton from './NavbarButton';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsiveness with a media query
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  const navbarInnerStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    padding: '20px',
  };

  const navbarMenuStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  };

  const navbarOthersStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    marginTop: '20px',
  };
  const menuHeadingStyles = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const logoStyles = {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    objectFit: 'cover' as const,
  };

  const navbarButtonListStyles = {
    paddingLeft: '0',
    marginLeft: '0',
    marginTop: '10',
    listStyleType: 'none',
  };

  const copyrightStyles = {
    textAlign: 'center' as const,
    marginTop: '20px',
  };

  const othersHeading = <h3 style={menuHeadingStyles}>Others</h3>;

  return (
    <nav style={navbarInnerStyles} className='no-select'>
      {/* Logo (visible only on desktop) */}
      {!isMobile && (
        <div className='logo center'>
          <Link to='/market'>
            <img
              style={logoStyles}
              draggable='false'
              alt='Crypto Exchange'
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
            />
          </Link>
        </div>
      )}

      {/* Menu */}
      <div className='navbar-menu' style={navbarMenuStyles}>
        {!isMobile && <h3 style={menuHeadingStyles}>Menu</h3>}
        <ul style={navbarButtonListStyles}>
          <li>
            <NavbarButton url='/dashboard' icon='dashboard' title='Withdraw-Deposit' />
          </li>
          <li>
            <NavbarButton url='/wallet' icon='account_balance_wallet' title='My Wallet' />
          </li>
          <li>
            <NavbarButton url='/transactions' icon='sync' title='Transaction' />
          </li>
          <li>
            <NavbarButton url='/trade' icon='paid' title='Trade' />
          </li>
          <li>
            <NavbarButton url='/trail' icon='account_balance' title='Trail' />
          </li>
          <li>
            <NavbarButton url='/capital' icon='equalizer' title='Capital' />
          </li>
        </ul>
      </div>

      {/* Others (visible only on desktop) */}
      {!isMobile && (
        <div className='navbar-others' style={navbarOthersStyles}>
          {othersHeading}
          <ul style={navbarButtonListStyles}>
            <li>
              <NavbarButton url='/members' icon='account_circle' title='Profile' />
            </li>
            <li>
              <NavbarButton url='/contacts' icon='contacts' title='People' />
            </li>
            <li>
              <NavbarButton url='/messages' icon='chat' title='Message' />
            </li>
            <li>
              <NavbarButton url='/settings' icon='settings' title='Settings' />
            </li>
          </ul>
          <div style={copyrightStyles}>
            <strong>Crypto Exchange</strong>
            <p>
              2025 &copy; Jasail Tech.
              <br />
              Made with <span>❤</span> by Jasail
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
