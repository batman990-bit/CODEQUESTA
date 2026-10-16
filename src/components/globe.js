import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { LANGUAGES } from '../data/languages.js';

let selectedLang = null;
let scene, camera, renderer, globeMesh;
let targetRotationY = 0;
let targetRotationX = 0;
let autoRotate = true;

export function initMapUI(onWorldStart) {
  const langMap = new Map(LANGUAGES.map(l => [l.id, l]));

  const container = document.getElementById('globe-canvas-container');
  const pinsLayer = document.getElementById('globe-pins-layer');
  const languageGrid = document.getElementById('top-language-grid');
  const exitBtn = document.getElementById('btn-exit-lang');
  const btnStartWorld = document.getElementById('btn-start-world');
  const rightPopup = document.getElementById('right-world-popup');

  if (!container || !pinsLayer) return;

  const oldCanvas = document.getElementById('three-globe-canvas');
  if (oldCanvas) oldCanvas.remove();

  if (rightPopup) rightPopup.classList.add('hidden-popup');
  if (exitBtn) exitBtn.classList.add('hidden');

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.z = 3.1;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(480, 480);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.domElement.id = 'three-globe-canvas';
  container.insertBefore(renderer.domElement, pinsLayer);

  const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  globeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(globeMesh);

  targetRotationY = globeMesh.rotation.y;
  targetRotationX = globeMesh.rotation.x;
  autoRotate = true;

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg',
    (texture) => {
      sphereMaterial.map = texture;
      sphereMaterial.needsUpdate = true;
    }
  );

  renderLanguageGrid();
  renderPins();

  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  container.onpointerdown = (e) => {
    isDragging = true;
    autoRotate = false;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  };

  window.onpointerup = () => {
    isDragging = false;
  };

  container.onpointermove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    targetRotationY += deltaX * 0.005;
    targetRotationX += deltaY * 0.005;
    targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));

    previousMousePosition = { x: e.clientX, y: e.clientY };
  };

  function animate() {
    requestAnimationFrame(animate);

    if (autoRotate && !selectedLang) {
      targetRotationY += 0.002;
    }

    globeMesh.rotation.y += (targetRotationY - globeMesh.rotation.y) * 0.08;
    globeMesh.rotation.x += (targetRotationX - globeMesh.rotation.x) * 0.08;

    updatePinPositions();
    renderer.render(scene, camera);
  }
  animate();

  function renderLanguageGrid() {
    if (!languageGrid) return;
    languageGrid.innerHTML = '';
    LANGUAGES.forEach(lang => {
      const card = document.createElement('div');
      card.className = `lang-card ${selectedLang && selectedLang.id === lang.id ? 'active' : ''}`;
      card.dataset.id = lang.id;

      card.innerHTML = `
        <div class="lang-card-top">
          ${lang.hasWorld ? '<span class="world-badge-icon">🌐</span>' : ''}
        </div>
        <span class="lang-card-name">${lang.name}</span>
      `;

      card.onclick = () => selectLanguage(lang);
      languageGrid.appendChild(card);
    });
  }

  function renderPins() {
    pinsLayer.innerHTML = '';
    LANGUAGES.forEach(lang => {
      const pin = document.createElement('div');
      pin.className = `flag-pin ${selectedLang && selectedLang.id === lang.id ? 'active' : ''}`;
      pin.dataset.id = lang.id;

      pin.innerHTML = `
        <div class="flag-banner" style="background-color: ${lang.color || '#3873a3'};">
          <span class="flag-text">${lang.name}</span>
        </div>
        <div class="flag-pole"></div>
        <div class="flag-shadow"></div>
      `;

      pin.onclick = (e) => {
        e.stopPropagation();
        selectLanguage(lang);
      };

      pinsLayer.appendChild(pin);
    });
  }

  function updatePinPositions() {
    const pins = pinsLayer.querySelectorAll('.flag-pin');
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    pins.forEach(pinElem => {
      const lang = langMap.get(pinElem.dataset.id);
      if (!lang) return;

      const phi = (90 - lang.lat) * (Math.PI / 180);
      const theta = (lang.lng + 180) * (Math.PI / 180);

      const vector = new THREE.Vector3(
        -(Math.sin(phi) * Math.cos(theta)),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta)
      );

      vector.applyEuler(globeMesh.rotation);

      if (vector.z < 0) {
        pinElem.classList.add('hidden');
      } else {
        pinElem.classList.remove('hidden');

        vector.project(camera);
        const x = (vector.x * 0.5 + 0.5) * width;
        const y = (-(vector.y * 0.5) + 0.5) * height;

        pinElem.style.left = `${x}px`;
        pinElem.style.top = `${y}px`;
        pinElem.style.zIndex = Math.floor(100 + vector.z * 100);
      }
    });
  }

  function selectLanguage(lang) {
    selectedLang = lang;
    autoRotate = false;

    targetRotationY = -((lang.lng + 180) * (Math.PI / 180)) + Math.PI / 2;
    targetRotationX = (lang.lat * (Math.PI / 180)) - 0.25;

    document.getElementById('lore-title').textContent = lang.name;
    document.getElementById('lore-text').innerHTML = `<strong>Year:</strong> ${lang.year}<br><strong>Origin:</strong> ${lang.origin}<hr class="scroll-divider"><br>${lang.lore}`;

    if (lang.hasWorld && rightPopup) {
      rightPopup.classList.remove('hidden-popup');
      document.getElementById('world-title').textContent = lang.title;
      document.getElementById('story-text').textContent = `Explore the realm of ${lang.name} and restore its broken code pathways!`;
      btnStartWorld.removeAttribute('disabled');
    } else if (rightPopup) {
      rightPopup.classList.add('hidden-popup');
      btnStartWorld.setAttribute('disabled', 'true');
    }

    if (exitBtn) exitBtn.classList.remove('hidden');

    renderLanguageGrid();
    renderPins();
  }

  if (exitBtn) {
    exitBtn.onclick = (e) => {
      e.stopPropagation();
      selectedLang = null;
      autoRotate = true;
      exitBtn.classList.add('hidden');
      if (rightPopup) rightPopup.classList.add('hidden-popup');
      btnStartWorld.setAttribute('disabled', 'true');

      document.getElementById('lore-title').textContent = 'Select a Language';
      document.getElementById('lore-text').textContent = 'Click on any toothpick flag pin on the globe or select a language card above to explore computing origins and history.';

      renderLanguageGrid();
      renderPins();
    };
  }

  if (btnStartWorld) {
    btnStartWorld.onclick = () => {
      if (selectedLang && selectedLang.hasWorld && typeof onWorldStart === 'function') {
        onWorldStart(selectedLang);
      }
    };
  }
}