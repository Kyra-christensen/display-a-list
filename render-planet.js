export function renderPlanet(planetData) {
    const p = document.createElement('p');

    p.textContent = planetData;
    p.classList.add('planet');

    if (planetData === 'Earth') {
        p.style.backgroundColor = 'green';
    }

    if (planetData.length === 4) {
        p.style.backgroundColor = 'orange';
    }
    
    if (planetData[0] === '1') {
        p.style.transform = 'rotate(45deg)';
    }

    return p;
}