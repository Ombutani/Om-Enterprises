import React, { useState } from 'react';
import { useOrder } from '../contexts/OrderContext';

const OrderTracking: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [searchedOrder, setSearchedOrder] = useState<any>(null);
  const { getOrder } = useOrder();

  const handleSearch = () => {
    const order = getOrder(orderId);
    setSearchedOrder(order);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500';
      case 'processing':
        return 'bg-blue-500';
      case 'shipped':
        return 'bg-purple-500';
      case 'delivered':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Order Placed';
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Track Your Order</h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            onClick={handleSearch}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Track
          </button>
        </div>
      </div>

      {searchedOrder && (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Order Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">Order ID</p>
                <p className="text-white font-medium">{searchedOrder.orderId}</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">Order Date</p>
                <p className="text-white font-medium">{new Date(searchedOrder.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">Name</p>
                <p className="text-white font-medium">{searchedOrder.customerName}</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">{searchedOrder.email}</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">{searchedOrder.phone}</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 md:col-span-2">
                <p className="text-gray-400 text-sm">Address</p>
                <p className="text-white font-medium">{searchedOrder.address}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Order Status</h3>
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${getStatusColor(searchedOrder.status)}`} />
                <span className="text-white font-medium capitalize">{getStatusText(searchedOrder.status)}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Order Items</h3>
            <div className="space-y-4">
              {searchedOrder.items.map((item: any) => (
                <div key={item.id} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-gray-400 text-sm">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-white">Total Amount:</span>
              <span className="text-3xl font-bold text-blue-500">${searchedOrder.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-white">Payment Status:</span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                searchedOrder.paymentStatus === 'completed'
                  ? 'bg-green-500/20 text-green-500'
                  : 'bg-yellow-500/20 text-yellow-500'
              }`}>
                {searchedOrder.paymentStatus === 'completed' ? 'Paid' : 'Pending'}
              </span>
            </div>
          </div>
        </div>
      )}

      {!searchedOrder && orderId && (
        <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700">
          <p className="text-gray-400 text-lg">No order found with the provided ID.</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking; 