# InputGroup Component - Tailwind CSS Class Analysis

## Overview
The `InputGroup` component is a sophisticated form control that uses modern CSS features and Tailwind CSS v4 to create flexible, adaptive input layouts. It demonstrates advanced usage of the `:has()` pseudo-class, named groups, and data attributes.

## Component Structure
```tsx
InputGroup (Container)
├── InputGroupInput (Control)
└── InputGroupAddon (Addon/Label)
```

## Base Container Classes

### Core Layout
```css
group/input-group border-input relative flex w-full items-center rounded-md border transition-[color,box-shadow] outline-none
```

| Class | Purpose |
|-------|---------|
| `group/input-group` | Creates a named group for child elements to reference |
| `border-input` | Uses theme's input border color |
| `relative flex w-full items-center` | Flexbox container, full width, vertically centered |
| `rounded-md border` | Rounded corners with border |
| `transition-[color,box-shadow]` | Smooth transitions for color and shadow changes |
| `outline-none` | Removes default focus outline |

### Size & Content Adaptation
```css
h-9 min-w-0 has-[>textarea]:h-auto
```

| Class | Purpose |
|-------|---------|
| `h-9` | Fixed height of 2.25rem (36px) |
| `min-w-0` | Prevents flex items from growing beyond container |
| `has-[>textarea]:h-auto` | **Conditional**: If contains textarea, make height auto |

## Layout Variants Based on Addon Alignment

### Inline Alignments
```css
has-[>[data-align=inline-start]]:[&>input]:pl-2
has-[>[data-align=inline-end]]:[&>input]:pr-2
```

- **Trigger**: When addon has `data-align="inline-start"` or `data-align="inline-end"`
- **Effect**: Adds horizontal padding to input element
- **Use Case**: Icons or buttons positioned left/right of input

### Block Alignments
```css
has-[>[data-align=block-start]]:h-auto 
has-[>[data-align=block-start]]:flex-col 
has-[>[data-align=block-start]]:[&>input]:pb-3

has-[>[data-align=block-end]]:h-auto 
has-[>[data-align=block-end]]:flex-col 
has-[>[data-align=block-end]]:[&>input]:pt-3
```

- **Trigger**: When addon has `data-align="block-start"` or `data-align="block-end"`
- **Effects**:
  - Switch to vertical layout (`flex-col`)
  - Make height flexible (`h-auto`)
  - Add vertical padding to input
- **Use Case**: Labels or help text positioned above/below input

## State Management

### Focus State
```css
has-[[data-slot=input-group-control]:focus-visible]:border-ring 
has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 
has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]
```

**Trigger**: When `InputGroupInput` (with `data-slot="input-group-control"`) receives focus

**Visual Effects**:
- Border changes to focus color (`border-ring`)
- Focus ring appears with 50% opacity (`ring-ring/50`)
- Ring thickness is 3px (`ring-[3px]`)

### Error State
```css
has-[[data-slot][aria-invalid=true]]:ring-destructive/20 
has-[[data-slot][aria-invalid=true]]:border-destructive 
dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40
```

**Trigger**: When any slotted child has `aria-invalid="true"`

**Visual Effects**:
- Error ring with 20% opacity (40% in dark mode)
- Border changes to error color
- Automatic dark mode adaptation

## Modern CSS Features Utilized

### 1. `:has()` Pseudo-class
- **Purpose**: Parent element reacts to child element states/attributes
- **Examples**:
  - `has-[>textarea]:h-auto` - Parent adapts when containing textarea
  - `has-[[data-slot=input-group-control]:focus-visible]:border-ring` - Parent styles change on child focus

### 2. Named Groups
- **Syntax**: `group/input-group`
- **Benefit**: Allows specific targeting without conflicts
- **Usage**: Child elements can use `group-hover/input-group:` modifiers

### 3. Data Attributes for Semantic Styling
- **`data-slot`**: Identifies component role (`input-group`, `input-group-control`, `input-group-addon`)
- **`data-align`**: Controls layout behavior (`inline-start`, `inline-end`, `block-start`, `block-end`)

### 4. Arbitrary Values
- **`ring-[3px]`**: Custom ring width
- **`transition-[color,box-shadow]`**: Specific property transitions

### 5. Opacity Modifiers
- **`/20`, `/50`**: Transparent color variants
- **`ring-ring/50`**: Focus ring with 50% opacity

## Adaptive Behaviors

| Scenario | Layout Change | Visual Effect |
|----------|---------------|---------------|
| **Contains Textarea** | Height becomes flexible | Accommodates multi-line content |
| **Inline Addons** | Horizontal layout maintained | Input gets horizontal padding |
| **Block Addons** | Switches to vertical layout | Input gets vertical padding |
| **Focus State** | No layout change | Border + ring highlight |
| **Error State** | No layout change | Red border + ring |
| **Dark Mode** | No layout change | Adjusted opacity for better contrast |

## Component Philosophy

This component demonstrates **progressive enhancement** principles:
1. **Base functionality** works without JavaScript
2. **Layout adapts** based on content and configuration
3. **States are managed** through standard HTML attributes (`aria-invalid`, `:focus-visible`)
4. **Accessibility** is built-in through proper ARIA roles and attributes
5. **Theming** is handled automatically through CSS custom properties

## Usage Patterns

```tsx
// Basic input group
<InputGroup>
  <InputGroupInput placeholder="Enter text..." />
</InputGroup>

// With inline addon
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>

// With block addon (label above)
<InputGroup>
  <InputGroupAddon align="block-start">
    Email Address
  </InputGroupAddon>
  <InputGroupInput type="email" />
</InputGroup>
```

## Tags
#tailwindcss #css #react #components #forms #accessibility #modern-css #has-selector

---
*Created: November 5, 2025*  
*Component: InputGroup.tsx*  
*Framework: Tailwind CSS v4 + React*