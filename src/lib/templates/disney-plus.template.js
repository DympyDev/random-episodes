export const PICK_RANDOM_EPISODE = (/** @type {string} */ postEpisodeSelection) => `const seasonBtns = Array.from(
    document.querySelectorAll('button[aria-label*="Season"]:not(.slick-arrow)')
  );
  const randomSeasonBtn =
    seasonBtns[Math.floor(Math.random() * seasonBtns.length)];
  randomSeasonBtn.click();

  setTimeout(() => {
    const episodesForSeason = Array.from(
      document.querySelectorAll('div[data-program-type="episode"]')
    );
    const randomEpisodeBtn =
      episodesForSeason[Math.floor(Math.random() * episodesForSeason.length)];
    ${postEpisodeSelection}
    randomEpisodeBtn.click();
  }, 2000);`;

  export const PICK_ANOTHER_RANDOM_EPISODE = (/** @type {string} */ preEpisodeSelection, /** @type {string} */ postEpisodeSelection) => `window.history.back();
  setTimeout(() => {
    ${preEpisodeSelection}

    ${PICK_RANDOM_EPISODE(postEpisodeSelection)}
  }, 2000);`;