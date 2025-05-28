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
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-700 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white text-center">Track Your Order</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
          />
          <button
            onClick={handleSearch}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
          >
            Track
          </button>
        </div>
      </div>

      {searchedOrder && (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-700">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Order Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-xs sm:text-sm">Order ID</p>
                <p className="text-white font-medium text-sm sm:text-base">{searchedOrder.orderId}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-xs sm:text-sm">Order Date</p>
                <p className="text-white font-medium text-sm sm:text-base">{new Date(searchedOrder.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Customer Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-xs sm:text-sm">Name</p>
                <p className="text-white font-medium text-sm sm:text-base">{searchedOrder.customerName}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                <p className="text-white font-medium text-sm sm:text-base">{searchedOrder.email}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                <p className="text-white font-medium text-sm sm:text-base">{searchedOrder.phone}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700 sm:col-span-2">
                <p className="text-gray-400 text-xs sm:text-sm">Address</p>
                <p className="text-white font-medium text-sm sm:text-base">{searchedOrder.address}</p>
              </div>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Order Status</h3>
            <div className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${getStatusColor(searchedOrder.status)}`} />
                <span className="text-white font-medium capitalize text-sm sm:text-base">{getStatusText(searchedOrder.status)}</span>
              </div>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Order Items</h3>
            <div className="space-y-3 sm:space-y-4">
              {searchedOrder.items.map((item: any) => (
                <div key={item.id} className="p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base">{item.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-white font-medium text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <span className="text-lg sm:text-xl font-semibold text-white">Total Amount:</span>
              <span className="text-2xl sm:text-3xl font-bold text-blue-500">${searchedOrder.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
              <span className="text-lg sm:text-xl font-semibold text-white">Payment Status:</span>
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
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
        <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl shadow-2xl border border-gray-700">
          <p className="text-gray-400 text-base sm:text-lg">No order found with the provided ID.</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking; 