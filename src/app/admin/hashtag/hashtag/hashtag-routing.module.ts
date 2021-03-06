import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashtagComponent } from './hashtag.component';

const routes: Routes = [
  { path: '', component: HashtagComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashtagRoutingModule { }
