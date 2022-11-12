import { Component } from "@angular/core";

@Component({
    selector: 'heroe-component',
    templateUrl: 'heroe.component.html',
})

export class HeroeComponent{
    public name: string = 'Ironman' 
    public age: number = 45

    get capitalizedName(): string {
        return this.name.toUpperCase()
    }

    public getName(): string {
        return `${this.name} - ${this.age}`
    }

    public changeName(): void {
        this.name = 'Spiderman'
    }

    public changeAge(): void {
        this.age = 30
    }

}