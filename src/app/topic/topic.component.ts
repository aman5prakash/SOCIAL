import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topicName: any;
  postName:any;

  constructor(private callObj: TopicsService) { }

  ngOnInit() {
    const obs = this.callObj.gettopics();
    obs.subscribe((resp) => {
        this.topicName = resp;
        console.log(this.topicName);
      //  console.log(this.topicName[0]);
  });


  const obs1 = this.callObj.getposts();
  obs1.subscribe((resp1) => {
      this.postName = resp1;
      console.log(this.postName);  
      this.comp();   
}
);

  }

  comp(){
   // console.log(this.topicName[0]);
   // console.log(this.postName[0]);
   
  }
}
