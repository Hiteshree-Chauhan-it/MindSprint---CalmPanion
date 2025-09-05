function playSound(id) {
      document.getElementById(id).play();
      togglePulse(id, true);
    }

    function pauseSound(id) {
      document.getElementById(id).pause();
      togglePulse(id, false);
    }

    function setVolume(id, value) {
      document.getElementById(id).volume = value;
    }

    function toggleLoop(id) {
      let audio = document.getElementById(id);
      audio.loop = !audio.loop;
      alert("Loop is now " + (audio.loop ? "ON" : "OFF"));
    }

    function toggleSound(element, id) {
      let audio = document.getElementById(id);
      if (audio.paused) {
        audio.play();
        togglePulse(id, true);
        element.querySelector("span").textContent = "⏸";
      } else {
        audio.pause();
        togglePulse(id, false);
        element.querySelector("span").textContent = "▶";
      }
    }

    function togglePulse(id, show) {
      let card = document.getElementById(id).parentElement;
      let pulse = card.querySelector(".pulse");
      pulse.style.display = show ? "block" : "none";
    }