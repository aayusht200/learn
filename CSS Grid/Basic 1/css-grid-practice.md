
# CSS Grid Practice Questions

Aayush's structured CSS Grid practice — progressing from basic to advanced.

---

## 🟢 Level 1: Grid Basics

1. **Create a Basic Grid Container**
   - Make a `div` container with 6 items inside.
   - Apply `display: grid` and use `grid-template-columns` to make 3 columns.

2. **Control Row Height and Gaps**
   - Set up 2 rows and 3 columns.
   - Add `row-gap` and `column-gap`.

3. **Repeat and fr Units**
   - Create a 4-column layout using `repeat()` and `fr`.

4. **Grid Lines and Named Areas (intro)**
   - Apply line-based placement: place the first item to span columns 1 to 3.

---

## 🟡 Level 2: Positioning and Sizing

5. **Grid Template Areas**
   - Use `grid-template-areas` to create a layout like:
     ```
     header header
     sidebar content
     footer footer
     ```

6. **Item Spanning**
   - Create a grid where one item spans 2 rows and another spans 2 columns.

7. **Auto-fill and Auto-fit**
   - Create a responsive grid using `auto-fill` and `minmax()` so the layout adapts to screen size.

8. **Implicit vs Explicit Grid**
   - Add more items than the grid defines—observe how they flow in the implicit grid.

---

## 🟠 Level 3: Alignment and Nesting

9. **Aligning Grid Items**
   - Practice with `justify-items`, `align-items`, `place-items`.

10. **Nesting Grid inside Grid**
   - Nest a grid inside a grid item and lay out its child elements.

11. **Responsive Grid Layout**
   - Use media queries to change the number of columns based on screen width.

---

## 🔵 Level 4: Real Layouts with Grid

12. **Create a Blog Layout**
   - Use grid to create a layout with header, nav, article, sidebar, and footer.

13. **Build a Gallery**
   - Create a responsive image gallery with Grid that rearranges on different screen sizes.

14. **CSS Grid vs Flexbox**
   - Recreate the same layout using Flexbox and then using Grid. Compare ease of use.
