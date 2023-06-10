import FileDragBox from './lib/filedragbox.js';

// FileDragBox.js Demo

const preview = document.querySelector('.preview');

new FileDragBox('#dragbox', {
    inputFile: '#file',
    accept: ['image/jpeg', 'image/png'],
    success: function (_, files) {
        preview.innerHTML = '';
        [...files].forEach((image) => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(image);
            img.title = image.name;
            preview.appendChild(img);
        });
    }
});

// Highlight.js

const pre = document.querySelectorAll('pre');
pre.forEach(code => {
    hljs.highlightElement(code);
});