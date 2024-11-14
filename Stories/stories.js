const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.style.display = hamburger.style.display === 'none' ? 'block' : 'none';
      close.style.display = close.style.display === 'none' ? 'block' : 'none';
    });
    document.getElementById('next').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }
    document.getElementById('prev').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }