import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PostProviderService } from '../providers/post-provider.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  name:string="";
  question: string="";
  data:any;
  constructor(private router:Router,private postProvider:PostProviderService) { }

  ngOnInit(): void {
  }
  send(){
    
    console.log("Name: "+this.name);
    console.log("qustiion: "+this.question);
    if (this.name.length<1){
      alert("You forgot to enter your name!");
    }else{
      if (this.question.length<1){
        alert("You forgot to enter your question!");
      }
      else{
        let body=
        {
          name:this.name,
          question:this.question,
          method:'insertQuestion'
        }
        this.postProvider.postData(body).subscribe
        (data=>
          {
            this.data=data;
            if (this.data.success==true)
            {
    
              //  window.location.reload();
              console.log("success",JSON.stringify(this.data.success));
            }
            else 
            {
              console.log("success",JSON.stringify(this.data.msg));
              
            }
          })
        this.router.navigate(['/allquestions']);
    
        }

      }
     
  }
}
