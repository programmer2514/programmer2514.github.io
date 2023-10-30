class Footer {

    init() {
        this.element = document.getElementsByTagName("footer")[0];
        this.element.innerHTML = `
            <div id="footer-top">
                <span></span>
                <nav id="footer-links">
                    <a target="_blank" href="https://mailhide.io/e/kHCbTHeA"><img src="/img/svg/email.svg" /></a>
                    <a target="_blank" href="https://github.com/programmer2514"><img src="/img/svg/github.svg" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/benjaminjpryor/"><img src="/img/svg/linkedin.svg" /></a>
                    <a target="_blank" href="https://discord.com/users/563652755814875146/"><img src="/img/svg/discord.svg" /></a>
                    <a target="_blank" href="https://kbin.social/u/TenorTheHusky"><img src="/img/svg/kbin.svg" /></a>
                </nav>
            </div>
        `;
        this.element.querySelector('span').innerHTML = `Copyright &copy; ${new Date().getFullYear()} Benjamin Pryor`;
        window.addEventListener('resize', function() {
            try {
                footer.reposition();
            } catch { }
        });
    }

    reposition() {
        main.style.minHeight = ((window.innerHeight - document.body.offsetHeight) + main.offsetHeight) + "px";
    }
}

let footer = new Footer;

window.addEventListener('load', function() {
    footer.init();
    footer.reposition();
});