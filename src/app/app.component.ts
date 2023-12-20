import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ElectricityComponent } from "./electricity/electricity.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, ElectricityComponent]
})
export class AppComponent {
  title = 'AppLowcarb';

  user: any = {
    name: '',
    password: '',
    email: ''
  }

  onSubmit(){
    console.log(this.user)
  }
}
