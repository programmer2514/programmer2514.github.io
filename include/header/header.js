class Header {

    init() {
        this.element = document.getElementsByTagName("header")[0];
        this.element.innerHTML = `
            <div id="header-top">
                <div class="header-title">
                    <div class="logo">
                        <a href="/"><img src="/img/user-icon.png" alt="" /></a>
                        <span><a href="/">programmer2514</a></span>
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
                    <a class="header-dropdown-link">Projects</a>
                        <div class="header-dropdown">
                            <a target="_blank" href="/duotrigentordle">Duotrigentordle</a>
                        </div>
                    <span><a href="/contact.html">Contact</a></span>
                </nav>
            </div>
        `;
    }

    toggleDropdown() {
        document.getElementsByClassName("header-dropdown")[0].style.top = document.getElementsByTagName("header")[0].getBoundingClientRect().bottom + "px";
        document.getElementsByClassName("header-dropdown")[0].style.left = document.getElementsByClassName("header-dropdown-link")[0].getBoundingClientRect().left + "px";
        document.getElementsByClassName("header-dropdown")[0].classList.toggle("expanded");
    }

    closeDropdown() {
        document.getElementsByClassName("header-dropdown")[0].classList.remove("expanded");
    }
}

let header = new Header;

window.addEventListener('load', function() {
    header.init();
    document.getElementsByClassName("header-dropdown-link")[0].addEventListener('click', header.toggleDropdown);
});

document.body.addEventListener('click', function(e) {
    try {
        if (!(((e.x > document.getElementsByClassName("header-dropdown-link")[0].getBoundingClientRect().left)
            && (e.x < document.getElementsByClassName("header-dropdown-link")[0].getBoundingClientRect().right)
            && (e.y > document.getElementsByClassName("header-dropdown-link")[0].getBoundingClientRect().top)
            && (e.y < document.getElementsByClassName("header-dropdown-link")[0].getBoundingClientRect().bottom + (0.0625 * document.documentElement.clientHeight)))
            || ((e.x > document.getElementsByClassName("header-dropdown")[0].getBoundingClientRect().left)
                && (e.x < document.getElementsByClassName("header-dropdown")[0].getBoundingClientRect().right)
                && (e.y > document.getElementsByClassName("header-dropdown")[0].getBoundingClientRect().top)
                && (e.y < document.getElementsByClassName("header-dropdown")[0].getBoundingClientRect().bottom))))
            header.closeDropdown();
    } catch (e) { console.log(e); }
});