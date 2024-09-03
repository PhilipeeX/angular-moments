import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListRenderComponent} from "./components/list-render/list-render.component";
import {FirstComponentComponent} from "./components/first-component/first-component.component";
import {PipeComponent} from "./components/pipe/pipe.component";
import {EventosComponent} from "./components/eventos/eventos.component";
import {IfRenderComponent} from "./components/if-render/if-render.component";
import {ChangeNumberComponent} from "./components/change-number/change-number.component";

const routes: Routes = [
  { path: '', component: FirstComponentComponent},
  { path: 'list', component: ListRenderComponent},
  { path: 'pipe', component: PipeComponent},
  { path: 'events', component: EventosComponent},
  { path: 'render', component: IfRenderComponent},
  { path: 'change-number', component: ChangeNumberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
