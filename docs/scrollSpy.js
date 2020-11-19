"use strict";

class ScrollSpy{
  constructor(option = {}){
    Object.keys(option).forEach(key=>{
      this.#options[key]=option[key];
    })
    this.#init();
    this.#watch();
  }
  #options={
    offsetY: window.innerHeight/8,
    links: "nav *",
    linksTo: "[data-trigger]",
    activeClassName: "active",
    checkLowerBound: true
  };

  #watch=()=>{
    window.addEventListener("scroll",()=>{
      this.#init();
    });
  };

  #init=()=>{
    const navLinks = document.querySelectorAll(this.#options.links);

    const scrollTriggers = [...document.querySelectorAll(this.#options.linksTo)];

    let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    let viewportHeight = window.innerHeight;
    //scroll spy
    let last;
    navLinks.forEach(link=>link.classList.remove(this.#options.activeClassName));
    
    for(let i=0; i<scrollTriggers.length; i++){
      let pos = this.#getPositionOfElement(scrollTriggers[i]);
      if(this.#options.checkLowerBound){
        let high = scrollTriggers[i].scrollHeight;

        if((pos>scrolled+this.#options.offsetY && pos<scrolled+viewportHeight-this.#options.offsetY)
        && (pos+high>scrolled-this.#options.offsetY && pos+high<scrolled+viewportHeight-this.#options.offsetY)
        ){
          last=scrollTriggers[i];
        } 
      }
      else{
        if(pos>scrolled-this.#options.offsetY && pos<scrolled+viewportHeight-2*this.#options.offsetY) {
          last=scrollTriggers[i];
        }
      }
    }
    if(last){
      let link = document.querySelector(`[href="${last.id}"]`) || document.querySelector(`[data-pointsTo="${last.id}"]`); //id here
  
      link.classList.add(this.#options.activeClassName);
    }
  }

  #getPositionOfElement = (element)=>{
    let pos = 0;
    while (element != null)
    {
        pos += element.offsetTop;
        element = element.offsetParent;
    }
    return pos;
  }
}