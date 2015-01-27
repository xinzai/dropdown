(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('simple-dropdown', ["jquery",
      "simple-module",
      "simple-util"], function ($, SimpleModule, simpleUtil) {
      return (root.returnExportsGlobal = factory($, SimpleModule, simpleUtil));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),
      require("simple-module"),
      require("simple-util"));
  } else {
    root['dropdown'] = factory(jQuery,
      SimpleModule,
      simple.util);
  }
}(this, function ($, SimpleModule, simpleUtil) {

var Dropdown, dropdown,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Dropdown = (function(_super) {
  __extends(Dropdown, _super);

  function Dropdown() {
    return Dropdown.__super__.constructor.apply(this, arguments);
  }

  Dropdown.prototype.opts = {
    el: "",
    defaults: "",
    content: []
  };

  Dropdown.prototype.tpl = "<div class=\"simple-dropdown\">\n  <div class=\"dropdown-main\">\n    <span></span>\n    <div class=\"arrow\"></div>\n  </div>\n  <div class=\"dropdown-content\"><ul></ul></div>\n</div>";

  Dropdown.prototype._init = function() {
    this.target = $(this.opts.el);
    if (this.opts["default"] === "") {
      throw "Default cannot be empty!";
    }
    if (this.opts.content.length === 0) {
      throw "content cannot be empty!";
    }
    alert("123");
    return this._render();
  };

  Dropdown.prototype._render = function() {
    this.el = $(this.tpl);
    this.target.append(this.tpl);
    this.el.find("span").html(this.opts.defaults);
    $.each(this.opts.content, function(val) {
      return this.el.find("ul").append("<li>" + val + "</li>");
    });
    this.el.find("dropdown-main").focus(function() {
      return this.el.find("dropdown-content").show();
    });
    return this.el.find("dropdown-main").blur(function() {
      return this.el.find("dropdown-content").hide();
    });
  };

  return Dropdown;

})(SimpleModule);

dropdown = function(opts) {
  return new Dropdown(opts);
};

return dropdown;

}));
