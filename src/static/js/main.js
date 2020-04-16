/*(function($){
    $(function(){

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); */// end of jQuery name space


window.onload = function() {
    svg4everybody({})
  /*  $('.sidenav').sidenav();
    $('.parallax').parallax();*/

  /*  плавное скратие и появление  элемента  смена классов  scale-out   scale-in*/
const el = document.querySelector('#scale-demo')
    const btn = document.querySelector('#btn-toggle')
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('el.classList', el.classList.contains('scale-out'))
        if(!el.classList.contains('scale-out') && !el.classList.contains('scale-in')) {
            el.classList.add('scale-out')
        }else if (el.classList.contains('scale-out')) {
            el.classList.add('scale-in')
            el.classList.remove('scale-out')
        }else if(el.classList.contains('scale-in')) {
            el.classList.add('scale-out')
            el.classList.remove('scale-in')
        }
    })

    /*  плавное скратие и появление  элемента конец */
/*  увеличение текста  добавление и удоление класса flow-text*/
const text = document.querySelector('.text-up')
    text.addEventListener('click', () => {
        text.classList.toggle('flow-text')
    })
    /**************************************/






}

