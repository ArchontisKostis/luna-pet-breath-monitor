import {facts} from '../assets/data/dummyCatFacts.json';

let getRandomCatFact = () => {
    let randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

export {getRandomCatFact};