import Tab from "./sortTab/Tab.js";
import { filmList } from "./sortTab/filmList.js";
import sortTab from "./sortTab/sortTab.js";

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector("tbody");
  const tab = new Tab(element);
  window.tab = tab;
  const listKey = [
    { id: "up" },
    { id: "down" },
    { title: "up" },
    { title: "down" },
    { year: "up" },
    { year: "down" },
    { imdb: "up" },
    { imdb: "down" },
  ];
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
