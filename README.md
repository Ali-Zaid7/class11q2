# E-Commerce UI Kit

A **React** and **Next.js** based ecommerce user interface kit designed for rapid and modular development. The project includes a clean design template with pre-built components, content blocks, and layouts, making it easy to develop professional-grade ecommerce websites.

## 🚀 Features

- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Pre-built Components**: Ready-to-use UI components like buttons, headings, and content blocks.
- **Figma Integration**: Design consistency with reusable styles like typography, colors, and elevations.
- **Customizable Layouts**: Easily modify and adapt layouts for different sections such as hero sections, CTAs, and pricing.
- **Mobile-First Approach**: Designed with mobile responsiveness in mind.
  
## 📂 Project Structure

```plaintext
├── components/
│   └── button.tsx         # Button component with props
├── app/
│   └── page.tsx           # Home page with grid layout and buttons
├── public/
│   └── image/             # Static assets like SVG images (chair.svg, bulb.svg, etc.)
└── README.md              # Project documentation
```

# 🧩 Components Overview
Button Component (components/button.tsx)
This component accepts a name prop and renders a button with the provided name.

```
"use client";
import React from "react";

const button = (props: { name?: string }) => {
  console.log("Props ===>", props);
  return <div>{props.name}</div>;
};

export default button;
```

# Home Page (app/page.tsx)
The Home page uses the button component to display various button options, demonstrating the reusable nature of the component. You can customize the button text by passing the name prop.

```
import button from "../../components/button";

function Home() {
  return (
    <div>
      <button name="Subscribe" />
      <button name="Follow me" />
      <button name="My Youtube Channel" />
    </div>
  );
}

export default Home;
```
# 🖼️ Design Highlights
Hero Section
The project features a clean hero section with centered text and images aligned in a grid format:

```
<header className="text-center justify-center max:ml-6 ">
  <h1 className="pt-[146px] text-2xl text-[#8F94FF]">JUST UX</h1>
  <h1 className="mt-2 pt-2 font-[700] text-4xl text-[#FFFFFF]">
    ecommerce<br /> user interface kit
  </h1>
</header>
```

# Responsive Layout
The project is optimized for mobile, with various breakpoints ensuring the layout adapts well to smaller screen sizes.

# 🤝 Contributing
Contributions are welcome! If you have any suggestions, feel free to open an issue or submit a pull request.
