const getSideBar = () => {
  const sideBar = document.createElement("div");
  const general = getSection("General");
  const today = getProject("Today");
  const projects = getSection("Projects");
  const newProject = getProject("+ New Project");

  sideBar.setAttribute("id", "side-bar");

  general.appendChild(today);
  sideBar.appendChild(general);
  projects.appendChild(newProject);
  sideBar.appendChild(projects);
  
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

  projectDiv.addEventListener("click", e => {
    // When a prject div is clicked it should load that project onto project-content
  });

  return projectDiv;
}

const setSideBar = () => {
  const main = document.querySelector("main");

  while(main.firstChild) {
    main.remove(main.firstChild);
  }

  main.appendChild(getSideBar());
}

export default setSideBar;