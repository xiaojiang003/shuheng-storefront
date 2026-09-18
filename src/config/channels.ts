import type { QuoteChannel } from '@/types/quote';

export const CHANNELS = {
  primary: 'whatsapp' as QuoteChannel,
  whatsapp: {
    number: '8613800138000',
    label: 'WhatsApp',
  },
  email: {
    address: 'sales@shuheng-headwear.com',
    label: 'Email',
  },
  alitalk: {
    url: 'https://message.alibaba.com/msgsend/contact.htm?encContactId=292354388',
    label: 'Instant messaging',
  },
  responseTime: 'within one business day',
} as const;
