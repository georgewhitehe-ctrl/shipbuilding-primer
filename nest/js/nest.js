(function () {
  var inNest = location.pathname.indexOf("/nest/") !== -1;
  document.querySelectorAll(".nav a.chip").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    var text = (a.textContent || "").trim();
    if (inNest && text === "套料") {
      a.classList.add("active");
      return;
    }
    var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  var links = document.querySelectorAll(".sidebar a[href^='#']");
  var sections = [];
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, a: a });
  });

  function setActive() {
    var y = window.scrollY + 100;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.offsetTop <= y) current = s;
    });
    links.forEach(function (a) { a.classList.remove("active"); });
    if (current) current.a.classList.add("active");
  }
  if (sections.length) {
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  function renderMath() {
    if (!window.renderMathInElement) return;
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
  if (window.renderMathInElement) renderMath();
  else window.addEventListener("load", renderMath);

  // Load semantic media after the document exists so long research pages stay readable.
  var mediaScript = document.createElement("script");
  mediaScript.src = "js/media-inserts.js?v=20260921g";
  document.body.appendChild(mediaScript);
})();
