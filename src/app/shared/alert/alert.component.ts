import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.componet.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() message: string;

}
