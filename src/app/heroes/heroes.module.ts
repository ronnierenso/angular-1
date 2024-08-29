import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponentHero } from "./list/list.component";


@NgModule({
  declarations: [HeroComponent, ListComponentHero],
  exports: [HeroComponent, ListComponentHero],
  imports: [CommonModule]
})
export class HeroModule {

}
