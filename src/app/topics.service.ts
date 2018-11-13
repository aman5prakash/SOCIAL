import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http: HttpClient) { }

  gettopics() {
    // let obs=this.http.get('../../../posts_json.json');
   // return this.http.get('http://localhost:3001/topic');
      return this.http.get('http://172.23.238.164:8081/api/values/getTopics');
  }

  getposts(){
    return this.http.get('http://172.23.238.164:8081/api/values/posts/occupation');
  }
}