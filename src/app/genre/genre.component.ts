import { Component, OnInit } from '@angular/core';
import { GetBooksService } from './../get-books.service'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  data: any;

  constructor(private getBooksService: GetBooksService,private route: Router,) { }

  ngOnInit() {
  }
  getBooks(val) {
    console.log(val);
    localStorage.setItem('category',val);
    this.route.navigate(['booklist']);
  }
}
