import OrderHistoryList from '../features/orders/OrderHistoryList';
import { useOrdersStore } from '../store/ordersStore';

export default function OrdersPage() {
  const orders = useOrdersStore((s) => s.orders);
  return <OrderHistoryList orders={orders} />;
}
