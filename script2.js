
(function () {
  var song = document.getElementById('weddingSong');
  var started = false;
  var pending = false;

  function startWeddingSong() {
    if (started || pending || !song) return;
    pending = true;
    song.muted = false;
    song.volume = 1;

    function seekToStartPoint() {
      try { song.currentTime = 19; } catch (e) {}
    }

    // Seek once metadata is available; play() is called directly inside
    // the user's touch/click gesture so mobile browsers allow playback.
    if (song.readyState >= 1) {
      seekToStartPoint();
    } else {
      song.addEventListener('loadedmetadata', seekToStartPoint, { once: true });
    }

    var result;
    try { result = song.play(); }
    catch (e) { pending = false; return; }

    if (result && typeof result.then === 'function') {
      result.then(function () {
        started = true;
        pending = false;
      }).catch(function () {
        pending = false;
      });
    } else {
      started = true;
      pending = false;
    }
  }

  // Capture touch/click early so the page's own animation handlers do not
  // prevent the music from receiving the user's interaction.
  document.addEventListener('touchstart', startWeddingSong, { capture: true, passive: true });
  document.addEventListener('pointerdown', startWeddingSong, true);
  document.addEventListener('click', startWeddingSong, true);
  document.addEventListener('keydown', startWeddingSong, true);
})();
