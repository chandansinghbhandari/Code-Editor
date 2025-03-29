// script.js
function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    let fullCode = `
        <html>
        <head>
        <style>${cssCode}</style>
        </head>
        <body>
        ${htmlCode}
        <script>${jsCode}<\/script>
        </body>
        </html>
    `;

    output.srcdoc = fullCode;
}

const themeToggle = document.getElementById('theme-toggle');
const downloadButton = document.getElementById('download-code');
const clearButton = document.getElementById('clear-code');
const fullscreenButton = document.getElementById('fullscreen-button');
const aboutButton = document.getElementById('about-btn');

function applyTheme(theme) {
  document.body.classList.remove('light-mode', 'dark-mode');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
  applyTheme(currentTheme);
}

themeToggle.addEventListener('click', toggleTheme);

clearButton.addEventListener('click', () => {
  document.getElementById('html-code').value = '';
  document.getElementById('css-code').value = '';
  document.getElementById('js-code').value = '';
  run();
});

fullscreenButton.addEventListener('click', () => {
  const output = document.getElementById('output');
  if (output.requestFullscreen) {
    output.requestFullscreen();
  }
});

downloadButton.addEventListener('click', () => {
  const htmlCode = document.getElementById('htmlCode').value;
  const cssCode = document.getElementById('cssCode').value;
  const jsCode = document.getElementById('jsCode').value;

  const fullCode = `<!DOCTYPE html>
<html>
<head>
  <style>${cssCode}</style>
</head>
<body>
  ${htmlCode}
  <script>${jsCode}<\/script>
</body>
</html>`;

  const blob = new Blob([fullCode], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'index.html';
  a.click();
  URL.revokeObjectURL(url);
});

if (aboutButton) {
  aboutButton.addEventListener('click', () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Handle the Intro Animation
window.addEventListener('load', () => {
  const overlay = document.getElementById('intro-overlay');
  if (overlay) {
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 3500); // Ensure it hides after the animation
  }
});



