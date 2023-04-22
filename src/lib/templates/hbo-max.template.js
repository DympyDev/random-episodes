export const PICK_RANDOM_EPISODE = (/** @type {string} */ postEpisodeSelection) => `const seasonOptions = document.querySelectorAll(
    'div[data-testid="SeasonPickerSelectInputButton"] + div[data-testid="DropdownAnimationContainer"] div[role="option"]'
  );
  const randomSeasonBtn =
    seasonOptions[Math.floor(Math.random() * seasonOptions.length)];
  randomSeasonBtn.click();

  setTimeout(() => {
    const episodeContainer = document.querySelector(
      'div[data-testid="SeasonPickerSelectInputButton"]'
    ).parentNode.parentNode.nextSibling;

    const episodeOptions = episodeContainer.querySelectorAll(
      'a[href*=":type:episode"]'
    );
    const randomEpisodeBtn =
      episodeOptions[Math.floor(Math.random() * episodeOptions.length)];
    var event = new MouseEvent("mouseover", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    randomEpisodeBtn.dispatchEvent(event);
    ${postEpisodeSelection}
    randomEpisodeBtn.nextSibling
      .querySelector('div[data-testid="TileOverlayPlayButton"]')
      .click();
  }, 2000);`;

  export const PICK_ANOTHER_RANDOM_EPISODE = (/** @type {string} */ preEpisodeSelection, /** @type {string} */ postEpisodeSelection) => `
  window.history.back();
  setTimeout(() => {
    ${preEpisodeSelection}

    ${PICK_RANDOM_EPISODE(postEpisodeSelection)}
  }, 2000);`;