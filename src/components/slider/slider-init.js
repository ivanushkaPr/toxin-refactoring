//import noUiSlider from 'nouislider';


import 'nouislider/distribute/nouislider.css';


const noUiSlider = require('nouislider');
console.log(noUiSlider)
$(document).ready(() => {
  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
      start: [5000, 10000],
      connect: true,
      range: {
          'min': 0,
          'max': 15000
      },
  });

  let handles = document.querySelectorAll('.noUi-handle');
  handles.forEach((handle) => {
    const mousemove = () => {
      console.log(slider.noUiSlider.get());
    }

    handle.addEventListener('mousedown', () => {
      handle.addEventListener('mousemove', mousemove);
    })

    const mouseup = () => {
      handle.removeEventListener('mousemove', mousemove);
      handle.removeEventListener('mouseup', mouseup);
    }

    handle.addEventListener('mouseup', mouseup);
  })

})
