# Nested Menu Drawer

A modern, accessible nested menu drawer component built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, drag-to-close functionality, and responsive design.

## Folder Structure

```
nested-menu-drawer/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main page component with drawer demo
│   │   ├── layout.tsx            # Root layout with global providers
│   │   └── globals.css           # Global styles and animations
│   │
│   ├── components/
│   │   └── ui/
│   │       └── drawer.tsx        # Radix UI drawer wrapper with drag-to-close logic
│   │
│   ├── data/
│   │   ├── menuItems.ts          # Menu data structure with all menu items
│   │   └── iconMap.tsx           # Icon mapping function for menu icons
│   │
│   ├── types/
│   │   └── menu.ts               # TypeScript interfaces for menu items
│   │
│   └── lib/
│       └── utils.ts              # Utility functions (cn for class merging)
│
├── public/                        # Static assets
├── package.json                   # Project dependencies
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── tailwind.config.ts            # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:

```bash
cd nested-menu-drawer
```

2. Install dependencies:

```bash
npm install
```

### Running Locally

#### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

#### Production Build

Build for production:

```bash
npm run build
```

Run the production build:

```bash
npm start
```

#### Lint Code

Check for linting issues:

```bash
npm run lint
```

## How the Drawer is Built

### Architecture Overview

The nested menu drawer is built using **Radix UI** primitives wrapped with custom logic for drag-to-close functionality and animations.

### Key Components

#### 1. **Drawer Component** (`src/components/ui/drawer.tsx`)

- **Purpose**: Radix UI dialog wrapper with enhanced functionality
- **Features**:
  - Drag-to-close on downward motion
  - Smooth slide-up animation on open
  - Responsive positioning (bottom sheet style)
  - Pointer event handlers for drag tracking
  - Responsive margin: 12px on small screens, full width on larger screens
- **Key Logic**:
  - Tracks pointer movement with `startY` and `currentY`
  - Closes drawer when user drags down
  - Uses CSS transforms for smooth dragging feedback

#### 2. **Menu Data** (`src/data/menuItems.ts`)

- **Purpose**: Centralized menu data structure
- **Contains**: 8 main menu categories with nested children
- **Structure**:
  ```typescript
  {
    id: string;
    label: string;
    description?: string;
    icon: string;
    children?: MenuItem[];
    onClick?: () => void;
  }
  ```
- **Categories**:
  - Software Solutions (Web Dev, Mobile Apps, Enterprise)
  - Cloud & Infrastructure (AWS, Azure, Cloud Migration)
  - Consulting Services (Strategy, Tech Consulting)
  - Digital Transformation
  - Cybersecurity Consulting
  - Data & Analytics Consulting
  - DevOps & Platform Engineering
  - Support & Maintenance

#### 3. **Icon Map** (`src/data/iconMap.tsx`)

- **Purpose**: Maps icon names to react-icons components
- **Features**:
  - Returns React components for each icon
  - Consistent sizing (24px)
  - Light theme color (text-gray-700)
- **Supported Icons**:
  - FontAwesome: FaCode, FaCloud, FaBriefcase, FaRocket, FaShieldAlt, FaChartBar, FaCog, FaHeadset, FaAws, FaLaptopCode
  - Tabler: TbBrandAzure, TbDeviceDesktopDollar
  - Material Design: MdOutlineCloudSync
  - Ionicons: ImMobile
  - Phosphor: PiStrategyFill
  - Game Icons: GiTechnoHeart

#### 4. **Main Page** (`src/app/page.tsx`)

- **Purpose**: Demo page with drawer integration
- **State Management**:
  - `navigationStack`: Tracks nested menu levels
  - `isOpen`: Controls drawer visibility
- **Functions**:
  - `handleNavigateIn()`: Navigate to submenu or trigger action
  - `handleNavigateBack()`: Go back one level
- **Features**:
  - Resets to first menu level on drawer open
  - Responsive button and layout
  - Gradient background

### Animation System

**File**: `src/app/globals.css`

#### Animations Included:

1. **slideInFromBottom**: Drawer slides up from bottom on open
2. **slideOutToBottom**: Drawer slides down on close
3. **fadeIn/fadeOut**: Opacity transitions
4. **fadeInUp**: Menu items fade and slide up with staggered delay (50ms intervals)

### Navigation Flow

```
User Opens Drawer
    ↓
Drawer displays SAMPLE_MENU (first level)
    ↓
User clicks item with children → Navigate to submenu
    ↓
Back button appears in header
    ↓
User clicks Back → Return to previous level
    ↓
User drags down or closes → Reset to first level on next open
```

### Responsive Design

- **Breakpoint**: 480px
- **Small screens (< 480px)**:
  - Drawer margin: 12px left and right (`mx-3`)
  - Font sizes: `text-xs sm:text-sm`
  - Compact layout for mobile devices
- **Large screens (≥ 480px)**:
  - Drawer: full width (`sm:inset-x-0`)
  - Font sizes: `text-sm sm:text-base`
  - No margins

### Styling

- **Framework**: Tailwind CSS with utility classes
- **Theme**: Light theme by default
- **Key Colors**:
  - Background: White with subtle gradients
  - Text: Gray-900 (dark gray)
  - Accents: Blue-600 to Indigo-600
  - Borders: Gray-200
  - Hover: Gray-50
  - Active: Gray-100

### Type Safety

**File**: `src/types/menu.ts`

```typescript
interface MenuItem {
  id: string;
  label: string;
  description?: string;
  icon: string;
  children?: MenuItem[];
  onClick?: () => void;
}
```

## Technologies Used

- **Next.js 16.0.7** - React meta framework with Turbopack
- **React 18+** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible primitive components
- **shadcn/ui** - Pre-built components
- **react-icons** - Icon library
- **Turbopack** - Fast bundler

## Project Features

✅ Nested menu navigation with back button  
✅ Drag-to-close functionality  
✅ Smooth animations and transitions  
✅ Responsive design (mobile-first)  
✅ Accessible (Radix UI primitives)  
✅ Type-safe (TypeScript)  
✅ Clean code organization (separated data and logic)  
✅ Reusable components and utilities  
✅ Professional UI with icons and descriptions  
✅ Responsive spacing on all screen sizes

## Development Tips

### Adding New Menu Items

Edit `src/data/menuItems.ts`:

```typescript
{
  id: "new-item",
  label: "New Item",
  description: "Item description",
  icon: "icon-name",
  children: [
    // ... nested items
  ],
  onClick: () => console.log("clicked"),
}
```

### Customizing Icons

Update `src/data/iconMap.tsx` and add new cases:

```typescript
case "new-icon":
  return <YourIcon {...iconProps} />;
```

### Modifying Styles

- **Global animations**: Edit `src/app/globals.css`
- **Component styles**: Edit Tailwind classes in respective component files
- **Colors**: Update Tailwind config in `tailwind.config.ts`
- **Drawer spacing**: Adjust `mx-3` and `sm:mx-0` in `src/components/ui/drawer.tsx`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

[Live Preview](https://nextjs.org/learn)
