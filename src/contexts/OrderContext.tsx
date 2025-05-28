import React, { createContext, useContext, useState, useEffect } from 'react';

interface Order {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  paymentStatus: 'pending' | 'completed';
  createdAt: Date;
}

interface OrderContextType {
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'orderId' | 'status' | 'paymentStatus' | 'createdAt'>) => string;
  getOrder: (orderId: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  updatePaymentStatus: (orderId: string, status: Order['paymentStatus']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Load orders from localStorage on mount
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    // Save orders to localStorage whenever they change
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };

  const createOrder = (orderData: Omit<Order, 'orderId' | 'status' | 'paymentStatus' | 'createdAt'>) => {
    const orderId = generateOrderId();
    const newOrder: Order = {
      ...orderData,
      orderId,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: new Date(),
    };
    setOrders((prev) => [...prev, newOrder]);
    return orderId;
  };

  const getOrder = (orderId: string) => {
    return orders.find((order) => order.orderId === orderId);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.orderId === orderId ? { ...order, status } : order
      )
    );
  };

  const updatePaymentStatus = (orderId: string, status: Order['paymentStatus']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.orderId === orderId ? { ...order, paymentStatus: status } : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrder,
        updateOrderStatus,
        updatePaymentStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}; 