"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollSpy = function () {
  function ScrollSpy() {
    var _this = this;

    var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, ScrollSpy);

    this.options = {
      offsetY: window.innerHeight / 8,
      links: "nav *",
      linksTo: "[data-trigger]",
      activeClassName: "active",
      checkLowerBound: true
    };
    Object.keys(option).forEach(function (key) {
      _this.options[key] = option[key];
    });
    this.init();
    this.watch();
  }

  _createClass(ScrollSpy, [{
    key: "watch",
    value: function watch() {
      var _this2 = this;

      window.addEventListener("scroll", function () {
        _this2.init();
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      var navLinks = document.querySelectorAll(this.options.links);

      var scrollTriggers = [].concat(_toConsumableArray(document.querySelectorAll(this.options.linksTo)));

      var scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      var viewportHeight = window.innerHeight;
      //scroll spy
      var last = void 0;
      navLinks.forEach(function (link) {
        return link.classList.remove(_this3.options.activeClassName);
      });

      for (var i = 0; i < scrollTriggers.length; i++) {
        var pos = this.getPositionOfElement(scrollTriggers[i]);
        if (this.options.checkLowerBound) {
          var high = scrollTriggers[i].scrollHeight;

          if (pos > scrolled + this.options.offsetY && pos < scrolled + viewportHeight - this.options.offsetY && pos + high > scrolled - this.options.offsetY && pos + high < scrolled + viewportHeight - this.options.offsetY) {
            last = scrollTriggers[i];
          }
        } else {
          if (pos > scrolled - this.options.offsetY && pos < scrolled + viewportHeight - 2 * this.options.offsetY) {
            last = scrollTriggers[i];
          }
        }
      }
      if (last) {
        var link = document.querySelector("[href=\"" + last.id + "\"]") || document.querySelector("[data-pointsTo=\"" + last.id + "\"]"); //id here

        link.classList.add(this.options.activeClassName);
      }
    }
  }, {
    key: "getPositionOfElement",
    value: function getPositionOfElement(element) {
      var pos = 0;
      while (element != null) {
        pos += element.offsetTop;
        element = element.offsetParent;
      }
      return pos;
    }
  }]);

  return ScrollSpy;
}();