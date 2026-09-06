import { images } from "@/components/imageImporter";

export interface ServiceDetailItem {
  slug: string;
  image: any;
  seoTitle?: { en: string; ar: string };
  metaDescription?: { en: string; ar: string };
  h1Title?: { en: string; ar: string };
  overviewTitle?: { en: string; ar: string };
  introParagraph?: { en: string; ar: string };
  acceptedItemsTitle?: { en: string; ar: string };
  acceptedItemsIntro?: { en: string; ar: string };
  acceptedItemsFooter?: { en: string; ar: string };
  aboutService?: { en: string; ar: string };
  acceptedItems: { en: string[]; ar: string[] };
  featuresTitle?: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  processTitle?: { en: string; ar: string };
  processSteps?: {
    en: { title: string; desc: string }[];
    ar: { title: string; desc: string }[];
  };
  coverageSection?: {
    title: { en: string; ar: string };
    intro: { en: string; ar: string };
    items: { en: string[]; ar: string[] };
    footer: { en: string; ar: string };
  };
  pricingSection?: {
    title: { en: string; ar: string };
    intro?: { en: string; ar: string };
    items?: { en: string[]; ar: string[] };
    paragraphs?: { en: string[]; ar: string[] };
    footer?: { en: string; ar: string };
  };
  longDescription: { en: string; ar: string };
  faqTitle?: { en: string; ar: string };
  faq: {
    en: { question: string; answer: string }[];
    ar: { question: string; answer: string }[];
  };
  closingCta?: { en: string; ar: string };
}

