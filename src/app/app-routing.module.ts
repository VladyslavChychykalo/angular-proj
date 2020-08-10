import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoffeePostsComponent } from './posts/coffee-posts.component';
import { CoffeePostComponent } from './post/coffee-post.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  { path: 'posts', component: CoffeePostsComponent },
  { path: 'posts/:id', component: CoffeePostComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
