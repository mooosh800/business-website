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
      whatsapp: 'تواصل عبر واتساب',
      copy: 'نسخ الرقم',
      copied: 'تم النسخ',
      skip: 'تخطّ إلى المحتوى',
      backHome: 'العودة إلى الرئيسية',
    },
    home: {
      heroEyebrow: 'مرحبًا بك في',
      aboutTitle: 'عن النشاط',
      servicesTitle: 'خدماتنا',
      servicesLink: 'عرض كل الخدمات',
      ctaTitle: 'لنبدأ العمل معًا',
      ctaText: 'تواصل معنا اليوم ودعنا نناقش ما تحتاجه.',
    },
    services: {
      title: 'خدماتنا',
      intro: ' ثلاث خدمات واضحة، مصمّمة لتلبية احتياجات عملائنا.',
      request: 'اطلب الخدمة عبر واتساب',
    },
    contact: {
      title: 'تواصل معنا',
      infoTitle: 'معلومات التواصل',
      numberLabel: 'رقم واتساب',
      addressLabel: 'العنوان',
      direct: 'بدء محادثة واتساب',
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
      whatsapp: 'Chat on WhatsApp',
      copy: 'Copy number',
      copied: 'Copied',
      skip: 'Skip to content',
      backHome: 'Back to home',
    },
    home: {
      heroEyebrow: 'Welcome to',
      aboutTitle: 'About the business',
      servicesTitle: 'Our services',
      servicesLink: 'View all services',
      ctaTitle: 'Let’s work together',
      ctaText: 'Contact us today and let’s discuss what you need.',
    },
    services: {
      title: 'Our services',
      intro: 'Three clear services, designed around our clients’ needs.',
      request: 'Request via WhatsApp',
    },
    contact: {
      title: 'Contact us',
      infoTitle: 'Contact information',
      numberLabel: 'WhatsApp number',
      addressLabel: 'Address',
      direct: 'Start a WhatsApp chat',
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
