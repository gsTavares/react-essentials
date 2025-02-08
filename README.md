# React essentials

## Browsers can run React Code directly?

- The awnser is: **no**. Browsers cannot understand React code. Instead, all React code that was written is transformed during the **build process** to Javascript, and them rendered by the browser.

## What are components?

- In React, a component is a piece of code that contains HTML, CSS and Javascript,  and represents a part of the UI. For real projects, developers may have different ways to define if a section on a page is a component or not. 

- The main benefits of break the UI in small parts are the code **readbility** and **reusability** of them.

- The components pattern is present in other frameworks such as Angular and Vue.

## How React handles components?

- The `index.jsx` file just gets a "root" element present in the `index.html`.

- ReactDOM initializes the React app inside of this root element by rendering the `App.jsx` inside of it.

- And, in this point, we have something called **Component Tree** and his **root node**: the `App.jsx` component.

```jsx
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
```

- The HTML tags in React are **built-in** components (eg. header, p and span). For that reason, **custom components** must have the first letter in UPPERCASE.

```jsx
// Custom component example

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
```