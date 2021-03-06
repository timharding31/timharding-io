import coupFavicon from '../../icons/coup_favicon.png';
import stockfoxFavicon from '../../icons/stockfox_favicon.png';
import acrosswordsFavicon from '../../icons/acrosswords_favicon.png';
import hspFavicon from '../../icons/hsp_favicon.png';
import coupImage from '../../images/projects/coup_image.png';
import stockfoxImage from '../../images/projects/stockfox_image.png';
import acrosswordsImage from '../../images/projects/acrosswords_image.png';
import hspImage from '../../images/projects/hsp_image.png';

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
    borderTop: '3px solid #8F3F36',
    borderLeft: '3px solid #8F3F36',
    borderRight: '3px solid #8F3F36'
  },
  divStyle: {
    backgroundColor: 'rgba(255, 253, 245, 1)',
    boxShadow: 'inset 0 -10px 10px rgba(55, 97, 113, 0.5)',
    borderBottom: '3px solid #8F3F36',
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
    textAlign: 'left',
    fontSize: '16px',
    padding: '0 2%',
    overflowY: 'scroll'
  },
  topLeftStyle: {
    position: 'absolute',
    top: 0, bottom: 'auto', left: 0,
    right: 'calc(100% - 3px)',
    width: 'auto',
    height: '3px',
    backgroundColor: '#8F3F36',
    borderBottomRightRadius: '5px'
  },
  topRightStyle: {
    position: 'absolute',
    top: 0, bottom: 'auto', right: 0,
    left: 'calc(25% - 3px)',
    width: 'auto',
    height: '4px',
    backgroundColor: '#8F3F36',
    borderBottomLeftRadius: '5px'
  },
  description: [
    'Coup de Tim is my spin on one my favorite games to play with friends, Rikki Tahta\'s Coup. Though it\'s programmed entirely in "vanilla" JavaScript, I designed a React-like modular architecture for the game and its components that adheres to the classic paradigms of OOP. Each piece of the game, from the coins to the entire gameplay instance, is an ES6 class that receives a DOM node as its construction parameter. Class instances render their elements (and those of their children) as descendants of that construction node, and changes to the game-state during play prompt re-renders of the relevant components.',
    'The site features a slideshow to teach the rules of Coup, and a \'Tutorial\' class that extends the standard \'Gameplay\' class to familiarize players with Coup de Tim by highlighting player controls and the gameplay areas.',
    'Your opponent in Coup de Tim is a non-deterministic AI that tries to emulate a skilled player\'s bluffing strategy. The computer is challenging to beat, so try a few rounds before you lose heart!',
  ]
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
    borderTop: '3px solid #77C151',
    borderLeft: '3px solid #77C151',
    borderRight: '3px solid #77C151'
  },
  divStyle: {
    backgroundColor: 'rgba(31, 33, 36, 1)',
    boxShadow: 'inset 0 -10px 10px rgba(255,255,255,0.25)',
    borderBottom: '3px solid #77C151',
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
    textAlign: 'left',
    fontSize: '16px',
    padding: '0 2%',
    overflowY: 'scroll'
  },
  topLeftStyle: {
    position: 'absolute',
    top: 0, bottom: 'auto', left: 0,
    right: 'calc(75% - 3px)',
    width: 'auto',
    height: '3px',
    backgroundColor: '#77C151',
    borderBottomRightRadius: '5px'
  },
  topRightStyle: {
    position: 'absolute',
    top: 0, bottom: 'auto', right: '0',
    left: 'calc(50% - 3px)',
    width: 'auto',
    height: '4px',
    backgroundColor: '#77C151',
    borderBottomLeftRadius: '5px'
  },
  description: [
    'StockFox is a stock-trading simulation application where users can research the market and simulate stock trades using reloadable buying power. As a full-stack clone of Robinhood, it was built from scratch using a Ruby on Rails backend, a PostgreSQL database to store users and stocks, and a React frontend with state managed by Redux.',
    'I configured external API calls to regularly patch each stock on the backend with latest price available, and to update the normalized Redux state with granular pricing information when requested. On the page for each stock, an interactive chart is displayed to monitor pricing changes in the Redux state over a user-specified range. User interaction with the curve updates the price displayed at the head via a custom tooltip function.',
    'Users can search by ticker symbol or company name for any stock listed on the NYSE or Nasdaq, and stocks can be \'bought\', \'sold\', and added to a watchlist from the sidebar component on each page. Stocks in the users\' portfolios and watchlists are shown with a sparkline representing their one-day price movement in the same sidebar on all pages.'
  ]
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
    borderTop: '3px solid rgb(61, 100, 202)',
    borderLeft: '3px solid rgb(61, 100, 202)',
    borderRight: '3px solid rgb(61, 100, 202)',
  },
  divStyle: {
    backgroundColor: 'rgba(246, 245, 245, 1)',
    boxShadow: 'inset 0 -10px 10px rgba(61, 100, 202, 0.5)',
    borderBottom: '3px solid rgb(61, 100, 202)',
  },
  linkStyle: {
    backgroundColor: 'rgb(61, 100, 202)',
    color: '#F6F5F5'
  },
  hStyle: {
    color: '#404040',
    fontFamily: 'Orbitron',
    fontWeight: 700,
    fontSize: '15px'
  },
  pStyle: {
    color: '#404040',
    fontFamily: 'Roboto',
    fontWeight: 500,
    textAlign: 'left',
    fontSize: '16px',
    padding: '0 2%',
    overflowY: 'scroll',
  },
    topLeftStyle: {
        position: 'absolute',
        top: 0, bottom: 'auto', left: 0,
        right: 'calc(50% - 3px)',
        width: 'auto',
        height: '3px',
        backgroundColor: 'rgb(61, 100, 202)',
        borderBottomRightRadius: '5px'
    },
    topRightStyle: {
        position: 'absolute',
        top: 0, bottom: 'auto', right: 0,
        left: 'calc(75% - 3px)',
        width: 'auto',
        height: '4px',
        backgroundColor: 'rgb(61, 100, 202)',
        borderBottomLeftRadius: '5px'
    },
  description: [
    'AcrossWords is a procedurally-generated word game inspired by the New York Times Crossword puzzle (a daily obsession of mine). Clues are served up one at a time, each one chosen from a bank of 16,000 clues based on the user\'s previous guess, until the timer runs out. Players receive diminishing time & score bonuses for answering clues correctly, and are penalized for incorrect guesses.',
    'AcrossWords was built by a team of developers leveraging the MERN stack. My main roles, though I had a hand in most facets of the front and backend, were to seed the MongoDB model with clues and to build the \'Reveal Answer\' frontend functionality and backend scoring logic into the game.',
    'To seed the clues, I created a Python script that incorporated Selenium browser automation to scrape the NYTXW site for hundreds of .puz files from each of three difficulty levels. The .puz files are encoded in a text stream, but my research into the proprietary format allowed for the creation of a JavaScript library to parse each puzzle\'s solution and for me to leverage crossword construction experience to match each answer to pieces of the clue string.'
  ]
};

