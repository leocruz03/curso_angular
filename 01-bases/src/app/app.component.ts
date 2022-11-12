import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';

  /* variable para el contador */
  public num_count: number = 0;

  public base: number = 5;

  /* método para la suma en el componente */
  public addition(value: number) {
      this.base += value;
  }

  public subtract(value: number) {
      this.base -= value;
  }

  public acumulation(value: number) {
      this.num_count += value;
  }
}
