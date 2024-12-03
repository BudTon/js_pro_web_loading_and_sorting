/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/sortTab/Tab.js
/* eslint-disable no-unused-vars */
// import { filmList } from "./filmList.js";
class Tab {
  constructor(element) {
    this._element = element;
  }
  deleteTab() {
    this._element.innerHTML = "";
  }
  creatTab(listFilmSort, keySort, direction) {
    this.deleteTab();
    let sortDirection = document.querySelectorAll("thead > tr > th");
    sortDirection.forEach(th => {
      if (th.innerHTML.includes("↓")) th.innerHTML = th.innerHTML.split(" ")[0];
      if (th.innerHTML.includes("↑")) th.innerHTML = th.innerHTML.split(" ")[0];
    });
    sortDirection.forEach(th => {
      if (th.innerHTML === keySort) {
        if (direction === "up") th.innerHTML += " ↑";
        if (direction === "down") th.innerHTML += " ↓";
      }
    });
    listFilmSort.forEach(film => {
      const item = document.createElement("tr");
      item.dataset.id = film.id;
      item.dataset.title = film.title;
      item.dataset.year = film.year;
      item.dataset.imdb = film.imdb;
      const filmElementId = document.createElement("td");
      filmElementId.innerHTML = item.dataset.id;
      item.insertAdjacentElement("beforeEnd", filmElementId);
      const filmElementTitle = document.createElement("td");
      filmElementTitle.innerHTML = item.dataset.title;
      item.insertAdjacentElement("beforeEnd", filmElementTitle);
      const filmElementYear = document.createElement("td");
      filmElementYear.innerHTML = `(${item.dataset.year})`;
      item.insertAdjacentElement("beforeEnd", filmElementYear);
      const filmElementImdb = document.createElement("td");
      filmElementImdb.innerHTML = `imdb: ${Number(item.dataset.imdb).toFixed(2)}`;
      item.insertAdjacentElement("beforeEnd", filmElementImdb);
      this._element.appendChild(item);
    });
  }
}
;// ./src/js/sortTab/filmList.js
const filmList = [{
  id: 26,
  title: "Побег из Шоушенка",
  imdb: 9.3,
  year: 1994
}, {
  id: 25,
  title: "Крёстный отец",
  imdb: 9.2,
  year: 1972
}, {
  id: 27,
  title: "Крёстный отец 2",
  imdb: 9.0,
  year: 1974
}, {
  id: 1047,
  title: "Тёмный рыцарь",
  imdb: 9.0,
  year: 2008
}, {
  id: 223,
  title: "Криминальное чтиво",
  imdb: 8.9,
  year: 1994
}];
;// ./src/js/sortTab/sortTab.js
function sortTab(filmList, key, direction) {
  let filmSortList = [];
  filmSortList = filmList.sort(function (a, b) {
    if (direction === "up") {
      if (key === "title") {
        return a.title.localeCompare(b.title, undefined, {
          sensitivity: "base"
        });
      }
      return b[`${key}`] - a[`${key}`];
    } else {
      if (key === "title") {
        return b.title.localeCompare(a.title, undefined, {
          sensitivity: "base"
        });
      }
      return a[`${key}`] - b[`${key}`];
    }
  });
  return filmSortList;
}
;// ./src/js/app.js



document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector("tbody");
  const tab = new Tab(element);
  window.tab = tab;
  const listKey = [{
    id: "up"
  }, {
    id: "down"
  }, {
    title: "up"
  }, {
    title: "down"
  }, {
    year: "up"
  }, {
    year: "down"
  }, {
    imdb: "up"
  }, {
    imdb: "down"
  }];
  // // //Вариант 1 - остановка после прохождения всей сортировки столбцов в таблице
  // const tabInterval = setInterval(function () {
  //   const sort = listKey.shift();
  //   const keySort = Object.keys(sort)[0];
  //   const direction = Object.values(sort)[0];
  //   let listFilmSort = [];
  //   listFilmSort = sortTab(filmList, keySort, direction);
  //   tab.creatTab(listFilmSort, keySort, direction);
  //   if (!listKey.length) clearInterval(tabInterval);
  // }, 3000);

  // Вариант 2 - безконечная сортировки столбцов в таблице
  let i = 0;
  setInterval(function () {
    const sort = listKey[i];
    i += 1;
    const keySort = Object.keys(sort)[0];
    const direction = Object.values(sort)[0];
    let listFilmSort = [];
    listFilmSort = sortTab(filmList, keySort, direction);
    tab.creatTab(listFilmSort, keySort, direction);
    if (listKey.length === i) i = 0;
  }, 3000);
});
;// ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map