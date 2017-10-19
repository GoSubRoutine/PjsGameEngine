"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');

  canvas.addEventListener('focus', function () { // while focussed, play sketch
    const sketch = Processing.getInstanceById(this.id);
    if (sketch)  sketch.loop(), sketch.unmute();
  });

  canvas.addEventListener('blur', function () { // when focus's lost, pause sketch
    const sketch = Processing.getInstanceById(this.id);
    if (sketch)  sketch.noLoop(), sketch.mute();
  });
});