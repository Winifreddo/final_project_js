//when screen loads call function to remove class name for css to take effect
window.onload = () => {
    let transition = document.querySelector(".transition");
    let links = document.querySelectorAll("a");
    setTimeout(() => {
      transition.classList.remove("is-active");
    }, 500);
    // for loop prevents automatic changing of pages on click
    // storing target destination in target variable
    //   delaying transferrance as adding animation, if transferrence not delayed animation will not function
  
    for (i = 0; i < links.length; i++) {
      let pages = links[i];
  
      pages.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target.href;
        //   console.log(target);
        //   adding class list back in
        transition.classList.add("is-active");
        // setting timer so the location will change afer .5 secs
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    }
  };
  