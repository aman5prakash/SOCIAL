import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http: HttpClient) { }

  gettopics() {
    // let obs=this.http.get('../../../posts_json.json');
    return this.http.get('http://localhost:3001/topic');
  }

  getposts(){
    return this.http.get('http://localhost:3002/posts');
  }
}