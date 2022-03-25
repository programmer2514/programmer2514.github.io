class Header {

    constructor() {
        this.element = document.getElementsByTagName("header")[0];
        document.body.addEventListener('load', this.init());
    }
    
    init() {
        this.element.innerHTML = `
            <div id="header-top">
                <div class="logo">
                    <a href="/"><img src="/img/user-icon.png" alt="" /></a>
                    <span><a href="/">programmer2514</a></span>
                </div>
                <nav id="header-links">
                    <a href="/">Home</a>
                    <a href="/about.html">About</a>
                    <span><a href="/contact.html">Contact</a></span>
                </nav>
            </div>
        `;
    }
}

let header = new Header;