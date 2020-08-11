import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './home/post/post.component';
import { PostFormComponent } from './home/post-form/post-form.component';
import { PostModalComponent } from './home/post-modal/post-modal.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoffeePostsComponent } from './posts/coffee-posts.component';
import { CoffeePostComponent } from './post/coffee-post.component';

import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostFormComponent,
    PostModalComponent,
    AboutComponent,
    ContactsComponent,
    CoffeePostsComponent,
    CoffeePostComponent,
    ErrorPageComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
