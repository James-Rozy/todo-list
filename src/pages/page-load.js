import setSideBar from "./side-bar";

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

  setSideBar();
}

export default pageLoad;