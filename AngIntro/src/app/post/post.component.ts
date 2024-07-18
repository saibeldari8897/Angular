import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {
  @Input() parent:string='';
  postmsg:string='this is from post comp';
  msgFromChild:string='this is from child comp to app comp using viewchild';

}
