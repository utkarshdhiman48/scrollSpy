
# scrollSpy

A pure JS scrollSpy. No dependency.
Works without jQuery

 Think of it like a window, last element inside the window will be considered active , height of last element should be smaller than this window


OffsetY is subtracted from viewport height so give value accordingly


If elements are greater than viewport `checkLowerBound` should be set to `false`


### Initialization

    <script src="./path/scrollSpy.js"></script>
    
    <script> new ScrollSpy(); </script>


A sample in docs folder


### Options

|Properties|Description|
|-|-|
|offsetY | distance to spare from top and bottom|
|links | link elements|
|linksTo | corresponding elements|
|activeClassName | CSS class when in view|
|checkLowerBound | should be true if elements are smaller than viewport|


### Defaults

    let options={
	    offsetY: window.innerHeight/8, 
	    links: "nav *", 
	    linksTo: "[data-trigger]", 
	    activeClassName: "active", 
	    checkLowerBound: true 
    }
    new ScrollSpy(options);


ES5 version is also available.