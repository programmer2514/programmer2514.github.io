export class Header {

  constructor() {
    this.headerTop = document.createElement('div');
    this.headerTop.id = 'header-top';
    this.headerTop.innerHTML = `
      <div class="header-title">
        <div class="logo">
          <a href="/"><img src="/img/user-icon.jpg" alt="" /></a>
          <span><a href="/">Benjamin Pryor</a></span>
        </div>
        <div class="badge-wrapper">
          <a target="_blank" href="https://www.credly.com/badges/b8705b41-adac-412b-8680-83e3ffaaf995/public_url">
            <img class="badge" src="https://user-images.githubusercontent.com/43104632/206700432-5f75c05d-7306-493b-9b1e-83fcefc3eb27.png" alt="" />
          </a>
        </div>
      </div>
      <nav id="header-links">
        <a href="/">Home</a>
        <a href="/about.html">About</a>
        <span><a href="/contact.html">Contact</a></span>
      </nav>
    `;

    this.supportBanner = document.createElement('div');
    this.supportBanner.id = 'support-banner';
    this.supportBanner.innerHTML = `
      <p>Thanks for stopping by!
        If you like what I do, please consider <a href="/donate.html">donating</a>.
        It helps me a ton. If not, no worries!
        Feel free to close this banner and I'll do my best not to show it to you again.
        Thank you for using my programs! :)</p>
      <a id="close-banner">
        <img src="/img/svg/x.svg" alt="" />
      </a>
    `;

    window.addEventListener('load', this.init);
  }

  init = () => {
    this.header = document.querySelector('header');

    this.header.appendChild(this.headerTop);

    if (!localStorage.getItem("bannerClosed")) {
      this.showBanner();
    }
  }

  showBanner = () => {
    this.header.insertBefore(this.supportBanner, this.headerTop);
    this.supportBanner.querySelector('#close-banner').addEventListener('click', this.closeBanner);
    setTimeout(() => {
      this.supportBanner.style.height = this.supportBanner.querySelector('p').offsetHeight + "px";
      this.supportBanner.style.padding = "0.75em 1em";
    }, 1000);
  }

  closeBanner = () => {
    this.supportBanner.style.removeProperty('height');
    this.supportBanner.style.removeProperty('padding');
    setTimeout(() => {
      this.supportBanner.remove();
    }, 500);
    localStorage.setItem("bannerClosed", true);
  }
}