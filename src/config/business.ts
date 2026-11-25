/**
 * Central editable business data for MAJARRAH.
 * Replace placeholders only with real information supplied by the business.
 */
export const businessConfig = {
  siteUrl: 'https://business-website-45c.pages.dev/',

  name: 'مَجَرّة | MAJARRAH',
  displayName: 'مَجَرّة',
  latinName: 'MAJARRAH',
  type: 'تجارب فلكية شخصية',

  hero: {
    description:
      'حوّل لحظاتك المميزة إلى حكايات من السماء، واحتفظ بذكرى تحمل اسمك بين النجوم.',
    tagline: 'لكل حكاية نجمة.',
    image: '/images/hero-galaxy.jpg',
  },

  about:
    'علامة تجارية تقدم تجارب ومنتجات مرتبطة بالنجوم والسماء واللحظات الشخصية، وتحول المناسبات والذكريات إلى تجارب فلكية ذات طابع عاطفي وشخصي.',

  services: [
    {
      id: 'birthday-star-map',
      name: 'صناعة لوحة بشكل النجوم يوم ميلادك',
      description:
        'حوّل تاريخ ميلادك إلى لوحة فنية مستوحاة من توزيع النجوم في السماء، لتحتفظ بصورة فلكية مميزة مرتبطة بيومك الخاص.',
      image: '/images/service-birthday-stars.jpg',
    },
    {
      id: 'named-star',
      name: 'شراء نجمة باسمك',
      description:
        'اختر نجمتك واجعل لها اسمًا يحمل معنى خاصًا بالنسبة لك، من خلال تجربة إهداء رمزية مميزة وتذكار شخصي فريد.',
      image: '/images/service-named-star.jpg',
    },
    {
      id: 'satellite-viewing',
      name: 'مراقبة نجمك بالأقمار الاصطناعية',
      description:
        'استكشف تجربة متابعة موقع نجمك والتعرف على بياناته الفلكية باستخدام تقنيات الرصد والمعلومات المتاحة.',
      note: 'تعتمد التجربة على بيانات ومعلومات فلكية متاحة، دون ادعاء تتبّع مباشر لنجمة بعينها.',
      image: '/images/service-satellite.jpg',
    },
  ],

  contact: {
    whatsappNumber: '+966545193002',
    address: '[العنوان الكامل]',
    mapsUrl: '',
  },
} as const;
