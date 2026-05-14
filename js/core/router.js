window.Router = {
  routes: {},

  register(name, fn){
    this.routes[name] = fn;
  },

  go(name){
    if(this.routes[name]){
      this.routes[name]();
    }
  },

  init(){
    document.addEventListener("click", (e) => {
      if(e.target.dataset.route){
        this.go(e.target.dataset.route);
      }
    });
  }
};
document.addEventListener("click", (e) => {
  
  // 🔥 БУРГЕР
  if (e.target.classList.contains("burger")) {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }

  // 🌐 ROUTE
  if (e.target.dataset.route) {
    Router.go(e.target.dataset.route);

    // закривати меню після переходу
    document.getElementById("menu")?.classList.remove("active");
  }
});