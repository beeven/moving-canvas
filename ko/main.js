(function(ko) {
  'use strict';

  function AppViewModel() {
    var that = this;

    this.clientX = ko.observable(0);
    this.clientY = ko.observable(0);
    this.windowWidth = ko.observable(0);
    this.windowHeight = ko.observable(0);
    this.relativeX = ko.computed(function() {
      return this.clientX() - this.windowWidth() / 2;
    }, this);
    this.relativeY = ko.computed(function() {
      return this.clientY() - this.windowHeight() / 2;
    }, this);

    this.availableImages = ko.observableArray([
        {name:'Tenaya Lake', url:'/images/tenaya-lake.jpg'},
        {name:"Yosemite", url:"/images/yosemite.jpg"},
        {name:"DOA", url:"/images/doa.jpg"}
    ]);
    this.selectedImage = ko.observable();


    var elem = document.getElementsByClassName('container')[0];
    that.windowWidth(elem.offsetWidth);
    that.windowHeight(elem.offsetHeight);
    elem.addEventListener('mousemove', function(event) {
      that.clientX(event.clientX);
      that.clientY(event.clientY);
    }, false);
    elem.addEventListener('mouseout', function(event) {
      that.clientX(that.windowWidth() / 2);
      that.clientY(that.windowHeight() / 2);
    }, false);
    window.addEventListener('resize', function(event) {
      that.windowWidth(elem.offsetWidth);
      that.windowHeight(elem.offsetHeight);
    }, false);
  }

  window.onload= function() {
    ko.applyBindings(new AppViewModel());
  };
})(ko);
