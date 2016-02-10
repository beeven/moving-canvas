import {Component,Input,Output,ElementRef,EventEmitter} from 'angular2/core';

@Component({
    selector: 'pane',
    template: `
      <div class="bubble-layer">
        <span class="bubble-text">This is center</span>
      </div>
      <img alt="" [src]="imgUrl" (load)="onImageLoaded($event)">
    `,
    styles:[`
        .bubble-layer {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bubble-layer .bubble-text {
          border-radius: 4px;
          background-color: rgba(184,184,184,0.5);
          padding: 10px 20px;
          font-family: sans-serif;
        }
        img {
            border: none;
            margin: 0;
            padding: 0;
        }
        `]
})
export class PaneComponent {
    @Input() imgUrl: string;
    @Output() resize:EventEmitter<any> = new EventEmitter();
    elem: any;

    constructor(private element:ElementRef) {
        this.elem = element.nativeElement;
    }
    onImageLoaded($event) {
        var img = this.elem.getElementsByTagName("img")[0];
        this.elem.style.width = img.naturalWidth;
        this.elem.style.height = img.naturalHeight;
        this.resize.emit({"width":img.naturalWidth, "height":img.naturalHeight});
    }
}