const hsp = {
  name: 'HSP Group',
  key: 'hsp',
  liveLink: 'https://hsp.com/',
  sourceLink: null,
  iconSrc: hspFavicon,
  imgSrc: hspImage,
  tabStyle: {
    backgroundColor: '#FFFFFF',
    borderTop: '3px solid rgb(3, 113, 60)',
    borderLeft: '3px solid rgb(3, 113, 60)',
    borderRight: '3px solid rgb(3, 113, 60)',
  },
  divStyle: {
    backgroundColor: '#FFFFFF',
    boxShadow: 'inset 0 -10px 10px rgba(60, 60, 62, 0.5)',
    borderBottom: '3px solid rgb(3, 113, 60)',
  },
  linkStyle: {
    backgroundColor: 'rgb(3, 113, 60)',
    color: '#FFFFFF'
  },
  hStyle: {
    color: 'rgb(60, 60, 62)',
    fontFamily: 'Cabin',
    fontWeight: 700,
    letterSpacing: '-1px'
  },
  pStyle: {
    color: 'rgb(60, 60, 62)',
    fontFamily: 'Roboto',
    fontWeight: 500,
    textAlign: 'left',
    fontSize: '16px',
    padding: '0 2%',
    overflowY: 'scroll',
  },
  topLeftStyle: {
    position: 'absolute',
    top: 0, bottom: 'auto', left: 0,
    right: 'calc(25% - 3px)',
    width: 'auto',
    height: '3px',
    backgroundColor: 'rgb(3, 113, 60)',
    borderBottomRightRadius: '5px'
  },
  topRightStyle: {
    position: 'absolute',
    top: 0, bottom: 'auto', right: '0',
    left: 'calc(100% - 3px)',
    width: 'auto',
    height: '4px',
    backgroundColor: 'rgb(3, 113, 60)',
    borderBottomLeftRadius: '5px'
  },
  description: [
    'HSP Group is a management consultancy and financial services firm that helps companies manage their international operations and expand globally. They are backed by one of the world\'s leading PE and venture capital firms. My role as lead Web Developer and early employee involves working directly with HSP Group\'s founders and investors to refine and support the company\'s public messaging.',
    'I built HSP Group\'s website to coincide with their marketing launch in November, 2020. I designed the user experience, developed the site on Squarespace, integrated Google Analytics, and deployed custom JavaScript and CSS to buttress the company\'s marketing and growth initiatives.',
  ]
};

export default [coup, stockFox, acrossWords, hsp];