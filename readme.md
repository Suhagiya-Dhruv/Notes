## Inheritance

- color
- font-family
- font-size
- font-weight
- font-style
- line-height

some properties, like background-color, border, and margin, are not inherited.

## Units

**Absolute**

These units are absolute and do not change with the display size or zoom level. 

- px
- cm
- mm
- inch

**Relative**

These units are relative and it is change with the display size or zoom level and depend on parent.

- rem -> root element -> go to root element and take a font size
- em -> parent element -> take font size from parent and if not then go to grandparent and take font size
- vh -> view height
- vw -> view width
- %