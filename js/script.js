/*scroll reveal*/
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration:2000,
  delay:200 
});
ScrollReveal().reveal('.home-content, .heading ,.navbar ,.about-content ',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-box ',{origin: 'bottom'});

/*mutliple text*/
const typed = new Typed('.multiple-text', {
  strings:['Design','Engineer','Innovate'],
  typeSpeed:100,
  backSpeed:100,
  backDelay: 1000,
  loop:true
});