const getProject = () => {
  const projectDiv = document.createElement("div");
  const projectTitle = document.createElement("h2");
  
  return projectDiv
}

const setProject = () => {
  const main = document.querySelector("main");

  while(main.firstChild) {
    main.remove(main.firstChild);
  }

  main.appendChild(getProject());
}

export default setProject;