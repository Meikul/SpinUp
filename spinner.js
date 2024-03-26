const tiltLoader = document.querySelector('.loader-tilt');

splitUp(tiltLoader);

function splitUp(el) {
  const letters = el.innerText.split('');
  let output = '';
  // for (const [index, letter] of letters.entries()) {
  //   output += `<span data-index="${index}">${letter}</span>`;
  // }
  for (const letter of letters) {
    output += `<span class="split">${letter}</span>`;
  }

  el.innerHTML = output;

  const spans = el.querySelectorAll('span.split');

  for (const [i, span] of spans.entries()) {
    console.log(span, i);
    span.style.setProperty('--split-index', i);
  }
}