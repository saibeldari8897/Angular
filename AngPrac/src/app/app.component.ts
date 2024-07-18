import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postTitle: string = '';
  postDate: string = '';
  array: { Title: string; Date: string }[] = [];

  onClick(postTitle: string, postDate: string) {
    if (postTitle && postDate) {
      this.array.push({ Title: postTitle, Date: postDate });
      this.postTitle = '';
      this.postDate = '';
    }
  }
  onClickDel(i:number){
    this.array.splice(i,1);
  }
}
