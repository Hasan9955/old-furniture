import { images } from "@/components/imageImporter";

export interface ServiceDetailItem {
  slug: string;
  image: any;
  seoTitle?: { en: string; ar: string };
  metaDescription?: { en: string; ar: string };
  h1Title?: { en: string; ar: string };
  overviewTitle?: { en: string; ar: string };
  acceptedItemsTitle?: { en: string; ar: string };
  acceptedItemsFooter?: { en: string; ar: string };
  aboutService?: { en: string; ar: string };
  acceptedItems: { en: string[]; ar: string[] };
  features: { en: string[]; ar: string[] };
  processSteps?: {
    en: { title: string; desc: string }[];
    ar: { title: string; desc: string }[];
  };
  longDescription: { en: string; ar: string };
  faq: {
    en: { question: string; answer: string }[];
    ar: { question: string; answer: string }[];
  };
}

export const serviceDetailsData: Record<string, ServiceDetailItem> = {
  "ac-scrap": {
    slug: "ac-scrap",
    image: images.airCondition1,
    seoTitle: {
      en: "Old & Scrap AC Buyer in Dammam | Sell Used Air Conditioners for Cash",
      ar: "مشتري سكراب ومكيفات مستعملة في الدمام | بيع مكيفك بأعلى سعر كاش"
    },
    metaDescription: {
      en: "Looking for a scrap AC buyer in Dammam? We buy old, damaged, and used air conditioners for the best price with free inspection and instant cash. Contact us today!",
      ar: "هل تبحث عن مشتري سكراب مكيفات في الدمام؟ نشتري جميع أنواع المكيفات القديمة والتالفة بأفضل الأسعار، مع معاينة مجانية ونقل ودفع كاش فوراً. اتصل بنا اليوم!"
    },
    h1Title: {
      en: "Old & Scrap AC Buyer in Dammam – Sell Your Used Air Conditioner for Instant Cash",
      ar: "مشتري سكراب ومكيفات مستعملة في الدمام – بيع مكيفك القديم واحصل على كاش فوراً"
    },
    overviewTitle: {
      en: "Trusted Old & Scrap AC Buyer in Dammam",
      ar: "مشتري موثوق للسكراب والمكيفات المستعملة في الدمام"
    },
    longDescription: {
      en: "Have an old air conditioner sitting unused or damaged at home? We are a trusted scrap AC buyer in Dammam, purchasing split, window, and central units in any condition — working or not. Whether it's outdated, broken, or simply no longer needed, we offer a fair price and free pickup.",
      ar: "هل لديك مكيف قديم متعطل أو غير مستخدم في المنزل؟ نحن مشتري موثوق لسكراب المكيفات في الدمام، نشتري المكيفات السبلت، الشباك، والمركزية بأي حالة كانت — سواء كانت شغالة أو عطلانة. سواء كان مكيفك قديماً، أو تالفاً، أو لم تعد بحاجة إليه، فنحن نقدم لك السعر العادل مع خدمة التحميل والنقل مجاناً."
    },
    acceptedItemsTitle: {
      en: "We Buy All Types of Used & Damaged AC Units",
      ar: "نشتري جميع أنواع المكيفات المستعملة والتالفة"
    },
    acceptedItems: {
      en: [
        "Old air conditioners no longer in use",
        "Damaged or non-functional AC units",
        "Split and window AC systems",
        "Central cooling units from homes and offices",
        "Commercial AC scrap from shops and warehouses"
      ],
      ar: [
        "المكيفات القديمة التي لم تعد قيد الاستخدام",
        "أجهزة التكييف التالفة أو المتعطلة عن العمل",
        "أنظمة المكيفات السبلت والشباك",
        "وحدات التكييف المركزية للمنازل والمكاتب",
        "سكراب المكيفات التجارية للمحلات والمستودعات"
      ]
    },
    acceptedItemsFooter: {
      en: "From a single household unit to bulk commercial scrap, we handle pickups of any size across Dammam.",
      ar: "سواء كان لديك مكيف منزل واحد أو كمية كبيرة من سكراب المكيفات للمنشآت التجارية، فنحن جاهزون ونغطي جميع مناطق الدمام."
    },
    features: {
      en: [
        "Fair Pricing – Every unit is evaluated based on condition, size, and material, with no hidden deductions.",
        "Free Inspection & Pickup – Inspection costs nothing, and once agreed, dismantling and pickup are on us.",
        "Same-Day Service – In most cases, we visit, inspect, and close the deal the same day you contact us.",
        "Instant Cash – Payment is made on the spot, in cash, with no delays."
      ],
      ar: [
        "أسعار عادلة: نحدد قيمة كل مكيف بناءً على حالته وحجمه، بدون أي خصومات خفية.",
        "معاينة ونقل مجاناً: لا توجد أي رسوم على المعاينة، وبمجرد الاتفاق، نتكفل بفك ونقل المكيف مجاناً بالكامل.",
        "خدمة في نفس اليوم: في معظم الحالات، يزورك مندوبنا ويفحص المكيف وينهي الصفقة في نفس يوم اتصالك.",
        "دفع كاش فوراً: يتم تسليم المبلغ نقداً (كاش) في موقعك فوراً وبدون أي تأخير."
      ]
    },
    processSteps: {
      en: [
        { title: "1. Contact Us", desc: "Share details about your AC." },
        { title: "2. Free Inspection", desc: "We assess the unit at your location." },
        { title: "3. Get an Offer", desc: "A fair, market-based price is given." },
        { title: "4. Instant Payment", desc: "Cash paid immediately, pickup handled by us." }
      ],
      ar: [
        { title: "١. تواصل معنا", desc: "شاركنا تفاصيل ونوع المكيف لديك." },
        { title: "٢. معاينة مجانية", desc: "نصل إلى موقعك لفحص حالة المكيف." },
        { title: "٣. الحصول على عرض سعر", desc: "نقدم لك سعراً عادلاً ومناسباً لسعر السوق." },
        { title: "٤. الدفع الفوري", desc: "نستلم المكيف ونقوم بنقله بعد دفع المبلغ لك كاش فوراً." }
      ]
    },
    aboutService: {
      en: "With years of experience as a reliable used AC buyer in Dammam, we're known for honest evaluation and quick, hassle-free service.",
      ar: "بفضل خبرتنا الطويلة كمشتري موثوق للمكيفات المستعملة في الدمام، اشتهرنا بالأمانة في التقييم والسرعة في إنهاء المعاملات بدون أي تعقيد."
    },
    faq: {
      en: [
        {
          question: "Do you buy non-working or completely damaged air conditioners?",
          answer: "Yes, we purchase AC units in any condition, whether they're partially damaged, completely non-functional, or simply outdated."
        },
        {
          question: "Is there any charge for inspection or pickup?",
          answer: "No, inspection is completely free, and once a price is agreed upon, we handle pickup and dismantling at no extra cost."
        },
        {
          question: "How is the price for a scrap AC determined?",
          answer: "Pricing depends on the unit's size, type, and material condition. Our representative provides a fair evaluation upon inspection."
        },
        {
          question: "Do you buy AC units from businesses as well as homes?",
          answer: "Yes, we buy air conditioners from residential, commercial, and industrial locations across Dammam."
        },
        {
          question: "How quickly can I get paid?",
          answer: "Payment is made instantly in cash once the inspection is complete and both parties agree on the price."
        }
      ],
      ar: [
        {
          question: "هل تشترون المكيفات العطلانة أو التالفة بالكامل؟",
          answer: "نعم، نحن نشتري المكيفات بأي حالة كانت، سواء كانت تالفة جزئياً، أو عطلانة تماماً، أو مجرد موديل قديم."
        },
        {
          question: "هل هناك أي رسوم على المعاينة أو النقل؟",
          answer: "لا، المعاينة مجانية تماماً، وبمجرد الاتفاق على السعر، نتكفل بفك ونقل المكيف دون أي تكلفة إضافية عليك."
        },
        {
          question: "كيف يتم تحديد سعر سكراب المكيفات؟",
          answer: "يعتمد السعر على حجم المكيف، نوعه، وحالة المواد المصنوع منها. يقدم لك مندوبنا تقييماً عادلاً ومناسباً عند المعاينة."
        },
        {
          question: "هل تشترون المكيفات من الشركات والمحلات كما تشترونها من المنازل؟",
          answer: "نعم، نشتري المكيفات من القطاعات السكنية، التجارية، والصناعية في جميع أنحاء الدمام."
        },
        {
          question: "ما هي سرعة استلام المبلغ؟",
          answer: "يتم تسليم المبلغ فوراً نقداً (كاش) بمجرد انتهاء المعاينة والاتفاق على السعر بين الطرفين."
        }
      ]
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
