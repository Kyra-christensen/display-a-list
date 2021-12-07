// import functions and grab DOM elements
import { renderPlanet } from './render-planet.js';
import { renderFlag } from './render-flag.js';
import { renderMovie } from './render-movies.js';
import { renderPost } from './render-post.js';
import { planets } from './planets.js';
import { flags } from './flags.js';
import { movies } from './movies.js';
import { posts } from './posts.js';

const planetsEl = document.getElementById('planets-list');
const flagsEl = document.getElementById('flags-list');
const moviesEl = document.getElementById('movies-list');
const postsEl = document.getElementById('posts-list');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let planet of planets) {
    const planetEl = renderPlanet(planet);
    planetsEl.append(planetEl);
}

for (let flag of flags) {
    const flagEl = renderFlag(flag);
    flagsEl.append(flagEl);
}

for (let movie of movies) {
    const movieEl = renderMovie(movie);
    moviesEl.append(movieEl);
}

for (let post of posts) {
    const postEl = renderPost(post);
    postsEl.append(postEl);
}