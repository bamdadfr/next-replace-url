Replace URL parameters in Next.js without re-rendering.

## 🚀 Getting Started

```bash
npm install next-replace-url
yarn add next-replace-url
```

```javascript
import {useNextReplaceUrl, nextReplaceUrl} from 'next-replace-url';

// in your functional component
useNextReplaceUrl('parameter', value);

// from anywhere
nextReplaceUrl('parameter', value);
```

## 📖️ Description

The module replaces the `window.history.state` object therefore bypassing Next.js routing context, avoiding re-renders.

Some suggest shallow routing which unfortunately does not prevent re-renders.

### Under the hood example

```javascript
// User navigates to https://example.com/audio/1

// Current state
window.history.state = {
  "url": "/audio/[volume]?volume=1", // Next.js URL
  "as": "/audio/1" // What user sees
}

// Running the following command will replace the URL parameter "volume" with "2"
nextReplaceUrl('volume', '2')

// Resulting state
window.history.state = {
  "url": "/audio/[volume]?volume=2",
  "as": "/audio/2"
}
```

## 📖️ Related discussions

- https://github.com/vercel/next.js/discussions/18072
