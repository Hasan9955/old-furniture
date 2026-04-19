const fs = require('fs');
const path = require('path');

const ar = {
  Navbar: {
    logoScrap: "سكراب",
    logoDammam: "الدمام",
    links: { houseShifting: "نقل المنازل", services: "خدماتنا", about: "من نحن", contact: "اتصل بنا" },
    whatsapp: "واتساب",
    language: "اللغة / Language"
  },
  Hero: {
    titlePart1: "نشتري كافة أنواع السكراب في ",
    titlePart2: "الدمام",
    titlePart3: " بأفضل سعر",
    description: "متخصصون في شراء جميع أنواع السكراب، النحاس، والألمنيوم بأي كمية. نوفر خدمة الفحص والتحميل مجاناً مع دفع كاش فوري ومجزي!",
    whatsappButton: "تواصل عبر واتساب",
    callButton: "اتصل الآن",
    feature1: "أفضل سعر بالسوق", feature2: "استجابة سريعة", feature3: "نجيك وين ما كنت"
  },
  Categories: {
    title: "الأشياء اللي نشتريها",
    items: { furniture: "أثاث", appliances: "أجهزة كهربائية", housewares: "أدوات منزلية", aluminum: "ألمنيوم" }
  },
  Services: {
    titlePart1: "خدماتنا ",
    titlePart2: "المتكاملة",
    items: [
      { title: "شراء سكراب المكيفات", description: "نشتري جميع أنواع المكيفات التالفة والقديمة (سبليت، شباك، مركزي) بأفضل الأسعار وبأي حالة كانت.", keywords: "شراء سكراب مكيفات، مكيفات تالفة للبيع" },
      { title: "سكراب الألمنيوم", description: "نشتري مخلفات الألمنيوم من نوافذ، أبواب، وهياكل، ونقوم بالوزن والتقييم بكل أمانة في موقعك.", keywords: "شراء ألمنيوم مستعمل، سكراب ألمنيوم" },
      { title: "سكراب النحاس الأصفر (Brass)", description: "نشتري جميع قطع النحاس الأصفر، المواسير، والقطع الميكانيكية بأسعار منافسة جداً.", keywords: "شراء نحاس أصفر， سكراب براس" },
      { title: "سكراب المحولات الكهربائية", description: "متخصصون في شراء المحولات الكهربائية القديمة والمعطلة (Transformers) بجميع أحجامها وقدراتها.", keywords: "شراء محولات كهربائية سكراب، محولات تالفة" },
      { title: "شراء المولدات الكهربائية", description: "نشتري مولدات الطاقة المستعملة والمعطلة، سواء كانت مولدات مصانع أو مباني، ونوفر خدمة النقل.", keywords: "سكراب مولدات， شراء ماطور كهرباء مستعمل" },
      { title: "سكراب الستانلس ستيل", description: "نشتري مخلفات الستانلس ستيل من أدوات مطاعم، خزانات، وهياكل بأسعار السوق الحالية.", keywords: "شراء ستانلس ستيل، سكراب حديد مقاوم للصدأ" },
      { title: "سكراب الإنشاءات والمباني", description: "نشتري مخلفات الهدم والمواقع الإنشائية من حديد تسليح وهياكل معدنية وتخليص الموقع بالكامل.", keywords: "سكراب بناء، حديد تسليح مستعمل، شراء مخلفات هدم" },
      { title: "السكراب الإلكتروني والكهربائي", description: "نشتري الأسلاك، اللوحات الإلكترونية، والقطع الكهربائية التالفة بأفضل تقييم لوزن النحاس والمعادن.", keywords: "سكراب إلكترونيات، شراء أسلاك كهرباء" },
      { title: "سكراب النحاس الأحمر (Copper)", description: "نشتري النحاس الأحمر النقي، الكابلات المقشرة، ومواسير التبريد بأعلى سعر للكيلو في السوق.", keywords: "شراء نحاس أحمر، كابلات نحاس سكراب" },
      { title: "سكراب الحديد", description: "نشتري كميات الحديد الضخمة، الهياكل، والصفائح، مع توفر شاحنات مخصصة للتحميل والنقل الفوري.", keywords: "شراء حديد سكراب، سكراب ثقيل وخفيف" }
    ]
  },
  HouseShifting: {
    badge: "خدمة مميزة لعملائنا",
    titlePart1: "نقل منازل وعفش ",
    titlePart2: "باحتراف وأمان",
    description: "سواء تبي تنتقل من حي لحي أو من الدمام لمدينة ثانية، نجهز لك فريق نقل، تغليف، وفك وتركيب — ونسوّي لك عرض سعر واضح قبل ما نتحرك.",
    imageText1: "نقل منازل · شقق · مكاتب",
    imageText2: "عناية بعفشك",
    features: [
      { title: "فك وتركيب محترف", desc: "فريق يفك ويركب غرف النوم والمطابخ والمكيفات بدون خدوش." },
      { title: "تغليف وتأمين", desc: "تغليف للزجاج والأجهزة الحساسة حتى يوصل عفشك سليم." },
      { title: "نقل بسيارات مجهزة", desc: "سيارات مغطاة ومناسبة لحجم العفش داخل الدمام وخارجها." },
      { title: "مواعيد واضحة", desc: "نحدد معك الوقت ونلتزم بالوصول والتسليم قدر الإمكان." }
    ],
    whatsappButton: "اطلب عرض سعر واتساب",
    callButton: "اتصل الآن",
    note: "اذكر نوع العفش والحي والدور تقريباً عشان نقدر نعطيك تقدير أوضح.",
    waMessage: "السلام عليكم، أبي أستفسر عن خدمة نقل العفش / نقل المنزل."
  },
  Experience: {
    title: "خبرة بالسوق وثقة تمتد لسنوات طويلة",
    description: "حنا خيارك الأول لأهل الدمام والشرقية في بيع وشراء الأثاث المستعمل ونقل العفش، وبشهادة عملائنا.",
    stats: [
      { number: "+15", label: "سنوات الخبرة المتواصلة" },
      { number: "+5000", label: "عميل يثق بخدماتنا" },
      { number: "+8000", label: "عملية شراء ونقل مسجلة" }
    ]
  },
  About: {
    titlePart1: "ليش تختارنا في ",
    titlePart2: "الدمام؟",
    description: "حنا متخصصين بشراء الأثاث المستعمل بالدمام والخبر والظهران. نقيم عفشك صح ونعطيك أفضل سعر، ونخلصك بسرعة وبدون أي مشاوير متعبة.",
    features: [
      { title: "أسعار ممتازة ترضيك", desc: "نعطيك تقييم عادل لجميع أنواع الأثاث والمكيفات والأجهزة." },
      { title: "نجيك بنفس اليوم", desc: "بمجرد ما تدق علينا، نجيك للمعاينة ونعطيك حقك كاش بوقتها." },
      { title: "فك ونقل العفش علينا", desc: "حنا نشيل العفش ونفكه مجاناً بدون ما تدفع ولا ريال." }
    ],
    whereToServe: "وين نخدمك؟",
    areas: ["الدمام (كل الأحياء)", "الخبر", "الظهران"],
    callActionDesc: "دق علينا الحين ومندوبنا يوصلك لمعاينة أثاثك مجاناً.",
    callActionBtn: "اتصل الآن:"
  },
  ServiceAreas: {
    title: "مناطق التغطية لخدماتنا",
    areas: ["الدمام", "الخبر", "الظهران"]
  },
  Testimonials: {
    titlePart1: "آراء ",
    titlePart2: "عملائنا",
    description: "شهادات نعتز بها من عملائنا الكرام في الدمام والخبر والظهران",
    reviews: [
      { name: "أحمد عبدالله", text: "خدمة ممتازة وسريعة، دقيت عليهم وجو شافوا العفش بنفس اليوم. أنصح بالتعامل معهم وبقوة، تقييمهم للعفش كان منصف جداً وعطوني حقي كاش بوقتها." },
      { name: "فهد العتيبي", text: "نقلت عفشي معهم واشتريت منهم بعد، تيم محترف جداً والأسعار أكثر من ممتازة. صراحة من أفضل اللي تعاملت معهم بالدمام." },
      { name: "خالد سعيد", text: "مصداقية وأمانة في الشراء. بعت لهم مكيفات وأجهزة مستعملة وكان السعر يرضي. فكوا ونقلوا كل شيء مجاناً وبدون أي قروشة." }
    ]
  },
  FAQ: {
    title: "الأسئلة الشائعة",
    description: "كل ما تحتاج معرفته عن خدمة شراء الأثاث المستعمل والنقل",
    items: [
      { q: "هل تشترون جميع أنواع الأثاث؟", a: "نعم، نشتري غرف النوم، المطابخ، الأجهزة الكهربائية، المكيفات، المجالس، والأثاث المكتبي." },
      { q: "كيف يتم تحديد سعر الأثاث؟", a: "يقوم مندوبنا بزيارتك لمعاينة الأثاث على الطبيعة، وتقييمه بناءً على حالته ومدى صلاحيته للاستخدام، ونعطيك أفضل سعر في السوق." },
      { q: "هل خدمة المعاينة والفك مجانية؟", a: "بالتأكيد، المعاينة مجانية بالكامل. وفي حال تم الإنفاق، نتحمل تكاليف فك الأثاث ونقله بالكامل." },
      { q: "متى يتم دفع قيمة الأثاث؟", a: "يتم الدفع نقداً وفوراً عند الاتفاق واستلام الأثاث مباشرة." },
      { q: "هل تقدمون خدمة نقل المنازل؟", a: "نعم، نوفر نقل عفش ومنازل مع فك وتركيب وتغليف حسب الاتفاق. راجع قسم «نقل المنازل» في أعلى الصفحة أو تواصل معنا لوصف العفش والموقع." }
    ]
  },
  Footer: {
    desc: "أفضل محل شراء أثاث مستعمل في الدمام والمنطقة الشرقية. نعطيك أفضل الأسعار ونشيل العفش بسرعة وبدون تعب.",
    quickLinks: "روابط سريعة",
    contactUs: "تواصل معنا",
    rights: "جميع الحقوق محفوظة",
    madeWith: "تصميم وتطوير بكل ❤️"
  },
  FloatingWhatsApp: {
    label: "تواصل عبر واتساب"
  }
};

