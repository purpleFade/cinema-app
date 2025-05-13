import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 16px;
  text-align: center;
  margin-top: auto;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Cinema Booking
    </FooterContainer>
  );
}
