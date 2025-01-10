let rotatorCases = document.querySelectorAll('.rotator__case');
let currentActiveCaseIndex = 0;

function switchActiveCase() {
    rotatorCases[currentActiveCaseIndex].classList.remove('rotator__case_active');
    currentActiveCaseIndex = (currentActiveCaseIndex + 1) % rotatorCases.length;
    rotatorCases[currentActiveCaseIndex].classList.add('rotator__case_active');
    rotatorCases.forEach(caseElement => {
        let color = caseElement.dataset.color;
        caseElement.style.color = color;
    });
}
setInterval(switchActiveCase, 1000);    
