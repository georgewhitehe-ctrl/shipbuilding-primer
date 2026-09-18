(function () {
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (!path) path = "index.html";

  document.querySelectorAll(".nav a.chip").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // reading progress
  var bar = document.querySelector(".progress > i");
  if (bar) {
    window.addEventListener("scroll", function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, p)) + "%";
    }, { passive: true });
  }

  // scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  function showLesson(out, src) {
    if (!out || !src) return;
    out.innerHTML = src.innerHTML;
    out.classList.add("pulse-in");
    setTimeout(function () { out.classList.remove("pulse-in"); }, 400);
  }

  // hotspot / pick / data-select with data-lesson
  document.querySelectorAll("[data-select]").forEach(function (group) {
    var out = document.querySelector(group.getAttribute("data-select"));
    var items = group.querySelectorAll("[data-lesson]");
    items.forEach(function (item) {
      item.addEventListener("click", function () {
        items.forEach(function (i) { i.classList.remove("active", "selected"); });
        item.classList.add("active");
        if (item.classList.contains("pick")) item.classList.add("selected");
        var src = document.getElementById(item.getAttribute("data-lesson"));
        showLesson(out, src);
      });
    });
    if (items[0]) items[0].click();
  });

  // tabs
  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    var tabs = root.querySelectorAll(".tab, .route-pill");
    var panels = root.querySelectorAll("[data-panel]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var id = tab.getAttribute("data-tab");
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        panels.forEach(function (p) {
          p.hidden = p.getAttribute("data-panel") !== id;
        });
        var meter = root.querySelector("[data-meter]");
        if (meter && tab.hasAttribute("data-level")) {
          meter.style.width = tab.getAttribute("data-level") + "%";
        }
      });
    });
  });

  // layers
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

  // stepper
  document.querySelectorAll("[data-stepper]").forEach(function (root) {
    var btns = root.querySelectorAll(".step-btn");
    var panels = root.querySelectorAll("[data-step-panel]");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-step");
        btns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        panels.forEach(function (p) {
          p.hidden = p.getAttribute("data-step-panel") !== id;
        });
      });
    });
  });

  // tip once
  var tip = document.querySelector(".float-tip");
  if (tip) {
    setTimeout(function () { tip.classList.add("show"); }, 900);
    setTimeout(function () { tip.classList.remove("show"); }, 5200);
  }
})();
