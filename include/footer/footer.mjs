export class Footer {

  constructor() {
    this.footerTop = document.createElement('div');
    this.footerTop.id = 'footer-top';
    this.footerTop.innerHTML = `
      <span>Copyright &copy; ${new Date().getFullYear()} Benjamin Pryor</span>
      <div><a href="/donate.html">Donate</a></div>
      <nav id="footer-links">
        <a target="_blank" href="https://mailhide.io/e/kHCbTHeA"><img src="/img/svg/email.svg" /></a>
        <a target="_blank" href="https://github.com/programmer2514"><img src="/img/svg/github.svg" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/benjaminjpryor/"><img src="/img/svg/linkedin.svg" /></a>
        <a target="_blank" href="https://discord.com/users/563652755814875146/"><img src="/img/svg/discord.svg" /></a>
      </nav>
    `;

    window.addEventListener('load', this.init);
  }

  init = () => {
    this.footer = document.querySelector('footer');
    this.footer.appendChild(this.footerTop);

    window.addEventListener('resize', this.reposition);
    this.reposition();
  }

  reposition = () => {
    document.querySelector('main').style.minHeight = (window.innerHeight
      - document.body.offsetHeight + document.querySelector('main').offsetHeight) + 'px';
  }
}