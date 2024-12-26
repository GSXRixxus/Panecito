const title = document.querySelector('.title');
const text = 'tengo algo especial para ti'.split('');
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`;
  } else {
    title.innerHTML += `<span style="margin-right: 20px;"></span>`;
  }
}

const subtitle = document.createElement('div');
subtitle.className = 'subtitle';
subtitle.textContent = 'Eres la persona más especial en mi vida Itzel';
document.body.insertBefore(subtitle, document.querySelector('.btn').parentNode);
