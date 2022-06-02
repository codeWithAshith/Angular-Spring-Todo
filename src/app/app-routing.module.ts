import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { LoginComponent } from './component/login/login.component';
import { TodoComponent } from './component/todo/todo.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
