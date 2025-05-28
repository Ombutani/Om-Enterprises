import React, { useState } from 'react';
import { useOrder } from '../contexts/OrderContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package, Plus, Trash2 } from 'lucide-react';

interface OrderFormProps {
  onOrderComplete: (orderId: string) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onOrderComplete }) => {
  const { createOrder, updatePaymentStatus } = useOrder();
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    items: [] as Array<{
      id: string;
      name: string;
      quantity: number;
      price: number;
      category: string;
    }>,
    totalAmount: 0
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample products data - you can replace this with your actual products data
  const products = [
    { id: '1', name: 'Industrial CNC Machine', price: 9999.99, category: 'Manufacturing' },
    { id: '2', name: 'Semiconductor Components', price: 499.99, category: 'Technology' },
    { id: '3', name: 'Automotive Engine Parts', price: 2999.99, category: 'Automotive' },
    { id: '4', name: 'MRI Scanner', price: 149999.99, category: 'Healthcare' },
    { id: '5', name: 'Tractor Equipment', price: 4999.99, category: 'Agriculture' },
    { id: '6', name: 'Industrial Chemicals', price: 199.99, category: 'Chemicals' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = (productId: string) => {
    const selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    setFormData(prev => {
      const existingItem = prev.items.find(item => item.id === productId);
      
      if (existingItem) {
        const updatedItems = prev.items.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        
        const totalAmount = updatedItems.reduce(
          (sum, item) => sum + (item.price * item.quantity),
          0
        );

        return {
          ...prev,
          items: updatedItems,
          totalAmount
        };
      }

      const newItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        quantity: 1,
        price: selectedProduct.price,
        category: selectedProduct.category
      };

      const updatedItems = [...prev.items, newItem];
      const totalAmount = updatedItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
      );

      return {
        ...prev,
        items: updatedItems,
        totalAmount
      };
    });
  };

  const handleRemoveProduct = (productId: string) => {
    setFormData(prev => {
      const updatedItems = prev.items.filter(item => item.id !== productId);
      const totalAmount = updatedItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
      );

      return {
        ...prev,
        items: updatedItems,
        totalAmount
      };
    });
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setFormData(prev => {
      const updatedItems = prev.items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      
      const totalAmount = updatedItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
      );

      return {
        ...prev,
        items: updatedItems,
        totalAmount
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const orderId = createOrder(formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      updatePaymentStatus(orderId, 'completed');
      onOrderComplete(orderId);
    } catch (error) {
      console.error('Error processing order:', error);
    } finally {
      setIsProcessing(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="grid gap-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 mb-4">
            <Package className="w-5 h-5 mr-2" />
            <span className="font-medium">Order Details</span>
          </div>
        </div>

        {/* Main Grid Container */}
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8">
          {/* Left Column - Customer Info & Products */}
          <div className="grid gap-8">
            {/* Customer Information Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span>Customer Information</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-300">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="md:col-span-2 grid gap-2">
                  <label className="text-sm font-medium text-gray-300">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="Enter your delivery address"
                  />
                </div>
              </div>
            </div>

            {/* Order Items Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Package className="w-5 h-5 text-blue-400" />
                </div>
                <span>Order Items</span>
              </h2>
              
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-gray-300">Add Products</label>
                  <Select onValueChange={handleAddProduct}>
                    <SelectTrigger className="w-full bg-gray-800/50 border-gray-700/50 text-white rounded-xl py-3">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700/50">
                      {products.map((product) => (
                        <SelectItem 
                          key={product.id} 
                          value={product.id}
                          className="text-white hover:bg-gray-700/50 focus:bg-gray-700/50"
                        >
                          {product.name} - ${product.price.toFixed(2)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4">
                  {formData.items.map(item => (
                    <div key={item.id} className="grid sm:grid-cols-[1fr,auto] gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                      <div className="grid gap-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Package className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-medium text-white truncate">{item.name}</h4>
                            <p className="text-sm text-gray-400">{item.category}</p>
                          </div>
                        </div>
                        <p className="text-blue-400">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="grid grid-cols-[auto,auto,auto] items-center gap-4">
                        <div className="grid grid-cols-[auto,auto,auto] items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700/50 text-white hover:bg-gray-600/50 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700/50 text-white hover:bg-gray-600/50 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(item.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment & Total */}
          <div className="grid gap-8">
            {/* Payment Method Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700/50">
              <h2 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span>Payment Method</span>
              </h2>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-4">
                  <label className={`grid grid-cols-[auto,1fr] items-center p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'card' 
                      ? 'bg-blue-500/10 border-blue-500/50' 
                      : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/30'
                  }`}>
                    <input
                      type="radio"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="mr-3"
                    />
                    <span className="text-white">Credit/Debit Card</span>
                  </label>
                  <label className={`grid grid-cols-[auto,1fr] items-center p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'upi' 
                      ? 'bg-blue-500/10 border-blue-500/50' 
                      : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/30'
                  }`}>
                    <input
                      type="radio"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="mr-3"
                    />
                    <span className="text-white">UPI</span>
                  </label>
                  <label className={`grid grid-cols-[auto,1fr] items-center p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'cod' 
                      ? 'bg-blue-500/10 border-blue-500/50' 
                      : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/30'
                  }`}>
                    <input
                      type="radio"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mr-3"
                    />
                    <span className="text-white">Cash on Delivery</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <input
                    type="text"
                    placeholder="Enter UPI ID"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  />
                )}
              </div>
            </div>

            {/* Total and Submit Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700/50">
              <div className="grid gap-6">
                <div className="grid gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">${formData.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-white">Free</span>
                  </div>
                  <div className="border-t border-gray-700/50 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-white">Total</span>
                      <span className="text-2xl font-bold text-blue-400">${formData.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || formData.items.length === 0}
                  className={`w-full py-4 px-6 rounded-xl text-white font-medium text-lg transition-all ${
                    isProcessing || formData.items.length === 0
                      ? 'bg-gray-600/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);

};

export default OrderForm; 