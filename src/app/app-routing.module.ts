import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacCreateComponent } from './contac-create/contac-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/create', component: ContacCreateComponent },
  { path: 'contacts/:id', component: ContactUpdateComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
