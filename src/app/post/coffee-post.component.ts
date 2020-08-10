import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService, Post } from '../services/posts.service';

@Component({
  selector: 'app-coffee-post',
  templateUrl: './coffee-post.component.html',
  styleUrls: ['./coffee-post.component.scss'],
})
export class CoffeePostComponent implements OnInit {
  post: Post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService // private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postsService.getById(+params.id);
    });
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
