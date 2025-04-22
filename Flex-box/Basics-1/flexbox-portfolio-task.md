
# Flexbox Practice Challenge: Mini Portfolio

This project is your next step after completing all 7 Flexbox practice questions. You're going to build a **single webpage** that displays each solution in a card-style layout, like a mini gallery.

---

## 🧩 Objective

Create an HTML + CSS project called `flexbox-portfolio` that includes all 7 of your answers using Flexbox layouts. Each answer will appear in its own section or card.

---

## 📁 Folder Structure

```
flexbox-portfolio/
│
├── index.html
├── style.css
└── assets/
```

---

## 📄 index.html (Starter Task)

You will write the HTML file that includes all 7 layouts inside a `<main>` container.

Use this structure to start:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Flexbox Mini Portfolio</h1>
    </header>
    <main class="portfolio">
        <!-- Add your flexbox practice layouts here -->
        <!-- Q1 -->
        <!-- Q2 -->
        <!-- Q3 -->
        <!-- ... -->
    </main>
</body>
</html>
```

---

## 🎨 style.css (Basic Structure)

Start your CSS with:

```css
body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f4f4f4;
}

header {
    text-align: center;
    padding: 20px;
    background-color: #222;
    color: white;
}

.portfolio {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
}
```

---

## 🧪 What To Do Next

- For each question (Q1 to Q7), wrap your solution inside a `<section class="project">`.
- Give each one a heading like `<h2>Q1: Flex Navbar</h2>` followed by the HTML from your solution.
- Use the `project` class to add some padding and box styling using Flexbox or Grid.

Let me know when you're ready to continue, and we’ll enhance it step-by-step!
