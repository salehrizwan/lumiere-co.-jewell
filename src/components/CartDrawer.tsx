import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    houseNumber: ''
  });

  const deliveryCharges = 200;
  const finalTotal = cartTotal > 0 ? cartTotal + deliveryCharges : 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    let orderDetails = `*New Order from LUMIÈRE CO. JEWELL*\n\n`;
    orderDetails += `*Customer Details:*\n`;
    orderDetails += `Name: ${formData.name}\n`;
    orderDetails += `Phone: ${formData.phone}\n`;
    orderDetails += `Country: ${formData.country}\n`;
    orderDetails += `City: ${formData.city}\n`;
    orderDetails += `House Number: ${formData.houseNumber}\n`;
    orderDetails += `Address: ${formData.address}\n\n`;
    
    orderDetails += `*Order Items:*\n`;
    cartItems.forEach(item => {
      orderDetails += `- ${item.name} x${item.quantity} (Rs. ${item.price.toLocaleString()})\n`;
    });
    
    orderDetails += `\nSubtotal: Rs. ${cartTotal.toLocaleString()}`;
    orderDetails += `\nDelivery Charges: Rs. ${deliveryCharges.toLocaleString()}`;
    orderDetails += `\n*Total: Rs. ${finalTotal.toLocaleString()}*`;

    const encodedMessage = encodeURIComponent(orderDetails);
    window.open(`https://wa.me/923328232083?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-brand-border/30">
              <h2 className="font-serif text-2xl text-brand-text flex items-center gap-2">
                <ShoppingBag size={24} />
                {isCheckout ? 'Checkout' : 'Your Cart'}
              </h2>
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  setTimeout(() => setIsCheckout(false), 300);
                }} 
                className="text-brand-muted hover:text-brand-text transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {!isCheckout ? (
                cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-brand-muted space-y-4">
                    <ShoppingBag size={48} className="opacity-20" />
                    <p>Your cart is currently empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="text-brand-accent uppercase text-xs tracking-widest font-medium border-b border-brand-accent pb-1"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b border-brand-border/20 pb-6">
                        <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover" />
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-brand-text leading-tight">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-brand-muted hover:text-brand-text"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-brand-muted text-sm mb-4">Rs. {item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-4 mt-auto">
                            <div className="flex items-center border border-brand-border/50">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-brand-text hover:bg-brand-secondary transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-brand-text hover:bg-brand-secondary transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent bg-transparent" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent bg-transparent" placeholder="0300 1234567" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Country</label>
                    <input required type="text" name="country" value={formData.country} onChange={handleInputChange} className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent bg-transparent" placeholder="Pakistan" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-muted mb-1">City</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent bg-transparent" placeholder="Lahore" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-muted mb-1">House/Apartment Number</label>
                    <input required type="text" name="houseNumber" value={formData.houseNumber} onChange={handleInputChange} className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent bg-transparent" placeholder="House 123, Street 4" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Full Address</label>
                    <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full border-b border-brand-border py-2 focus:outline-none focus:border-brand-accent bg-transparent" placeholder="Gulberg III, Lahore" />
                  </div>
                </form>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-brand-border/30 bg-brand-primary">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-brand-muted">
                    <span>Subtotal</span>
                    <span>Rs. {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-brand-muted">
                    <span>Delivery Charges</span>
                    <span>Rs. {deliveryCharges.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-serif text-brand-text pt-2 border-t border-brand-border/20">
                    <span>Total</span>
                    <span>Rs. {finalTotal.toLocaleString()}</span>
                  </div>
                </div>
                
                {!isCheckout ? (
                  <button 
                    onClick={() => setIsCheckout(true)}
                    className="w-full bg-brand-text text-white py-4 uppercase text-sm tracking-widest font-medium hover:bg-brand-accent transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setIsCheckout(false)}
                      className="w-1/3 border border-brand-text text-brand-text py-4 uppercase text-sm tracking-widest font-medium hover:bg-brand-secondary transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      form="checkout-form"
                      className="flex-1 bg-brand-text text-white py-4 uppercase text-sm tracking-widest font-medium hover:bg-brand-accent transition-colors"
                    >
                      Confirm Order
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
