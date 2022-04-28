"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["pageLoad"],{

/***/ "./src/pages/page-load.js":
/*!********************************!*\
  !*** ./src/pages/page-load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _side_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar */ "./src/pages/side-bar.js");


const getHeader = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const nav = getNav();
  
  title.textContent = "What To Do";

  header.appendChild(title);
  header.appendChild(nav);

  return header;
}

const getNav = () => {
  const nav = document.createElement("nav");
  const btnAddTodo = getButton("+ Add To-Do");

  nav.appendChild(btnAddTodo);

  return nav;
}

const getButton = (name, className) => {
  const button = document.createElement("button");

  button.classList.add(className);
  button.textContent = name;
  button.addEventListener("click", e => {
    if (e.target.classList.contains("btnAddTodo")) {
      // new todo
      console.log("Make a new to-do");
    }
  });

  return button;
}

const getMain = () => {
  const main = document.createElement("main");

  return main;
}

const getFooter = () => {
  const footer = document.createElement("footer");
  const nameTag = document.createElement("p");

  nameTag.textContent = `James Rozsypal © ${new Date().getFullYear()}`;

  footer.appendChild(nameTag);

  return footer;
}

const pageLoad = () => {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  
  content.setAttribute("id", "content");

  content.appendChild(getHeader());
  content.appendChild(getMain());
  content.appendChild(getFooter());

  body.appendChild(content);

  (0,_side_bar__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/page-load.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMseUJBQXlCOztBQUVyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUUscURBQVU7QUFDWjs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3ZFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvc2lkZS1iYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldFNpZGVCYXIgZnJvbSBcIi4vc2lkZS1iYXJcIjtcblxuY29uc3QgZ2V0SGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbmF2ID0gZ2V0TmF2KCk7XG4gIFxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV2hhdCBUbyBEb1wiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGdldE5hdiA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgYnRuQWRkVG9kbyA9IGdldEJ1dHRvbihcIisgQWRkIFRvLURvXCIpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChidG5BZGRUb2RvKTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5jb25zdCBnZXRCdXR0b24gPSAobmFtZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gbmFtZTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuQWRkVG9kb1wiKSkge1xuICAgICAgLy8gbmV3IHRvZG9cbiAgICAgIGNvbnNvbGUubG9nKFwiTWFrZSBhIG5ldyB0by1kb1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b247XG59XG5cbmNvbnN0IGdldE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuY29uc3QgZ2V0Rm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBuYW1lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgbmFtZVRhZy50ZXh0Q29udGVudCA9IGBKYW1lcyBSb3pzeXBhbCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChuYW1lVGFnKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5jb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0SGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGdldE1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0Rm9vdGVyKCkpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgc2V0U2lkZUJhcigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDsiLCJjb25zdCBnZXRTaWRlQmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZ2VuZXJhbCA9IGdldFNlY3Rpb24oXCJHZW5lcmFsXCIpO1xuICBjb25zdCB0b2RheSA9IGdldFByb2plY3QoXCJUb2RheVwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRTZWN0aW9uKFwiUHJvamVjdHNcIik7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBnZXRQcm9qZWN0KFwiKyBOZXcgUHJvamVjdFwiKTtcblxuICBzaWRlQmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZS1iYXJcIik7XG4gIGdlbmVyYWwudGV4dENvbnRlbnQgPSBcIkdlbmVyYWxcIjtcbiAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZChnZW5lcmFsKTtcbiAgc2lkZUJhci5hcHBlbmRDaGlsZCh0b2RheSk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gIHJldHVybiBzaWRlQmFyO1xufVxuXG5jb25zdCBnZXRTZWN0aW9uID0gKG5hbWUpID0+IHtcbiAgY29uc3Qgc2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIHNlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInNpZGUtc2VjdGlvblwiKTtcbiAgc2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKHNlY3Rpb25OYW1lKTtcblxuICByZXR1cm4gc2VjdGlvbkRpdjtcbn1cblxuY29uc3QgZ2V0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblxuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlLXByb2plY3RcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgcmV0dXJuIHByb2plY3REaXY7XG59XG5cbmNvbnN0IHNldFNpZGVCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICB3aGlsZShtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZShtYWluLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChnZXRTaWRlQmFyKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRTaWRlQmFyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==