import React from "react";

import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
//react portal is a part of react dom
//npm install react-transition-group to get css animations

import "./SideDrawer.css";

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;

/*
React create portal
Certainly! Imagine your React app as a magical kingdom, and each React component is a building or structure within that kingdom. The components communicate with each other, and their magical powers (state and props) are confined within the kingdom.

Now, `ReactDOM.createPortal` is like a magical portal spell. It allows a wizard (a React component) to cast a spell and create a door to another realm outside the kingdom. Through this portal, the wizard can place an object (a React component) into a different world without losing its magical powers.

In more practical terms, it's as if your magical kingdom has a special portal door that opens into another dimension (a different part of the DOM). This allows your wizards (React components) to send messages or place enchanted objects (UI elements) in places that aren't directly connected to the kingdom but can still interact with it.

So, when you use `ReactDOM.createPortal`, think of it as casting a magical spell to extend the reach of your React components beyond the borders of their usual realm. It's a way to connect different parts of the magical world without losing the essence of the enchanted objects.

Keep in mind that createPortal is often used in scenarios where you need to render modals, tooltips, or other UI components that should appear outside the regular DOM hierarchy.

In React, ReactDOM.createPortal is a method that allows you to render a React component outside the usual DOM hierarchy of your React application. This is useful when you want to render content in a different part of the DOM, such as outside the root element of your React app, while still maintaining the component's React state and lifecycle.

*/




/*


It looks like you have a React component named `SideDrawer` that uses the `CSSTransition` component from the `react-transition-group` library. This component is designed to create a side drawer that slides in from the left when the `props.show` property is `true`, and it slides out when `props.show` is `false`. Additionally, the `ReactDOM.createPortal` method is used to render the content outside the main React DOM tree.

Here's a breakdown of the key points in your component:

1. **CSSTransition Component:**
   - `in={props.show}`: Controls whether the transition is in or out based on the value of `props.show`.
   - `timeout={200}`: Specifies the duration of the transition in milliseconds.
   - `classNames="slide-in-left"`: Provides a CSS class prefix for the transition classes. Make sure you have corresponding CSS styles defined with this prefix.
   - `mountOnEnter` and `unmountOnExit`: Determines whether the component should be mounted or unmounted when entering or exiting.

2. **Portal Rendering:**
   - `ReactDOM.createPortal(content, document.getElementById('drawer-hook'))`: Uses the `createPortal` method to render the content (side drawer) outside the main React DOM tree. The target container is specified as an element with the ID `drawer-hook`. Make sure you have this element in your HTML file.

3. **Side Drawer Content:**
   - The content of the side drawer is wrapped in the `CSSTransition` component.
   - The `aside` element has the CSS class `side-drawer`, and it triggers the `onClick` handler provided through props when clicked.


*/


//error is drawer