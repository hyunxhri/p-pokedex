let path;

if (window.location.hostname === "localhost") {
  path = "/src";
} else {
  path = "https://curious-frangipane-e51feb.netlify.app/";
}

export default path;