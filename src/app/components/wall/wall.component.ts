import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  posts:Post[];


  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.GetAll().subscribe((resp:Post[])=>{
      this.posts=resp;
    })
  }

  Create(val:HTMLInputElement){
    const newPost:Post={
      body:val.value
      
    };
    this.postService.Create(newPost).subscribe((resp:Post)=>{
      console.log(resp);
      this.posts.unshift(resp);
      val.value="";
    })
  }

  Remove(id:number,post:Post){
    this.postService.Remove(id).subscribe((resp:Response)=>{
      console.log(resp);
      const index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }

}
