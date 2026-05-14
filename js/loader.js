const files = [

  // 1. CORE
  "js/core/router.js",
  "js/modals/modal.js",

  // 2. DATA
  "js/data/wallsData.js",
  "js/data/standsData.js",
  "js/data/archiveData.js",
  "js/data/feedbackData.js",

  // 3. PAGES
  "js/pages/home.js",
  "js/pages/about.js",
  "js/pages/contact.js",
  "js/pages/walls.js",
  "js/pages/stands.js",
  "js/pages/archive.js",
  "js/pages/feedback.js",

];

 function loadScriptsSequentially(list, callback){
  let i = 0;

  function next(){
    if(i >= list.length){
      callback();
      return;
    }

    const s = document.createElement("script");
    s.src = list[i];

    s.onload = () => {
      i++;
      next();
    };

    document.body.appendChild(s);
  }

  next();
}
loadScriptsSequentially(files, () => {
  console.log("ALL LOADED");

  Router.init();
  Router.go("home");
});