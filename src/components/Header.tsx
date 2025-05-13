import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}>
          Cinema Booking
        </Link>
        <Nav>
          <Link to="/orders" style={{ color: '#fff', textDecoration: 'none' }}>My Orders</Link>
          <Link to="/checkout" style={{ color: '#fff', textDecoration: 'none' }}>Checkout</Link>
        </Nav>
      </div>
    </HeaderContainer>
  );
}