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
                    this.originTransform = "";
                    this.mousemoveTransform = "";
                    this.elem = element.nativeElement;
                    window.addEventListener("mouseout", this.onMouseOut);
                    window.addEventListener("blur", this.onMouseOut);
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
                    this.mouseX = $event.clientX;
                    this.mouseY = $event.clientY;
                    this.mousemoveTransform = "translate(" +
                        (this.windowWidth / 2 - this.mouseX) / (this.windowWidth) * (this.paneWidth - this.windowWidth) + "px," +
                        (this.windowHeight / 2 - this.mouseY) / (this.windowHeight) * (this.paneHeight - this.windowHeight) + "px) ";
                    if ($event.movementX + $event.clientX <= 0 || $event.movementX + $event.clientX >= this.windowWidth
                        || $event.movementY + $event.clientY <= 0 || $event.movementY + $event.clientY >= this.windowHeight) {
                        this.mousemoveTransform = "";
                    }
                };
                AppComponent.prototype.onMouseOut = function ($event) {
                    if ($event.toElement || $event.relatedTarget) {
                        return;
                    }
                };
                AppComponent.prototype.onPaneResize = function ($event) {
                    this.paneWidth = $event.width;
                    this.paneHeight = $event.height;
                    this.originTransform = "translate(" + (this.windowWidth - this.paneWidth) / 2 + "px," +
                        (this.windowHeight - this.paneHeight) / 2 + "px) ";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<div class=\"container\" (window:resize)=\"onResize($event)\"\n    (mousemove)=\"onMouseMove($event)\">\n<pane [imgUrl]='selectedImage' (resize)='onPaneResize($event)'\n    [style.transform]=\"originTransform + mousemoveTransform\"></pane>\n<div class=\"widget\">\n    <div class=\"info-label\">\n      <span>mouseX: {{mouseX}}</span>\n      <span>mouseY: {{mouseY}}</span>\n      <span>width: {{windowWidth}}</span>\n      <span>height: {{windowHeight}}</span>\n      <span>paneWidth: {{paneWidth}}</span>\n      <span>paneHeight: {{paneHeight}} </span>\n    </div>\n    <div class=\"switch\">\n        <select [(ngModel)]=\"selectedImage\">\n            <option *ngFor=\"#img of images; #i = index\" [value]=\"img.url\">{{img.name}}</option>\n        </select>\n    </div>\n</div>\n</div>\n    ",
                        styles: ["\n        .container {\n          width: 100%;\n          height: 100%;\n          margin: 0;\n          padding: 0;\n        }\n        .widget {\n          position: absolute;\n          margin: 5px;\n          top: 0;\n          left: 0;\n        }\n        .widget .info-label {\n          background-color: #bdbdbd;\n          font-size: 12px;\n          font-family: sans-serif;\n          padding: 2px 5px;\n          opacity: 0.5;\n          border-radius: 4px;\n          z-index: 10;\n          float: left;\n        }\n        .widget .switch {\n          margin-left: 10px;\n          float: left;\n        }\n        pane {\n          z-index: 0;\n          transform-origin: center;\n          transform-style: preserve-3d;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          transition: transform 0.8s ease-out;\n          position: relative;\n      }\n      "],
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