# CHAPTER 9
---

### Q1. When and why do we need lazy()?
- When we have a complex or big code app, we should split the code into logical bundles. This process is called CHUNKING / CODE SPLITTING / DYNAMIC BUNDLING / LAZY LOADING / ON DEMAND LOADING / ON DEMAND IMPORT / DYNAMIC IMPORT.

- With the help of React.lazy function we can do Chunking.

- React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component
```jsx
import {lazy} from "react"; 

//import Instamart from "./components/Instamart"; // Normal import
const AnyComponent = lazy(    () => import("./components/AnyComponent")    ) // Lazy import
```
---
### Q2. What is Suspense? When to use it? and Why ?
- The lazy component should be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

- When we load AnyComponent using Lazy import, It takes some time to load the code, but react tries to render it immediately. Since react unable to find the code, it suspends it and shows error.

- "When you are loading a component ON DEMAND, React tries to suspend it". To handle this error we need `React.Suspense`

```jsx
import { Suspense } from "react";

<Suspense fallback={"Shimmer or loading spinner or simple Loading text"}>
    <AnyComponent />
</Suspense>
```

- If we dont want to show the Shimmer/loading component in the meantime when lazy component is loading. We can use startTransition to Avoid fallbacks. [Docs]("https://reactjs.org/docs/code-splitting.html#avoiding-fallbacks")
---
### Q3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
- There are sometimes when component under suspense takes some time to render, but we also don't want to show loader or the fallback component then we can tell react to show the old component only and render the new one when its ready using `startTransition` method.

- React 18 introduces a new concurrent feature called transitions. You can mark updates as transitions, which tells React that they can be interrupted and avoid going back to Suspense fallbacks.
```jsx
// React.startTransition(callback)
import { useTransition, startTransition } from 'react';

const [isPending, startTransition] = useTransition();

startTransition( () => {
//some code which we want to set as low priority
						}  
				)
```
---
### Q4. Advantages or disadvantages of code splitting?