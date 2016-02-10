import {Component, OnInit, ElementRef} from 'angular2/core';
import {PaneComponent} from './pane.component';

interface BackgroundImage {
  name: string;
  url: string;
}

@Component({
  selector: 'my-app',
  template: `
<div class="container" (window:resize)="onResize($event)" (mousemove)="onMouseMove($event)">
<pane [imgUrl]='selectedImage' (resize)='onPaneResize($event)'
    [style.transform]="paneTransform"
    [style.width]='paneWidth'
    [style.height]='paneHeight'></pane>
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
          transition-timing-function: ease-in-out;
          transition: transform;
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
  paneTransform: string;
  constructor(private element: ElementRef) {
    this.elem = element.nativeElement;

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
    this.mouseX = $event.offsetX;
    this.mouseY = $event.offsetY;

  }
  onPaneResize($event) {
    this.paneWidth = $event.width;
    this.paneHeight = $event.height;

    this.paneTransform = "translate("+(this.windowWidth - this.paneWidth)/2 + "px,"+
                         (this.windowHeight - this.paneHeight)/2 + "px)";
    // if((this.paneWidth - this.windowWidth) > 0 ) {
    //     //this.paneTransform = "translateX("+ (this.windowWidth - this.paneWidth)/6 + "px)";
    // } else {
    //     this.paneTransform = "";
    // }
    // if((this.paneHeight - this.windowHeight) > 0) {
    //     this.paneTransform += "translateY("+ (this.windowHeight - this.paneHeight)/2 + "px)";
    // }
  }
}

var BackgroundImages: BackgroundImage[] = [
  { "name": "Tenaya Lake", "url": "/images/tenaya-lake.jpg" },
  { "name": "DOA", "url": "/images/doa.jpg" },
  { "name": "Yosemite", "url": "/images/yosemite.jpg" },
]
