import { Component,ViewChild ,AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';

  parentMsg:string='hello this is from the parent comp';
  message:string='';
  @ViewChild(PostComponent)childComp !: PostComponent;
  ngAfterViewInit(){
    this.message=this.childComp.msgFromChild;
  }

}
