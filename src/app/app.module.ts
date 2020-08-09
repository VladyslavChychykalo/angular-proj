import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './home/post/post.component';
import { PostFormComponent } from './home/post-form/post-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModalComponent } from './home/post-modal/post-modal.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PostComponent, PostFormComponent, PostModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
