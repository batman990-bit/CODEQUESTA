import { initMapUI } from './components/globe.js' ;

document.addEventListener('DOMContentLoaded', () => {
  const screenMainMenu = document.getElementById('screen-main-menu');
  const screenEarthMap = document.getElementById('screen-earth-map');
  const screenLevelSelect = document.getElementById('screen-level-select');
  const btnPlayGame = document.getElementById('btn-play-game');
  const btnBackToMap = document.getElementById('btn-back-to-map');
  const navMainMenu = document.getElementById('nav-main-menu');
   
  if (btnPlayGame) {
    btnPlayGame.onclick = () => {
     screenMainMenu.classList.add('hidden');
     screenEarthMapcreenEarthMap.classList.remove('hidden');

     initMapUI((selectedLanguage) => {
        console.log(`Starting quest for world: ${selectedLanguage.name}`);
        screenEarthMap.classList.add('hidden');
        screenLevelSelect.classList.remove('hidden');
        document.getElementById('selected-world-heading').textContent = selectedLanguage.title;
      });
    };
  } 

  if (navMainMenu) {
    navMainMenu.onclick = () => {
      screenEarthMap.classList.add('hidden');
      screenMainMenu.classList.remove('hidden');
    };       
  }
   
  if (btnBackToMap) {
   btnBackToMap.onclick = () => {
     screenLevelSelect.classList.add('hidden');        screenEarthMap.classList.remove('hidden');
      };
  }

  document.getElementById('nav-settings'?.addEventListener('click', () => 'Settings menu.' ));
  document.getElementById('nav-profile'?.addEventListener('click', () => 'Player Profile .' ));
  document.getElementById('nav-achievements'?.addEventListener('click', () => 'Badges.' ));
})

import { initMapUI } from './components/globe.js';

document.addEventListener('DOMContentLoaded', () => {
  const screenMainMenu = document.getElementById('screen-main-menu');
  const screenEarthMap = document.getElementById('screen-earth-map');
  const screenLevelSelect = document.getElementById('screen-level-select');
  const btnPlayGame = document.getElementById('btn-play-game');
  const btnBackToMap = document.getElementById('btn-back-to-map');
  const navMainMenu = document.getElementById('nav-main-menu');

  // Navigate from Main Menu to Earth Map
  if (btnPlayGame) {
    btnPlayGame.onclick = () => {
      screenMainMenu.classList.add('hidden');
      screenEarthMap.classList.remove('hidden');
      
      // Initialize Three.js Globe Map UI
      initMapUI((selectedLanguage) => {
        console.log(`Starting quest for world: ${selectedLanguage.name}`);
        screenEarthMap.classList.add('hidden');
        screenLevelSelect.classList.remove('hidden');
        document.getElementById('selected-world-heading').textContent = selectedLanguage.title;
      });
    };
  }

  // Navigate from Earth Map back to Main Menu
  if (navMainMenu) {
    navMainMenu.onclick = () => {
      screenEarthMap.classList.add('hidden');
      screenMainMenu.classList.remove('hidden');
    };
  }

  // Navigate from Level Select back to Earth Map
  if (btnBackToMap) {
    btnBackToMap.onclick = () => {
      screenLevelSelect.classList.add('hidden');
      screenEarthMap.classList.remove('hidden');
    };
  }

  // Bottom Nav handlers
  document.getElementById('nav-settings')?.addEventListener('click', () => alert('Settings menu opened.'));
  document.getElementById('nav-profile')?.addEventListener('click', () => alert('Player Profile loaded.'));
  document.getElementById('nav-achievements')?.addEventListener('click', () => alert('Badges showcase loaded.'));
});