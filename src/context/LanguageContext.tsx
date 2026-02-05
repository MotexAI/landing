import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
type Language = 'en' | 'es';
interface Translations {
  // Navigation
  nav: {
    features: string;
    stories: string;
    information: string;
    financing: string;
    contact: string;
    tryDemo: string;
    openMenu: string;
    closeMenu: string;
  };
  // Hero
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    viewFeatures: string;
  };
  // Features
  features: {
    accessToInformation: string;
    accessToFinancing: string;
    caseManagement: string;
    caseManagementDesc: string;
    legalInformation: string;
    legalInformationDesc: string;
    predictiveInformation: string;
    predictiveInformationDesc: string;
    caseScreening: string;
    caseScreeningDesc: string;
    analysis: string;
    analysisDesc: string;
  };
  // Stories
  stories: {
    title: string;
    subtitle: string;
    viewAll: string;
    readStory: string;
    readFullStory: string;
    blogTitle: string;
    blogSubtitle: string;
    by: string;
    shareStory: string;
    subscribeTitle: string;
    subscribeSubtitle: string;
    subscribePlaceholder: string;
    subscribeButton: string;
    relatedStories: string;
    backToStories: string;
    story1Title: string;
    story1Excerpt: string;
    story1Content: string;
    story2Title: string;
    story2Excerpt: string;
    story2Content: string;
    story3Title: string;
    story3Excerpt: string;
    story3Content: string;
    story4Title: string;
    story4Excerpt: string;
    story4Content: string;
    story5Title: string;
    story5Excerpt: string;
    story5Content: string;
    story6Title: string;
    story6Excerpt: string;
    story6Content: string;
    analysis: string;
    technology: string;
    finance: string;
    regulation: string;
    operations: string;
  };
  // Contact
  contact: {
    title: string;
    headline: string;
    subtitle: string;
    placeholder: string;
    submit: string;
    privacy: string;
  };
  // Information
  information: {
    eyebrow: string;
    title: string;
    subtitle: string;
    jurisdictions: string;
    practiceAreas: string;
    viewRegulations: string;
    contributorTitle: string;
    contributorSubtitle: string;
    emailPlaceholder: string;
    submitButton: string;
    labourLaw: string;
    civilLaw: string;
    familyLaw: string;
    commercialLaw: string;
    criminalLaw: string;
    administrativeLaw: string;
    taxLaw: string;
    constitutionalLaw: string;
  };
  // Financing
  financing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    submitCase: string;
  };
  // Footer
  footer: {
    tagline: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  // Privacy
  privacy: {
    eyebrow: string;
    title: string;
    content: string;
  };
  // Terms
  terms: {
    eyebrow: string;
    title: string;
    content: string;
  };
  // Case Management Hero
  caseManagementHero: {
    label: string;
    title: string;
    subtitle: string;
    viewFeatures: string;
  };
  // Trusted By
  trustedBy: {
    title: string;
    clients: string[];
  };
  // The Problem
  theProblem: {
    label: string;
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    conclusion: string;
  };
  // Case Management
  caseManagement: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    workflows: string;
    workflowsDesc: string;
    compliance: string;
    complianceDesc: string;
    responsibility: string;
    responsibilityDesc: string;
    alerts: string;
    alertsDesc: string;
    conclusion: string;
  };
}
const translations: Record<Language, Translations> = {
  en: {
    nav: {
      features: 'Features',
      stories: 'Stories',
      information: 'Information',
      financing: 'Financing',
      contact: 'Contact',
      tryDemo: 'Try Demo',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    hero: {
      eyebrow: 'Case Solver for litigants',
      headline: 'Accelerating Dispute',
      subtitle: 'Resolution',
      viewFeatures: 'View Features'
    },
    features: {
      accessToInformation: 'Access to Information',
      accessToFinancing: 'Access to Financing',
      caseManagement: 'Case Management',
      caseManagementDesc: 'Centralized workflow for all your dispute cases.',
      legalInformation: 'Legal Information',
      legalInformationDesc:
      'Comprehensive database of relevant legal precedents.',
      predictiveInformation: 'Predictive Information',
      predictiveInformationDesc:
      'Data-driven insights on potential case outcomes.',
      caseScreening: 'Case Screening',
      caseScreeningDesc: 'Automated evaluation of case viability and risk.',
      analysis: 'Analysis',
      analysisDesc: 'Deep financial analysis for litigation funding.'
    },
    stories: {
      title: 'Stories',
      subtitle:
      'Insights, analysis, and updates from the intersection of law and technology.',
      viewAll: 'View all stories',
      readStory: 'Read story',
      readFullStory: 'Read full story',
      blogTitle: 'Stories & Insights',
      blogSubtitle:
      'Thoughts on the evolution of dispute resolution, legal technology, and the future of law.',
      by: 'By',
      shareStory: 'Share this story',
      subscribeTitle: 'Stay Updated',
      subscribeSubtitle:
      'Get the latest insights on legal technology and dispute resolution delivered to your inbox.',
      subscribePlaceholder: 'Enter your email',
      subscribeButton: 'Subscribe',
      relatedStories: 'Related Stories',
      backToStories: 'Back to Stories',
      story1Title: 'The Future of Commercial Arbitration in LATAM',
      story1Excerpt:
      'How digital transformation is reshaping dispute resolution across Latin American jurisdictions.',
      story1Content:
      'The landscape of commercial arbitration in Latin America is undergoing a profound transformation. As digital technologies continue to reshape how businesses operate, the mechanisms for resolving disputes must evolve accordingly.\n\nTraditional arbitration processes, often characterized by lengthy timelines and substantial costs, are being reimagined through the lens of technology. Virtual hearings, electronic document management, and AI-assisted case analysis are no longer futuristic concepts but present-day realities.\n\nKey jurisdictions across the region—including Mexico, Brazil, and Colombia—are updating their arbitration frameworks to accommodate these changes. The result is a more accessible, efficient, and cost-effective system for resolving commercial disputes.\n\nFor businesses operating in LATAM, understanding these shifts is crucial. The firms that adapt to this new paradigm will find themselves better positioned to manage disputes effectively and protect their interests in an increasingly complex commercial environment.',
      story2Title: 'Reducing Case Backlog with Predictive Analytics',
      story2Excerpt:
      'A deep dive into how machine learning models are helping firms prioritize their caseloads.',
      story2Content:
      'Legal departments and law firms worldwide face a common challenge: managing an ever-growing caseload with limited resources. Predictive analytics offers a compelling solution to this persistent problem.\n\nBy analyzing historical case data, machine learning models can identify patterns that help predict case outcomes, estimate resolution timelines, and assess resource requirements. This intelligence enables legal teams to make informed decisions about case prioritization.\n\nThe implementation of predictive analytics in legal operations typically follows a phased approach. Initial efforts focus on data collection and standardization, followed by model development and validation. The most successful implementations integrate these tools seamlessly into existing workflows.\n\nEarly adopters report significant improvements in efficiency. Cases that might have languished in backlog are now identified early and routed appropriately. Settlement opportunities are recognized sooner, and resources are allocated more strategically.\n\nThe technology continues to evolve, with newer models incorporating natural language processing to analyze case documents and extract relevant insights automatically.',
      story3Title: 'Litigation Finance: A Strategic Asset',
      story3Excerpt:
      'Understanding the mechanics of non-recourse financing for complex commercial litigation.',
      story3Content:
      'Litigation finance has emerged as a sophisticated tool for managing legal risk and optimizing capital allocation. For CFOs and general counsel, understanding this mechanism is increasingly important.\n\nAt its core, litigation finance involves a third party providing capital to fund legal proceedings in exchange for a portion of any eventual recovery. The non-recourse nature of these arrangements means that if the case is unsuccessful, the funder bears the loss.\n\nThis structure offers several strategic advantages. Companies can pursue meritorious claims without impacting their balance sheets or diverting resources from core operations. The involvement of sophisticated funders also provides an independent assessment of case merit.\n\nThe market for litigation finance has matured significantly. Funders now offer a range of products, from single-case funding to portfolio arrangements that spread risk across multiple matters. Some arrangements include provisions for working capital or operational support.\n\nFor legal teams evaluating litigation finance, key considerations include funder reputation, fee structures, and the degree of control retained over case strategy. The most successful arrangements align the interests of all parties toward efficient case resolution.',
      story4Title: 'Regulatory Compliance in the Digital Age',
      story4Excerpt:
      'Navigating the complex web of new regulations affecting digital platforms and data privacy in the legal sector.',
      story4Content:
      'The regulatory landscape for digital operations continues to evolve at a rapid pace. For legal professionals, staying current with these changes is both a challenge and a necessity.\n\nData privacy regulations have proliferated globally, with frameworks like GDPR setting standards that influence legislation worldwide. In Latin America, countries are implementing their own data protection laws, each with unique requirements and enforcement mechanisms.\n\nFor law firms and legal departments, compliance extends beyond client data protection. The tools and platforms used for case management, communication, and document storage must all meet regulatory standards. This creates a complex matrix of requirements that varies by jurisdiction.\n\nSuccessful compliance strategies typically involve a combination of technology solutions and process improvements. Automated monitoring tools can track regulatory changes and flag potential compliance issues. Regular audits and training programs ensure that staff understand and follow required procedures.\n\nThe investment in compliance infrastructure, while significant, pays dividends in risk reduction and client confidence. Firms that demonstrate robust compliance practices differentiate themselves in an increasingly competitive market.',
      story5Title: 'The Rise of ODR Platforms',
      story5Excerpt:
      'Online Dispute Resolution is moving from consumer complaints to complex B2B disputes. Here is what you need to know.',
      story5Content:
      'Online Dispute Resolution (ODR) has evolved far beyond its origins in e-commerce consumer complaints. Today, sophisticated ODR platforms are handling complex business-to-business disputes that would traditionally require in-person arbitration or litigation.\n\nThe COVID-19 pandemic accelerated this trend, as parties and arbitrators alike became comfortable with virtual proceedings. What began as a necessity has revealed genuine advantages: reduced costs, faster resolution times, and greater accessibility for parties in different locations.\n\nModern ODR platforms offer features that enhance the dispute resolution process. Secure document sharing, integrated video conferencing, and structured negotiation tools create an environment conducive to efficient resolution. Some platforms incorporate AI-assisted analysis to help parties understand their positions and identify potential settlement ranges.\n\nFor businesses, the implications are significant. Contracts increasingly include ODR clauses, and parties are more willing to engage with these platforms for substantial disputes. The key is selecting platforms with appropriate security measures, qualified neutrals, and processes suited to the complexity of the matters at hand.\n\nAs ODR continues to mature, we expect to see further integration with traditional dispute resolution mechanisms, creating a hybrid ecosystem that offers parties flexibility in how they resolve their conflicts.',
      story6Title: 'Building Resilient Legal Operations',
      story6Excerpt:
      'Strategies for modernizing in-house legal teams and law firms to withstand economic uncertainty and operational challenges.',
      story6Content:
      'Economic uncertainty and operational disruptions have become recurring features of the business landscape. For legal operations, building resilience is no longer optional—it is essential for long-term success.\n\nResilient legal operations share several characteristics. They maintain flexible resource models that can scale up or down as demand fluctuates. They leverage technology to automate routine tasks and enable remote work. They cultivate diverse supplier relationships to avoid over-dependence on any single provider.\n\nThe foundation of operational resilience is robust process documentation. When key personnel are unavailable or systems fail, well-documented processes enable continuity. This documentation should cover not just routine operations but also crisis response procedures.\n\nTechnology plays a crucial role in building resilience. Cloud-based systems provide accessibility and redundancy. Automation reduces dependence on manual processes that can be disrupted. Analytics tools provide early warning of potential issues and support rapid decision-making.\n\nPerhaps most importantly, resilient operations require a culture that embraces change and continuous improvement. Teams that regularly assess and refine their processes are better positioned to adapt when circumstances demand it.',
      analysis: 'Analysis',
      technology: 'Technology',
      finance: 'Finance',
      regulation: 'Regulation',
      operations: 'Operations'
    },
    contact: {
      title: 'Contact Us',
      headline: 'Get in touch',
      subtitle:
      "Interested in a demo or have questions? Leave your email and we'll get back to you shortly.",
      placeholder: 'name@company.com',
      submit: 'Submit Request',
      privacy:
      'By submitting this form, you agree to our privacy policy. We respect your inbox.'
    },
    information: {
      eyebrow: 'Knowledge Base',
      title: 'Legal Information',
      subtitle:
      'Access comprehensive legal resources across jurisdictions and practice areas in Latin America.',
      jurisdictions: 'Jurisdictions',
      practiceAreas: 'Practice Areas',
      viewRegulations: 'View regulations & precedents',
      contributorTitle: 'Become a Contributor',
      contributorSubtitle:
      'Help us build the most comprehensive legal database in Latin America. Submit your email to join our network of legal experts.',
      emailPlaceholder: 'Enter your email',
      submitButton: 'Submit',
      labourLaw: 'Labour Law',
      civilLaw: 'Civil Law',
      familyLaw: 'Family Law',
      commercialLaw: 'Commercial Law',
      criminalLaw: 'Criminal Law',
      administrativeLaw: 'Administrative Law',
      taxLaw: 'Tax Law',
      constitutionalLaw: 'Constitutional Law'
    },
    financing: {
      eyebrow: 'Litigation Finance',
      title: 'Fund Your Case',
      subtitle:
      'Access non-recourse financing for meritorious litigation. We evaluate cases across Latin America and provide capital to pursue claims that deserve resolution.',
      submitCase: 'Submit Your Case'
    },
    footer: {
      tagline: 'Modern legal infrastructure for dispute resolution.',
      copyright: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    privacy: {
      eyebrow: 'Privacy Policy',
      title: 'Privacy Policy',
      content: 'We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.'
    },
    terms: {
      eyebrow: 'Terms of Service',
      title: 'Terms of Service',
      content: 'By accessing and using our services, you agree to be bound by these terms of service. Please read them carefully before using our platform.'
    },
    caseManagementHero: {
      label: 'Case Management',
      title: 'Case Management for Litigation',
      subtitle: 'Resolution',
      viewFeatures: 'View Features'
    },
    trustedBy: {
      title: 'Backed by',
      clients: []
    },
    theProblem: {
      label: 'The Problem',
      title: 'In litigation, growth',
      subtitle: 'often comes with disorder',
      paragraph1: 'More cases. More deadlines. More people involved. But the tools remain the same: spreadsheets, shared folders, email threads, and individual memory.',
      paragraph2: 'Deadlines slip away. Information gets lost in handoffs. Partners lose visibility. And clients—who expect precision and control—start to notice.',
      conclusion: 'This is not a failure of people.\nIt is a failure of infrastructure.'
    },
    caseManagement: {
      label: 'Case Management',
      title: 'Built for litigation,',
      subtitle: 'not adapted from something else',
      description: 'Motex is a case management platform designed specifically for litigation. It is not generic software with legal templates added.',
      workflows: 'Structured workflows',
      workflowsDesc: 'Each case follows defined protocols. Your processes, applied consistently.',
      compliance: 'Process compliance',
      complianceDesc: 'Tasks cannot be skipped. Deadlines cannot be ignored.',
      responsibility: 'Clear responsibility',
      responsibilityDesc: 'Each task has an owner. Every decision is recorded.',
      alerts: 'Automatic alerts',
      alertsDesc: 'Critical dates and risks emerge before they become problems.',
      conclusion: 'A silent layer of control that protects\nboth the firm and the individual lawyer.'
    }
  },
  es: {
    nav: {
      features: 'Características',
      stories: 'Historias',
      information: 'Información',
      financing: 'Financiamiento',
      contact: 'Contacto',
      tryDemo: 'Probar Demo',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú'
    },
    hero: {
      eyebrow: 'Case Solver para litigantes',
      headline: 'Acelerando',
      subtitle: 'Resolución de Disputas',
      viewFeatures: 'Ver Características'
    },
    features: {
      accessToInformation: 'Acceso a Información',
      accessToFinancing: 'Acceso a Financiamiento',
      caseManagement: 'Gestión de Casos',
      caseManagementDesc:
      'Flujo de trabajo centralizado para todos tus casos de disputa.',
      legalInformation: 'Información Legal',
      legalInformationDesc:
      'Base de datos completa de precedentes legales relevantes.',
      predictiveInformation: 'Información Predictiva',
      predictiveInformationDesc:
      'Análisis basado en datos sobre posibles resultados de casos.',
      caseScreening: 'Evaluación de Casos',
      caseScreeningDesc:
      'Evaluación automatizada de viabilidad y riesgo de casos.',
      analysis: 'Análisis',
      analysisDesc:
      'Análisis financiero profundo para financiamiento de litigios.'
    },
    stories: {
      title: 'Historias',
      subtitle:
      'Perspectivas, análisis y novedades desde la intersección del derecho y la tecnología.',
      viewAll: 'Ver todas las historias',
      readStory: 'Leer historia',
      readFullStory: 'Leer historia completa',
      blogTitle: 'Historias y Perspectivas',
      blogSubtitle:
      'Reflexiones sobre la evolución de la resolución de disputas, tecnología legal y el futuro del derecho.',
      by: 'Por',
      shareStory: 'Compartir esta historia',
      subscribeTitle: 'Mantente Actualizado',
      subscribeSubtitle:
      'Recibe las últimas perspectivas sobre tecnología legal y resolución de disputas en tu correo.',
      subscribePlaceholder: 'Ingresa tu correo',
      subscribeButton: 'Suscribirse',
      relatedStories: 'Historias Relacionadas',
      backToStories: 'Volver a Historias',
      story1Title: 'El Futuro del Arbitraje Comercial en LATAM',
      story1Excerpt:
      'Cómo la transformación digital está reformando la resolución de disputas en las jurisdicciones latinoamericanas.',
      story1Content:
      'El panorama del arbitraje comercial en América Latina está experimentando una transformación profunda. A medida que las tecnologías digitales continúan reformando cómo operan las empresas, los mecanismos para resolver disputas deben evolucionar en consecuencia.\n\nLos procesos de arbitraje tradicionales, a menudo caracterizados por plazos extensos y costos sustanciales, están siendo reimaginados a través del lente de la tecnología. Las audiencias virtuales, la gestión electrónica de documentos y el análisis de casos asistido por IA ya no son conceptos futuristas sino realidades del presente.\n\nJurisdicciones clave en la región—incluyendo México, Brasil y Colombia—están actualizando sus marcos de arbitraje para acomodar estos cambios. El resultado es un sistema más accesible, eficiente y rentable para resolver disputas comerciales.\n\nPara las empresas que operan en LATAM, entender estos cambios es crucial. Las firmas que se adapten a este nuevo paradigma se encontrarán mejor posicionadas para gestionar disputas efectivamente y proteger sus intereses en un entorno comercial cada vez más complejo.',
      story2Title: 'Reduciendo el Rezago de Casos con Análisis Predictivo',
      story2Excerpt:
      'Un análisis profundo de cómo los modelos de aprendizaje automático ayudan a las firmas a priorizar sus cargas de casos.',
      story2Content:
      'Los departamentos legales y las firmas de abogados en todo el mundo enfrentan un desafío común: gestionar una carga de casos en constante crecimiento con recursos limitados. El análisis predictivo ofrece una solución convincente a este problema persistente.\n\nAl analizar datos históricos de casos, los modelos de aprendizaje automático pueden identificar patrones que ayudan a predecir resultados de casos, estimar plazos de resolución y evaluar requisitos de recursos. Esta inteligencia permite a los equipos legales tomar decisiones informadas sobre la priorización de casos.\n\nLa implementación del análisis predictivo en operaciones legales típicamente sigue un enfoque por fases. Los esfuerzos iniciales se centran en la recolección y estandarización de datos, seguidos por el desarrollo y validación de modelos. Las implementaciones más exitosas integran estas herramientas sin problemas en los flujos de trabajo existentes.\n\nLos primeros adoptantes reportan mejoras significativas en eficiencia. Los casos que podrían haber languidecido en el rezago ahora se identifican temprano y se enrutan apropiadamente. Las oportunidades de acuerdo se reconocen antes, y los recursos se asignan más estratégicamente.',
      story3Title: 'Financiamiento de Litigios: Un Activo Estratégico',
      story3Excerpt:
      'Entendiendo la mecánica del financiamiento sin recurso para litigios comerciales complejos.',
      story3Content:
      'El financiamiento de litigios ha emergido como una herramienta sofisticada para gestionar el riesgo legal y optimizar la asignación de capital. Para CFOs y consejeros generales, entender este mecanismo es cada vez más importante.\n\nEn su esencia, el financiamiento de litigios involucra a un tercero que proporciona capital para financiar procedimientos legales a cambio de una porción de cualquier recuperación eventual. La naturaleza sin recurso de estos arreglos significa que si el caso no tiene éxito, el financiador asume la pérdida.\n\nEsta estructura ofrece varias ventajas estratégicas. Las empresas pueden perseguir reclamos meritorios sin impactar sus balances o desviar recursos de las operaciones principales. La participación de financiadores sofisticados también proporciona una evaluación independiente del mérito del caso.\n\nEl mercado para el financiamiento de litigios ha madurado significativamente. Los financiadores ahora ofrecen una gama de productos, desde financiamiento de casos individuales hasta arreglos de cartera que distribuyen el riesgo entre múltiples asuntos.',
      story4Title: 'Cumplimiento Regulatorio en la Era Digital',
      story4Excerpt:
      'Navegando la compleja red de nuevas regulaciones que afectan las plataformas digitales y la privacidad de datos en el sector legal.',
      story4Content:
      'El panorama regulatorio para las operaciones digitales continúa evolucionando a un ritmo rápido. Para los profesionales legales, mantenerse al día con estos cambios es tanto un desafío como una necesidad.\n\nLas regulaciones de privacidad de datos han proliferado globalmente, con marcos como el GDPR estableciendo estándares que influyen en la legislación en todo el mundo. En América Latina, los países están implementando sus propias leyes de protección de datos, cada una con requisitos únicos y mecanismos de aplicación.\n\nPara las firmas de abogados y departamentos legales, el cumplimiento se extiende más allá de la protección de datos de clientes. Las herramientas y plataformas utilizadas para la gestión de casos, comunicación y almacenamiento de documentos deben cumplir con los estándares regulatorios.\n\nLas estrategias de cumplimiento exitosas típicamente involucran una combinación de soluciones tecnológicas y mejoras de procesos. Las herramientas de monitoreo automatizado pueden rastrear cambios regulatorios y señalar posibles problemas de cumplimiento.',
      story5Title: 'El Auge de las Plataformas ODR',
      story5Excerpt:
      'La Resolución de Disputas en Línea está pasando de quejas de consumidores a disputas B2B complejas. Esto es lo que necesitas saber.',
      story5Content:
      'La Resolución de Disputas en Línea (ODR) ha evolucionado mucho más allá de sus orígenes en quejas de consumidores de comercio electrónico. Hoy, plataformas ODR sofisticadas están manejando disputas complejas de negocio a negocio que tradicionalmente requerirían arbitraje o litigio presencial.\n\nLa pandemia de COVID-19 aceleró esta tendencia, ya que las partes y los árbitros por igual se sintieron cómodos con los procedimientos virtuales. Lo que comenzó como una necesidad ha revelado ventajas genuinas: costos reducidos, tiempos de resolución más rápidos y mayor accesibilidad para partes en diferentes ubicaciones.\n\nLas plataformas ODR modernas ofrecen características que mejoran el proceso de resolución de disputas. El intercambio seguro de documentos, la videoconferencia integrada y las herramientas de negociación estructurada crean un ambiente propicio para una resolución eficiente.\n\nPara las empresas, las implicaciones son significativas. Los contratos incluyen cada vez más cláusulas ODR, y las partes están más dispuestas a participar con estas plataformas para disputas sustanciales.',
      story6Title: 'Construyendo Operaciones Legales Resilientes',
      story6Excerpt:
      'Estrategias para modernizar equipos legales internos y firmas de abogados para resistir la incertidumbre económica y los desafíos operativos.',
      story6Content:
      'La incertidumbre económica y las interrupciones operativas se han convertido en características recurrentes del panorama empresarial. Para las operaciones legales, construir resiliencia ya no es opcional—es esencial para el éxito a largo plazo.\n\nLas operaciones legales resilientes comparten varias características. Mantienen modelos de recursos flexibles que pueden escalar hacia arriba o hacia abajo según fluctúe la demanda. Aprovechan la tecnología para automatizar tareas rutinarias y permitir el trabajo remoto. Cultivan relaciones diversas con proveedores para evitar la dependencia excesiva de cualquier proveedor único.\n\nLa base de la resiliencia operativa es la documentación robusta de procesos. Cuando el personal clave no está disponible o los sistemas fallan, los procesos bien documentados permiten la continuidad.\n\nLa tecnología juega un papel crucial en la construcción de resiliencia. Los sistemas basados en la nube proporcionan accesibilidad y redundancia. La automatización reduce la dependencia de procesos manuales que pueden ser interrumpidos.',
      analysis: 'Análisis',
      technology: 'Tecnología',
      finance: 'Finanzas',
      regulation: 'Regulación',
      operations: 'Operaciones'
    },
    contact: {
      title: 'Contáctanos',
      headline: 'Ponte en contacto',
      subtitle:
      '¿Interesado en una demo o tienes preguntas? Deja tu correo y te responderemos pronto.',
      placeholder: 'nombre@empresa.com',
      submit: 'Enviar Solicitud',
      privacy:
      'Al enviar este formulario, aceptas nuestra política de privacidad. Respetamos tu bandeja de entrada.'
    },
    information: {
      eyebrow: 'Base de Conocimiento',
      title: 'Información Legal',
      subtitle:
      'Accede a recursos legales completos en todas las jurisdicciones y áreas de práctica en América Latina.',
      jurisdictions: 'Jurisdicciones',
      practiceAreas: 'Áreas de Práctica',
      viewRegulations: 'Ver regulaciones y precedentes',
      contributorTitle: 'Conviértete en Colaborador',
      contributorSubtitle:
      'Ayúdanos a construir la base de datos legal más completa de América Latina. Envía tu correo para unirte a nuestra red de expertos legales.',
      emailPlaceholder: 'Ingresa tu correo',
      submitButton: 'Enviar',
      labourLaw: 'Derecho Laboral',
      civilLaw: 'Derecho Civil',
      familyLaw: 'Derecho de Familia',
      commercialLaw: 'Derecho Comercial',
      criminalLaw: 'Derecho Penal',
      administrativeLaw: 'Derecho Administrativo',
      taxLaw: 'Derecho Tributario',
      constitutionalLaw: 'Derecho Constitucional'
    },
    financing: {
      eyebrow: 'Financiamiento de Litigios',
      title: 'Financia Tu Caso',
      subtitle:
      'Accede a financiamiento sin recurso para litigios meritorios. Evaluamos casos en toda América Latina y proporcionamos capital para perseguir reclamos que merecen resolución.',
      submitCase: 'Enviar Tu Caso'
    },
    footer: {
      tagline: 'Infraestructura legal moderna para resolución de disputas.',
      copyright: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos'
    },
    privacy: {
      eyebrow: 'Política de Privacidad',
      title: 'Política de Privacidad',
      content: 'Respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestros servicios.'
    },
    terms: {
      eyebrow: 'Términos de Servicio',
      title: 'Términos de Servicio',
      content: 'Al acceder y utilizar nuestros servicios, acepta estar sujeto a estos términos de servicio. Por favor, léalos cuidadosamente antes de usar nuestra plataforma.'
    },
    caseManagementHero: {
      label: 'Gestión de Casos',
      title: 'Gestión de Casos para Litigio',
      subtitle: 'Resolución',
      viewFeatures: 'Ver Características'
    },
    trustedBy: {
      title: 'Con el apoyo de',
      clients: []
    },
    theProblem: {
      label: 'El Problema',
      title: 'En litigio, el crecimiento',
      subtitle: 'suele venir con desorden',
      paragraph1: 'Más casos. Más plazos. Más personas involucradas. Pero las herramientas siguen siendo las mismas: hojas de cálculo, carpetas compartidas, hilos de correo y memoria individual.',
      paragraph2: 'Los plazos se escapan. La información se pierde entre traspasos. Los socios pierden visibilidad. Y los clientes—que esperan precisión y control—empiezan a notarlo.',
      conclusion: 'Esto no es un fallo de las personas.\nEs un fallo de infraestructura.'
    },
    caseManagement: {
      label: 'Gestión de Casos',
      title: 'Construido para litigio,',
      subtitle: 'no adaptado de otra cosa',
      description: 'Motex es una plataforma de gestión de casos diseñada específicamente para litigio. No es software genérico con plantillas legales añadidas.',
      workflows: 'Flujos de trabajo estructurados',
      workflowsDesc: 'Cada caso sigue protocolos definidos. Tus procesos, aplicados consistentemente.',
      compliance: 'Cumplimiento de procesos',
      complianceDesc: 'Las tareas no se pueden saltar. Los plazos no se pueden ignorar.',
      responsibility: 'Responsabilidad clara',
      responsibilityDesc: 'Cada tarea tiene un dueño. Cada decisión queda registrada.',
      alerts: 'Alertas automáticas',
      alertsDesc: 'Fechas críticas y riesgos emergen antes de convertirse en problemas.',
      conclusion: 'Una capa silenciosa de control que protege\ntanto a la firma como al abogado individual.'
    }
  }
};
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export function LanguageProvider({ children }: {children: ReactNode;}) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('motex-language');
      if (saved === 'en' || saved === 'es') return saved;
      // Check URL for language prefix
      const path = window.location.pathname;
      if (path.startsWith('/en')) return 'en';
      if (path.startsWith('/es')) return 'es';
    }
    return 'es'; // Default to Spanish
  });
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('motex-language', lang);
  };
  useEffect(() => {
    localStorage.setItem('motex-language', language);
  }, [language]);
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language]
      }}>

      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}