import { formatPKR } from './money';

const createInvoiceNumber = () => {
  const stamp = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();

  return `HM-${stamp}-${suffix}`;
};

const getCustomerName = (user) => {
  const metadataName = user?.user_metadata?.name?.trim();
  if (metadataName) return metadataName;

  return user?.email?.split('@')[0] || 'Customer';
};

export const buildInvoice = ({ items, user }) => {
  const invoiceNo = createInvoiceNumber();
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeDelivery = quantity >= 3;

  return {
    invoiceNo,
    createdAt: new Date().toISOString(),
    customer: {
      id: user?.id || null,
      email: user?.email || '',
      name: getCustomerName(user),
      phone: user?.user_metadata?.phone || '',
    },
    items: items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      lineTotal: item.price * item.quantity,
    })),
    itemCount: quantity,
    subtotal,
    total: subtotal,
    deliveryLabel: freeDelivery ? 'Free delivery' : 'Delivery to confirm',
    deliveryNote: freeDelivery
      ? 'Free delivery promotion applied for 3 or more soaps.'
      : 'Delivery charges will be confirmed on WhatsApp.',
  };
};

export const buildInvoiceMessage = (invoice) => {
  const itemLines = invoice.items
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} - Qty ${item.quantity} x ${formatPKR(item.price)} = ${formatPKR(
          item.lineTotal,
        )}`,
    )
    .join('\n');

  return [
    'Hello H & Mia, I want to confirm this cart order for payment.',
    '',
    `Invoice: ${invoice.invoiceNo}`,
    `Customer: ${invoice.customer.name}`,
    invoice.customer.email ? `Email: ${invoice.customer.email}` : '',
    invoice.customer.phone ? `Phone: ${invoice.customer.phone}` : '',
    '',
    'Selected items:',
    itemLines,
    '',
    `Total products: ${invoice.itemCount}`,
    `Subtotal: ${formatPKR(invoice.subtotal)}`,
    `Delivery: ${invoice.deliveryLabel}`,
    `Payable now: ${formatPKR(invoice.total)}`,
    '',
    invoice.deliveryNote,
    'Please share payment details and confirm delivery.',
  ]
    .filter(Boolean)
    .join('\n');
};

export const toSupabaseOrderPayload = (invoice) => ({
  invoice_no: invoice.invoiceNo,
  user_id: invoice.customer.id,
  customer_name: invoice.customer.name,
  customer_email: invoice.customer.email,
  customer_phone: invoice.customer.phone,
  items: invoice.items,
  item_count: invoice.itemCount,
  subtotal: invoice.subtotal,
  total: invoice.total,
  delivery_note: invoice.deliveryNote,
  status: 'whatsapp_pending',
  whatsapp_message: buildInvoiceMessage(invoice),
});
