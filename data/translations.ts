import { 
  PlayCircle, Mic, Share2, FileText, Search, BrainCircuit, LayoutGrid, Lock, MonitorPlay, Braces, Target,
  Send, Bot, Replace, Stars, Link, BarChart3, Reply, Flag, MailPlus, UserCheck, Settings2, Link2, Megaphone,
  FileJson, BarChart, Users, Store, Package, GitBranch, Database, Cloud, Zap, ShieldCheck
} from "lucide-react";
import type { Service } from './types';

export const translations = {
  ar: {
    nav: [
      { label: "الرئيسية", href: "#/" },
      { label: "الخدمات", href: "#/services" },
      { label: "الأسعار", href: "#/pricing" },
      { label: "تواصل معنا", href: "#/contact" },
    ],
    login: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    loginPage: {
        title: "أهلاً بعودتك!",
        subtitle: "سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك.",
        emailLabel: "البريد الإلكتروني أو رقم الهاتف",
        passwordLabel: "كلمة المرور",
        loginButton: "تسجيل الدخول",
        forgotPassword: "هل نسيت كلمة المرور؟",
        orContinueWith: "أو المتابعة باستخدام",
        googleButton: "المتابعة باستخدام جوجل",
        whatsappButton: "المتابعة باستخدام واتساب",
        noAccount: "ليس لديك حساب؟",
        signUpLink: "إنشاء حساب"
    },
    signupPage: {
        title: "إنشاء حساب جديد",
        subtitle: "انضم إلى منصتنا وابدأ في تنمية أعمالك اليوم.",
        nameLabel: "الاسم الكامل",
        emailLabel: "البريد الإلكتروني أو رقم الهاتف",
        passwordLabel: "كلمة المرور",
        confirmPasswordLabel: "تأكيد كلمة المرور",
        signupButton: "إنشاء حساب",
        orContinueWith: "أو التسجيل باستخدام",
        googleButton: "التسجيل باستخدام جوجل",
        whatsappButton: "التسجيل باستخدام واتساب",
        haveAccount: "لديك حساب بالفعل؟",
        loginLink: "تسجيل الدخول"
    },
    dashboardTitle: "لوحة التحكم",
    dashboardSubtitle: "مرحبًا بك في مركز أدوات التسويق الرقمي. اختر أداة للبدء.",
    socialPostGenerator: {
      title: "مولد منشورات السوشيال ميديا",
      subtitle: "أنشئ منشورات جذابة لمنصات التواصل الاجتماعي في ثوانٍ.",
      topicLabel: "موضوع المنشور",
      topicPlaceholder: "مثال: إطلاق منتج جديد من القهوة",
      platformLabel: "اختر المنصة",
      toneLabel: "اختر النبرة",
      toneOptions: { professional: "احترافي", friendly: "ودي", humorous: "فكاهي" },
      generateButton: "إنشاء المنشور",
      generatingButton: "جاري الإنشاء...",
      resultTitle: "المنشور المقترح",
      copyButton: "نسخ النص",
      copiedButton: "تم النسخ!",
      error: "عذرًا, حدث خطأ. يرجى المحاولة مرة أخرى.",
    },
    seoArticleGenerator: {
      title: "مولد مقالات SEO",
      subtitle: "أنشئ مقالات كاملة ومحسنة لمحركات البحث في دقائق.",
      topicLabel: "موضوع المقال",
      topicPlaceholder: "مثال: أفضل استراتيجيات التسويق بالمحتوى لعام 2024",
      keywordsLabel: "الكلمات المفتاحية (افصل بينها بفاصلة)",
      keywordsPlaceholder: "تسويق المحتوى, سيو, استراتيجية تسويق",
      toneLabel: "اختر النبرة",
      toneOptions: { informational: "معلوماتي", persuasive: "إقناعي", casual: "غير رسمي" },
      generateButton: "إنشاء المقال",
      generatingButton: "جاري الكتابة...",
      resultTitle: "المقال المُنشأ",
      copyButton: "نسخ المقال",
      copiedButton: "تم النسخ!",
      error: "عذرًا, حدث خطأ. يرجى المحاولة مرة أخرى.",
    },
    smartSearch: {
      title: "البحث الذكي (AI)",
      subtitle: "احصل على إجابات دقيقة ومحدثة من الإنترنت مدعومة بالمصادر.",
      queryLabel: "ما الذي تبحث عنه؟",
      queryPlaceholder: "مثال: ما هي آخر تحديثات خوارزميات جوجل؟",
      generateButton: "ابحث الآن",
      generatingButton: "جاري البحث...",
      resultTitle: "نتائج البحث",
      sourcesTitle: "المصادر",
      error: "عذرًا, حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.",
    },
    contactLabel: "تواصل",
    heroTitle: "منصة إعلانية متكاملة مدعومة بالذكاء الاصطناعي",
    heroSubtitle: "أكثر من 50 خدمة في مكان واحد لتبسيط التسويق الرقمي، إدارة المحتوى، تحسين محركات البحث، وتوسيع علامتك التجارية. حلول ذكية وفعالة مصممة للسوق المصري والعربي.",
    heroBtnStart: "ابدأ الآن",
    heroBtnDiscover: "اكتشف الخدمات",
    serviceTabs: [
      { id: 'core', title: 'مكونات المنصة الأساسية' },
      { id: 'advanced', title: 'خدمات النشر والنمو المتقدمة' },
      { id: 'seo', title: 'أدوات تحسين السيو والميتا' },
      { id: 'integrated', title: 'أنظمة إضافية متكاملة' },
    ],
    coreServices: [
        { 
          icon: PlayCircle, title: "نظام عرض الفيديو", slug: "video-display-system",
          path: "#/app/tool/video-display-system",
          desc: "مكتبة فيديو عامة وخاصة، إعلانات داخلية، وعينات خدمات مع رفع فيديوهات العملاء.",
          features: ["مكتبة فيديو عامة وخاصة", "دعم إعلانات الفيديو الداخلية", "تصنيف الفيديوهات (إعلانات، شروحات)", "رفع فيديوهات خاصة بالحملات"],
          benefits: ["زيادة تفاعل الجمهور بالمحتوى المرئي", "عرض الخدمات وعينات العمل بشكل احترافي", "إدارة مركزية لمحتوى الفيديو", "تحسين تجربة العميل"]
        },
        { 
          icon: Mic, title: "تحويل النص إلى كلام (AI TTS)", slug: "ai-text-to-speech",
           path: "#/app/tool/ai-text-to-speech",
          desc: "يدعم العربية واللهجة المصرية، أصوات متعددة، وتخصيص النبرة للإعلانات.",
          features: ["دعم لغات متعددة (العربية، الإنجليزية)", "أصوات ذكورية وأنثوية متنوعة", "تخصيص نبرة الصوت (رسمي، ودي)", "تنزيل الصوتيات أو دمجها بالفيديو"],
          benefits: ["إنشاء تعليقات صوتية احترافية بسرعة", "توفير تكاليف التعليق الصوتي البشري", "إضافة طابع شخصي للمحتوى المرئي", "الوصول لجمهور يفضل المحتوى الصوتي"]
        },
        { 
          icon: Share2, title: "مولد منشورات السوشيال ميديا", slug: "social-post-generator",
           path: "#/app/tool/social-post-generator",
          desc: "AI يولد نص + صور + هاشتاجات لمنصات متعددة مع جدولة النشر التلقائي.",
          features: ["توليد محتوى نصي وصوري بالذكاء الاصطناعي", "اقتراح هاشتاجات رائجة", "دعم كافة المنصات (فيسبوك، انستجرام، ...)", "جدولة النشر التلقائي"],
          benefits: ["توفير الوقت والجهد في إنشاء المحتوى", "الحفاظ على تواجد مستمر على الشبكات الاجتماعية", "زيادة التفاعل من خلال محتوى جذاب", "توحيد هوية العلامة التجارية عبر المنصات"]
        },
        { 
          icon: FileText, title: "مولد مقالات SEO", slug: "seo-article-generator",
           path: "#/app/tool/seo-article-generator",
          desc: "مقالات كاملة محسنة للـSEO مع نشر مباشر أو مجدول في المدونة.",
          features: ["إنشاء مقالات طويلة ومحسنة للـSEO", "تحسين تلقائي للعناوين والوصف", "دعم لغات متعددة", "نشر مباشر أو مجدول في المدونة"],
          benefits: ["تصدر نتائج البحث بكلمات مفتاحية مستهدفة", "زيادة الزيارات العضوية للموقع", "بناء سلطة وموثوقية في مجالك", "توفير تكاليف كتابة المحتوى"]
        },
        { 
          icon: Search, title: "نظام فحص المواقع والزحف", slug: "website-testing-crawling",
           path: "#/app/tool/website-testing-crawling",
          desc: "زحف كامل للموقع وتقارير SEO وتحليل سرعة وأخطاء فنية.",
          features: ["تحليل شامل للسيو الداخلي والخارجي", "كشف الأخطاء التقنية (404, 301)", "تحليل سرعة تحميل الصفحات", "تقارير PDF قابلة للتنزيل"],
          benefits: ["تحسين أداء الموقع بشكل كامل", "رفع ترتيب الموقع في جوجل", "تحسين تجربة المستخدم (UX)", "الحصول على رؤى قابلة للتنفيذ"]
        },
        { 
          icon: BrainCircuit, title: "نظام بحث ذكي (AI)", slug: "smart-ai-search",
           path: "#/app/tool/smart-ai-search",
          desc: "يجمع بيانات حية من الإنترنت لتحسين دقة المحتوى والتحليلات.",
          features: ["بحث مباشر في جوجل، يوتيوب، تويتر", "جمع بيانات حية لإنشاء المحتوى", "تحسين دقة التحليلات والتقارير", "فهم اتجاهات السوق والمنافسين"],
          benefits: ["إنشاء محتوى مبني على بيانات حديثة", "الحصول على ميزة تنافسية", "تحسين استراتيجيات التسويق", "فهم أعمق للجمهور المستهدف"]
        },
        { 
          icon: LayoutGrid, title: "نظام تدوين متقدم", slug: "advanced-blogging-system",
           path: "#/app/tool/advanced-blogging-system",
          desc: "نشر تلقائي بعد موافقة المشرف، ودعم مقالات الصوت والفيديو، وأرشفة تلقائية.",
          features: ["نظام موافقة على النشر للمقالات", "دعم المقالات المكتوبة والمسموعة والمرئية", "أرشفة تلقائية في جوجل", "نظام تقييم للمقالات"],
          benefits: ["إثراء المحتوى بأشكال متنوعة", "ضمان جودة المحتوى المنشور", "تسريع عملية الفهرسة في جوجل", "زيادة مشاركة القراء"]
        },
        { 
          icon: Lock, title: "نظام تسجيل دخول بسيط وآمن", slug: "secure-login-system",
           path: "#/app/tool/secure-login-system",
          desc: "تسجيل بالهاتف وكلمة المرور، مع دعم الدخول عبر واتساب وجوجل.",
          features: ["تسجيل الدخول برقم الهاتف", "تسجيل الدخول بحسابات جوجل وواتساب", "استعادة كلمة المرور بشكل آمن", "لوحة تحكم شخصية لكل عميل"],
          benefits: ["تجربة تسجيل دخول سهلة وسريعة", "تأمين حسابات العملاء بأفضل المعايير", "الوصول السهل للخدمات والأدوات", "إدارة مركزية لمعلومات العميل"]
        },
        { 
          icon: MonitorPlay, title: "مركز عرض حسابات السوشيال ميديا", slug: "social-media-hub",
           path: "#/app/tool/social-media-hub",
          desc: "عرض حسابات ومنشورات العملاء مع إحصائيات تفاعل مدمجة.",
          features: ["ربط وعرض حسابات السوشيال ميديا", "عرض المنشورات الأخيرة تلقائيًا", "إحصائيات تفاعل مدمجة (إعجابات، تعليقات)", "عرض الحملات الإعلانية الحية"],
          benefits: ["توحيد عرض التواجد الرقمي للعميل", "إبراز قوة الحسابات وزيادة المتابعين", "مراقبة الأداء من مكان واحد", "تعزيز الشفافية مع العملاء"]
        },
        { 
          icon: Braces, title: "إعلانات وقوالب داخلية", slug: "internal-ads-templates",
           path: "#/app/tool/internal-ads-templates",
          desc: "قوالب إعلانية جاهزة (نص + صور) ونظام إدارة إعلانات داخلي.",
          features: ["مكتبة قوالب إعلانية جاهزة", "تخصيص القوالب بسهولة", "نظام إدارة إعلانات داخلي", "إبراز عروض وخصومات العملاء"],
          benefits: ["إطلاق حملات إعلانية بسرعة", "توفير تكاليف التصميم الإعلاني", "الحصول على إلهام لأفكار إعلانية جديدة", "زيادة فعالية الحملات"]
        },
        { 
          icon: Target, title: "أدوات تسويق ذكية", slug: "smart-marketing-tools",
           path: "#/app/tool/smart-marketing-tools",
          desc: "يقترح الجمهور المستهدف، تحليل المنافسين، ويوصي بخطط الحملات.",
          features: ["اقتراح شرائح الجمهور (العمر، الاهتمامات)", "تحليل تلقائي للمنافسين", "توصيات بخطط واستراتيجيات الحملات", "توليد أفكار إعلانية إبداعية"],
          benefits: ["استهداف الجمهور الصحيح بدقة", "التفوق على المنافسين باستراتيجيات ذكية", "تحسين عائد الاستثمار (ROI)", "إطلاق حملات مبتكرة وفعالة"]
        }
    ],
    advancedServices: [
        { 
          icon: Send, title: "النشر التلقائي الشامل", slug: "universal-auto-publishing",
           path: "#/app/tool/universal-auto-publishing",
          desc: "نشر المحتوى عبر منصات متعددة دفعة واحدة مع جدولة زمنية متقدمة.",
          features: ["نشر متزامن على (فيسبوك، تويتر، انستجرام...)", "جدولة متقدمة (يوم، ساعة، منطقة زمنية)", "إدارة المحتوى من تقويم واحد", "تقارير أداء موحدة"],
          benefits: ["توفير هائل للوقت والجهد", "ضمان الاتساق في النشر عبر المنصات", "الوصول للجمهور في أفضل أوقات التفاعل", "تبسيط إدارة المحتوى"]
        },
        { 
          icon: Bot, title: "نظام زحف متقدم", slug: "advanced-crawling-system",
           path: "#/app/tool/advanced-crawling-system",
          desc: "زحف لمواقع المنافسين، استخراج الكلمات المفتاحية، ومراقبة الروابط الخلفية.",
          features: ["تحليل مواقع المنافسين بالكامل", "استخراج الكلمات المفتاحية التي يستخدمونها", "مراقبة بناء الروابط الخلفية للمنافسين", "تقارير دورية لتحسين الترتيب"],
          benefits: ["كشف استراتيجيات المنافسين الناجحة", "العثور على فرص كلمات مفتاحية جديدة", "بناء استراتيجية روابط خلفية قوية", "تحسين مستمر لترتيبك في جوجل"]
        },
        { 
          icon: Replace, title: "مدير الحملات المتعددة", slug: "multi-campaign-manager",
           path: "#/app/tool/multi-campaign-manager",
          desc: "إدارة عشرات الحملات وتتبع الأداء لحظيًا عبر المنصات.",
          features: ["لوحة تحكم موحدة لإدارة الحملات", "تتبع الأداء لحظيًا (فيسبوك، جوجل...)", "مقارنة أداء الحملات المختلفة", "توصيات آلية لتحسين العائد"],
          benefits: ["رؤية شاملة لأداء كل الحملات", "اتخاذ قرارات سريعة ومبنية على البيانات", "تحسين توزيع الميزانية الإعلانية", "زيادة فعالية الحملات الإعلانية"]
        },
        { 
          icon: Stars, title: "الناشر الفيروسي الذكي", slug: "viral-ai-publisher",
           path: "#/app/tool/viral-ai-publisher",
          desc: "يكتشف الترندات ويقترح محتوى قابل للانتشار مع تحسينات بصرية تلقائية.",
          features: ["رصد الترندات والمواضيع الرائجة", "اقتراح أفكار محتوى فيروسي", "تحسين بصري تلقائي للصور والفيديوهات", "تحسين الهاشتاجات لزيادة الانتشار"],
          benefits: ["الاستفادة من الترندات لزيادة الوصول", "إنشاء محتوى يشاركه الجمهور بكثافة", "زيادة الوعي بالعلامة التجارية بسرعة", "تحقيق نمو عضوي كبير"]
        },
        { 
          icon: Link, title: "نظام الروابط الذكية", slug: "smart-links-system",
           path: "#/app/tool/smart-links-system",
          desc: "روابط قصيرة مخصصة للحملات مع تتبع النقرات والمصادر وإعادة توجيه جغرافي.",
          features: ["إنشاء روابط قصيرة تحمل اسم العلامة التجارية", "تتبع عدد النقرات ومصادرها (جغرافيًا، نوع الجهاز)", "إعادة توجيه الروابط بناءً على الموقع الجغرافي", "روابط مخصصة لكل حملة"],
          benefits: ["قياس دقيق لأداء الحملات", "تحسين تجربة المستخدم بروابط نظيفة", "فهم سلوك الجمهور بشكل أفضل", "زيادة الثقة في الروابط المنشورة"]
        },
        { 
          icon: BarChart3, title: "مركز التحليلات", slug: "analytics-hub",
           path: "#/app/tool/analytics-hub",
          desc: "تحليل كامل لحركة المرور، تتبع الحملات المدفوعة والمجانية، ومراقبة عائد الاستثمار.",
          features: ["تحليل مصادر الزيارات (عضوي، مدفوع، مباشر)", "تتبع أداء الحملات المجانية والمدفوعة", "مراقبة عائد الاستثمار (ROI)", "تقارير أداء الكلمات المفتاحية"],
          benefits: ["فهم شامل لأداء الموقع والتسويق", "تحديد القنوات الأكثر فعالية", "تحسين الإنفاق الإعلاني", "اتخاذ قرارات استراتيجية مستنيرة"]
        },
        { 
          icon: Reply, title: "نظام التفاعل التلقائي", slug: "auto-engagement-system",
           path: "#/app/tool/auto-engagement-system",
          desc: "ردود آلية على تعليقات العملاء بناءً على كلمات مفتاحية محددة.",
          features: ["إعداد ردود تلقائية على التعليقات والرسائل", "تحديد كلمات مفتاحية لتفعيل الردود", "تخصيص الردود لتناسب نبرة العلامة التجارية", "التكامل مع حملات البيع الإضافي"],
          benefits: ["توفير الوقت في إدارة التعليقات", "ضمان عدم إهمال أي استفسار من العملاء", "زيادة التفاعل والمشاركة على المنشورات", "تحويل المتفاعلين إلى عملاء محتملين"]
        },
        { 
          icon: Flag, title: "إدارة السمعة على الإنترنت (ORM)", slug: "online-reputation-management",
           path: "#/app/tool/online-reputation-management",
          desc: "يراقب ذكر العلامة التجارية عبر الويب ويقدم تقارير تحليل المشاعر.",
          features: ["مراقبة ذكر العلامة التجارية (Mentions) عبر الويب", "تحليل المشاعر (إيجابي، سلبي، محايد)", "تنبيهات فورية عند ذكر العلامة التجارية", "تقارير دورية عن حالة السمعة الرقمية"],
          benefits: ["حماية سمعة العلامة التجارية", "التعامل السريع مع المراجعات السلبية", "فهم تصور الجمهور لعلامتك التجارية", "تحسين العلاقات العامة الرقمية"]
        },
        { 
          icon: MailPlus, title: "تكامل تسويق البريد الإلكتروني", slug: "email-marketing-integration",
           path: "#/app/tool/email-marketing-integration",
          desc: "حملات بريد إلكتروني مدعومة بالذكاء الاصطناعي مع قوالب جاهزة وتتبع الأداء.",
          features: ["إنشاء حملات بريد إلكتروني بالذكاء الاصطناعي", "مكتبة قوالب بريد إلكتروني جاهزة", "تتبع معدلات الفتح والنقر", "تقسيم القوائم البريدية"],
          benefits: ["التواصل المباشر والفعال مع العملاء", "زيادة المبيعات من خلال العروض المستهدفة", "بناء ولاء العملاء", "قياس دقيق لفعالية الحملات البريدية"]
        }
    ],
    seoTools: [
        { 
          icon: UserCheck, title: "صفحات ملفات العملاء الشخصية", slug: "client-profile-pages",
           path: "#/app/tool/client-profile-pages",
          desc: "صفحة ملف شخصي لكل عميل محسنة لمحركات البحث (SEO) تلقائيًا.",
          features: ["إنشاء تلقائي لصفحة ملف شخصي", "تحسين الصفحة لمحركات البحث (SEO)", "تضمين معلومات العمل والروابط الاجتماعية", "هيكلة بيانات Schema.org تلقائيًا"],
          benefits: ["زيادة الظهور في نتائج البحث المحلية", "بناء موثوقية العلامة التجارية على الإنترنت", "الحصول على رابط خلفي (Backlink) قوي", "تحسين تجربة البحث للمستخدمين"]
        },
        { 
          icon: Settings2, title: "مدير الميتا (Meta Manager)", slug: "meta-manager",
           path: "#/app/tool/meta-manager",
          desc: "يولد عناوين وأوصاف ميتا تلقائيًا مع تكامل Schema.org.",
          features: ["توليد تلقائي لعناوين وأوصاف الميتا", "تكامل مع Schema.org للنتائج الغنية", "دعم Open Graph (OG) للمشاركة على السوشيال ميديا", "تحسين جماعي للصفحات"],
          benefits: ["تحسين نسبة النقر إلى الظهور (CTR) في جوجل", "توفير الوقت في تحسين الصفحات يدويًا", "ضمان ظهور احترافي عند مشاركة الروابط", "تحسين فهم محركات البحث لمحتوى الموقع"]
        },
        { 
          icon: Link2, title: "روابط URL ذكية", slug: "smart-urls",
           path: "#/app/tool/smart-urls",
          desc: "روابط نظيفة وصديقة لمحركات البحث تحمل اسم العميل والمنصة.",
          features: ["إنشاء روابط URL نظيفة وصديقة للـSEO", "تضمين اسم العميل وعنوان المحتوى تلقائيًا", "هيكل ثابت وواضح للروابط", "تحسين تلقائي للروابط باللغة العربية"],
          benefits: ["تحسين ترتيب الصفحات في محركات البحث", "تجربة مستخدم أفضل مع روابط واضحة", "زيادة الثقة والمصداقية", "سهولة مشاركة وتذكر الروابط"]
        },
        { 
          icon: Megaphone, title: "النشر المُعزز بالعلامة التجارية", slug: "branded-publishing",
           path: "#/app/tool/branded-publishing",
          desc: "كل المحتوى يعرض 'Powered by Cairoeg Advertising' لزيادة الموثوقية.",
          features: ["إضافة علامة 'Powered by Cairoeg' للمحتوى", "رابط إلى ملف العميل على المنصة", "خيارات تخصيص للعلامة التجارية", "تطبيق على المقالات والملفات الشخصية"],
          benefits: ["زيادة الموثوقية والمصداقية", "الاستفادة من قوة العلامة التجارية للمنصة", "الحصول على رابط خلفي إضافي", "تحسين الصورة الاحترافية للعميل"]
        },
        { 
          icon: Send, title: "أرشفة جوجل التلقائية", slug: "auto-google-indexing",
           path: "#/app/tool/auto-google-indexing",
          desc: "يتم تقديم كل منشور أو صفحة جديدة تلقائيًا إلى Google لفهرسة سريعة.",
          features: ["تقديم تلقائي للمحتوى الجديد إلى Google", "استخدام Google Indexing API", "تحديث خرائط الموقع (Sitemap) تلقائيًا", "تقارير عن حالة الفهرسة"],
          benefits: ["فهرسة المحتوى الجديد في دقائق بدلاً من أيام", "التفوق على المنافسين في نشر الأخبار والمواضيع الرائجة", "ضمان فهرسة كل صفحات الموقع", "تحسين ظهور المحتوى في نتائج البحث بسرعة"]
        },
        { 
          icon: FileJson, title: "تقارير وتحسينات SEO", slug: "seo-reports-optimization",
           path: "#/app/tool/seo-reports-optimization",
          desc: "تدقيق SEO شخصي لكل عميل مع توصيات بالكلمات المفتاحية وتتبع الترتيب.",
          features: ["تدقيق SEO شامل للموقع", "توصيات مخصصة بالكلمات المفتاحية", "تتبع ترتيب الكلمات المفتاحية في جوجل", "تقارير دورية عن التقدم المحرز"],
          benefits: ["خارطة طريق واضحة لتحسين الـSEO", "استهداف الكلمات المفتاحية الصحيحة", "قياس دقيق لنتائج جهود الـSEO", "تحسين مستمر للأداء في البحث"]
        },
        { 
          icon: BarChart, title: "أفكار ومخططات متقدمة", slug: "advanced-seo-schemes",
           path: "#/app/tool/advanced-seo-schemes",
          desc: "دعم Knowledge Graph لنتائج غنية في جوجل وتكامل مع Google My Business.",
          features: ["دعم مخططات Knowledge Graph", "تكامل مع Google My Business (GMB)", "بناء مجموعات مواضيع (Topic Clusters)", "اقتراحات لتحسين المحتوى للبحث الصوتي"],
          benefits: ["الحصول على ظهور بارز في نتائج البحث (Rich Results)", "تحسين الـSEO المحلي بشكل كبير", "بناء سلطة موضوعية قوية في مجالك", "الاستعداد لمستقبل البحث"]
        }
    ],
    integratedSystems: [
        { 
          icon: Link, title: "باني الروابط الخلفية (Backlinks)", slug: "backlinks-builder",
           path: "#/app/tool/backlinks-builder",
          desc: "إنشاء روابط خلفية للعملاء تلقائيًا من خلال شراكات خارجية لتقوية الـSEO.",
          features: ["إنشاء تلقائي للروابط الخلفية عالية الجودة", "شراكات مع مواقع ومدونات موثوقة", "تقارير أداء للروابط الخلفية", "توزيع طبيعي ومتنوع للروابط"],
          benefits: ["تحسين كبير في ترتيب الموقع في جوجل", "زيادة سلطة النطاق (Domain Authority)", "الحصول على زيارات من مصادر جديدة", "بناء أساس قوي ومستدام للـSEO"]
        },
        { 
          icon: Users, title: "مجتمع العملاء", slug: "client-community",
           path: "#/app/tool/client-community",
          desc: "مركز اجتماعي داخلي للعملاء للتواصل، مع منتديات ومجموعات نقاش.",
          features: ["منتدى داخلي للنقاش وتبادل الخبرات", "مجموعات متخصصة حسب الصناعة", "نظام رسائل خاصة بين الأعضاء", "ورش عمل وفعاليات حصرية"],
          benefits: ["بناء شبكة علاقات قوية", "الحصول على دعم ومساعدة من الأقران", "التعلم من تجارب الآخرين", "الشعور بالانتماء لمجتمع احترافي"]
        },
        { 
          icon: Store, title: "متجر العميل للتجارة الإلكترونية", slug: "client-ecommerce-store",
           path: "#/app/tool/client-ecommerce-store",
          desc: "كل عميل يمكنه إنشاء متجره الخاص لعرض منتجاته وخدماته.",
          features: ["إنشاء متجر إلكتروني بسهولة", "إضافة منتجات وخدمات غير محدودة", "إدارة المخزون والأسعار", "رابط خاص للمتجر (cairoeg.online/store/client-name)"],
          benefits: ["بدء البيع على الإنترنت بسرعة وسهولة", "عرض المنتجات بشكل احترافي", "إدارة عمليات البيع من مكان واحد", "الاستفادة من بنية المنصة التحتية"]
        },
        { 
          icon: Package, title: "سوق Cairoeg (Marketplace)", slug: "cairoeg-marketplace",
           path: "#/app/tool/cairoeg-marketplace",
          desc: "سوق مركزي يعرض جميع متاجر العملاء مصنفة حسب الصناعة والمنتج.",
          features: ["عرض تلقائي للمنتجات في السوق المركزي", "تصنيف المنتجات حسب الصناعة والفئة", "نظام بحث وتصفية متقدم", "دعم طرق دفع متعددة"],
          benefits: ["الوصول إلى قاعدة عملاء أوسع", "زيادة فرص المبيعات", "الاستفادة من جهود التسويق للمنصة", "تعزيز العلامة التجارية للعميل"]
        }
    ],
    featuresTitle: "بنية تحتية قوية وتقنيات حديثة",
    featuresSubtitle: "نعتمد على أفضل التقنيات لضمان أداء عالٍ، أمان، وقابلية للتوسع.",
    features: [
      { icon: GitBranch, title: "GitHub", desc: "لإدارة الشيفرة المصدرية والمشاريع." },
      { icon: Database, title: "Supabase", desc: "قاعدة بيانات متكاملة لإدارة المستخدمين، الحملات، المتاجر والمحتوى." },
      { icon: Cloud, title: "Netlify", desc: "للاستضافة والنشر السحابي السريع والآمن." },
      { icon: BrainCircuit, title: "Gemini & OpenAI", desc: "لتحسين SEO، البحث المتقدم، توليد المحتوى والصوت." },
      { icon: Zap, title: "بنية قابلة للتوسع", desc: "تصميم قائم على Serverless و Microservices للنمو المستقبلي." },
      { icon: ShieldCheck, title: "أمان متكامل", desc: "حماية بيانات العملاء والحملات بأعلى معايير الأمان." },
    ],
    demoTitle: "شاهد الذكاء الاصطناعي أثناء العمل",
    demoSubtitle: "جرب مولد منشورات السوشيال ميديا بنفسك. فقط أدخل موضوعًا وشاهد السحر.",
    demoInputPlaceholder: "مثال: نصائح تسويقية للمقاهي",
    demoGenerateButton: "إنشاء منشور",
    demoGeneratingButton: "جاري الإنشاء...",
    demoResultTitle: "المنشور المقترح:",
    demoCopy: "نسخ",
    demoCopied: "تم النسخ!",
    pricingTitle: "خطط أسعار مرنة",
    pricingPlans: [
        { name: "المجانية", price: "0", features: ["خدمات أساسية محدودة", "ملف شخصي للعميل", "نشر مقال واحد شهريًا", "دعم عبر المجتمع"] },
        { name: "الاحترافية", price: "499", popular: true, features: ["كل شيء في الخطة المجانية", "أدوات AI متقدمة", "متجر إلكتروني خاص", "تحليلات وتقارير SEO", "دعم فني مخصص"] },
        { name: "الشركات", price: "مخصص", features: ["كل شيء في الخطة الاحترافية", "إدارة حملات متعددة", "واجهة API للتكامل", "مدير حساب مخصص", "دعم على مدار الساعة"] }
    ],
    contactTitle: "تواصل معنا",
    contactText: "لديك مشروع أو تحتاج دعم؟ تواصل مباشرة معنا وسنعود إليك سريعاً.",
    contactWhatsapp: "واتساب متاح",
    contactFormTitle: "أرسل رسالة",
    contactFormName: "الاسم",
    contactFormEmail: "البريد الإلكتروني أو الهاتف",
    contactFormMessage: "اكتب رسالتك",
    contactFormSend: "إرسال",
    footerDesc: "منصة إعلانات بالذكاء الاصطناعي. أنشئ، انشر، وتوسع بسرعة وكفاءة.",
    footerCompany: "الشركة",
    footerResources: "مصادر",
    blog: "المدونة",
    faq: "الأسئلة الشائعة",
    footerLegal: "قانوني",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    newsletter: "النشرة الإخبارية",
    newsletterDesc: "ابق على اطلاع بآخر التحديثات والعروض.",
    subscribe: "اشترك",
    footerTools: "الأدوات",
    footerFollow: "تابعنا",
  },
  en: {
    nav: [
      { label: "Home", href: "#/" },
      { label: "Services", href: "#/services" },
      { label: "Pricing", href: "#/pricing" },
      { label: "Contact", href: "#/contact" },
    ],
    login: "Login",
    signUp: "Sign Up",
    loginPage: {
        title: "Welcome Back!",
        subtitle: "Sign in to access your dashboard.",
        emailLabel: "Email or Phone Number",
        passwordLabel: "Password",
        loginButton: "Login",
        forgotPassword: "Forgot Password?",
        orContinueWith: "Or continue with",
        googleButton: "Continue with Google",
        whatsappButton: "Continue with WhatsApp",
        noAccount: "Don't have an account?",
        signUpLink: "Sign Up"
    },
    signupPage: {
        title: "Create a New Account",
        subtitle: "Join our platform and start growing your business today.",
        nameLabel: "Full Name",
        emailLabel: "Email or Phone Number",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        signupButton: "Create Account",
        orContinueWith: "Or sign up with",
        googleButton: "Sign up with Google",
        whatsappButton: "Sign up with WhatsApp",
        haveAccount: "Already have an account?",
        loginLink: "Login"
    },
    dashboardTitle: "Dashboard",
    dashboardSubtitle: "Welcome to your digital marketing toolkit. Select a tool to get started.",
    socialPostGenerator: {
      title: "Social Media Post Generator",
      subtitle: "Create engaging social media posts in seconds.",
      topicLabel: "Post Topic",
      topicPlaceholder: "e.g., Launching a new coffee product",
      platformLabel: "Select Platform",
      toneLabel: "Select Tone",
      toneOptions: { professional: "Professional", friendly: "Friendly", humorous: "Humorous" },
      generateButton: "Generate Post",
      generatingButton: "Generating...",
      resultTitle: "Suggested Post",
      copyButton: "Copy Text",
      copiedButton: "Copied!",
      error: "Sorry, an error occurred. Please try again.",
    },
    seoArticleGenerator: {
      title: "SEO Article Generator",
      subtitle: "Create complete, SEO-optimized articles in minutes.",
      topicLabel: "Article Topic",
      topicPlaceholder: "e.g., Best content marketing strategies for 2024",
      keywordsLabel: "Keywords (comma-separated)",
      keywordsPlaceholder: "content marketing, seo, marketing strategy",
      toneLabel: "Select Tone",
      toneOptions: { informational: "Informational", persuasive: "Persuasive", casual: "Casual" },
      generateButton: "Generate Article",
      generatingButton: "Writing...",
      resultTitle: "Generated Article",
      copyButton: "Copy Article",
      copiedButton: "Copied!",
      error: "Sorry, an error occurred. Please try again.",
    },
    smartSearch: {
      title: "Smart AI Search",
      subtitle: "Get accurate, up-to-date answers from the web, backed by sources.",
      queryLabel: "What are you looking for?",
      queryPlaceholder: "e.g., What are the latest updates to Google's algorithms?",
      generateButton: "Search Now",
      generatingButton: "Searching...",
      resultTitle: "Search Results",
      sourcesTitle: "Sources",
      error: "Sorry, an error occurred while searching. Please try again.",
    },
    contactLabel: "Contact",
    heroTitle: "Fully Integrated AI-Powered Advertising Platform",
    heroSubtitle: "Over 50 services in one place to simplify digital marketing, content management, SEO, and brand expansion. Smart, effective solutions for the Egyptian and Arab market.",
    heroBtnStart: "Get Started",
    heroBtnDiscover: "Discover Services",
    serviceTabs: [
      { id: 'core', title: 'Core Platform Components' },
      { id: 'advanced', title: 'Advanced Publishing & Growth' },
      { id: 'seo', title: 'SEO & Meta Optimization Tools' },
      { id: 'integrated', title: 'Additional Integrated Systems' },
    ],
    coreServices: [
        { 
          icon: PlayCircle, title: "Video Display System", slug: "video-display-system",
          path: "#/app/tool/video-display-system",
          desc: "Public/private video library, internal ads, and service samples with client video uploads.",
          features: ["Public and private video libraries", "Support for internal video ads", "Video categorization (Ads, Tutorials)", "Client-specific campaign video uploads"],
          benefits: ["Increase audience engagement with visual content", "Professionally showcase services and work samples", "Centralize video content management", "Enhance the client experience"]
        },
        { 
          icon: Mic, title: "AI Text-to-Speech (TTS)", slug: "ai-text-to-speech",
           path: "#/app/tool/ai-text-to-speech",
          desc: "Supports Arabic & Egyptian dialect, multiple voices, and tone customization for ads.",
          features: ["Multi-language support (Arabic, English)", "Diverse male and female voices", "Customizable tone (formal, friendly)", "Download audio or merge with video"],
          benefits: ["Quickly create professional voice-overs", "Save costs on human voice talent", "Personalize visual content", "Reach audiences who prefer audio content"]
        },
        { 
          icon: Share2, title: "Social Media Post Generator", slug: "social-post-generator",
           path: "#/app/tool/social-post-generator",
          desc: "AI generates text, images, and hashtags for multiple platforms with auto-scheduling.",
          features: ["AI-powered text and image content generation", "Trending hashtag suggestions", "Support for all major platforms (Facebook, Instagram, etc.)", "Auto-scheduling for posts"],
          benefits: ["Save time and effort in content creation", "Maintain a consistent social media presence", "Increase engagement with compelling content", "Unify brand identity across platforms"]
        },
        { 
          icon: FileText, title: "SEO Article Generator", slug: "seo-article-generator",
           path: "#/app/tool/seo-article-generator",
          desc: "Full, SEO-optimized articles with direct or scheduled publishing to the blog.",
          features: ["Create long-form, SEO-optimized articles", "Automatic title and description optimization", "Multi-language support", "Direct or scheduled blog publishing"],
          benefits: ["Rank higher in search results for target keywords", "Increase organic website traffic", "Build authority and credibility in your field", "Save on content writing costs"]
        },
        { 
          icon: Search, title: "Website Testing & Crawling System", slug: "website-testing-crawling",
           path: "#/app/tool/website-testing-crawling",
          desc: "Full site crawl, SEO reports, speed analysis, and technical error detection.",
          features: ["Comprehensive on-page and off-page SEO analysis", "Detect technical errors (404, 301)", "Page load speed analysis", "Downloadable PDF reports"],
          benefits: ["Improve overall website performance", "Boost Google ranking", "Enhance user experience (UX)", "Get actionable insights"]
        },
        { 
          icon: BrainCircuit, title: "Smart AI Search", slug: "smart-ai-search",
           path: "#/app/tool/smart-ai-search",
          desc: "Gathers live data from the internet to improve content accuracy and analysis.",
          features: ["Live search on Google, YouTube, Twitter", "Collect real-time data for content creation", "Improve accuracy of analytics and reports", "Understand market trends and competitors"],
          benefits: ["Create content based on up-to-date information", "Gain a competitive advantage", "Enhance marketing strategies", "Deeper understanding of the target audience"]
        },
        { 
          icon: LayoutGrid, title: "Advanced Blogging System", slug: "advanced-blogging-system",
           path: "#/app/tool/advanced-blogging-system",
          desc: "Auto-publish after admin approval, supports audio/video articles, and auto-indexing.",
          features: ["Post approval system for articles", "Support for written, audio, and video articles", "Automatic Google indexing", "Article rating system"],
          benefits: ["Enrich content with diverse formats", "Ensure quality of published content", "Speed up Google indexing process", "Increase reader engagement"]
        },
        { 
          icon: Lock, title: "Simple & Secure Login System", slug: "secure-login-system",
           path: "#/app/tool/secure-login-system",
          desc: "Login with phone and password, with support for WhatsApp and Google sign-in.",
          features: ["Login with phone number", "Sign-in with Google and WhatsApp accounts", "Secure password recovery", "Personal dashboard for each client"],
          benefits: ["Easy and fast login experience", "Secure client accounts with best practices", "Convenient access to services and tools", "Centralized client information management"]
        },
        { 
          icon: MonitorPlay, title: "Social Media Hub", slug: "social-media-hub",
           path: "#/app/tool/social-media-hub",
          desc: "Display client social media accounts and posts with integrated engagement stats.",
          features: ["Link and display social media accounts", "Automatically show recent posts", "Integrated engagement stats (likes, comments)", "Display live ad campaigns"],
          benefits: ["Unified view of client's digital presence", "Showcase account strength and grow followers", "Monitor performance from one place", "Enhance transparency with clients"]
        },
        { 
          icon: Braces, title: "Internal Ads & Templates", slug: "internal-ads-templates",
           path: "#/app/tool/internal-ads-templates",
          desc: "Ready-to-use ad templates (text + images) and an internal ad management system.",
          features: ["Library of ready-to-use ad templates", "Easy template customization", "Internal ad management system", "Showcase client offers and discounts"],
          benefits: ["Launch ad campaigns quickly", "Save on ad design costs", "Get inspiration for new ad ideas", "Increase campaign effectiveness"]
        },
        { 
          icon: Target, title: "Smart Marketing Tools", slug: "smart-marketing-tools",
           path: "#/app/tool/smart-marketing-tools",
          desc: "Suggests target audiences, analyzes competitors, and recommends campaign plans.",
          features: ["Audience segment suggestions (age, interests)", "Automatic competitor analysis", "Campaign plan and strategy recommendations", "Creative ad idea generation"],
          benefits: ["Accurately target the right audience", "Outperform competitors with smart strategies", "Improve return on investment (ROI)", "Launch innovative and effective campaigns"]
        }
    ],
    advancedServices: [
        { 
          icon: Send, title: "Universal Auto-Publishing", slug: "universal-auto-publishing",
           path: "#/app/tool/universal-auto-publishing",
          desc: "Publish content across multiple platforms at once with advanced scheduling.",
          features: ["Simultaneous posting to (Facebook, Twitter, Instagram...)", "Advanced scheduling (day, hour, timezone)", "Manage content from a single calendar", "Unified performance reports"],
          benefits: ["Massive time and effort savings", "Ensure posting consistency across platforms", "Reach audiences at peak engagement times", "Simplify content management"]
        },
        { 
          icon: Bot, title: "Advanced Crawling System", slug: "advanced-crawling-system",
           path: "#/app/tool/advanced-crawling-system",
          desc: "Crawl competitor sites, extract keywords, and monitor their backlinks.",
          features: ["Full competitor website analysis", "Extract keywords they rank for", "Monitor competitor backlink building", "Periodic reports to improve ranking"],
          benefits: ["Uncover successful competitor strategies", "Find new keyword opportunities", "Build a powerful backlink strategy", "Continuously improve your Google ranking"]
        },
        { 
          icon: Replace, title: "Multi-Campaign Manager", slug: "multi-campaign-manager",
           path: "#/app/tool/multi-campaign-manager",
          desc: "Manage dozens of campaigns and track real-time performance across platforms.",
          features: ["Unified dashboard for all campaigns", "Real-time performance tracking (Facebook, Google...)", "Compare performance of different campaigns", "Automated recommendations to improve ROI"],
          benefits: ["Comprehensive view of all campaign performance", "Make fast, data-driven decisions", "Optimize ad budget allocation", "Increase ad campaign effectiveness"]
        },
        { 
          icon: Stars, title: "Viral AI Publisher", slug: "viral-ai-publisher",
           path: "#/app/tool/viral-ai-publisher",
          desc: "Detects trends and suggests viral content with automatic visual enhancements.",
          features: ["Monitor trending topics and themes", "Suggest viral content ideas", "Automatic visual enhancement for images and videos", "Optimize hashtags for maximum reach"],
          benefits: ["Leverage trends to increase reach", "Create content that audiences love to share", "Rapidly increase brand awareness", "Achieve significant organic growth"]
        },
        { 
          icon: Link, title: "Smart Links System", slug: "smart-links-system",
           path: "#/app/tool/smart-links-system",
          desc: "Custom short links for campaigns with click tracking, sources, and geo-redirects.",
          features: ["Create branded short links", "Track click counts and sources (geo, device type)", "Redirect links based on geographic location", "Custom links for each campaign"],
          benefits: ["Accurately measure campaign performance", "Improve user experience with clean links", "Better understand audience behavior", "Increase trust in shared links"]
        },
        { 
          icon: BarChart3, title: "Analytics Hub", slug: "analytics-hub",
           path: "#/app/tool/analytics-hub",
          desc: "Full traffic analysis, paid and organic campaign tracking, and ROI monitoring.",
          features: ["Analyze traffic sources (organic, paid, direct)", "Track performance of paid and organic campaigns", "Monitor return on investment (ROI)", "Keyword performance reports"],
          benefits: ["Holistic understanding of site and marketing performance", "Identify the most effective channels", "Optimize ad spend", "Make informed strategic decisions"]
        },
        { 
          icon: Reply, title: "Auto-Engagement System", slug: "auto-engagement-system",
           path: "#/app/tool/auto-engagement-system",
          desc: "Automated replies to customer comments based on specific keywords.",
          features: ["Set up automated replies to comments and messages", "Define keywords to trigger responses", "Customize replies to match brand tone", "Integrate with upselling campaigns"],
          benefits: ["Save time managing comments", "Ensure no customer inquiry is missed", "Increase engagement and participation on posts", "Convert engaged users into leads"]
        },
        { 
          icon: Flag, title: "Online Reputation Management (ORM)", slug: "online-reputation-management",
           path: "#/app/tool/online-reputation-management",
          desc: "Monitors brand mentions across the web and provides sentiment analysis reports.",
          features: ["Monitor brand mentions across the web", "Sentiment analysis (positive, negative, neutral)", "Instant alerts for new mentions", "Periodic reports on digital reputation status"],
          benefits: ["Protect brand reputation", "Quickly address negative reviews", "Understand public perception of your brand", "Improve digital public relations"]
        },
        { 
          icon: MailPlus, title: "Email Marketing Integration", slug: "email-marketing-integration",
           path: "#/app/tool/email-marketing-integration",
          desc: "AI-powered email campaigns with ready-made templates and performance tracking.",
          features: ["AI-powered email campaign creation", "Library of ready-to-use email templates", "Track open and click-through rates", "Audience segmentation"],
          benefits: ["Direct and effective communication with customers", "Increase sales through targeted offers", "Build customer loyalty", "Accurately measure email campaign effectiveness"]
        }
    ],
    seoTools: [
        { 
          icon: UserCheck, title: "Client Profile Pages", slug: "client-profile-pages",
           path: "#/app/tool/client-profile-pages",
          desc: "An automatically SEO-optimized profile page for each client.",
          features: ["Automatic creation of a profile page", "SEO optimization for the page", "Include business info and social links", "Automatic Schema.org data structuring"],
          benefits: ["Increase visibility in local search results", "Build brand credibility online", "Gain a powerful backlink", "Improve user search experience"]
        },
        { 
          icon: Settings2, title: "Meta Manager", slug: "meta-manager",
           path: "#/app/tool/meta-manager",
          desc: "Automatically generates meta titles and descriptions with Schema.org integration.",
          features: ["Automatic generation of meta titles and descriptions", "Schema.org integration for rich results", "Open Graph (OG) support for social sharing", "Bulk optimization for pages"],
          benefits: ["Improve click-through rate (CTR) from Google", "Save time on manual page optimization", "Ensure professional appearance when links are shared", "Improve search engine understanding of site content"]
        },
        { 
          icon: Link2, title: "Smart URLs", slug: "smart-urls",
           path: "#/app/tool/smart-urls",
          desc: "Clean, SEO-friendly URLs that include the client and platform name.",
          features: ["Create clean, SEO-friendly URLs", "Automatically include client name and content title", "Consistent and clear URL structure", "Automatic optimization for non-Latin characters"],
          benefits: ["Improve page ranking in search engines", "Better user experience with clear URLs", "Increase trust and credibility", "Easy to share and remember links"]
        },
        { 
          icon: Megaphone, title: "Branded Publishing", slug: "branded-publishing",
           path: "#/app/tool/branded-publishing",
          desc: "All content displays 'Powered by Cairoeg Advertising' to increase credibility.",
          features: ["Add 'Powered by Cairoeg' branding to content", "Link to the client's profile on the platform", "Customization options for branding", "Apply to articles and profiles"],
          benefits: ["Increase trust and credibility", "Leverage the platform's brand strength", "Gain an additional backlink", "Enhance the client's professional image"]
        },
        { 
          icon: Send, title: "Auto Google Indexing", slug: "auto-google-indexing",
           path: "#/app/tool/auto-google-indexing",
          desc: "Every new post or page is automatically submitted to Google for rapid indexing.",
          features: ["Automatic submission of new content to Google", "Utilizes Google Indexing API", "Automatic sitemap updates", "Reports on indexing status"],
          benefits: ["Index new content in minutes, not days", "Beat competitors in publishing news and trending topics", "Ensure all site pages are indexed", "Quickly improve content visibility in search results"]
        },
        { 
          icon: FileJson, title: "SEO Reports & Optimizations", slug: "seo-reports-optimization",
           path: "#/app/tool/seo-reports-optimization",
          desc: "Personalized SEO audit for each client with keyword recommendations and rank tracking.",
          features: ["Comprehensive website SEO audit", "Customized keyword recommendations", "Track keyword rankings in Google", "Periodic reports on progress"],
          benefits: ["A clear roadmap for SEO improvement", "Target the right keywords", "Accurately measure SEO effort results", "Continuously improve search performance"]
        },
        { 
          icon: BarChart, title: "Advanced SEO Schemes", slug: "advanced-seo-schemes",
           path: "#/app/tool/advanced-seo-schemes",
          desc: "Knowledge Graph support for rich results in Google and Google My Business integration.",
          features: ["Support for Knowledge Graph schemas", "Integration with Google My Business (GMB)", "Build topic clusters", "Suggestions for voice search optimization"],
          benefits: ["Achieve prominent visibility in search results (Rich Results)", "Significantly improve local SEO", "Build strong topical authority in your niche", "Prepare for the future of search"]
        }
    ],
    integratedSystems: [
        { 
          icon: Link, title: "Backlinks Builder", slug: "backlinks-builder",
           path: "#/app/tool/backlinks-builder",
          desc: "Automatically build backlinks for clients through external partnerships to boost SEO.",
          features: ["Automatic generation of high-quality backlinks", "Partnerships with trusted sites and blogs", "Performance reports for backlinks", "Natural and diverse link distribution"],
          benefits: ["Significant improvement in Google ranking", "Increase Domain Authority", "Gain referral traffic from new sources", "Build a strong and sustainable SEO foundation"]
        },
        { 
          icon: Users, title: "Client Community", slug: "client-community",
           path: "#/app/tool/client-community",
          desc: "An internal social hub for clients to connect, with forums and discussion groups.",
          features: ["Internal forum for discussion and knowledge sharing", "Industry-specific groups", "Private messaging system between members", "Exclusive workshops and events"],
          benefits: ["Build a strong professional network", "Get peer-to-peer support and help", "Learn from others' experiences", "Feel part of a professional community"]
        },
        { 
          icon: Store, title: "Client E-commerce Store", slug: "client-ecommerce-store",
           path: "#/app/tool/client-ecommerce-store",
          desc: "Each client can create their own store to showcase their products and services.",
          features: ["Easily create an e-commerce store", "Add unlimited products and services", "Manage inventory and pricing", "Custom store link (cairoeg.online/store/client-name)"],
          benefits: ["Start selling online quickly and easily", "Showcase products professionally", "Manage sales operations from one place", "Leverage the platform's infrastructure"]
        },
        { 
          icon: Package, title: "Cairoeg Marketplace", slug: "cairoeg-marketplace",
           path: "#/app/tool/cairoeg-marketplace",
          desc: "A central marketplace featuring all client stores, categorized by industry and product.",
          features: ["Automatic product listing in the central marketplace", "Categorization by industry and product type", "Advanced search and filtering system", "Support for multiple payment methods"],
          benefits: ["Reach a broader customer base", "Increase sales opportunities", "Benefit from the platform's marketing efforts", "Enhance the client's brand"]
        }
    ],
    featuresTitle: "Robust Infrastructure & Modern Tech",
    featuresSubtitle: "We rely on the best technologies to ensure high performance, security, and scalability.",
    features: [
      { icon: GitBranch, title: "GitHub", desc: "For source code and project management." },
      { icon: Database, title: "Supabase", desc: "Integrated database for users, campaigns, stores, and content." },
      { icon: Cloud, title: "Netlify", desc: "For fast, secure cloud hosting and deployment." },
      { icon: BrainCircuit, title: "Gemini & OpenAI", desc: "For SEO, advanced search, content and voice generation." },
      { icon: Zap, title: "Scalable Architecture", desc: "Serverless and Microservices design for future growth." },
      { icon: ShieldCheck, title: "Integrated Security", desc: "Protecting client and campaign data with the highest standards." },
    ],
    demoTitle: "See AI in Action",
    demoSubtitle: "Try our Social Media Post Generator. Just enter a topic and watch the magic.",
    demoInputPlaceholder: "e.g., Marketing tips for coffee shops",
    demoGenerateButton: "Generate Post",
    demoGeneratingButton: "Generating...",
    demoResultTitle: "Suggested Post:",
    demoCopy: "Copy",
    demoCopied: "Copied!",
    pricingTitle: "Flexible Pricing Plans",
    pricingPlans: [
        { name: "Free", price: "0", features: ["Limited basic services", "Client profile", "1 article/month", "Community support"] },
        { name: "Professional", price: "499 EGP", popular: true, features: ["Everything in Free", "Advanced AI Tools", "Private E-commerce Store", "SEO Analytics & Reports", "Dedicated Tech Support"] },
        { name: "Enterprise", price: "Custom", features: ["Everything in Professional", "Multi-Campaign Management", "API Access for Integration", "Dedicated Account Manager", "24/7 Priority Support"] }
    ],
    contactTitle: "Contact Us",
    contactText: "Have a project or need support? Contact us directly, and we'll get back to you quickly.",
    contactWhatsapp: "WhatsApp available",
    contactFormTitle: "Send a Message",
    contactFormName: "Name",
    contactFormEmail: "Email or Phone",
    contactFormMessage: "Write your message",
    contactFormSend: "Send",
    footerDesc: "AI advertising platform. Create, publish, and expand quickly and efficiently.",
    footerCompany: "Company",
    footerResources: "Resources",
    blog: "Blog",
    faq: "FAQ",
    footerLegal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    newsletter: "Newsletter",
    newsletterDesc: "Stay updated with our latest features and offers.",
    subscribe: "Subscribe",
    footerTools: "Tools",
    footerFollow: "Follow Us",
  }
};

export const getAllServices = (lang: 'ar' | 'en'): Service[] => {
    const t = translations[lang];
    return [
        ...t.coreServices,
        ...t.advancedServices,
        ...t.seoTools,
        ...t.integratedSystems,
    ].map(s => ({
      ...s,
      features: s.features || [],
      benefits: s.benefits || [],
      path: s.path || `#/app/tool/${s.slug}`
    }));
};