const getHeader = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const nav = getNav();
  
  title.textContent = "What To-Do";

  header.appendChild(title);
  header.appendChild(nav);

  return header;
}

const getNav = () => {
  const nav = document.createElement("nav");

  return nav;
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
  const content = document.querySelector("#content");
}