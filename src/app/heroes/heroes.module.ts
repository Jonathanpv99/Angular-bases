import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
  exports:[
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent

  ],
  imports:[
    CommonModule //para que funcione el ngif de los botones

  ]
})
export class HeroesModule{

}
