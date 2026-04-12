# landing/ — Marketing Site

> motex.ai | Público general | Estado: live

Contexto general del sistema en `../docs/CLAUDE.md`. Este archivo cubre solo lo específico de este repo.

---

## Stack

- **Build tool:** Vite 5 + React 18 + TypeScript
- **Routing:** React Router DOM v6 (SPA con prefijo de idioma)
- **Estilos:** Tailwind CSS v3 (tema oscuro custom, no el mismo config que frontend/)
- **Animaciones:** Framer Motion 11
- **Analytics:** Amplitude (`26a6485a79ea1273adc8e88eaac3fd17`)
- **Backend:** Supabase (solo lectura — blogs y writers)
- **Deploy:** Vercel (SPA con rewrites en `vercel.json`)

---

## Estructura

```
src/
├── App.tsx                 # Router principal con prefijos /es y /en
├── index.tsx               # Entry point + init Amplitude
├── components/             # Componentes reutilizables
│   ├── Header.tsx          # Navegación + toggle de idioma + menú mobile
│   ├── Hero.tsx            # Hero section con CTAs
│   ├── Features.tsx        # 5 feature cards (2 columnas)
│   ├── Stories.tsx         # Carousel de stories en home
│   ├── Footer.tsx          # Footer minimal
│   └── AmplitudeTracker.tsx  # Listener global de cambios de ruta
├── pages/                  # Páginas por ruta
│   ├── HomePage.tsx        # Hero + Features + Stories
│   ├── StoriesPage.tsx     # Listado de blog posts desde Supabase
│   ├── StoryDetailPage.tsx # Post individual + related stories
│   ├── ContactPage.tsx     # Formulario de captación de leads → n8n
│   ├── FinancingPage.tsx   # Descripción del litigation finance
│   ├── InformationPage.tsx # Base de conocimiento legal (8 áreas)
│   ├── ChatPage.tsx        # Chatbot legal (placeholder/mock por ahora)
│   ├── PrivacyPage.tsx     # Política de privacidad
│   └── TermsPage.tsx       # Términos de servicio
├── context/
│   └── LanguageContext.tsx # Context con 530+ strings traducidos (ES/EN)
├── data/
│   └── (transformadores de datos de Supabase)
├── lib/
│   └── supabase.ts         # Cliente + funciones: getBlogs, getBlogBySlug, getRelatedBlogs
└── utils/
    └── amplitude.ts        # initAmplitude, trackPageView, trackButtonClick, trackEvent, etc.
```

---

## Rutas

Todas las rutas tienen prefijo de idioma. Sin prefijo → redirige a `/es`.

| Ruta | Página |
|---|---|
| `/es`, `/en` | HomePage |
| `/es/stories`, `/en/stories` | Listado de blog |
| `/es/stories/:slug`, `/en/stories/:slug` | Post individual |
| `/es/contact`, `/en/contact` | Formulario de leads |
| `/es/financing`, `/en/financing` | Litigation finance |
| `/es/information`, `/en/information` | Base de conocimiento |
| `/es/:lawType/:country/chat` | Chatbot (mock) |
| `/es/privacy`, `/en/privacy` | Privacidad |
| `/es/terms`, `/en/terms` | Términos |

**Idioma:** detectado desde URL → fallback localStorage → default español. Toggle en el header cambia idioma y redirige.

---

## Supabase

**Solo lectura** — este repo no escribe nada a Supabase.

**Tablas:**
- `blogs` — posts del blog (multilingual: campos `_es` y `_en`)
  - `fecha`, `imagen`, `texto_en`, `texto_es`, `suburl` (slug), `descripcion_en/es`, `topico_en/es`, `titulo_en/es`, `writer_id`
- `writer` — autores de los posts
  - `id`, `nombre`, `apellido`, `foto`, `rol_en`, `rol_es`

**Funciones en `lib/supabase.ts`:**
- `getBlogs()` — todos los posts con writer join
- `getBlogBySlug(slug)` — post por slug
- `getRelatedBlogs(slug)` — posts relacionados (excluyendo el actual)

---

## Captación de leads → n8n

Al enviar el formulario de contacto (`ContactPage.tsx`):

```
POST https://motex.app.n8n.cloud/webhook/68cca297-8b46-4a2a-bb85-7026377b00f2
Body: { email: string }
```

El webhook `landing-newlead` de n8n envía un email a cristian@motex.ai con los datos del lead. No hay persistencia en Supabase — solo el webhook.

**⚠️ El endpoint está hardcodeado.** Mover a variable de entorno antes de escalar.

---

## Analytics

Amplitude inicializado en `index.tsx`. Funciones disponibles en `utils/amplitude.ts`:

```typescript
initAmplitude()                    // llamado al arrancar la app
trackPageView(name, props)         // en cada cambio de ruta (AmplitudeTracker)
trackButtonClick(name, props)      // CTAs principales
trackLinkClick(name, url, props)   // links de navegación
trackFormSubmit(name, props)       // formulario de contacto
trackEvent(name, props)            // custom events
setUserProperties(props)           // traits del usuario
```

---

## Variables de entorno

```bash
# .env (Vite usa VITE_ prefix, nunca commitear con valores reales)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

⚠️ No existe `.env.example` — crear uno antes del próximo onboarding.

---

## Paleta (diferente a frontend/ y finance/)

Este repo usa un tema oscuro propio:
- Primary: `#0D6B6E` (teal — distinto al Motex Blue del producto)
- Background: `#0A0A0A`
- Secundarios: `#111111`, `#161616`
- Borders: `#1a1a1a`, `#262626`

**Nota:** la landing usa una identidad visual ligeramente diferente al producto (más dark/editorial). Ver `../docs/branding/branding.md` para alinear si se hacen cambios de marca.

---

## Comandos

```bash
npm install
npm run dev      # Vite dev server
npm run build    # → dist/
npm run preview  # preview del build
npm run lint
```

---

## Deploy

Vercel automático desde `main`. `vercel.json` tiene rewrites de todas las rutas a `/index.html` para que el router client-side funcione.

---

## Reglas específicas de este repo

- **El lead no se puede romper.** El flujo de contacto (form → n8n → email a Cristián) es el único canal de adquisición activo hoy desde la landing. Testear en preview antes de mergear.
- **Bilingüe siempre.** Todo texto nuevo va en `LanguageContext.tsx` con su versión en ES y EN. Nunca texto hardcodeado directamente en componentes.
- **ChatPage es un placeholder.** El chatbot usa mock responses con `setTimeout`. No es funcional — no invertir tiempo aquí sin validar primero el roadmap.
- **`stories` es una tabla pública sin datos sensibles.** Es la única tabla de Supabase que no requiere auth. No agregar datos sensibles a este schema.
- **Amplitude API key pública.** Está en el código del bundle — es intencional (analytics browser-side). No confundir con claves privadas.
- **Tono:** ver `../docs/branding/branding.md`. La landing habla a abogados e inversores — directo, basado en datos, sin "revolucionario" ni "disruptivo".
