import styled from 'styled-components';
import CheckoutForm from '../features/checkout/CheckoutForm';
import PaymentSummary from '../features/checkout/PaymentSummary';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export default function CheckoutPage() {
  return (
    <Grid>
      <CheckoutForm />
      <PaymentSummary />
    </Grid>
  );
}
