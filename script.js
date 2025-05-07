const data = {
  Discontinued: [
    "TI-80 (1995–2004) – Entry-level graphing calculator for middle school students. It had less memory and speed compared to other graphing models and was phased out due to limitations.",
    "TI-81 (1990–1995) – TI's first graphing calculator, designed for algebra and trigonometry. It laid the foundation for future models like the TI-83.",
    "TI-82 (1993–2004) – A step forward in usability and performance, widely used before being replaced by the TI-83/84 series.",
    "TI-85 (1992–2001) – Advanced calculator geared toward engineers. Featured matrices and complex numbers.",
    "TI-86 (1996–2004) – Improved TI-85 with better memory and functions. Fell out of favor after Nspire line was introduced.",
    "TI-92 (1995–1998) – First calculator with QWERTY keyboard and symbolic algebra system. Restricted on many standardized tests.",
    "TI-92 Plus (1998–2002) – Enhanced version of the TI-92 with Flash memory and advanced apps.",
    "Voyage 200 (2002–2010) – TI-92 successor with CAS, large display, and QWERTY keyboard. Discontinued due to test restrictions.",
    "TI-73 Explorer (1998–2010s) – Graphing calculator for middle school, never achieved TI-83's popularity.",
    "TI-88 (1982, prototype only) – Advanced calculator with alphanumeric support and memory backup. Never released.",
    "TI-99/4A (1981–1983) – Technically a home computer, not a calculator, discontinued after poor market performance."
  ],

  Elementary: [
    "TI-108 (1990s–Present) – Rugged 4-function calculator designed for classroom use. Durable and color-coded for younger students.",
    "TI-15 Explorer (2004–Present) – Basic scientific calculator for grades 3–6. Includes fraction and decimal functions.",
    "TI-10 (2001–2015) – Two-line display with fraction and place-value support. Designed for grades K–5.",
    "TI-12 Math Explorer (1990s–2000s) – Pre-algebra functionality for elementary and middle school students.",
    "TI-7 MathMate (1990s) – Basic calculator with automatic operation precedence. Targeted at early grades.",
    "TI-34 (1987–Present) – Scientific calculator line. Modern MultiView models replaced older versions.",
    "TI-73 (1998–2003) – Graphing calculator aimed at younger students. Precursor to TI-73 Explorer.",
    "TI-25 (1980s–1990s) – Basic arithmetic calculator for early education. Now obsolete.",
    "TI-6 (1980s) – One of TI’s earliest elementary education calculators. Rare today.",
    "TI-1100 II (1980s) – Simple 4-function solar calculator for classroom or home use."
  ],

  Financial: [
    "BA II Plus (1991–Present) – Popular financial calculator for business professionals and students, especially for CFA and MBA programs.",
    "BA II Plus Professional (2004–Present) – Premium version with metal keys and more cash flow functions.",
    "BA-35 Solar (1990s) – Budget financial calculator with solar power. Discontinued.",
    "BA-54 (1980s) – Early financial calculator from TI’s BA line. Replaced by BA II models.",
    "TI-1795SV (1995–Present) – Desktop calculator for general office and financial use.",
    "TI-5006 II (1990s–2000s) – Business calculator with tax and financial functions for desktop use."
  ],

  Scientific: [
    "TI-30 (1976) – First low-cost scientific calculator from TI. Massively successful and iterated upon for decades.",
    "TI-30X IIS (1999–Present) – Two-line display, battery and solar power. Very common in schools.",
    "TI-36X Pro (2011–Present) – High-end scientific calculator for STEM students. Includes complex numbers, matrices, and conversions.",
    "TI-34 MultiView (2007–Present) – Designed for middle school students. Supports fractions, tables, and multiple-line display.",
    "TI-30Xa (1994–Present) – Entry-level scientific calculator. Still widely used for general science and math.",
    "TI-35 (1980s–1990s) – Early scientific model before 30X series took over.",
    "TI-55 (1977–1980s) – Programmable scientific calculator with statistics support.",
    "TI-60 (1986) – Basic programmable scientific calculator. Precursor to the TI-68.",
    "TI-68 (1989) – Powerful scientific calculator with complex number and base conversions. Still popular among collectors."
  ],

  Graphing: [
    "TI-81 (1990) – First TI graphing calculator. Discontinued but laid the groundwork for the 82/83/84 models.",
    "TI-82 (1993) – Enhanced usability over TI-81. Predecessor to TI-83.",
    "TI-83 (1996) – Popular graphing calculator for high school algebra and trigonometry.",
    "TI-83 Plus (1999) – Improved TI-83 with Flash ROM. Extremely popular due to exam compatibility.",
    "TI-84 Plus (2004) – Faster, with USB support. Became the default graphing calculator in schools.",
    "TI-84 Plus Silver Edition (2004) – Extra RAM and Flash memory. Discontinued later in favor of CE models.",
    "TI-84 Plus C Silver Edition (2013) – First color-screen TI-84. Replaced by faster CE model.",
    "TI-84 Plus CE (2015–Present) – Lightweight, color-screen model with rechargeable battery. Includes Python in newer editions.",
    "TI-Nspire (2007) – New platform with advanced CAS support and dynamic visualization.",
    "TI-Nspire CX (2011) – Thinner color version with rechargeable battery.",
    "TI-Nspire CX II (2019–Present) – Faster, supports Python and CAS (in CX II CAS model)."
  ],

  Software: [
    "TI Connect (2002) – Software to transfer files, apps, and updates between calculators and PC/Mac.",
    "TI Connect CE (2015) – Specialized version for CE models with drag-and-drop file transfer.",
    "TI-SmartView (2004–Present) – Emulator for classroom demonstration. Matches layout of real calculators.",
    "TI-SmartView CE (2015–Present) – Updated version for TI-84 Plus CE. Includes recording and screenshot tools.",
    "TI-Graph Link (1990s) – Old-school linking software for early calculators using serial cables.",
    "TI-BASIC – Simple programming language built into many TI calculators since the 1980s.",
    "TI-Python (2020s) – Python support added to modern TI-84 Plus CE and TI-Nspire CX II calculators for coding education.",
    "TI-Innovator Hub (2016) – Add-on hardware for teaching STEM, used with TI-84 and Nspire models.",
    "TI Rover (2017) – Programmable robot car controlled by TI-84 or Nspire calculators using Python or TI-BASIC."
  ],

  Old: [
    "TI-2500 Datamath (1972) – TI's first calculator, using LED display and rechargeable batteries. Basic 4-function device.",
    "TI-3000 (1973) – Desktop calculator with vacuum fluorescent display. Office-style layout.",
    "TI-3500 (1973) – Similar to TI-3000 but added memory functionality.",
    "TI-500 (1974) – One of the first truly portable TI calculators. LED screen, simple operations.",
    "TI-5050 (1974) – Thermal printer calculator used by small businesses.",
    "TI-1200 (1975) – Compact 4-function calculator for home use. Popular due to low cost.",
    "TI-1250 (1975) – TI-1200 variant with memory. Sleek plastic body and LED display.",
    "TI-1025 (1976) – Minimalist calculator with basic functions and long battery life.",
    "TI-55 (1977) – First scientific calculator with statistical functions and programmability.",
    "TI-58 (1977) – Featured plug-in ROM modules for specialized programs. Predecessor to the TI-59.",
    "TI-59 (1977) – Top-of-the-line programmable calculator with magnetic card storage.",
    "TI-66 (1983) – Slim programmable scientific calculator. Alphanumeric display.",
    "TI-1255 (1981) – Memory-enabled calculator with bright LED screen and solid build.",
    "TI-1680 (1986) – Solar calculator with LCD screen. Early sign of TI transitioning from LED to LCD.",
    "TI Programmer (1977) – Focused on base conversions and logic operations for computer engineers."
  ]
};

function showCategory(category) {
  const contentDiv = document.getElementById("content");
  const items = data[category] || [];
  contentDiv.innerHTML = `<h2>${category} Calculators</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// Show a default category on load
showCategory('Graphing');
