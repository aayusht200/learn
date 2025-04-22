# 🧱 CSS Box Model & Inline vs Block Elements – Practice Assignment

> 📘 Instructions: Write your HTML/CSS for each task. Use DevTools for visual feedback and note down your observations below each question.

---

## 📦 Box Model Questions

### ✅ Q1: Box Model Basics

Create a `div` with the following styles:

- `padding: 20px`
- `margin: 10px`
- `border: 2px solid black`
- `width: 200px`

**Tasks:**

- What is the total width of the element (without `box-sizing` and with `box-sizing: border-box`)?
- Try changing `padding` and `border`. How does it affect total width?

---

### ✅ Q2: Nested Box Behavior

Create a parent container with two nested `div`s.

**Tasks:**

- Apply different margins and padding to the nested boxes.
- How do their sizes and spacing behave?
- What happens when you give `overflow: hidden` to the parent?

---

### ✅ Q3: Margin Collapse

Use two block elements, like `<p>` or `<div>`, one after another.

**Tasks:**

- Give both elements a `margin-top` and `margin-bottom`.
- Observe if the margins collapse.
- Add padding or border between them — does it prevent collapse?

---

### ✅ Q4: Visualizing Box Layers

Create a box with:

```css
padding: 20px;
border: 5px solid red;
margin: 30px;
background-color: lightblue;
```

**Tasks:**

- Which parts are visible in the box model?
- Use DevTools to identify padding, border, and margin areas.

---

### ✅ Q5: Inline vs Block Padding

Apply padding and background to a `span` and a `div`.

**Tasks:**

- Use `padding: 10px; background: yellow;`.
- Does the background expand in both?
- Try changing `span` to `display: inline-block`.

---

## 🧱 Inline vs Block Elements Questions

### ✅ Q6: Inline vs Block Behavior

Create a `div` and a `span`, both with some text and borders.

**Tasks:**

- Do they appear side-by-side or stacked?
- Apply `width` and `height`. Do both respond?

---

### ✅ Q7: Transforming Display Types

Take a `span` element and try:

- `display: block;`
- `display: inline-block;`

**Tasks:**

- What layout changes do you see?
- Can you apply padding and margin to each?

---

### ✅ Q8: Inline Inside Block

Nest `span`, `a`, `strong`, and `img` tags inside a `div`.

**Tasks:**

- Observe flow of inline elements.
- Try converting them to `block` — how does layout change?

---

### ✅ Q9: Element Swap

Replace a `p` tag with a `span`, keeping the same styles.

**Tasks:**

- How does the layout change?
- Is there any visual difference in text wrapping?

---

### ✅ Q10: Simulating a List with Inline Elements

Use multiple `span` elements styled with CSS.

**Tasks:**

- Use `display: block` or `inline-block` to mimic list items.
- Add `padding`, `margin`, and `border`.

---

## 📝 Submission Instructions

When done, paste your notes and/or code below each question.  
You can submit the updated Markdown file or show your HTML/CSS setup for review.
