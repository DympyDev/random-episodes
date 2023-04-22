export const PICK_RANDOM_EPISODE = (/** @type {string} */ postEpisodeSelection) => `const seasonBtn = document.querySelector(
    ".episodeSelector > .episodeSelector-header .dropdown-toggle"
  );
  seasonBtn.click();
  const seasonOptions = seasonBtn.nextSibling.querySelectorAll(
    'li[role="menuitem"] > .episodeSelector--option'
  );
  const randomSeasonBtn =
    seasonOptions[Math.floor(Math.random() * seasonOptions.length)];
  randomSeasonBtn.click();

  setTimeout(() => {
    const possibleShowMoreButton = document.querySelector(
      ".episodeSelector > .episodeSelector-container > .section-divider.collapsed"
    );
    if (possibleShowMoreButton) {
      possibleShowMoreButton.querySelector("button").click();
    }

    const episodeOptions = document.querySelectorAll(
      ".episodeSelector > .episodeSelector-container > .episode-item"
    );
    const randomEpisodeBtn =
      episodeOptions[Math.floor(Math.random() * episodeOptions.length)];
    ${postEpisodeSelection}
    randomEpisodeBtn.click();
  }, 2000);`;

  export const PICK_ANOTHER_RANDOM_EPISODE = (/** @type {string} */ preEpisodeSelection, /** @type {string} */ postEpisodeSelection) => `
  window.history.back();
  setTimeout(() => {
    ${preEpisodeSelection}

    ${PICK_RANDOM_EPISODE(postEpisodeSelection)}
  }, 3000);`;