const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
if (menuBtn && links) {
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

const form = document.querySelector("#anfrage");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const firma = data.get("firma") || "";
    const thema = data.get("thema") || "";
    const nachricht = data.get("nachricht") || "";
    const body = [
      `Name: ${name}`,
      `Firma: ${firma}`,
      `Thema: ${thema}`,
      "",
      nachricht,
    ].join("\n");
    const mail = form.dataset.email || "MAIL-EINSETZEN@example.com";
    window.location.href = `mailto:${mail}?subject=${encodeURIComponent(
      "Anfrage Marc Fink Consulting – " + thema
    )}&body=${encodeURIComponent(body)}`;
  });
}
