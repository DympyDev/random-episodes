export const PICK_RANDOM_EPISODE = (/** @type {string} */ postEpisodeSelection) => `document.querySelector('button[data-testid=dropdown-button]').click();
  const seasonBtns = Array.from(
    document.querySelectorAll('ul[data-testid=dropdown-list] > li')
  );
  const randomSeasonBtn =
    seasonBtns[Math.floor(Math.random() * seasonBtns.length)];
  randomSeasonBtn.click();

  setTimeout(() => {
    const episodesForSeason = Array.from(
      document.querySelectorAll('a[data-testid=set-item]')
    );
    const randomEpisodeBtn =
      episodesForSeason[Math.floor(Math.random() * episodesForSeason.length)];
    ${postEpisodeSelection || ''}
    randomEpisodeBtn.click();
  }, 2000);`;

  export const PICK_ANOTHER_RANDOM_EPISODE = (/** @type {string} */ preEpisodeSelection, /** @type {string} */ postEpisodeSelection) => `window.history.back();
  setTimeout(() => {
    ${preEpisodeSelection}

    ${PICK_RANDOM_EPISODE(postEpisodeSelection)}
  }, 2000);`;