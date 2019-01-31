import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Projetinho';
  title2 = 'Bem-vindo';

  ngOnInit(){
  	console.log("This is my "+ this.title1);
  }
}