const en = {
  Navbar: {
    logoScrap: "Scrap ",
    logoDammam: "Dammam",
    links: { houseShifting: "Moving", services: "Services", about: "About Us", contact: "Contact" },
    whatsapp: "WhatsApp",
    language: "Language"
  },
  Hero: {
    titlePart1: "We buy all types of scrap in ",
    titlePart2: "Dammam",
    titlePart3: " at the best price",
    description: "Specialized in buying all types of scrap, copper, and aluminum in any quantity. We provide free inspection and loading with instant and rewarding cash payment!",
    whatsappButton: "Contact via WhatsApp",
    callButton: "Call Now",
    feature1: "Best Market Price", feature2: "Fast Response", feature3: "We Come to You"
  },
  Categories: {
    title: "Items We Buy",
    items: { furniture: "Furniture", appliances: "Appliances", housewares: "Housewares", aluminum: "Aluminum" }
  },
  Services: {
    titlePart1: "Our Integrated ",
    titlePart2: "Services",
    items: [
      { title: "Buying A/C Scrap", description: "We buy all types of old and damaged air conditioners (Split, Window, Central) at the best prices, regardless of their condition.", keywords: "A/C scrap buyer, sell damaged A/C" },
      { title: "Aluminum Scrap", description: "We buy aluminum waste from windows, doors, and structures. We weigh and evaluate honestly at your location.", keywords: "buy used aluminum, aluminum scrap" },
      { title: "Brass Scrap", description: "We buy all brass parts, pipes, and mechanical pieces at highly competitive prices.", keywords: "buy brass, brass scrap" },
      { title: "Electrical Transformer Scrap", description: "Specialists in buying old and broken electrical transformers of all sizes and capacities.", keywords: "transformer scrap, damaged transformers" },
      { title: "Buying Generators", description: "We buy used and broken power generators, whether for factories or buildings, and provide transport.", keywords: "generator scrap, buy used generators" },
      { title: "Stainless Steel Scrap", description: "We buy stainless steel waste from restaurant equipment, tanks, and structures at current market prices.", keywords: "buy stainless steel, stainless scrap" },
      { title: "Construction and Building Scrap", description: "We buy demolition and construction site waste, including rebar and metal structures, with full site clearance.", keywords: "construction scrap, used rebar, demolition waste" },
      { title: "Electronic and Electrical Scrap", description: "We buy wires, electronic boards, and damaged electrical parts at the best evaluation for copper and metal weight.", keywords: "electronics scrap, buy electrical wires" },
      { title: "Copper Scrap", description: "We buy pure copper, stripped cables, and refrigeration pipes at the highest price per kilo in the market.", keywords: "buy copper, copper cables scrap" },
      { title: "Iron Scrap", description: "We buy huge quantities of iron, structures, and plates, with specialized trucks available for immediate loading and transport.", keywords: "buy iron scrap, heavy and light scrap" }
    ]
  },
  HouseShifting: {
    badge: "Premium Service For Our Clients",
    titlePart1: "House & Furniture Moving ",
    titlePart2: "With Professionalism & Safety",
    description: "Whether you're moving neighborhoods or to another city from Dammam, we prepare a moving, packing, dismantling, and installation team — providing a clear quote before we start.",
    imageText1: "Moving Houses · Apartments · Offices",
    imageText2: "Care For Your Furniture",
    features: [
      { title: "Professional Dismantling & Assembly", desc: "A team that dismantles and installs bedrooms, kitchens, and A/Cs without scratches." },
      { title: "Packing & Securing", desc: "Packaging for glass and sensitive appliances so your furniture arrives safely." },
      { title: "Transport in Equipped Trucks", desc: "Covered trucks suitable for furniture size inside and outside Dammam." },
      { title: "Clear Timings", desc: "We set the time with you and commit to arrival and delivery as much as possible." }
    ],
    whatsappButton: "Request Quote via WhatsApp",
    callButton: "Call Now",
    note: "Mention the type of furniture, neighborhood, and floor approximately so we can give you a clearer estimate.",
    waMessage: "Hello, I want to inquire about the furniture/house moving service."
  },
  Experience: {
    title: "Market Experience & Trust Spanning Years",
    description: "We are the first choice for the residents of Dammam and the Eastern Province regarding buying, selling used furniture, and moving furniture, as attested by our clients.",
    stats: [
      { number: "+15", label: "Years of Continuous Experience" },
      { number: "+5000", label: "Clients Trust Our Services" },
      { number: "+8000", label: "Purchases and Moves Recorded" }
    ]
  },
  About: {
    titlePart1: "Why Choose Us In ",
    titlePart2: "Dammam?",
    description: "We specialize in buying used furniture in Dammam, Khobar, and Dhahran. We evaluate your furniture properly, give you the best price, and finish quickly without exhausting trips.",
    features: [
      { title: "Excellent Prices That Satisfy You", desc: "We give you a fair evaluation for all types of furniture, A/Cs, and appliances." },
      { title: "We Come The Same Day", desc: "As soon as you call us, we come for inspection and give you your cash immediately." },
      { title: "Dismantling & Moving Is On Us", desc: "We carry the furniture and dismantle it for free without you paying a riyal." }
    ],
    whereToServe: "Where Do We Serve?",
    areas: ["Dammam (All Neighborhoods)", "Khobar", "Dhahran"],
    callActionDesc: "Call us now and our representative will arrive to inspect your furniture for free.",
    callActionBtn: "Call Now:"
  },
  ServiceAreas: {
    title: "Our Service Coverage Areas",
    areas: ["Dammam", "Khobar", "Dhahran"]
  },
  Testimonials: {
    titlePart1: "Our Clients' ",
    titlePart2: "Reviews",
    description: "Testimonials we are proud of from our esteemed clients in Dammam, Khobar, and Dhahran.",
    reviews: [
      { name: "Ahmed Abdullah", text: "Excellent and fast service! I called them, and they came to see the furniture on the same day. I highly recommend dealing with them; their evaluation of the furniture was very fair and they gave me my cash on the spot." },
      { name: "Fahd Al-Otaibi", text: "I moved my furniture with them and bought from them too. A highly professional team and excellent prices. Honestly one of the best I've dealt with in Dammam." },
      { name: "Khalid Saeed", text: "Credibility and honesty in purchasing. I sold them A/Cs and used appliances, and the price was satisfying. They dismantled and moved everything for free and without any hassle." }
    ]
  },
  FAQ: {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about the used furniture purchasing and moving service.",
    items: [
      { q: "Do you buy all types of furniture?", a: "Yes, we buy bedrooms, kitchens, electrical appliances, A/Cs, majlis, and office furniture." },
      { q: "How is the furniture price determined?", a: "Our representative visits you to inspect the furniture, evaluates it based on its condition and usability, and gives you the best market price." },
      { q: "Is the inspection and dismantling service free?", a: "Absolutely. The inspection is completely free. If an agreement is reached, we cover all dismantling and moving costs." },
      { q: "When is the furniture value paid?", a: "Payment is made in cash immediately upon agreement and receiving the furniture." },
      { q: "Do you provide house moving services?", a: "Yes, we provide furniture and house moving with dismantling, installation, and packaging depending on the agreement. Check the 'Moving' section at the top of the page or contact us." }
    ]
  },
  Footer: {
    desc: "The best shop for buying used furniture in Dammam and the Eastern Province. We give you the best prices and remove the furniture quickly and effortlessly.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    rights: "All rights reserved",
    madeWith: "Designed and developed with ❤️"
  },
  FloatingWhatsApp: {
    label: "Contact via WhatsApp"
  }
};

fs.writeFileSync('c:/Projects of Hasan/my_store/src/i18n/dictionaries/ar.json', JSON.stringify(ar, null, 2));
fs.writeFileSync('c:/Projects of Hasan/my_store/src/i18n/dictionaries/en.json', JSON.stringify(en, null, 2));
console.log('Dictionaries generated!');
