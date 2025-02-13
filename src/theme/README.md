# Theme System Documentation

## Overview

Our application uses a comprehensive theme system that provides consistent styling across all components. The system includes:

1. Unified breakpoint system
2. Responsive patterns
3. Typography system
4. Spacing system
5. Color system
6. Component base styles
7. Effects system
8. Grid system

## Breakpoints

Our application uses a unified breakpoint system across all styling methods:

```typescript
xs: 320px  // Extra small devices (small phones)
sm: 480px  // Small devices (phones)
md: 768px  // Medium devices (tablets)
lg: 1024px // Large devices (laptops/desktops)
xl: 1280px // Extra large devices (large desktops)
2xl: 1536px // Extra extra large devices
```

### Device Categories

- Mobile: < 480px
- Tablet: 480px - 1023px
- Desktop: ≥ 1024px

## Usage Methods

### 1. Responsive Patterns

```typescript
// Image sizes
import { IMAGE_SIZES } from '@/theme';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  sizes={IMAGE_SIZES.threeColumn}
/>

// Grid layouts
import { LAYOUT_PATTERNS } from '@/theme';

<div className={LAYOUT_PATTERNS.grid.threeColumn}>
  {/* Grid items */}
</div>

// Container layouts
<div className={LAYOUT_PATTERNS.container.default}>
  {/* Container content */}
</div>

// Section spacing
<section className={LAYOUT_PATTERNS.section.lg}>
  {/* Section content */}
</section>

// Typography
import { TEXT_PATTERNS } from '@/theme';

<h1 className={TEXT_PATTERNS.h1}>
  Title
</h1>
```

### 2. Theme System

```typescript
import { theme } from '@/theme';

// Colors
<div className={`text-${theme.colors.primary[500]}`}>
  Primary Text
</div>

// Typography
<h1 className={theme.typography.h1}>
  Heading
</h1>

// Components
<button className={`${theme.components.button.base} ${theme.components.button.variants.primary}`}>
  Click me
</button>

// Effects
<div className={`${theme.effects.shadows.lg} ${theme.effects.transitions.base}`}>
  Card with effects
</div>
```

### 3. SCSS Mixins

```scss
.my-component {
  // Device-based mixins
  @include mobile {
    // Styles for mobile
  }
  @include tablet {
    // Styles for tablet
  }
  @include desktop {
    // Styles for desktop
  }

  // Breakpoint-based mixins
  @include breakpoint-up('md') {
    // Styles for medium devices and up
  }
  @include breakpoint-down('lg') {
    // Styles for large devices and down
  }
  @include breakpoint-between('sm', 'lg') {
    // Styles between small and large devices
  }
}
```

## Best Practices

1. Always use the theme system instead of hardcoded values
2. Use responsive patterns for common layout needs
3. Follow mobile-first approach
4. Use semantic color names from the theme
5. Leverage component base styles for consistency
6. Use typography scale for text sizing
7. Apply spacing scale for margins and padding
8. Use transition presets for animations
9. Implement dark mode using theme colors
10. Test responsive behavior using DeviceTypeIndicator

## Layout Modes

The system supports three layout modes:
- `compact`: Used for mobile and landscape tablet views
- `regular`: Default mode for most viewports
- `expanded`: Used for extra-large viewports

## Testing

Use the `DeviceTypeIndicator` component during development:
```typescript
import DeviceTypeIndicator from '@/components/ui/DeviceTypeIndicator';

// Add to your layout during development
<DeviceTypeIndicator />
```

## Theme Customization

To modify the theme:
1. Update values in `src/theme/styles.ts`
2. Use semantic naming for new values
3. Follow the existing pattern structure
4. Update TypeScript types if needed
5. Document changes in this README 