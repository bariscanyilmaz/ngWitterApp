import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Post } from '../models/post';

@Injectable()
export class PostService {
  
  private readonly apiUrl='http://api.basarsen.com.tr/ngwitter/Post';

  constructor(private http:HttpClient) {
  }

  GetAll(){
    return this.http.get(this.apiUrl);
  }

  Create(post:Post){
    return this.http.post(this.apiUrl,post);
  }

  GetById(id:number){
    return this.http.get(this.apiUrl+'/'+id)
  }

  Update(id:number,post:Post){
    return this.http.put(this.apiUrl+'/'+id,post)
  }

  Remove(id:number){
    return this.http.delete(this.apiUrl+'/'+id);
  }


}
