import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `
        
        <h1>{{ title }}</h1>
        
        <br />
        
        <span>La base es: {{ base }}</span>
        
        ejercicio 2
        <button (click)="acumulation(base)">+5</button>
        <span>{{ num_count }}</span>
        <button (click)="acumulation(-base)">-5</button>
    `,
})

export class CounterComponent {
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