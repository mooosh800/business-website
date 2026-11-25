/**
 * All editable business data lives here.
 * Placeholders are intentional — replace them with real business information.
 */
export const businessConfig = {
  siteUrl: 'https://business-website-45c.pages.dev/',

  name: 'مجره',
  type: '[مجال النشاط]',

  hero: {
    description: '[وصف مختصر لطبيعة النشاط]',
    tagline: '[عبارة تسويقية واضحة]',
  },

  about: '[نبذة قصيرة عن النشاط وأسلوب تقديم الخدمات]',

  services: [
    {
      id: 'service-1',
      name: '[الخدمة الأولى]',
      description: '[وصف مختصر للخدمة الأولى]',
    },
    {
      id: 'service-2',
      name: '[الخدمة الثانية]',
      description: '[وصف مختصر للخدمة الثانية]',
    },
    {
      id: 'service-3',
      name: '[الخدمة الثالثة]',
      description: '[وصف مختصر للخدمة الثالثة]',
    },
  ],

  contact: {
    whatsappNumber: '[رقم الواتساب مع مفتاح الدولة]',
    address: '[العنوان الكامل]',
    mapsUrl: '',
  },
} as const;
