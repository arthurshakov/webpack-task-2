import './index.css';
import jsLogo from './assets/jslogo.png';

console.log('Hello World!');

const img = document.createElement('img');
img.classList.add('js-logo');
img.src = jsLogo;

document.body.insertAdjacentHTML('afterbegin', '<h1>I love JavaScript</h1>'); 
document.body.append(img);