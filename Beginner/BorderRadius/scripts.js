bottomleft = document.getElementById('bottomleft');
bottomright = document.getElementById('bottomright');
topleft = document.getElementById('topleft');
topright = document.getElementById('topright');

box = document.getElementById('box');
content = ''

bottomleft.addEventListener('change', () => {
    box.style.borderBottomLeftRadius = bottomleft.value + 'px';
    content += 'border-bottom-left-radius: ' + bottomleft.value + 'px;<br>';
    box.innerHTML = content;
})

bottomright.addEventListener('change', () => {
    box.style.borderBottomRightRadius = bottomright.value + 'px';
    content += 'border-bottom-right-radius: ' + bottomright.value + 'px;<br>';
    box.innerHTML = content;
})

topleft.addEventListener('change', () => {
    box.style.borderTopLeftRadius = topleft.value + 'px';
    content += 'border-top-left-radius: ' + topleft.value + 'px;<br>';
    box.innerHTML = content;
})

topright.addEventListener('change', () => {
    box.style.borderTopRightRadius = topright.value + 'px';
    content += 'border-top-right-radius: ' + topright.value + 'px;<br>';
    box.innerHTML = content;
})