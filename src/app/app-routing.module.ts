import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPostsComponent } from './screens/user-posts/user-posts.component';
import { UsersComponent } from './screens/users/users.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'posts/:id', component: UserPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
