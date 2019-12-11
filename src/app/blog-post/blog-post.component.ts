import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  title: string;
  summary: string;
  constructor() { }

  ngOnInit() {
    this.title='Blog Title';
    this.summary='Blog Summary';
   

  }

}
