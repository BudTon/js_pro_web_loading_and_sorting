export default function sortTab(filmList, key, direction) {
  let filmSortList = [];
  filmSortList = filmList.sort(function (a, b) {
    if (direction === "up") {
      if (key === "title") {
        return a.title.localeCompare(b.title, undefined, {
          sensitivity: "base",
        });
      }
      return b[`${key}`] - a[`${key}`];
    } else {
      if (key === "title") {
        return b.title.localeCompare(a.title, undefined, {
          sensitivity: "base",
        });
      }
      return a[`${key}`] - b[`${key}`];
    }
  });
  return filmSortList;
}
