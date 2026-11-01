import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        loadComponent(){
            return import('./home/home').then((c)=>c.Home)
        }
    },
    {
        path:'todo',
        loadComponent(){
            return import('./todo/todo').then((c)=>c.Todo)
        }
    }
];
