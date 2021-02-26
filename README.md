
# scrollSpy

A pure JS scrollSpy with no dependency.

Note: Links and target elements should appear in same order.

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


* `id` and`data-trigger` attributes are required for section to be considered.

* `data-pointsTo` attribute must be present in links(navigation).

A [hosted sample](https://utkarsh48.github.io/scrollSpy/) in docs folder.


### Options

|Properties|Description|
|-|-|
|offsetTop | distance to spare from top |
|offsetBottom | distance to spare from bottom |
|links | link elements(navigation) |
|linksTo | corresponding target elements|
|activeClassName | CSS class to be applied, when in view|


### Defaults

    let options={
	    offsetTop: window.innerHeight/8,
	    offsetBottom: window.innerHeight/8,
	    links: "nav *", 
	    linksTo: "[data-trigger]", 
	    activeClassName: "active", 
	    checkLowerBound: true 
    }
    new ScrollSpy(options);
