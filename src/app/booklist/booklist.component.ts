import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GetBooksService } from './../get-books.service'

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  data: any;
  category: string;
  finalData: any = [];
  formats: any = [];
  searchVal: string;

  constructor(private getBooksService: GetBooksService, private router: Router) { }

  ngOnInit() {
    this.category = localStorage.getItem('category');
    let promise = new Promise((res, rej) => {
      this.getBooksService.getBooks('').subscribe(
        data => {
          var res = data;
          this.data = res.results;
          for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]['subjects']) {
              let subjectData = this.data[i]['subjects'];
              var flag = false;
              for (let j = 0; j < subjectData.length; j++) {
                if (subjectData[j].includes(this.category) || subjectData[j].includes(this.category.toLowerCase())) {
                  flag = true;
                }
              }
              if (flag == true) {
                this.finalData.push(this.data[i]);
              }
            }
          }
        })
    })
  }

  showAlert(pos) {
    this.formats = this.finalData[pos].formats;
    if (this.formats.hasOwnProperty('text/html; charset=utf-8') == false && this.formats.hasOwnProperty('text/plain; charset=iso-8859-1') == false && this.formats.hasOwnProperty('application/pdf') == false && this.formats.hasOwnProperty('text/html; charset=iso-8859-1') == false) {
      alert('No viewable version available');
    }
    else{
      if (this.formats.hasOwnProperty('text/html; charset=utf-8') == true){
      window.location.href= this.formats['text/html; charset=utf-8'];
      }
      else if(this.formats.hasOwnProperty('text/plain; charset=utf-8') == true){
        window.location.href= this.formats['text/plain; charset=utf-8'];
      }
      else if(this.formats.hasOwnProperty('text/plain; charset=iso-8859-1') == true){
        window.location.href= this.formats['text/plain; charset=iso-8859-1'];
      }
      else{
        window.location.href= this.formats['application/pdf'];
      }
    }
  }

  getSearchedBooks(event: any) {
    let searchval = event.target.value;
    let promise = new Promise((res, rej) => {
      this.getBooksService.getBooks(searchval).subscribe(
        data => {
          this.finalData =[];
          var res = data;
          this.data = res.results;
          for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]['subjects']) {
              let subjectData = this.data[i]['subjects'];
              var flag = false;
              for (let j = 0; j < subjectData.length; j++) {
                if (subjectData[j].includes(this.category) || subjectData[j].includes(this.category.toLowerCase())) {
                  flag = true;
                }
              }
              if (flag == true) {
                this.finalData.push(this.data[i]);
              }
            }
          }
          console.log(this.finalData);
        })
    })
  }

  goBack() {
    this.router.navigate(['genre']);
  }
}

