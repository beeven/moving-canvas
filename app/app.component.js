System.register(['angular2/core', './pane.component'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pane_component_1;
    var AppComponent, BackgroundImages;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pane_component_1_1) {
                pane_component_1 = pane_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(element) {
                    this.element = element;
                    this.images = BackgroundImages;
                    this.selectedImage = this.images[0].url;
                    this.elem = element.nativeElement;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var d = this.elem.getElementsByClassName("container")[0];
                    this.windowWidth = d.offsetWidth;
                    this.windowHeight = d.offsetHeight;
                };
                AppComponent.prototype.onResize = function ($event) {
                    var d = this.elem.getElementsByClassName("container")[0];
                    this.windowWidth = d.offsetWidth;
                    this.windowHeight = d.offsetHeight;
                };
                AppComponent.prototype.onMouseMove = function ($event) {
                    this.mouseX = $event.offsetX;
                    this.mouseY = $event.offsetY;
                };
                AppComponent.prototype.onPaneResize = function ($event) {
                    this.paneWidth = $event.width;
                    this.paneHeight = $event.height;
                    this.paneTransform = "translate(" + (this.windowWidth - this.paneWidth) / 2 + "px," +
                        (this.windowHeight - this.paneHeight) / 2 + "px)";
                    // if((this.paneWidth - this.windowWidth) > 0 ) {
                    //     //this.paneTransform = "translateX("+ (this.windowWidth - this.paneWidth)/6 + "px)";
                    // } else {
                    //     this.paneTransform = "";
                    // }
                    // if((this.paneHeight - this.windowHeight) > 0) {
                    //     this.paneTransform += "translateY("+ (this.windowHeight - this.paneHeight)/2 + "px)";
                    // }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<div class=\"container\" (window:resize)=\"onResize($event)\" (mousemove)=\"onMouseMove($event)\">\n<pane [imgUrl]='selectedImage' (resize)='onPaneResize($event)'\n    [style.transform]=\"paneTransform\"\n    [style.width]='paneWidth'\n    [style.height]='paneHeight'></pane>\n<div class=\"widget\">\n    <div class=\"info-label\">\n      <span>mouseX: {{mouseX}}</span>\n      <span>mouseY: {{mouseY}}</span>\n      <span>width: {{windowWidth}}</span>\n      <span>height: {{windowHeight}}</span>\n      <span>paneWidth: {{paneWidth}}</span>\n      <span>paneHeight: {{paneHeight}} </span>\n    </div>\n    <div class=\"switch\">\n        <select [(ngModel)]=\"selectedImage\">\n            <option *ngFor=\"#img of images; #i = index\" [value]=\"img.url\">{{img.name}}</option>\n        </select>\n    </div>\n</div>\n</div>\n    ",
                        styles: ["\n        .container {\n          width: 100%;\n          height: 100%;\n          margin: 0;\n          padding: 0;\n        }\n        .widget {\n          position: absolute;\n          margin: 5px;\n          top: 0;\n          left: 0;\n        }\n        .widget .info-label {\n          background-color: #bdbdbd;\n          font-size: 12px;\n          font-family: sans-serif;\n          padding: 2px 5px;\n          opacity: 0.5;\n          border-radius: 4px;\n          z-index: 10;\n          float: left;\n        }\n        .widget .switch {\n          margin-left: 10px;\n          float: left;\n        }\n        pane {\n          z-index: 0;\n          transform-origin: center;\n          transform-style: preserve-3d;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          transition-timing-function: ease-in-out;\n          transition: transform;\n          position: relative;\n      }\n      "],
                        directives: [pane_component_1.PaneComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            BackgroundImages = [
                { "name": "Tenaya Lake", "url": "/images/tenaya-lake.jpg" },
                { "name": "DOA", "url": "/images/doa.jpg" },
                { "name": "Yosemite", "url": "/images/yosemite.jpg" },
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map