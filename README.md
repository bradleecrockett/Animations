# Animations

Follow the comments in `sketch.js` to create a walking animation for 
a sprite.

Goal is to understand how basic computer animations work and be able to incorporate them into our projects.

// or more detailed usage
image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
```

| Parameters | Description |
| --- | --- |
`img` | p5.Image|p5.Element|p5.Texture|p5.Framebuffer|p5.FramebufferTexture: image` to display.
`x` | Number: x-coordinate of the top-left corner of the image.
`y` | Number: y-coordinate of the top-left corner of the image.
`width` | Number: width to draw the image.
`height` | Number: height to draw the image.
`dx` | Number: the x-coordinate of the destination rectangle in which to draw the source image
`dy` | Number: the y-coordinate of the destination rectangle in which to draw the source image
`dWidth` | Number: the width of the destination rectangle
`dHeight` | Number: the height of the destination rectangle
`sx` | Number: the x-coordinate of the subsection of the source image to draw into the destination rectangle
`sy` | Number: the y-coordinate of the subsection of the source image to draw into the destination rectangle
`sWidth` | Number: the width of the subsection of the source image to draw into `the destination rectangle
`sHeight` | Number: the height of the subsection of the source image to draw into the destination rectangle
`fit` | Constant: either CONTAIN or COVER
`xAlign` | Constant: either LEFT, RIGHT or CENTER default is CENTER
`yAlign` | Constant: either TOP, BOTTOM or CENTER default is CENTER
   

This lesson was adapted from the video: https://youtu.be/CY0HE277IBM.
Note that we are using P5JS instead of vanilla Javascript and will be creating a simplified version of the program.


