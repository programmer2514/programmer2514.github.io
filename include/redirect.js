let redirectString = gup('l');

if (redirectString === 'cui-changelog')
    window.location.replace('https://github.com/programmer2514/BetterDiscord-CollapsibleUI/blob/main/CHANGELOG.md');

function gup(name) {
    name = RegExp('[?&]' + name.replace(/([[\]])/, '\\$1') + '=([^&#]*)');
    return (window.location.href.match(name) || ['', ''])[1];
}