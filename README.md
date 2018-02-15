# flex
📦  Flexible CSS

```javascript
// xs: Extra small devices (portrait phones, less than 576px)

// sm: Small devices (landscape phones, 576px and up)

// md: Medium devices (tablets, 768px and up)

// lg: Large devices (desktops, 992px and up)

// xl: Extra large devices (large desktops, 1200px and up)

viewports: 'xs', 'sm', 'md', 'lg', 'xl';
```

Structure:
```html
<div class="row row-center row-middle">
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"></div>
  <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"></div>
</div>
```

Alignment:
```css
.start-viewport, .center-viewport, .end-viewport,
.top-viewport, .middle-viewport, .bottom-viewport,
.around-viewport, .between-viewport
```

Sizes:
```css
/* Size: From 1 to 12 */
.col-size, .col-viewport-size
```

Offset:
```css
/* Size: From 1 to 11 */
.col-offset-size, .col-viewport-offset-size
```

Hide Elements from viewport:
```css
/* Hide when phone portrait */
.hide-phone, .phone-hide

/* Hide when phone landscape */
.hide-phone-landscape, .phone-landscape-hide

/* Hide when tablet portrait */
.hide-tablet, .tablet-hide

/* Hide when tablet landscape */
.hide-tablet-landscape, .tablet-landscape-hide

/* Hide when desktop */
.hide-desktop, .desktop-hide
```