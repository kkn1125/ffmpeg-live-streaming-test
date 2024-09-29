import Hls from "hls.js";

if (Hls.isSupported()) {
  /** @type {HTMLVideoElement} */
  const video = document.getElementById("video");
  const hls = new Hls();
  // bind them together
  // hls.attachMedia(video);
  // hls.on(Hls.Events.MEDIA_ATTACHED, function () {
  //   console.log("video and hls.js are now bound together !");
  //   hls.loadSource("http://localhost:5174/playlist.m3u8");
  //   hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {});
  // });
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(
      "http://localhost:4173/playlist.m3u8"
    );
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src =
      "http://localhost:4173/playlist.m3u8";
    video.addEventListener("loadedmetadata", function () {
      video.play();
    });
  }
}
