let redirectString = window.location.href.match(/[?#](.*)/)[1];

if (redirectString === 'cui-changelog' || redirectString === 'l=cui-changelog')
  window.location.replace('https://github.com/programmer2514/BetterDiscord-CollapsibleUI/blob/main/CHANGELOG.md');

if (redirectString === 'disability')
  window.location.replace('https://programmer2514.github.io/MiamiOH-AAA211-Final-Project/public/');