import { Component, OnInit } from '@angular/core';
import { PostProviderService } from '../providers/post-provider.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
  data:any;
  question:any;
  constructor(private postProvider : PostProviderService) { }

  ngOnInit(): void {
    this.getAllQuestion()
  }
  getAllQuestion(){
    let body ={
      method:'getAllQuestions'
    }
    this.postProvider.postData(body).subscribe
    (data=>
      {
        this.data=data;
        if (this.data.success==true)
        {

          // window.location.reload();
          console.log("success",JSON.stringify(this.data.success));
        }
        else 
        {
          console.log("success",JSON.stringify(this.data.msg));
          
        }
      })
   
  }
  
}
