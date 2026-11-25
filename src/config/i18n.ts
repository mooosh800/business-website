export type Locale = 'ar' | 'en';

export const localeConfig = {
  defaultLocale: 'ar' as Locale,
  supportedLocales: ['ar', 'en'] as const,
};

export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      contact: 'تواصل معنا',
      menu: 'القائمة',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    common: {
      whatsapp: 'تواصل معنا.',
      discover: 'اكتشف تجربتك.',
      request: 'اطلب خدمتك.',
      createMemory: 'اصنع ذكرى من النجوم.',
      copy: 'نسخ الرقم',
      copied: 'تم النسخ',
      skip: 'تخطّ إلى المحتوى',
      backHome: 'العودة إلى الرئيسية',
    },
    home: {
      heroEyebrow: 'مرحبًا بك في',
      aboutTitle: 'عن مَجَرّة',
      servicesTitle: 'خدماتنا',
      servicesLink: 'اكتشف الخدمات',
      ctaTitle: 'اصنع ذكرى من النجوم.',
      ctaText: 'تواصل معنا ودعنا نحول لحظتك إلى حكاية في السماء.',
    },
    services: {
      title: 'خدماتنا',
      intro: 'ثلاث تجارب فلكية شخصية من مَجَرّة.',
      request: 'اطلب خدمتك.',
    },
    contact: {
      title: 'تواصل معنا',
      infoTitle: 'معلومات التواصل',
      numberLabel: 'رقم واتساب',
      addressLabel: 'العنوان',
      direct: 'تواصل معنا.',
      maps: 'فتح الموقع في خرائط Google',
      locationTitle: 'موقع النشاط',
      finalTitle: 'WE’RE READY TO HELP.',
      finalText: 'تواصل معنا للحصول على الخدمة المناسبة.',
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      text: 'لم نتمكن من العثور على الصفحة التي طلبتها.',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    common: {
      whatsapp: 'Contact us.',
      discover: 'Discover your experience.',
      request: 'Request your service.',
      createMemory: 'Create a memory from the stars.',
      copy: 'Copy number',
      copied: 'Copied',
      skip: 'Skip to content',
      backHome: 'Back to home',
    },
    home: {
      heroEyebrow: 'Welcome to',
      aboutTitle: 'About MAJARRAH',
      servicesTitle: 'Our services',
      servicesLink: 'Discover the services',
      ctaTitle: 'Create a memory from the stars.',
      ctaText: 'Contact us and let us turn your moment into a story in the sky.',
    },
    services: {
      title: 'Our services',
      intro: 'Three personal cosmic experiences from MAJARRAH.',
      request: 'Request your service.',
    },
    contact: {
      title: 'Contact us',
      infoTitle: 'Contact information',
      numberLabel: 'WhatsApp number',
      addressLabel: 'Address',
      direct: 'Contact us.',
      maps: 'Open in Google Maps',
      locationTitle: 'Business location',
      finalTitle: 'WE’RE READY TO HELP.',
      finalText: 'Contact us to get the right service.',
    },
    notFound: {
      title: 'Page not found',
      text: 'We could not find the page you requested.',
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
} as const;
