📦 Project Context: Next.js Production-Ready App
حرفه‌ای‌ترین و کامل‌ترین نسخه

🧰 Tech Stack
Technology Purpose
Next.js 14+ App Router, Server Components, SEO
TypeScript Type safety, developer experience
Tailwind CSS Utility-first styling, responsive design
shadcn/ui Primary component library
React Icons Icon system
Vazirmatn Persian/Farsi font
RTL Layout Right-to-left text direction
📁 Project Structure
src/

├── app/

│ ├── layout.tsx # Root layout (metadata, font, RTL, theme)

│ ├── page.tsx # Home page (server component)

│ ├── globals.css # Design system tokens + base styles

│ ├── (auth)/ # Route group: login, register, etc.

│ └── (dashboard)/ # Route group: protected dashboard pages

│

├── components/

│ ├── ui/ # shadcn primitives (button, badge, etc.)

│ ├── sections/ # Page sections (HeroSection, PricingSection)

│ └── layout/ # Layout components (Header, Footer, etc.)

│

├── lib/

│ └── utils.ts # cn() utility and helpers

│

├── hooks/ # Custom React hooks

├── types/ # TypeScript type definitions

├── constants/ # Static data and configuration

└── public/ # Static assets (images, fonts)

🎨 Design System (CSS Architecture)
Location: src/app/globals.css
Architecture:
Token-based: CSS variables in HSL format
Theme-aware: Light/Dark mode via .dark class
Tailwind-integrated: Variables mapped to Tailwind utilities
Inspired by: shadcn/ui design system
🌞 Light Theme Tokens (:root)
css
@layer base {
:root {
/_ Background & Foreground _/
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;

    /* Card */
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    /* Popover */
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    /* Primary */
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    /* Secondary */
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    /* Muted */
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    /* Accent */
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    /* Destructive */
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    /* Borders & Inputs */
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    /* Border Radius */
    --radius: 0.5rem;

}
}
🌙 Dark Theme Tokens (.dark)
css
.dark {
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;

--card: 222.2 84% 4.9%;
--card-foreground: 210 40% 98%;

--popover: 222.2 84% 4.9%;
--popover-foreground: 210 40% 98%;

--primary: 210 40% 98%;
--primary-foreground: 222.2 47.4% 11.2%;

--secondary: 217.2 32.6% 17.5%;
--secondary-foreground: 210 40% 98%;

--muted: 217.2 32.6% 17.5%;
--muted-foreground: 215 20.2% 65.1%;

--accent: 217.2 32.6% 17.5%;
--accent-foreground: 210 40% 98%;

--destructive: 0 62.8% 30.6%;
--destructive-foreground: 210 40% 98%;

--border: 217.2 32.6% 17.5%;
--input: 217.2 32.6% 17.5%;
--ring: 212.7 26.8% 83.9%;
}
🧱 Base Styles
css
@layer base {

- {
  @apply border-border;
  }

body {
@apply bg-background text-foreground;
direction: rtl;
font-family: 'Vazirmatn', sans-serif;
}

/_ RTL fix for shadcn/radix components _/
[dir="rtl"] .radix-dropdown-menu-content {
direction: rtl;
}
}
🎯 Design Token Reference
Token Usage
--background Page background
--foreground Primary text color
--card Card container background
--card-foreground Text inside cards
--popover Dropdown/modal background
--primary Brand color, CTA buttons
--primary-foreground Text on primary color
--secondary Secondary UI elements
--muted Disabled states, subtle backgrounds
--accent Highlight elements
--destructive Error/delete actions
--border Border color
--input Input field border
--ring Focus ring color
--radius Border radius (default 0.5rem)
🧩 Tailwind Usage Examples

نمایش کد

// Background & Text

<div className="bg-background text-foreground">

// Primary button
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">

// Card

<div className="bg-card text-card-foreground border border-border rounded-lg">

// Muted text

<p className="text-muted-foreground">

// Secondary button
<Button variant="secondary">

// Destructive action
<Button variant="destructive">
📐 Layout & Spacing Guidelines
Container Pattern

نمایش کد

<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    {/* content */}
  </div>
</section>
Responsive Spacing
Sections: py-16 md:py-24
Container: px-4 (consistent horizontal padding)
Gaps: gap-6 md:gap-8
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Typography Scale

نمایش کد

// Headings

<h1 className="text-2xl md:text-5xl font-bold">
<h2 className="text-xl md:text-3xl font-semibold">
<p className="text-base md:text-lg text-muted-foreground">
🏗️ Current Page Structure
File: src/app/page.tsx

نمایش کد

export default function Home() {
return (
<main>
<HeroSection />
<WhyCarbonSection />
<RepositorySection />
<PricingSection />
<ContactSection />
<ScrollToTop />
</main>
);
}
🧱 Built Components
Component Type Purpose
HeroSection Server Hero/landing section
WhyCarbonSection Server Value proposition
RepositorySection Server Features/benefits
PricingSection Client Pricing plans + billing toggle
ContactSection Client Contact info + social links
ScrollToTop Client Floating scroll-to-top button
✅ Component Guidelines

1. Structure

نمایش کد

// Server Component (default)
export default function MySection() {
return (
<section className="py-16 md:py-24">
<div className="container mx-auto px-4">
{/_ content _/}
</div>
</section>
);
}

نمایش کد

// Client Component (when needed)
"use client";

import { useState } from "react";

export default function InteractiveSection() {
const [state, setState] = useState(false);

return (
<section className="py-16 md:py-24">
<div className="container mx-auto px-4">
{/_ interactive content _/}
</div>
</section>
);
} 2. Responsive Design
Mobile-first approach
Breakpoints: md:, lg:
Test on: 375px, 768px, 1024px, 1440px 3. RTL Considerations
Text: text-right by default
Flex: flex-row-reverse when needed
Icons: position with mr-_ becomes ml-_ in RTL 4. Accessibility
Semantic HTML (section, nav, main, etc.)
Alt text for images
Focus states (automatic via --ring)
Keyboard navigation support
🚀 Best Practices
Performance
Use next/image for images
Use next/font for fonts
Lazy load heavy components
Server Components by default
Security
No secrets in client code
Use .env.local for sensitive data
Validate user inputs
Use middleware for auth
SEO
Metadata in layout.tsx and page.tsx
Semantic HTML
Proper heading hierarchy
Open Graph tags
Code Quality
Modular components
Clean and readable
TypeScript strict mode
No unnecessary abstractions
🎯 AI Assistant Instructions
When building new components:

✅ DO:

Match existing spacing (container mx-auto px-4)
Use design tokens (bg-primary, text-muted-foreground)
Keep components modular and single-purpose
Write Persian text, RTL layout
Use shadcn/ui components
Follow responsive patterns
Server Components by default
❌ DON’T:

Hardcode colors
Add unnecessary features
Break existing patterns
Use inline styles
Ignore accessibility
Over-engineer solutions
📝 Example: ScrollToTop Component

نمایش کد

"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
const [visible, setVisible] = useState(false);

useEffect(() => {
const handleScroll = () => {
setVisible(window.scrollY > 400);
};

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);

}, []);

if (!visible) return null;

return (
<button
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
className="fixed bottom-6 left-6 z-[9999] p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
aria-label="بازگشت به بالا" >
<ArrowUp className="w-5 h-5" />
</button>
);
}
