document.addEventListener("DOMContentLoaded",function(event){
    window.sr = ScrollReveal();

    sr.reveal('.navbar', {
      duration: 2000,
      origin: 'bottom'
    });

    sr.reveal('.header-content-left, info-one', {
      duration: 2000,
      origin: 'top',
      distance: '300px'
    });

    sr.reveal('.header-content-rigth', {
      duration: 2000,
      origin: 'right',
      distance: '300px'
    });

    sr.reveal('.header-btn', {
      duration: 2000,
      delay: 1000, 
      origin: 'bottom'
    });

    sr.reveal('#testimonial div', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      viewFactor: 0.2
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    

    let boton = 0;

    let leermas = document.querySelector("#leermas").addEventListener('click', function (){
       if (!boton){
           document.getElementById('readmore').style.display = 'inline';
           boton = 1;
       }
       else{
        document.getElementById('readmore').style.display = 'none';  
        boton = 0; 
       }
    })



    });

    