import React, { useEffect, useMemo, useState } from 'react';
import { Minus, Plus, ReceiptText, ShoppingBag, Trash2, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { buildWhatsAppUrl } from '../config/whatsapp';
import { supabase } from '../services/supabaseClient';
import { buildInvoice, buildInvoiceMessage, toSupabaseOrderPayload } from '../utils/invoice';
import { formatPKR } from '../utils/money';

export const CartDrawer = () => {
  const { clearCart, closeCart, isCartOpen, itemCount, items, removeItem, subtotal, updateQuantity } = useCart();
  const { isAuthenticated, openAuth, user } = useAuth();
  const [invoice, setInvoice] = useState(null);
  const [isSaving, setSaving] = useState(false);
  const [saveNote, setSaveNote] = useState('');

  useEffect(() => {
    setInvoice(null);
    setSaveNote('');
  }, [items]);

  const whatsappUrl = useMemo(() => {
    if (!invoice) return '';

    return buildWhatsAppUrl(buildInvoiceMessage(invoice));
  }, [invoice]);

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      openAuth();
      return;
    }

    const nextInvoice = buildInvoice({ items, user });
    setInvoice(nextInvoice);
    setSaving(true);
    setSaveNote('');

    try {
      if (supabase) {
        const { error } = await supabase.from('orders').insert(toSupabaseOrderPayload(nextInvoice));
        if (error) throw error;
        setSaveNote('Invoice saved. Send it on WhatsApp to finish payment.');
      } else {
        setSaveNote('Invoice ready. Connect Supabase to save orders in your dashboard.');
      }
    } catch (error) {
      setSaveNote(`Invoice ready. Supabase order save needs setup: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className={`drawer-backdrop ${isCartOpen ? 'open' : ''}`} onClick={closeCart} role="presentation" />
      <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`} aria-hidden={!isCartOpen} aria-label="Shopping cart">
        <div className="cart-head">
          <div>
            <span className="modal-kicker">
              <ShoppingBag size={16} />
              Your cart
            </span>
            <h2>{itemCount ? `${itemCount} product${itemCount === 1 ? '' : 's'}` : 'Cart is empty'}</h2>
          </div>
          <button className="icon-button" type="button" onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart-body">
          {!items.length && (
            <div className="empty-cart">
              <ShoppingBag size={34} />
              <h3>Your shelf is waiting.</h3>
              <p>Add your favorite soaps and checkout with a WhatsApp invoice.</p>
            </div>
          )}

          {items.map((item) => (
            <article className="cart-line" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-line-info">
                <h3>{item.name}</h3>
                <p>{formatPKR(item.price)}</p>
                <div className="quantity-stepper">
                  <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name}`}>
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name}`}>
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="cart-line-total">
                <strong>{formatPKR(item.price * item.quantity)}</strong>
                <button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                  <Trash2 size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {!!items.length && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div>
                <span>Subtotal</span>
                <strong>{formatPKR(subtotal)}</strong>
              </div>
              <div>
                <span>Delivery</span>
                <strong>{itemCount >= 3 ? 'Free' : 'Confirm on WhatsApp'}</strong>
              </div>
            </div>

            {!isAuthenticated && (
              <div className="notice">
                Please sign in before checkout so your invoice can be connected to your account.
              </div>
            )}

            {invoice && (
              <div className="invoice-preview">
                <div className="invoice-title">
                  <ReceiptText size={18} />
                  <strong>{invoice.invoiceNo}</strong>
                </div>
                <p>
                  {invoice.itemCount} products, subtotal {formatPKR(invoice.subtotal)}. {invoice.deliveryNote}
                </p>
              </div>
            )}

            {saveNote && <div className="notice">{saveNote}</div>}

            <div className="cart-actions">
              <button className="btn-outline" type="button" onClick={clearCart}>
                Clear
              </button>
              <button className="btn-primary" type="button" onClick={handleCheckout} disabled={isSaving}>
                {isSaving ? 'Generating...' : invoice ? 'Regenerate invoice' : isAuthenticated ? 'Generate invoice' : 'Sign in'}
              </button>
            </div>

            {invoice && (
              <a className="btn-whatsapp full-width" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Send invoice on WhatsApp
              </a>
            )}
          </div>
        )}
      </aside>
    </>
  );
};
