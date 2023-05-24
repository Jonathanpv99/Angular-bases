import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedNmae(): string {
    return this.name.toUpperCase();
  }

  getHeroDesciption(): string{
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void{
    this.name = 'Hulk';
  }

  changeAge(): void{
    this.age = 32;
  }

  reset(): void{
    this.name = 'ironman';
    this.age = 45;
  }


}
