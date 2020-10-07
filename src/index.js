import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();

// const displayAbout = () => {
//   const aboutEle = document.getElementById('site-about');
//   let y = window.scrollY;
//   console.log(y);
//   if (y >= 800) {
//     aboutEle.className = 'show';
//   } else {
//     aboutEle.className = 'hide';
//   }
// }
window.addEventListener("scroll", () => {
  // const aboutEle = document.getElementById('site-about');
  let y = window.scrollY;
  console.log(y);
  // if (y >= 800) {
  //   aboutEle.className = 'show';
  // } else {
  //   aboutEle.className = 'hide';
  // }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  const targetId = window.location.hash === '' ? 'about' : window.location.hash.substring(1);
  const targetEle = document.getElementById(targetId);
  targetEle.scrollIntoView(false);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
