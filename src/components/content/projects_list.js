import coupFavicon from '../../icons/coup_favicon.png';
import stockfoxFavicon from '../../icons/stockfox_favicon.png';
import acrosswordsFavicon from '../../icons/acrosswords_favicon.png';
import coupImage from '../../images/projects/coup_image.png';
import stockfoxImage from '../../images/projects/stockfox_image.png';
import acrosswordsImage from '../../images/projects/acrosswords_image.png';

const coup = {
  name: 'Coup de Tim',
  key: 'coup',
  liveLink: 'https://timharding31.github.io/Coup-de-Tim/',
  sourceLink: 'https://github.com/timharding31/Coup-de-Tim',
  technologies: 'Ruby on Rails, PostgreSQL, React, Redux',
  iconSrc: coupFavicon,
  imgSrc: coupImage,
  tabStyle: {
    backgroundColor: '#FFFDF5',
    boxShadow: 'inset 0 10px 30px rgba(55, 97, 113, 0.3)',
  },
  divStyle: {
    backgroundColor: 'rgba(255, 253, 245, 0.8)',
    boxShadow: 'inset 0 0 10px rgba(55, 97, 113, 0.3)',
    // boxShadow: 'inset 0 50px 100px #FFFDF5',
  },
  linkStyle: {
    backgroundColor: '#8F3F36',
    color: '#FFFDF5'
  },
  hStyle: {
    color: '#8F3F36',
    fontFamily: 'Dancing Script',
    fontWeight: 700,
    textShadow: '0 0 1px rgba(22, 28, 29, 0.75)',
  },
  pStyle: {
    color: 'rgba(55, 97, 113, 1)',
    fontFamily: 'Roboto',
    fontWeight: 500,
  },
  description: 'A web-based version of the popular card game, Coup, built with ‘vanilla’ JavaScript (minimal external libraries).'
}

const stockFox = {
  name: 'StockFox',
  key: 'stockfox',
  liveLink: 'https://stock-fox.herokuapp.com/',
  sourceLink: 'https://github.com/timharding31/stock-fox',
  technologies: 'JavaScript',
  iconSrc: stockfoxFavicon,
  imgSrc: stockfoxImage,
  tabStyle: {
    backgroundColor: '#1F2124',
    boxShadow: 'inset 0 10px 30px rgba(255,255,255,0.3)',
  },
  divStyle: {
    backgroundColor: 'rgba(31, 33, 36, 0.8)',
    boxShadow: 'inset 0 0 10px rgba(255,255,255,0.3)',
    // boxShadow: 'inset 0 50px 100px #1F2124',
  },
  linkStyle: {
    backgroundColor: '#77C151',
    color: 'rgb(255,255,255)'
  },
  hStyle: {
    color: '#77C151',
    fontFamily: 'DM Sans',
    fontWeight: 500,
  },
  pStyle: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Roboto',
    fontWeight: 500,
  },
  description: 'A stock-trading simulation application inspired by Robinhood.'
}

const acrossWords = {
  name: 'AcrossWords',
  key: 'acrosswords',
  liveLink: 'https://acrosswords.herokuapp.com/',
  sourceLink: 'https://github.com/jacobprall/CrossWords',
  technologies: 'MongoDB, Express, React, Redux, Node, Python, Selenium',
  iconSrc: acrosswordsFavicon,
  imgSrc: acrosswordsImage,
  tabStyle: {
    backgroundColor: '#F6F5F5',
    boxShadow: 'inset 0 10px 30px rgba(61, 100, 202, 0.3)',
  },
  divStyle: {
    backgroundColor: 'rgba(246, 245, 245, 0.8)',
    boxShadow: 'inset 0 0 10px rgba(61, 100, 202, 0.3)',
    // boxShadow: 'inset 0 50px 100px #F6F5F5',
  },
  linkStyle: {
    backgroundColor: 'rgb(61, 100, 202)',
    color: '#F6F5F5'
  },
  hStyle: {
    color: '#404040',
    fontFamily: 'Orbitron',
    fontWeight: 700,
  },
  pStyle: {
    color: '#404040',
    fontFamily: 'Roboto',
    fontWeight: 500,
  },
  description: 'A procedurally generated crossword puzzle that serves up clues dynamically as user input changes.'
}

export default [coup, stockFox, acrossWords];