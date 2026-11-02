import { FREE_SHIPPING_THRESHOLD, FLAT_SHIPPING } from '../lib/pricing'

// Static pages linked from the footer. Copy is placeholder text for this demo store.
export const INFO_PAGES = {
  help: {
    title: 'Help Center',
    body: [
      'Find answers about orders, sizing, shipping and returns. For order-specific questions, use Order Status with your order number.',
      'Still need help? Email hello@threadline.example and our team will get back to you.',
    ],
    action: { label: 'Check Order Status', to: '/account' },
  },
  shipping: {
    title: 'Shipping',
    body: [
      `Orders of $${FREE_SHIPPING_THRESHOLD} or more ship free. Smaller orders have a flat $${FLAT_SHIPPING.toFixed(2)} shipping fee.`,
      'Orders placed before 2pm ship the same business day. Delivery times are shown at checkout.',
    ],
    action: { label: 'Go to Bag', to: '/cart' },
  },
  returns: {
    title: 'Returns & Exchanges',
    body: [
      'Placeholder policy for this demo: unworn items with tags can be returned within 30 days for a refund to the original payment method. Final-sale items cannot be returned.',
      'To start a return, email hello@threadline.example with your order number.',
    ],
  },
  'size-guide': {
    title: 'Size Guide',
    body: [
      'Clothing: XS fits bust 32–34 in, S 35–37 in, M 38–40 in, L 41–43 in, XL 44–46 in. If you fall between sizes, we suggest sizing up for a relaxed fit.',
      'Shoes: Sizes run US men\u2019s/women\u2019s 7 to 11. Measure your foot from heel to toe in centimetres and compare with the size chart on each product page.',
    ],
  },
  about: {
    title: 'About Threadline',
    body: [
      'Threadline is a demo clothing store: everyday essentials in natural fabrics, designed to fit well and last. This is sample content for a demonstration site.',
    ],
  },
  careers: {
    title: 'Careers',
    body: ['There are no open positions at this demo store.'],
  },
  stores: {
    title: 'Find a Store',
    body: ['This demo store has no physical locations to show.'],
  },
  'gift-cards': {
    title: 'Gift Cards',
    body: ['Gift cards are not available in this demo store yet.'],
  },
}
