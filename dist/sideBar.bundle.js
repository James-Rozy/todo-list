"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["sideBar"],{

/***/ "./src/pages/side-bar.js":
/*!*******************************!*\
  !*** ./src/pages/side-bar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getSideBar = () => {
  const sideBar = document.createElement("div");
  const general = getSection("General");
  const today = getProject("Today");
  const projects = getSection("Projects");
  const newProject = getProject("+ New Project");

  sideBar.setAttribute("id", "side-bar");
  general.textContent = "General";
  projects.textContent = "Projects";

  sideBar.appendChild(general);
  sideBar.appendChild(today);
  sideBar.appendChild(projects);
  sideBar.appendChild(newProject);

  return sideBar;
}

const getSection = (name) => {
  const sectionDiv = document.createElement("div");
  const sectionName = document.createElement("h2");

  sectionDiv.classList.add("side-section");
  sectionName.textContent = name;
  sectionDiv.appendChild(sectionName);

  return sectionDiv;
}

const getProject = (name) => {
  const projectDiv = document.createElement("div");
  const projectName = document.createElement("h3");

  projectDiv.classList.add("side-project");
  projectName.textContent = name;
  projectDiv.appendChild(projectName);

  return projectDiv;
}

const setSideBar = () => {
  const main = document.querySelector("main");

  while(main.firstChild) {
    main.remove(main.firstChild);
  }

  main.appendChild(getSideBar());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setSideBar);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/side-bar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZUJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9zaWRlLWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRTaWRlQmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZ2VuZXJhbCA9IGdldFNlY3Rpb24oXCJHZW5lcmFsXCIpO1xuICBjb25zdCB0b2RheSA9IGdldFByb2plY3QoXCJUb2RheVwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRTZWN0aW9uKFwiUHJvamVjdHNcIik7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBnZXRQcm9qZWN0KFwiKyBOZXcgUHJvamVjdFwiKTtcblxuICBzaWRlQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZS1iYXJcIik7XG4gIGdlbmVyYWwudGV4dENvbnRlbnQgPSBcIkdlbmVyYWxcIjtcbiAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZChnZW5lcmFsKTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gIHJldHVybiBzaWRlQmFyO1xufVxuXG5jb25zdCBnZXRTZWN0aW9uID0gKG5hbWUpID0+IHtcbiAgY29uc3Qgc2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIHNlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInNpZGUtc2VjdGlvblwiKTtcbiAgc2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY3Rpb25OYW1lKTtcblxuICByZXR1cm4gc2VjdGlvbkRpdjtcbn1cblxuY29uc3QgZ2V0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblxuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlLXByb2plY3RcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgcmV0dXJuIHByb2plY3REaXY7XG59XG5cbmNvbnN0IHNldFNpZGVCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICB3aGlsZShtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZShtYWluLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChnZXRTaWRlQmFyKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRTaWRlQmFyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==