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

The component uses no UI or CSS dependencies. For an exact typography match, make sure your site loads the Inter font at weights 400, 600, and 700.

Brizy does not run arbitrary React components directly in its normal page editor. Use this component in a React-hosted page/app, or translate the same structure into Brizy elements. If your Brizy plan supports custom code embedding, deploy the React bundle first and embed the resulting application rather than pasting JSX into an HTML block.
