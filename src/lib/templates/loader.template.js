export const INIT_LOADER = `
const randomEpisodeOverlay = document.createElement("div");
randomEpisodeOverlay.style.position = "fixed";
randomEpisodeOverlay.style.top = 0;
randomEpisodeOverlay.style.right = 0;
randomEpisodeOverlay.style.bottom = 0;
randomEpisodeOverlay.style.left = 0;
randomEpisodeOverlay.style.backgroundColor = "#171a21";
randomEpisodeOverlay.style.color = "white";
randomEpisodeOverlay.style.opacity = 0.7;
randomEpisodeOverlay.style.zIndex = 1000;
randomEpisodeOverlay.style.display = "flex";
randomEpisodeOverlay.style.flexDirection = "column";
randomEpisodeOverlay.style.alignItems = "center";
randomEpisodeOverlay.style.justifyContent = "center";

randomEpisodeOverlay.innerHTML = \`<style>
    .random-loader {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .random-loader div {
      position: absolute;
      border: 4px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: random-loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .random-loader div:nth-child(2) {
      animation-delay: -0.5s;
    }
    @keyframes random-loader {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
      }
      4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
      }
      5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
  </style>
  <div class="random-loader"><div></div><div></div></div>
  <p>Randomizing episode, give it a sec!</p>\`;
document.body.appendChild(randomEpisodeOverlay);`;

export const REMOVE_LOADER = `document.body.removeChild(randomEpisodeOverlay);`;