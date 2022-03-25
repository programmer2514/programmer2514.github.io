class Footer {

    constructor() {
        this.element = document.getElementsByTagName("footer")[0];
        document.body.addEventListener('load', this.init());
    }
    
    init() {
        this.element.innerHTML = `
            <div id="footer-top">
                <span>Copyright &copy; 2022 Benjamin Pryor</span>
                <nav id="footer-links">
                    <a target="_blank" href="https://github.com/programmer2514"><img src="/img/svg/github.svg" /></a>
                    <a target="_blank" href="https://mailhide.io/e/kHCbTHeA"><img src="/img/svg/email.svg" /></a>
                    <a target="_blank" href="https://discord.com/users/563652755814875146/"><img src="/img/svg/discord.svg" /></a>
                    <a target="_blank" href="https://www.reddit.com/user/programmer2514"><img src="/img/svg/reddit.svg" /></a>
                </nav>
            </div>
        `;
        this.reposition();
        window.addEventListener('resize', function() {
            try {
                footer.reposition();
            } catch {}
        });
    }

    reposition() {
        main.style.minHeight = ((window.innerHeight - document.body.offsetHeight) + main.offsetHeight) + "px";
    }
}

let footer = new Footer;