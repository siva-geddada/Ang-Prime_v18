import { Routes } from '@angular/router';
import { GetStartedComponent } from './features/get-started/get-started.component';
import { FormsComponent } from './features/forms/forms/forms.component';
import { FormArraysComponent } from './features/forms/form-arrays/form-arrays.component';

export const routes: Routes = [
    { path: '', redirectTo: 'get-started', pathMatch: 'full' },
    { path: 'get-started', component: GetStartedComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'form-array', component: FormArraysComponent },
    { path: '**', redirectTo: 'home' },
  
];
