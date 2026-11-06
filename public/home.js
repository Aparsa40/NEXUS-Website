const search = document.querySelector("#site-search");
const status = document.querySelector("#search-status");
const cards = [...document.querySelectorAll(".searchable")];
const emptyState = document.querySelector(".no-results");

if (search instanceof HTMLInputElement) {
  const normalize = (value) => value.toLocaleLowerCase().normalize("NFKC").trim();
  search.addEventListener("input", () => {
    const query = normalize(search.value);
    let visible = 0;

    for (const item of cards) {
      const haystack = normalize(item.dataset.search || item.textContent || "");
      const matches = !query || haystack.includes(query);
      item.hidden = !matches;
      if (matches) visible += 1;
    }

    if (emptyState) emptyState.hidden = visible !== 0;
    if (status) {
      status.textContent = query
        ? (document.documentElement.lang === "fa"
          ? `${visible} نتیجه پیدا شد`
          : `${visible} matching items`)
        : (document.documentElement.lang === "fa"
          ? "جست‌وجو میان پروژه‌ها و میان‌بر پلتفرم‌ها"
          : "Search across projects and platform shortcuts");
    }
  });
}