export const serviceDetailsData: Record<string, ServiceDetailItem> = {
  "ac-scrap": {
    slug: "ac-scrap",
    image: images.airCondition1,
    seoTitle: {
      en: "Scrap AC & Air Conditioner Buyer in Dammam & Eastern Province",
      ar: "شراء مكيفات مستعملة وسكراب بالدمام والمنطقة الشرقية"
    },
    metaDescription: {
      en: "Sell your old or scrap AC in Dammam, Khobar, Jubail & Al-Ahsa. Free inspection, fair price, instant cash pickup. Call or WhatsApp now for a quote!",
      ar: "نشتري المكيفات المستعملة والخربانة بالدمام والخبر والجبيل والأحساء. معاينة مجانية، فك ونقل مجاني، ودفع كاش فوري. اتصل الآن!"
    },
    h1Title: {
      en: "Scrap AC Buyer in Dammam & Eastern Province — Sell Old Air Conditioners for Instant Cash",
      ar: "شراء مكيفات مستعملة وسكراب بالدمام — أعلى سعر ودفع فوري"
    },
    overviewTitle: {
      en: "Scrap AC Buyer in Dammam & Eastern Province",
      ar: "شراء مكيفات مستعملة وسكراب بالدمام والمنطقة الشرقية"
    },
    introParagraph: {
      en: "Have an old, broken, or unused air conditioner taking up space? We are a trusted scrap AC buyer serving Dammam, Khobar, Jubail, Al-Ahsa, and the wider Eastern Province. Whether it's a split unit, window AC, or central cooling system, we offer free inspection, fair pricing, and same-day cash pickup — no hassle, no delays.",
      ar: "عندك مكيف قديم أو مستخدم أو خربان وشاغل مكان في البيت؟ إحنا متخصصون في شراء مكيفات مستعملة وسكراب بالدمام والخبر والجبيل والأحساء وباقي مدن المنطقة الشرقية. سواء كان المكيف سبليت، شباك، أو مركزي، وسواء كان شغال أو خربان تمامًا، نشتريه منك بسعر عادل مع معاينة ونقل مجاني."
    },
    longDescription: {
      en: "Have an old, broken, or unused air conditioner taking up space? We are a trusted scrap AC buyer serving Dammam, Khobar, Jubail, Al-Ahsa, and the wider Eastern Province. Whether it's a split unit, window AC, or central cooling system, we offer free inspection, fair pricing, and same-day cash pickup — no hassle, no delays.",
      ar: "عندك مكيف قديم أو مستخدم أو خربان وشاغل مكان في البيت؟ إحنا متخصصون في شراء مكيفات مستعملة وسكراب بالدمام والخبر والجبيل والأحساء وباقي مدن المنطقة الشرقية. سواء كان المكيف سبليت، شباك، أو مركزي، وسواء كان شغال أو خربان تمامًا، نشتريه منك بسعر عادل مع معاينة ونقل مجاني."
    },
    coverageSection: {
      title: {
        en: "Old & Scrap AC Buyer Near You in the Eastern Province",
        ar: "شراء مكيفات مستعملة بالدمام والخبر والجبيل والأحساء"
      },
      intro: {
        en: "Looking for a reliable AC buyer near you? We provide door-to-door scrap AC pickup across the region, including:",
        ar: "خدمتنا تغطي كل مدن المنطقة الشرقية، منها:"
      },
      items: {
        en: [
          "Dammam City & surrounding neighborhoods",
          "Khobar & Dhahran",
          "Jubail Industrial & residential areas",
          "Al-Ahsa and nearby towns",
          "Qatif and other Eastern Province locations"
        ],
        ar: [
          "الدمام وجميع أحيائها",
          "الخبر والظهران",
          "الجبيل الصناعية والسكنية",
          "الأحساء والهفوف",
          "القطيف وضواحيها"
        ]
      },
      footer: {
        en: "No matter where you're located, our team comes to you for free inspection and immediate payment.",
        ar: "أينما كنت في المنطقة الشرقية، فريقنا يوصلك لمعاينة المكيف ودفع القيمة على الفور."
      }
    },
    acceptedItemsTitle: {
      en: "We Buy All Types of Used, Old & Damaged AC Units",
      ar: "نشتري جميع أنواع المكيفات المستعملة والخربانة"
    },
    acceptedItemsIntro: {
      en: "We purchase every kind of air conditioning unit, regardless of brand, age, or condition:",
      ar: "ما يفرق عندنا نوع أو حالة المكيف، نشتري:"
    },
    acceptedItems: {
      en: [
        "Old split AC units",
        "Window AC systems",
        "Central air conditioning units",
        "Non-working or damaged compressors",
        "Commercial and industrial AC scrap from offices, shops, and warehouses",
        "Bulk AC scrap from renovation or demolition sites"
      ],
      ar: [
        "مكيفات سبليت مستعملة",
        "مكيفات شباك قديمة أو خربانة",
        "مكيفات مركزية من الفلل والمكاتب",
        "مكيفات صحراوية معطلة",
        "سكراب مكيفات من المحلات والمستودعات والمصانع"
      ]
    },
    acceptedItemsFooter: {
      en: "From a single home unit to bulk commercial lots, we handle pickups of any size across Dammam and the Eastern Province.",
      ar: "سواء عندك مكيف وحدة أو كمية كبيرة من مكيفات شركة أو مصنع، نستلمها بأي عدد."
    },
    featuresTitle: {
      en: "Why We're the Trusted Scrap AC Buyer in Dammam",
      ar: "ليش تتعامل معنا؟"
    },
    features: {
      en: [
        "Fair & Transparent Pricing — Every AC is evaluated on the spot based on size, condition, and copper/aluminum content — no hidden deductions.",
        "Free Inspection & Pickup — Inspection, dismantling, and pickup are all free once a price is agreed.",
        "Same-Day Service — In most cases, we inspect, offer a price, and complete the deal on the same day — anywhere from Dammam to Khobar or Jubail.",
        "Instant Cash Payment — Get paid on the spot, in cash, with zero delay."
      ],
      ar: [
        "أعلى سعر بالسوق — نقيم المكيف حسب نوعه وحالته ووزن معادنه بدون أي خصومات مخفية.",
        "معاينة وفك ونقل مجاني — ما نتقاضى أي رسوم على المعاينة أو الفك أو النقل.",
        "خدمة سريعة نفس اليوم — غالبًا نعاين ونتفق وننقل بنفس اليوم اللي تتصل فيه.",
        "دفع كاش فوري — تستلم فلوسك نقدًا في نفس اللحظة بدون تأخير."
      ]
    },
    processTitle: {
      en: "How to Sell Your Old AC for Cash — 4 Simple Steps",
      ar: "كيف تبيع مكيفك خطوة بخطوة"
    },
    processSteps: {
      en: [
        { title: "1. Contact Us", desc: "Call or WhatsApp with your AC details and location (Dammam, Khobar, Jubail, or Al-Ahsa)." },
        { title: "2. Free Inspection", desc: "Our team visits and assesses the unit on-site." },
        { title: "3. Get a Fair Offer", desc: "Receive a market-based price instantly." },
        { title: "4. Instant Cash & Pickup", desc: "Get paid immediately; we handle dismantling and removal." }
      ],
      ar: [
        { title: "١. اتصل بنا أو واتساب", desc: "أرسل تفاصيل المكيف ومدينتك (الدمام، الخبر، الجبيل، الأحساء)." },
        { title: "٢. معاينة مجانية", desc: "فريقنا يجي لموقعك ويعاين المكيف." },
        { title: "٣. عرض سعر فوري", desc: "نعطيك سعر عادل حسب السوق." },
        { title: "٤. استلام الفلوس والفك", desc: "تستلم الكاش على الفور ونتكفل بالفك والنقل." }
      ]
    },
    pricingSection: {
      title: {
        en: "AC Scrap Price in Dammam — What Affects Your Payout",
        ar: "الفرق بين بيع مكيف مستعمل وبيع مكيف سكراب"
      },
      intro: {
        en: "The scrap price for your used or damaged AC depends on:",
        ar: ""
      },
      items: {
        en: [
          "Unit type (split, window, or central)",
          "Overall condition and functionality",
          "Copper, aluminum, and metal content",
          "Current scrap market rates in Saudi Arabia"
        ],
        ar: []
      },
      paragraphs: {
        en: [],
        ar: [
          "مكيف مستعمل: إذا كان المكيف شغال أو ممكن إصلاحه بسهولة، نشتريه حسب نوعه وعمره وكفاءته.",
          "مكيف سكراب أو خربان: إذا كان معطل تمامًا أو قديم جدًا، نشتريه حسب وزن المعادن اللي فيه مثل النحاس والألمنيوم والحديد."
        ]
      },
      footer: {
        en: "We keep our evaluation transparent so you always know how your price is calculated.",
        ar: "في الحالتين نعطيك تقييم عادل وشفاف على الطبيعة."
      }
    },
    aboutService: {
      en: "With years of experience as a reliable used AC buyer in Dammam and the Eastern Province, we're known for honest evaluation and quick, hassle-free service.",
      ar: "بفضل خبرتنا الطويلة كمشتري موثوق للمكيفات المستعملة والسكراب في الدمام والمنطقة الشرقية، اشتهرنا بالأمانة في التقييم والسرعة في إنهاء المعاملات بدون أي تعقيد."
    },
    faqTitle: {
      en: "Frequently Asked Questions",
      ar: "أسئلة شائعة"
    },
    faq: {
      en: [
        {
          question: "Do you buy non-working or fully damaged air conditioners?",
          answer: "Yes, we buy AC units in any condition — working, partially damaged, or completely non-functional."
        },
        {
          question: "Is your service available outside Dammam?",
          answer: "Yes, we cover Dammam, Khobar, Dhahran, Jubail, Al-Ahsa, Qatif, and other areas across the Eastern Province."
        },
        {
          question: "Is inspection or pickup chargeable?",
          answer: "No, inspection is free, and once a price is agreed, pickup and dismantling are also free."
        },
        {
          question: "How is the AC scrap price decided?",
          answer: "Price depends on the unit's size, type, condition, and metal content, evaluated on-site by our team."
        },
        {
          question: "Do you buy AC scrap from businesses too?",
          answer: "Yes, we buy from homes, offices, shops, warehouses, and industrial sites."
        },
        {
          question: "How fast will I get paid?",
          answer: "Payment is instant, in cash, right after inspection and price agreement."
        }
      ],
      ar: [
        {
          question: "هل تشترون المكيفات الخربانة أو المعطلة تمامًا؟",
          answer: "نعم، نشتري المكيف بأي حالة، شغال أو خربان أو معطل تمامًا."
        },
        {
          question: "هل خدمتكم متوفرة خارج الدمام؟",
          answer: "نعم، نغطي الدمام والخبر والظهران والجبيل والأحساء والهفوف والقطيف وباقي المنطقة الشرقية."
        },
        {
          question: "هل المعاينة أو النقل لهم أي تكلفة؟",
          answer: "لا، المعاينة مجانية، وبعد الاتفاق على السعر نتكفل بالفك والنقل بدون أي رسوم إضافية."
        },
        {
          question: "كيف يتحدد سعر المكيف المستعمل أو السكراب؟",
          answer: "السعر يعتمد على نوع المكيف وحجمه وحالته ووزن المعادن فيه، وتحدده على الطبيعة أمامك."
        },
        {
          question: "هل تشترون من المحلات والمكاتب والمصانع؟",
          answer: "نعم، نشتري من البيوت والفلل والمحلات والمكاتب والمستودعات والمصانع بأي كمية."
        },
        {
          question: "متى أستلم فلوسي؟",
          answer: "تستلم الفلوس نقدًا فورًا بعد المعاينة والاتفاق على السعر."
        }
      ]
    },
    closingCta: {
      en: "Ready to sell your old or scrap AC in Dammam, Khobar, Jubail, or Al-Ahsa? Contact us now for a free inspection and instant cash offer — fast, fair, and hassle-free.",
      ar: "عندك مكيف مستعمل أو خربان بالدمام أو الخبر أو الجبيل أو الأحساء؟ تواصل معنا الحين لمعاينة مجانية واستلام كاش فوري بأعلى سعر."
    }
  },
  "aluminum-scrap": {
    slug: "aluminum-scrap",
    image: images.aluminum1,
    acceptedItems: {
      en: [
        "Aluminum Window Frames & Doors",
        "Aluminum Cladding & Building Panels",
        "Kitchen Cabinets & Furniture Scrap",
        "Cast & Extruded Aluminum Industrial Waste",
        "Aluminum Cans & Sheet Metal",
        "Engine Blocks & Auto Parts"
      ],
      ar: [
        "إطارات نوافذ وأبواب الألمنيوم",
        "ألواح الكبائر وكلادينج الواجهات",
        "مطابخ ألمنيوم مستعملة وسكراب",
        "مخلفات مصانع وقطاعات ألمنيوم",
        "علب وصفائح ألمنيوم",
        "قطع وسكراب ألمنيوم سيارات ومحركات"
      ]
    },
    features: {
      en: [
        "Accurate weight measurement with digital scales",
        "Highest rate per kilogram for clean and mixed aluminum",
        "Fast pickup directly from workshop or site",
        "Honest and transparent valuation"
      ],
      ar: [
        "وزن دقيق بالميزان الرقمي المعتمد",
        "أعلى سعر للكيلو للألمنيوم الصافي والمختلط",
        "تحميل سريع مباشر من الورشة أو موقعك",
        "تقييم شفاف بأمانة وتجرد"
      ]
    },
    longDescription: {
      en: "Looking to sell aluminum scrap in Dammam? We purchase all grades of aluminum scrap, including structural profiles, window frames, cladding, industrial turnings, and aluminum sheets. We provide portable electronic scales and transport trucks for smooth transactions.",
      ar: "تبي تبيع سكراب ألمنيوم بالدمام؟ نشتري جميع درجات وأنواع سكراب الألمنيوم مثل قطاعات الأبواب والنوافذ والكلادينج ومخلفات الورش والمصانع. نوفر موازين إلكترونية دقيقة وشاحنات نقل لنضمن لك تجربة بيع سهلة وسريعة."
    },
    faq: {
      en: [
        {
          question: "What is the minimum quantity of aluminum scrap you buy?",
          answer: "We accept all quantities, from small home renovations to large industrial site clearances."
        }
      ],
      ar: [
        {
          question: "ما هي أقل كمية سكراب ألمنيوم تشترونها؟",
          answer: "نشتري جميع الكميات، من المخلفات البسيطة إلى الكميات الكبيرة للمصانع والمشاريع."
        }
      ]
    }
  },
  "brass-scrap": {
    slug: "brass-scrap",
    image: images.brassScrap2,
    acceptedItems: {
      en: [
        "Yellow Brass Pipes & Valves",
        "Plumbing Fixtures & Sanitary Brass",
        "Brass Shells & Decorative Hardware",
        "Machined Industrial Brass Turnings",
        "Radiators & Heat Exchangers",
        "Electrical Terminals & Busbars"
      ],
      ar: [
        "مواسير ومحابس نحاس أصفر (براس)",
        "قطع سباكة وخلاطات مياه نحاسية",
        "خردة وقطع ديكور ومقابض نحاس",
        "مخلفات خرط وشظايا النحاس الأصفر",
        "رديترات ومبدلات حرارية",
        "محطات وتوصيلات كهربائية نحاسية"
      ]
    },
    features: {
      en: [
        "High market pricing for clean brass scrap",
        "Immediate cash payout upon inspection",
        "Free on-site pickup for bulk quantities",
        "Reliable service across Dammam & Eastern Province"
      ],
      ar: [
        "أسعار تنافسية عالية لجميع خامات النحاس الأصفر",
        "دفع كاش فوري بعد الفحص والوزن",
        "تحميل مجاني للكميات الكبيرة",
        "خدمة موثوقة في الدمام والمنطقة الشرقية"
      ]
    },
    longDescription: {
      en: "Brass scrap is highly valued for its copper content. We buy yellow brass valves, plumbing fittings, machinery parts, and industrial brass waste at premium rates. Our team ensures quick weighing and instant payment.",
      ar: "يحظى النحاس الأصفر بقيمة عالية لإمكانية إعادة تدويره. نشتري جميع قطع البراس والمحابس ومخلفات الورش والمخرطة والسباكة بأعلى سعر في السوق السعودي مع الدفع الفوري."
    },
    faq: {
      en: [
        {
          question: "How do I get an estimate for my brass scrap?",
          answer: "Send us photos or photos of the quantity via WhatsApp, and our agent will give you an instant quote."
        }
      ],
      ar: [
        {
          question: "كيف أحصل على تسعيرة لسكراب النحاس الأصفر؟",
          answer: "أرسل لنا صور وتفاصيل الكمية عبر الواتساب وسنقدم لك تسعيرة فورية ومباشرة."
        }
      ]
    }
  },
  "electrical-transformer-scrap": {
    slug: "electrical-transformer-scrap",
    image: images.transformer1,
    acceptedItems: {
      en: [
        "Oil-Filled Distribution Transformers",
        "Dry-Type Transformers",
        "High-Voltage Substation Equipment",
        "Copper & Aluminum Winding Coils",
        "Damaged Industrial Breakers & Panels"
      ],
      ar: [
        "محولات توزيع زيتية",
        "محولات جافة (Dry-Type)",
        "معدات ومحطات التحويل الكهربائي",
        "ملفات نحاس وألمنيوم المحولات",
        "قواطع ولوحات كهربائية صناعية تالفة"
      ]
    },
    features: {
      en: [
        "Specialized heavy loading and crane machinery",
        "Highest scrap valuation based on internal copper weight",
        "Certified safety and site clearance protocols",
        "Fast transaction and immediate payment"
      ],
      ar: [
        "رافعات وشاحنات ثقيلة مخصصة للنقل",
        "أفضل سعر للمحولات بناءً على كمية النحاس",
        "التزام تام بمعايير السلامة وتنظيف الموقع",
        "إتمام الصفقة ودفع كاش فوري"
      ]
    },
    longDescription: {
      en: "We are authorized buyers of obsolete and burnt electrical transformers. Whether you are upgrading an industrial plant, clearing a facility, or liquidating power equipment in Dammam, we handle loading, transport, and instant settlement.",
      ar: "نحن خبرا في شراء المحولات الكهربائية المعطلة والمحترقة بجميع أحجامها. نوفر رافعات هيدروليكية ونقوم بسحب ونقل المحولات الثقيلة وتصفية الحساب كاش فوراً."
    },
    faq: {
      en: [
        {
          question: "Do you handle transport for heavy transformers?",
          answer: "Yes, we bring our own flatbed trucks and cranes to pick up heavy power transformers."
        }
      ],
      ar: [
        {
          question: "هل توفرون رافعات لنقل المحولات الثقيلة؟",
          answer: "نعم، نوفر سطحات ورافعات ثقيلة لنقل وشحن المحولات الكبيرة من موقعك."
        }
      ]
    }
  },
  "generators-scrap": {
    slug: "generators-scrap",
    image: images.generator2,
    acceptedItems: {
      en: [
        "Diesel Generators (Perkins, Cummins, CAT, Volvo, etc.)",
        "Gasoline & Portable Power Generators",
        "Burnt or Non-working Alternators",
        "Industrial Backup Power Units",
        "Heavy Duty Generator Engines"
      ],
      ar: [
        "مولدات ديزل (بيركنز، كامنز، كاتربلر، فولفو، وغيرها)",
        "مولدات بنزين ومولدات متنقلة",
        "دينامو وملفات محترقة ومعطلة",
        "مولدات احتياطية للمصانع والمباني",
        "محركات مولدات ثقيلة"
      ]
    },
    features: {
      en: [
        "Best valuation for both working and scrap generators",
        "Full haulage and crane service provided",
        "Instant cash payment before transport",
        "Clearance for commercial and construction sites"
      ],
      ar: [
        "أفضل تثمين للمولدات المستعملة والتالفة",
        "خدمة سحب ورفع بالنقل الثقيل",
        "تسليم المبلغ كاش بالكامل قبل التحميل",
        "خدمة شاملة للمصانع والمواقع الإنشائية"
      ]
    },
    longDescription: {
      en: "Have a broken or decommissioned diesel generator? We buy used and damaged power generators of all capacities across Dammam, Khobar, and Jubail. We evaluate engine condition, metal components, and copper coils to offer top cash payment.",
      ar: "عندك مولد كهربائي عطلان أو قديم؟ نشتري المولدات الكهربائية المستعملة والتالفة بمختلف الطاقات في الدمام والخبر والجبيل. نثمن المحرك والنحاس والهيكل ونقدم أعلى سعر كاش."
    },
    faq: {
      en: [
        {
          question: "Do you buy non-working diesel generators?",
          answer: "Yes, we purchase generators regardless of operational status, even if completely seized or burnt."
        }
      ],
      ar: [
        {
          question: "هل تشترون المولدات العطلانة تماماً؟",
          answer: "نعم، نشتري المولدات بكافة حالاتها سواء كانت شغالة أو عطلانة أو محروقة."
        }
      ]
    }
  },
  "stainless-steel-scrap": {
    slug: "stainless-steel-scrap",
    image: images.stainless,
    acceptedItems: {
      en: [
        "304 & 316 Grade Stainless Steel Scrap",
        "Commercial Kitchen & Restaurant Equipment",
        "Stainless Storage Tanks & Piping",
        "Handrails, Balustrades & Architectural Trim",
        "Food & Chemical Processing Machinery"
      ],
      ar: [
        "سكراب ستانلس ستيل درجة 304 و 316",
        "معدات مطاعم ومطابخ تجارية مستعملة",
        "خزانات ومواسير ايميل ستانلس",
        "دربزينات وهياكل ستانلس مقاومة للصدأ",
        "آلات ومعدات مصانع الأغذية والأدوية"
      ]
    },
    features: {
      en: [
        "Exact grade analysis (304 vs 316)",
        "Honest digital weighing on location",
        "Ideal prices for restaurant clearances",
        "Instant settlement upon collection"
      ],
      ar: [
        "فحص وتحديد دقيق لنوع الستانلس (304 / 316)",
        "وزن إلكتروني دقيق في موقعك",
        "أسعار ممتازة لتصفية المطاعم والمطابخ",
        "دفع كاش فوري عند الاستلام"
      ]
    },
    longDescription: {
      en: "We buy stainless steel scrap from restaurants, hotels, bakeries, and industrial facilities in Dammam. Stainless steel 304 and 316 are priced attractively based on current market indices.",
      ar: "نشتري سكراب الستانلس ستيل من المطاعم، الفنادق، المخابز والمصانع في منطقة الدمام. نوفر أفضل سعر للستانلس المقاوم للصدأ مع دفع فوري وتخليص الموقع."
    },
    faq: {
      en: [
        {
          question: "How do you distinguish between 304 and 316 stainless steel?",
          answer: "We test material density and magnetic properties to ensure you get the exact market price for higher grades like 316."
        }
      ],
      ar: [
        {
          question: "كيف تميزون بين درجة 304 و 316 في الستانلس؟",
          answer: "نقوم بفحص الخامة بدقة لضمان حصولك على أعلى سعر ممكن للدرجات العالية مثل 316."
        }
      ]
    }
  },
  "construction-scrap": {
    slug: "construction-scrap",
    image: images.construction,
    acceptedItems: {
      en: [
        "Demolition Steel & Steel Rebar (حديد تسليح)",
        "Scaffolding Pipes & Metal Clamps",
        "Steel Beams (H-Beams, I-Beams, Columns)",
        "Corrugated Iron Sheets & Steel Frames",
        "Construction Machinery Parts & Concrete Molds"
      ],
      ar: [
        "حديد تسليح سكراب ومخلفات الهدم",
        "أنحاء وسقالات معدنية وكلابات",
        "جسور حديدية (H-Beam / I-Beam) وأعمدة",
        "صاج وشينكو وهياكل مستودعات",
        "قطع معدات بناء وقوالب صب"
      ]
    },
    features: {
      en: [
        "Comprehensive site cleanup and clearance",
        "Fleet of heavy dump trucks and loaders",
        "Bulk tonnage rates for large projects",
        "Immediate payment on weighbridge scale"
      ],
      ar: [
        "تنظيف وتخليص الموقع بالكامل من السكراب",
        "أسطول تريلات ووايتات وشاحنات هيدروليك",
        "أسعار خاصة للكميات الضخمة والمشاريع",
        "دفع فوري فور تسجيل الوزن على الميزان"
      ]
    },
    longDescription: {
      en: "Clearing a building site, factory, or demolition zone? We specialize in buying construction site scrap metal in bulk. We clear rebar, scaffolding, iron beams, and steel structures with full site cleanup.",
      ar: "تبي تخلي موقع إنشائي أو مبنى بعد الهدم؟ متخصصون في شراء سكراب المباني والإنشاءات بالكميات الكبيرة. نرفع حديد التسليح والسقالات والجسور وننظف الموقع بالكامل."
    },
    faq: {
      en: [
        {
          question: "Do you clear full site scrap for contractors?",
          answer: "Yes, we work with main contractors and demolition teams to provide ongoing or one-time site scrap clearance."
        }
      ],
      ar: [
        {
          question: "هل تتعاقدون مع المقاولين لتنظيف مواقع الهدم؟",
          answer: "نعم، نتعامل مع شركات المقاولات والهدم ونوفر عقود سحب وتنظيف مواقع سريعة."
        }
      ]
    }
  },
  "electronic-scrap": {
    slug: "electronic-scrap",
    image: images.electric4,
    acceptedItems: {
      en: [
        "Copper & Aluminum Electrical Cables",
        "Circuit Boards (Motherboards, Telecom PCBs)",
        "Control Panels & Switchgear",
        "Old Computers, Servers & Telecom Scrap",
        "Electric Motors & Armatures"
      ],
      ar: [
        "كابلات كهربائية نحاس وألمنيوم",
        "لوحات إلكترونية وبوردات (كمبيوتر، اتصالات)",
        "لوحات تحكم وقواطع كهربائية",
        "سيرفرات وأجهزة إلكترونية تالفة",
        "ديناموهات ومحركات كهربائية"
      ]
    },
    features: {
      en: [
        "Maximum value for high-grade copper cables & PCBs",
        "Safe recycling practices",
        "Fast pickup from warehouses and companies",
        "Immediate cash disbursement"
      ],
      ar: [
        "أعلى تقييم للكابلات النحاسية واللوحات الإلكترونية",
        "التزام بمعايير تدوير النفايات الإلكترونية",
        "نقل سريع من مستودعات ومقرات الشركات",
        "تسليم كاش فوري"
      ]
    },
    longDescription: {
      en: "We buy all types of e-waste, electrical wire scrap, and electronic components in Dammam. From stripped wires and cables to computer motherboards and industrial switchgear, we offer top prices based on copper and precious metal recovery values.",
      ar: "نشتري جميع أنواع السكراب الإلكتروني والكهربائي في الدمام. من الكابلات والأسلاك النحاسية إلى لوحات الكمبيوتر ومحولات الكهرباء، نقدم أفضل أسعار بناءً على نسبة النحاس والمعادن."
    },
    faq: {
      en: [
        {
          question: "Do you buy insulated cables without stripping?",
          answer: "Yes! We buy both insulated cables and stripped copper wire, pricing them appropriately."
        }
      ],
      ar: [
        {
          question: "هل تشترون الكابلات بعازلها بدون تقشير؟",
          answer: "نعم! نشتري الكابلات المعزولة وكذلك النحاس المقشر، ويتم تقييم كل نوع بالأسعار المناسبة."
        }
      ]
    }
  },
  "copper-scrap": {
    slug: "copper-scrap",
    image: images.copper,
    acceptedItems: {
      en: [
        "Bare Bright Copper Wire (نحاس أحمر نقي)",
        "Stripped Power & Telecom Copper Cables",
        "Copper Refrigeration & AC Tubing",
        "Heavy Copper Busbars & Plate Scrap",
        "Copper Radiators & Water Heaters"
      ],
      ar: [
        "نحاس أحمر لامع ونقي (Bare Bright)",
        "كابلات كهرباء واتصالات مقشرة",
        "مواسير تبريد وتكييف نحاسية",
        "قضبان وسطحات نحاس أحمر ثقيلة",
        "رديترات ومجاري نحاس"
      ]
    },
    features: {
      en: [
        "Highest guaranteed market price per kg for copper",
        "Certified digital balance weighing",
        "Immediate cash payment on the spot",
        "We accept any quantity from small to tons"
      ],
      ar: [
        "أعلى سعر كيلو نحاس أحمر في السوق السعودي",
        "وزن بميزان حساس معتمد أمامك",
        "دفع كاش فوري وبدون تأخير",
        "نقبل جميع الكميات من كيلو واحد إلى أطنان"
      ]
    },
    longDescription: {
      en: "Copper is one of the most valuable scrap metals. We buy pure red copper, stripped cables, electrical copper fittings, and AC copper tubing at top market prices in Dammam, Khobar, and Dhahran.",
      ar: "النحاس الأحمر هو أنفس المعادن في عالم السكراب. نشتري النحاس الأحمر النقي، الكابلات، ومواسير المكيفات بأعلى سعر للكيلو في المنطقة الشرقية مع الدفع الفوري."
    },
    faq: {
      en: [
        {
          question: "How is copper scrap priced?",
          answer: "Copper is priced per kilogram based on purity (Bare Bright, #1 Copper, #2 Copper) and current international market rates."
        }
      ],
      ar: [
        {
          question: "كيف يتم تسعير النحاس الأحمر؟",
          answer: "يتم التسعير بالكيلوجرام حسب درجة النقاء (نحاس أحمر صافي، نحاس كابلات، نحاس مواسير) ووفق أسعار السوق اليومية."
        }
      ]
    }
  },
  "iron-scrap": {
    slug: "iron-scrap",
    image: images.iron,
    acceptedItems: {
      en: [
        "Heavy Melting Scrap (HMS 1 & 2)",
        "Industrial Machinery & Equipment Scrap",
        "Cast Iron Pipes & Automotive Parts",
        "Light Iron, Sheet Metal & Appliances",
        "Steel Beams, Tanks & Warehouse Frames"
      ],
      ar: [
        "حديد سكراب ثقيل (HMS 1 & 2)",
        "مخلفات آلات ومعدات مصانع",
        "حديد زهر ومواسير وقطع سيارات",
        "حديد خفيف وصاج وأجهزة قديمة",
        "جسور حديد وخزانات وهياكل مستودعات"
      ]
    },
    features: {
      en: [
        "High tonnage rate for industrial and commercial iron",
        "Equipped with specialized loading cranes & trailers",
        "Complete site clearance service",
        "Instant settlement via cash"
      ],
      ar: [
        "أعلى سعر للطن للحديد الصناعي والتجاري",
        "مجهزون برافعات وتريلات تحميل مخصصة",
        "خدمة رفع وتنظيف كاملة للموقع",
        "تسليم كاش فوري قبل مغادرة الشاحنات"
      ]
    },
    longDescription: {
      en: "We process and buy large volumes of iron scrap in Dammam. Whether you have structural iron beams, industrial equipment, cast iron, or light sheet metal scrap, we provide trucks and immediate cash payment.",
      ar: "نشتري كميات الحديد السكراب الكبيرة بالدمام والخبر. سواء كان لديك حديد ثقيل، هياكل مستودعات، حديد زهر أو صاج خفيف، نوفر شاحنات ونقدم أفضل تسعيرة بالطن مع الدفع الكاش."
    },
    faq: {
      en: [
        {
          question: "What is your minimum capacity for iron scrap truck pickup?",
          answer: "We accommodate both small vehicle loads and full multi-ton trailer loads."
        }
      ],
      ar: [
        {
          question: "ما هي حمولة الشاحنات المتوفرة لجمع الحديد؟",
          answer: "نوفر ديانات وشاحنات صغيرة بالإضافة إلى التريلات الكبيرة للكميات الضخمة."
        }
      ]
    }
  }
};

export function getServiceDetails(slug: string): ServiceDetailItem | null {
  return serviceDetailsData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceDetailsData);
}
