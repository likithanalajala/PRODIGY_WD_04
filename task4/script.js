// Add any interactivity you want here, such as smooth scrolling for the navigation menu 
document.querySelectorAll('nav ul li a').forEach(anchor => { 
    anchor.addEventListener('click', function(e) { 
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    }); 
});