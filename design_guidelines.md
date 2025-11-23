# Developer Portfolio Design Guidelines

## Design Approach

**Selected Approach:** Hybrid - Drawing inspiration from modern developer portfolio best practices (Linear, Vercel, GitHub profiles) combined with Material Design principles for clarity and structure.

**Key Design Principles:**
- Professional minimalism with purposeful animations
- Content-first hierarchy showcasing technical expertise
- Seamless dark/light mode integration
- Performance-focused interactions

---

## Typography System

**Primary Font Family:** Inter (via Google Fonts CDN)
- **Headings:** 
  - H1 (Hero): 3.5rem (56px) - font-weight: 700
  - H2 (Section titles): 2.5rem (40px) - font-weight: 600
  - H3 (Subsections): 1.75rem (28px) - font-weight: 600
- **Body Text:** 1rem (16px) - font-weight: 400, line-height: 1.7
- **Small Text:** 0.875rem (14px) - font-weight: 400

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-6 to gap-8
- Container max-width: max-w-6xl
- Element spacing: space-y-4 for tight groups, space-y-8 for sections

**Grid System:**
- Skills: 3-column grid (lg), 2-column (md), 1-column (mobile)
- Projects: 2-column grid (lg), 1-column (mobile)
- Experience: Single column timeline layout

---

## Component Library

### 1. Hero Section
- Full viewport height (min-h-screen) with centered content
- Name display with gradient text effect
- Tagline and role subtitle
- Dual CTA buttons: "View Projects" (primary) + "Download Resume" (secondary)
- Subtle scroll indicator at bottom
- **No background image** - focus on typography and gradient accents

### 2. About Me
- Two-column layout (text + stats/highlights)
- Professional headshot placeholder (rounded, max-w-xs)
- Key metrics in grid: Years of Experience, Projects Completed, Technologies Mastered
- Concise bio paragraph (max 3-4 lines)

### 3. Skills Section
- Category-based organization with visual tags
- Interactive skill cards with proficiency indicators
- Icon integration using Heroicons
- Categories: Frontend, Backend, Tools & Platforms, Soft Skills

### 4. Projects
- Card-based layout with hover lift effect
- Each card includes: Project image placeholder, title, 2-3 line description, tech stack tags, GitHub + Demo link buttons
- Filter by technology (optional interactive filter)
- "Featured" badge for top 2-3 projects

### 5. Experience Timeline
- Vertical timeline with company logos
- Each entry: Company name, role, duration, 3-4 bullet points of achievements
- Alternating left-right layout on desktop, stacked on mobile

### 6. Contact Section
- Simple centered form: Name, Email, Message fields
- Direct email link with icon
- Social links (GitHub, LinkedIn, Twitter) with icon-only buttons
- Form validation with inline error states

### 7. Navigation
- Fixed top navigation bar with blur backdrop
- Logo/Name on left, menu items on right
- Smooth scroll to sections on click
- Dark/Light mode toggle icon in top-right
- Mobile: Hamburger menu with slide-in drawer

---

## Animations & Interactions

**Scroll Animations:** Fade-up on scroll for section entries (stagger delay: 100ms)
**Hover States:**
- Project cards: translateY(-4px) + subtle shadow increase
- Buttons: Scale(1.05) + brightness increase
- Skill tags: Border color shift

**Page Transitions:** Smooth scroll behavior (scroll-behavior: smooth)

**Dark/Light Mode Transition:** 300ms ease-in-out for background and text colors

---

## Accessibility

- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Focus visible states with outline offset
- Minimum contrast ratio: 4.5:1 for text
- Keyboard navigation support for all interactive elements

---

## Images

**No large hero background image** - The hero section uses typography and subtle gradient accents instead.

**Images Required:**
1. **Professional headshot** - About Me section (circular, 300x300px recommended)
2. **Project thumbnails** - 3-5 project cards (16:9 aspect ratio, 800x450px)
3. **Company logos** - Experience timeline (small, 60x60px, transparent background)

All images should have lazy loading and proper alt text.

---

## Dark/Light Mode Strategy

**Light Mode:**
- Background: Near-white (not pure white)
- Text: Dark gray (not pure black)
- Accents: Vibrant blue/purple gradient

**Dark Mode:**
- Background: Deep navy/charcoal
- Text: Off-white
- Accents: Same gradient with adjusted opacity
- Card backgrounds: Slightly lighter than base

**Toggle Persistence:** Save preference to localStorage