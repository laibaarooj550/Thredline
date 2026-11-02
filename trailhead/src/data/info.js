import { FREE_SHIPPING_THRESHOLD, FLAT_SHIPPING } from '../lib/pricing'

// Static pages linked from the footer. Copy is placeholder text for this demo store.
export const INFO_PAGES = {
  help: {
    title: 'Help Center',
    body: [
      'Find answers about orders, sizing, shipping and returns. For order-specific questions, use Order Status with your order number.',
      'Still need help? Email hello@trailhead.example and our team will get back to you.',
    ],
    action: { label: 'Check Order Status', to: '/account' },
  },
  shipping: {
    title: 'Shipping',
    body: [
      `Orders of $${FREE_SHIPPING_THRESHOLD} or more ship free. Smaller orders have a flat $${FLAT_SHIPPING.toFixed(2)} shipping fee.`,
      'Orders placed before 2pm ship the same business day. Delivery times are shown at checkout. Tents, stoves and fuel are shipped in separate packages where required.',
    ],
    action: { label: 'Go to Bag', to: '/cart' },
  },
  returns: {
    title: 'Returns & Exchanges',
    body: [
      'Placeholder policy for this demo: unused gear in its original packaging can be returned within 30 days for a refund to the original payment method. Final-sale items cannot be returned.',
      'For hygiene reasons, sleeping bags, pads, pillows, and footwear that have been used outdoors cannot be returned.',
      'To start a return, email hello@trailhead.example with your order number.',
    ],
  },
  'size-guide': {
    title: 'Sizing Guide',
    body: [
      'Apparel: XS fits chest 32–34 in, S 35–37 in, M 38–40 in, L 41–43 in, XL 44–46 in. If you fall between sizes, we suggest sizing up for layering over other clothes.',
      'Boots and shoes: Sizes run US men\u2019s/women\u2019s 7 to 11. Measure your foot from heel to toe in centimetres and compare with the size chart on each product page. Try boots on with the socks you hike in.',
      'Gear with One Size (tents, packs, stoves and so on) lists its dimensions and capacity on the product page.',
    ],
  },
  about: {
    title: 'About Trailhead',
    body: [
      'Trailhead is a demo outfitter: tents, sleep systems, cooking kit and everyday essentials for camping and hiking, chosen for reliability and tested on real trips. This is sample content for a demonstration site.',
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
