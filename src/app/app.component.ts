import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private service:PostService){

  }

  ngOnInit(){
    //return this.service.GetAll().subscribe(data=>console.log(data));
  }
}
