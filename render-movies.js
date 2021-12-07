export function renderMovie(movieData) {
    const movieDiv = document.createElement('div');
    const movieName = document.createElement('p');
    const movieYear = document.createElement('p');
    const movieImg = document.createElement('img');

    const sequelDiv = document.createElement('div');
    const sequelName = document.createElement('p');
    const sequelYear = document.createElement('p');
    const sequelImg = document.createElement('img');

    movieDiv.classList.add('movie');
    sequelDiv.classList.add('sequel');

    movieName.textContent = movieData.name;
    movieYear.textContent = movieData.year;
    movieImg.src = movieData.url_img;
    sequelName.textContent = movieData.sequel.name;
    sequelYear.textContent = movieData.sequel.year;
    sequelImg.src = movieData.sequel.img;

    sequelDiv.append(sequelName, sequelYear, sequelImg);

    movieDiv.append(movieName, movieYear, movieImg, sequelDiv);
    
    return movieDiv;

}
