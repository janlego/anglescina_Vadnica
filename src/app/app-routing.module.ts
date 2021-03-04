import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoryComponent } from './memory/memory.component'
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'memory'},
  { path: 'memory', component: MemoryComponent },
  { path: 'learn', component: LearnComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'memory'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
