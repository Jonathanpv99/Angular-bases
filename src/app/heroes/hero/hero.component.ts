import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: String = 'ironman';
  public age: number = 45;

  get capitalizedNmae(): String {
    return this.name.toUpperCase();
  }

  getHeroDesciption(): String{
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
