# Pixel Pals hero

Copy `PixelPalsHero.jsx`, `PixelPalsHero.css`, and the `assets` directory into your React project's component directory, then render it where your current hero appears:

```jsx
import PixelPalsHero from "./components/PixelPalsHero";

export default function HomePage() {
  return (
    <PixelPalsHero
      startProjectHref="/contact"
      aiPlatformHref="/ai-platform"
    />
  );
}
```
