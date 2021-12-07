export function renderFlag(flagData) {
    const div = document.createElement('div');
    const pName = document.createElement('p');
    const pColor = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('flag');

    pName.textContent = flagData.name;
    pColor.textContent = flagData.color;
    img.src = flagData.img_url;

    div.append(pName, pColor, img);

    return div;
}