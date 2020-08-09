import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-coffee-posts',
  templateUrl: './coffee-posts.component.html',
  styleUrls: ['./coffee-posts.component.scss'],
})
export class CoffeePostsComponent {
  constructor(public postsService: PostsService) {}
}
