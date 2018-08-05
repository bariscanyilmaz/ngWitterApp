import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import {ActivatedRoute,Router} from '@angular/router'
import { Post } from '../../models/post';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post:Post;

  constructor(private postService:PostService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(params);
      this.postService.GetById(params.id)
      .subscribe((resp:Post)=>{
        this.post=resp;
        console.log(resp);
      });
    });
  }

  Update(id:number,bodyText:HTMLInputElement){
    const post:Post={
      body:bodyText.value
    };

    this.postService.Update(id,post).subscribe((resp:Post)=>{
      console.log(resp);
      this.router.navigate(['']);
    });
  }

}
