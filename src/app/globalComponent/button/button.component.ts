import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
  @Input() btnColor: string = 'primary'; //colors: primary, secondary, success, error, warning
  @Input() btnSize: string = 'md'; //sizes: xs, sm, md, lg, xl
  @Input() isDisabled: boolean = false; //true or false
  @Input() isRounded: boolean = false; //true or false
  @Input() btnVariant: string = ''; //types: outline, solid 
  @Input() btnText: string= '';

  @Output() onBtnClick = new EventEmitter<any>();

  buttonClass!: string;


  ngOnInit() {
    this.buttonClass = `btn-${this.btnColor} btn-${this.btnSize}`;
    if (this.isRounded) {
      this.buttonClass += ` btn-rounded`;
    }
    if (this.btnVariant === 'outline' || this.btnVariant === 'solid') {
      this.buttonClass += ` btn-${this.btnVariant}-${this.btnColor}`;
    }
  }

  onClick(){
    debugger;
    this.onBtnClick.emit("Hi, I am Raushan.")
  }
}




