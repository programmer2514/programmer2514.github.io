import { Header } from './header/header.mjs';
import { Footer } from './footer/footer.mjs';

new Header();
new Footer();

window.addEventListener('load', () => {
  resizeFullwidthCards();
  setTimeout(resizeFullwidthCards, 250);
});
window.addEventListener('resize', resizeFullwidthCards);

function resizeFullwidthCards() {
  if (document.querySelector('.fullwidth')) {
    let card = document.querySelector('.card-wrapper:not(.fullwidth)').children[0];
    let cardMarginWidth = (parseInt(window.getComputedStyle(card).margin) * 2);
    let cardWidthPx = card.getBoundingClientRect().width + cardMarginWidth;
    let containerWidthPx = document.querySelector('.card-wrapper:not(.fullwidth)')
      .getBoundingClientRect().width;
    let fullWidth = 0;
    for (let i = containerWidthPx; i > cardWidthPx; i -= cardWidthPx) {
      fullWidth += cardWidthPx;
    }
    document.querySelectorAll('.fullwidth a').forEach((elem) => {
      elem.style.width = (fullWidth - cardMarginWidth) + 'px';
    });
  }
}