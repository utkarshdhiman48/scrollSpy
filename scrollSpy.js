"use strict";
class Element {
	constructor(node) {
		this.node = node;
		this.top = node.offsetTop;
		this.bottom = node.offsetTop + node.scrollHeight;
	}
	activate(activeClassName) {
		if (!this.node.classList.contains(activeClassName))
			this.node.classList.add(activeClassName);
	}
	deactivate(activeClassName) {
		if (this.node.classList.contains(activeClassName))
			this.node.classList.remove(activeClassName);
	}

}

class ScrollSpy {
	constructor(option={}) {
		Object.keys(option).forEach(key=>{
		  this.options[key]=option[key];
		})

		//all elements to scroll
		this.elements = new Array();

		document.querySelectorAll(this.options.linksTo).forEach(e => {
			this.elements.push(new Element(e));
		});

		//elements to change state
		this.links = new Array();

		document.querySelectorAll(this.options.links).forEach(e => {
			this.links.push(new Element(e));
		});

		//initial setup
		// let v_top = window.scrollY || window.pageYOffset;
		// let v_bottom = v_top + window.innerHeight;
		// this.init(0, window.innerHeight);
		//register event handler
		this.watch();

	}

	options = {
		offsetTop: window.innerHeight / 8,
		offsetBottom: window.innerHeight / 8,
		links: "nav *",
		linksTo: "[data-trigger]",
		activeClassName: "active",
	};

	init(v_top, v_bottom) {
		//looping through all elements
		let toActivate;//last will be activated
		for (let i = 0; i < this.elements.length; i++) {
			//etop is greater than equal to vtop and etop is less than vbott(when etop is in the viewport)
			if (this.elements[i].top >= v_top && this.elements[i].top < v_bottom) {
				//ebott less than vbott
				// this.links[i].activate("active");
				// break;
				toActivate = this.links[i];
			}//etop is less than vtop and ebott is greater than vbott
			else if (this.elements[i].top < v_top && this.elements[i].bottom > v_bottom) {
				// this.links[i].activate("active");
				// break;
				toActivate = this.links[i];
			}
			this.links[i].deactivate(this.options.activeClassName);
		}
		try{
			toActivate.activate(this.options.activeClassName);
		}
		catch(ex){
			console.error("No element in range")
		}
	}

	watch() {
		window.addEventListener("scroll", () => {
			//viewport state variables
			let v_top = window.scrollY || window.pageYOffset;
			let v_bottom = v_top + window.innerHeight;

			//applying offsets
			if(this.options.offsetTop){
				v_top+=this.options.offsetTop;
			}
			if(this.options.offsetBottom){
				v_bottom-=this.options.offsetBottom;
			}

			this.init(v_top, v_bottom);
		});
	}
}
