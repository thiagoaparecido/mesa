import {Component, Input} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
    @Input() loading: boolean = false;
    @Input() fullScreen: boolean = false;
}