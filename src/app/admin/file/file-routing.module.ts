import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file.component';

const routes: Routes = [
  { path: '', component: FileComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
