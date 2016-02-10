System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var PaneComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaneComponent = (function () {
                function PaneComponent(element) {
                    this.element = element;
                    this.resize = new core_1.EventEmitter();
                    this.elem = element.nativeElement;
                }
                PaneComponent.prototype.onImageLoaded = function ($event) {
                    var img = this.elem.getElementsByTagName("img")[0];
                    this.resize.emit({ "width": img.naturalWidth, "height": img.naturalHeight });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PaneComponent.prototype, "imgUrl", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PaneComponent.prototype, "resize", void 0);
                PaneComponent = __decorate([
                    core_1.Component({
                        selector: 'pane',
                        template: "\n      <div class=\"bubble-layer\">\n        <span class=\"bubble-text\">This is center</span>\n      </div>\n      <img alt=\"\" [src]=\"imgUrl\" (load)=\"onImageLoaded($event)\">\n    ",
                        styles: ["\n        .bubble-layer {\n          width: 100%;\n          height: 100%;\n          top: 0;\n          left: 0;\n          position: absolute;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .bubble-layer .bubble-text {\n          border-radius: 4px;\n          background-color: rgba(184,184,184,0.5);\n          padding: 10px 20px;\n          font-family: sans-serif;\n        }\n        "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PaneComponent);
                return PaneComponent;
            }());
            exports_1("PaneComponent", PaneComponent);
        }
    }
});
//# sourceMappingURL=pane.component.js.map