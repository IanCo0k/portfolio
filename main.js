function scrollToSection(event, sectionId) {
    event.preventDefault();
  
    const section = document.getElementById(sectionId);
    const offsetTop = 1000;
    const windowHeight = window.innerHeight;
  
    const scrollTo = offsetTop - (windowHeight - section.offsetHeight) / 2;
  
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  }
  