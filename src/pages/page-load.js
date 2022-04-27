const getHeader = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const btnAddTodo = getButton("+ Add To-Do");
  
  title.textContent = "What To Do";

  header.appendChild(title);
  header.appendChild(btnAddTodo);

  return header;
}

const getNav = () => {
  const nav = document.createElement("nav");

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
    if (e.target.classList.contains("btnAddProject")) {
      // new project
      console.log("Make new project");
    }
  });

  return button;
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
  content.appendChild(getFooter());

  body.appendChild(content);
}

export default pageLoad;