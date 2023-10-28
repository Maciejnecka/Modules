import { random, people } from './utilis/data.js';
import showPeople from './utilis/showPeople.js';
import get from './utilis/getElement.js';

const container = get('.container');
const btn = get('.btn');
// const container1 = get('.container1');
// console.log(container1);

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
