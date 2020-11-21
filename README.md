
# scrollSpy

A pure JS scrollSpy. No dependency.
Works without jQuery

 Think of it like a window, last element inside the window will be considered active , height of last element should be smaller than this window


OffsetY is subtracted from viewport height so give value accordingly


If elements are greater than viewport `checkLowerBound` should be set to `false`


### Initialization

    <nav>
      <a data-pointsTo="aaaaa" href="#aaaaa">link 1</a>
      <a data-pointsTo="aaaa" href="#aaaa">link 2</a>
      <a data-pointsTo="aaa" href="#aaa">link 3</a>
      <a data-pointsTo="aa" href="#aa">link 4</a>
      <a data-pointsTo="a" href="#a">link 5</a>
    </nav>
    ...
    <section id="aaaaa" data-trigger="true"></section>
      <section id="aaaa" data-trigger="true"></section>
      <section id="aaa" data-trigger="true"></section>
      <section id="aa" data-trigger="true"></section>
      <section id="a" data-trigger="true"></section>
    ...
    <script src="./path/scrollSpy.js"></script>
    <script> new ScrollSpy(); </script>


* `id` and `data-trigger` attributes are must for section to be considered.
* Both `data-pointsTo` or `href` can be used `href` will be given preference.

A [hosted sample](https://utkarsh48.github.io/scrollSpy/) in docs folder.


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
