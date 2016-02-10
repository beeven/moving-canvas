import {Component, OnInit, ElementRef} from 'angular2/core';
import {PaneComponent} from './pane.component';

interface BackgroundImage {
  name: string;
  url: string;
}

@Component({
  selector: 'my-app',
  template: `
<div class="container" (window:resize)="onResize($event)"
    (mousemove)="onMouseMove($event)">
<pane [imgUrl]='selectedImage' (resize)='onPaneResize($event)'
    [style.transform]="originTransform + mousemoveTransform"></pane>
<div class="widget">
    <div class="info-label">
      <span>mouseX: {{mouseX}}</span>
      <span>mouseY: {{mouseY}}</span>
      <span>width: {{windowWidth}}</span>
      <span>height: {{windowHeight}}</span>
      <span>paneWidth: {{paneWidth}}</span>
      <span>paneHeight: {{paneHeight}} </span>
    </div>
    <div class="switch">
        <select [(ngModel)]="selectedImage">
            <option *ngFor="#img of images; #i = index" [value]="img.url">{{img.name}}</option>
        </select>
    </div>
</div>
</div>
    `,
  styles: [`
        .container {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        .widget {
          position: absolute;
          margin: 5px;
          top: 0;
          left: 0;
        }
        .widget .info-label {
          background-color: #bdbdbd;
          font-size: 12px;
          font-family: sans-serif;
          padding: 2px 5px;
          opacity: 0.5;
          border-radius: 4px;
          z-index: 10;
          float: left;
        }
        .widget .switch {
          margin-left: 10px;
          float: left;
        }
        pane {
          z-index: 0;
          transform-origin: center;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.8s ease-out;
          position: relative;
      }
      `],
  directives: [PaneComponent]
})
export class AppComponent implements OnInit {
  images = BackgroundImages;
  selectedImage = this.images[0].url;
  windowWidth: number;
  windowHeight: number;
  paneWidth: number;
  paneHeight: number;
  mouseX: number;
  mouseY: number;
  elem: any;
  originTransform: string = "";
  mousemoveTransform: string = "";
  constructor(private element: ElementRef) {
    this.elem = element.nativeElement;
    window.addEventListener("mouseout",this.onMouseOut);
    window.addEventListener("blur",this.onMouseOut);
  }
  ngOnInit() {
    var d = this.elem.getElementsByClassName("container")[0];
    this.windowWidth = d.offsetWidth;
    this.windowHeight = d.offsetHeight;
  }
  onResize($event) {
    var d = this.elem.getElementsByClassName("container")[0];
    this.windowWidth = d.offsetWidth;
    this.windowHeight = d.offsetHeight;
  }
  onMouseMove($event) {
    this.mouseX = $event.clientX;
    this.mouseY = $event.clientY;
    this.mousemoveTransform ="translate("+
        (this.windowWidth/2 - this.mouseX)/(this.windowWidth)*(this.paneWidth-this.windowWidth) + "px,"+
        (this.windowHeight/2 - this.mouseY) / (this.windowHeight)*(this.paneHeight - this.windowHeight) + "px) ";
    if($event.movementX+$event.clientX <= 0 || $event.movementX + $event.clientX >= this.windowWidth
        || $event.movementY + $event.clientY <= 0 || $event.movementY + $event.clientY >= this.windowHeight) {
            this.mousemoveTransform = "";
        }
  }
  onMouseOut($event) {
      if($event.toElement||$event.relatedTarget) {
          return;

      }
  }
  onPaneResize($event) {
    this.paneWidth = $event.width;
    this.paneHeight = $event.height;
    this.originTransform = "translate("+(this.windowWidth - this.paneWidth)/2 + "px,"+
                         (this.windowHeight - this.paneHeight)/2 + "px) ";
  }
}

var BackgroundImages: BackgroundImage[] = [
  { "name": "Tenaya Lake", "url": "/images/tenaya-lake.jpg" },
  { "name": "DOA", "url": "/images/doa.jpg" },
  { "name": "Yosemite", "url": "/images/yosemite.jpg" },
]
