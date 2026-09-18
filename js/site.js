(function () {
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (!path || path === "") path = "index.html";
  document.querySelectorAll(".nav a.chip").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path || (path === "index.html" && href === "./")) {
      a.classList.add("active");
    }
  });

  function lessonHtml(card) {
    var id = card.getAttribute("data-lesson");
    if (id) {
      var src = document.getElementById(id);
      if (src) return src.innerHTML;
    }
    return card.getAttribute("data-detail") || "";
  }

  document.querySelectorAll("[data-select]").forEach(function (group) {
    var cards = group.querySelectorAll(".card.clickable");
    var out = document.querySelector(group.getAttribute("data-select"));
    if (!out) return;
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        cards.forEach(function (c) { c.classList.remove("active"); });
        card.classList.add("active");
        out.innerHTML = lessonHtml(card);
        out.classList.add("lesson-pane");
      });
    });
    if (cards[0]) cards[0].click();
  });

  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    var tabs = root.querySelectorAll(".tab");
    var panels = root.querySelectorAll("[data-panel]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var id = tab.getAttribute("data-tab");
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        panels.forEach(function (p) {
          p.hidden = p.getAttribute("data-panel") !== id;
        });
      });
    });
  });

  document.querySelectorAll("[data-layers]").forEach(function (root) {
    var tabs = root.querySelectorAll(".layer-tab");
    var panels = root.querySelectorAll("[data-layer-panel]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var id = tab.getAttribute("data-layer");
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        panels.forEach(function (p) {
          p.hidden = p.getAttribute("data-layer-panel") !== id;
        });
      });
    });
  });

  document.querySelectorAll(".check-item input").forEach(function (input) {
    input.addEventListener("change", function () {
      input.closest(".check-item").classList.toggle("done", input.checked);
    });
  });
})();
