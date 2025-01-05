# lipSync.js 🎤🖌️

**lipSync.js** is a dynamic, CSS-powered web UI framework for simulating mouth movements based on phonemes or groups of letters. It uses the `@layer` feature in CSS to create visually appealing animations for lips, tongue, and teeth in real-time, enabling lip-syncing effects for web applications.

![LipSync](https://github.com/user-attachments/assets/f643c55a-5acc-46b5-b550-220b7a164e04)

[LipSync | Live Codepen](https://codepen.io/driftblaze/pen/ogvoadj)

[NPM Package Link](https://www.npmjs.com/package/lipsync)

---

## 🌟 Features

- **Phoneme-Based Animation**: Supports multiple letter groups to represent distinct mouth shapes for phonemes.
- **Layered Styling**: Utilizes CSS `@layer` to organize and manage styles for the mouth, tongue, and teeth independently.
- **Smooth Transitions**: Includes animated transitions for natural-looking mouth movements.
- **Customizable Appearance**: Easily extend or modify the styles to fit your project.

---

## 🚀 Getting Started

### Installation

#### Using Web Components

1. Install using NPM:

```bash
npm i lipsync
```

Then import:

```js
import("lipsync");
```

Alternatively, use Unpkg:

```html
<script src="https://unpkg.com/lipsync@2.0.2/src/lipSyncComponent.js"></script>
```

#### Without using Web components

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/lipSync.js.git
   ```

2. Include the `lipSync.css` and `lipSync.js` files in your project.

   ```html
   <link rel="stylesheet" href="lipSync.css">
   <script src="lipSync.js" defer></script>
   ```

---

### Usage

1. Define an element / Web Component in your HTML to represent the mouth:

   ```html
   <div class="mouth" data-letters="aei">
       <div class="tongue"></div>
       <div class="teeth upper-part"></div>
       <div class="teeth lower-part"></div>
   </div>
   ```

   OR

   ```html
    <lip-sync data-letters="aei"></lip-sync>
   ```

2. Add the `data-letters` attribute to define the phoneme type. Supported phoneme groups:

   ```js
   const lipSyncTypes = [
     "aei", "bmp", "cdgknstxyz", "chjsh",
     "ee", "fv", "l", "o", "qw", "r", "th", "u"
   ];
   ```

3. Update the `data-letters` attribute dynamically via JavaScript for real-time animation:

   ```js
   const mouth = document.querySelector(".mouth");
   mouth.setAttribute("data-letters", "o"); // Change to another phoneme
   ```

---

## 📚 Examples

### Basic Example

```html
<div class="mouth" data-letters="bmp">
    <div class="tongue"></div>
    <div class="teeth upper-part"></div>
    <div class="teeth lower-part"></div>
</div>
```

### Live Update with JavaScript

```js
setInterval(() => {
  const phonemes = ["aei", "bmp", "cdgknstxyz", "chjsh", "ee"];
  const randomPhoneme = phonemes[Math.floor(Math.random() * phonemes.length)];
  document.querySelector(".mouth").setAttribute("data-letters", randomPhoneme);
}, 1000);
```

---

## 🎨 Customization

- Modify `lipSync.css` to adjust mouth, tongue, or teeth styles.
- Add new phoneme groups by extending the `lipSyncTypes` array and defining new `data-letters` styles.

> [!TIP]
> To better understand the working, you can check out [Medium Article on LipSync](https://medium.com/@yashrajbharti.met18/lipsyncing-made-dead-simple-using-pure-css-e345ce604c94) too!

---

## 🛠️ Future Scope

- **Web Speech API integration**, setup examples using Web Speech api like speech synthesis, to showcase how to make it.
- **Facial Gestures**, add animations to eyes like closing, partial close etc for extra facial expressions.
- **Playground**, have a whole figma svg plugin and css playground where developers can pick across various faces, eyes and mouth, combine and use directly by copying code.

> [!IMPORTANT]
> The utils folder provides a way of using the `SpeechSynthesis` interface of the Web Speech API to understand how use the lip sync features.

---

## 🛠️ Technologies

- **CSS @layer** for layered styling.
- **JavaScript** for dynamic phoneme updates.

---

## 🌟 Contributing

1. Fork the repository.
2. Create a new branch (`feature/new-animation`).
3. Commit your changes (`git commit -m 'Add a new animation for XYZ'`).
4. Push the branch (`git push origin feature/new-animation`).
5. Open a Pull Request.

---

## 📚 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
