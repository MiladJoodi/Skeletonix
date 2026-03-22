# skeletonix

**Plug-and-play React Skeleton Loader for fast, smooth placeholders.**

A tiny, fully typed shimmer component for React & Next.js. Zero config — just import and use.

![skeletonix demo](https://raw.githubusercontent.com/MiladJoodi/Skeletonix/main/pubic/01.gif)

## Install

```bash
npm install skeletonix
```

## Quick Start

```tsx
import Skeleton from 'skeletonix';

<Skeleton text />                        // text line
<Skeleton circle size={48} />            // avatar
<Skeleton block />                       // full-width block
<Skeleton width={200} height={20} rounded="md" />  // custom
```

No CSS import needed — styles are injected automatically.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `boolean` | — | Text-line placeholder (100% width, 1rem height) |
| `circle` | `boolean` | — | Circle placeholder |
| `block` | `boolean` | — | Full-width block (4rem height) |
| `size` | `number \| string` | `48` | Circle diameter (only with `circle`) |
| `width` | `number \| string` | — | Width (`number` = px) |
| `height` | `number \| string` | — | Height (`number` = px) |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | — | Border radius |
| `baseColor` | `string` | `#e5e7eb` | Background color |
| `shimmerColor` | `string` | `rgba(255,255,255,0.55)` | Shimmer highlight |
| `duration` | `number` | `1.5` | Animation speed (seconds) |
| `className` | `string` | — | Extra CSS classes |
| `style` | `CSSProperties` | — | Inline styles |

Plus all standard `<div>` HTML attributes (`id`, `onClick`, `ref`, etc.)

## Examples

### Profile Card

```tsx
import Skeleton from 'skeletonix';

function ProfileSkeleton() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Skeleton circle size={48} />
      <div>
        <Skeleton text width={140} />
        <Skeleton text width={90} style={{ marginTop: 8 }} />
      </div>
    </div>
  );
}
```

### Content Card

```tsx
function CardSkeleton() {
  return (
    <div style={{ width: 300, padding: 16 }}>
      <Skeleton block height={160} rounded="lg" />
      <Skeleton text width="70%" style={{ marginTop: 12 }} />
      <Skeleton text width="45%" style={{ marginTop: 8 }} />
    </div>
  );
}
```

## Theming

Override colors globally with CSS variables:

```css
:root {
  --skeletonix-base: #e5e7eb;
  --skeletonix-shimmer: rgba(255, 255, 255, 0.55);
  --skeletonix-duration: 1.5s;
}

/* Dark mode */
.dark {
  --skeletonix-base: #1e293b;
  --skeletonix-shimmer: rgba(255, 255, 255, 0.08);
}
```

Or per-component:

```tsx
<Skeleton text baseColor="#1e293b" shimmerColor="rgba(255,255,255,0.1)" />
```

## Next.js

Works with App Router and Pages Router — no extra setup.

```tsx
// app/loading.tsx
import Skeleton from 'skeletonix';

export default function Loading() {
  return <Skeleton block height={200} rounded="lg" />;
}
```

## Details

- **Bundle:** ~3KB (ESM, gzipped)
- **Dependencies:** none (only `react` as peer)
- **TypeScript:** full types with discriminated union props
- **Compatibility:** React 17+, Next.js 13+

## Author

**Milad Joodi** — [LinkedIn](https://www.linkedin.com/in/joodi/)

## License

MIT
