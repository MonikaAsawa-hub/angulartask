import { Component } from '@angular/core';
import { GlobalService } from './custom-service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
     public globalService: GlobalService
  ){}

  public dispose(){
    this.globalService.submitted = false;
  }
  title = 'PracticalTask';
}
