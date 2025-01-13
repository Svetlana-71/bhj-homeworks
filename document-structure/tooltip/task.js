const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', (event) => {
        event.preventDefault();   
        const tooltipText = tooltip.getAttribute('title');  
        const tooltipElement = document.createElement('div');  
        tooltipElement.classList.add('tooltip');  
        tooltipElement.textContent = tooltipText;
        document.body.appendChild(tooltipElement);
        tooltipElement.style.left = `${event.clientX}px`;
        tooltipElement.style.top = `${event.clientY}px`;
        tooltipElement.classList.add('tooltip_active');    
    setTimeout(() => {
            tooltipElement.classList.remove('tooltip_active');
            document.body.removeChild(tooltipElement);
        }, 1000);
    });   
});






















































