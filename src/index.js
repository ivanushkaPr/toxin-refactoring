import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('./', true, /\.js$|\.scss$|\.svg$|\.css$/));


$(document).ready(() => {
  var slider = document.getElementById('slider');
  console.log(noUiSlider.cssClasses);

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
