import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import {AskQuestionComponent} from './ask-question/ask-question.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'ask', component:AskQuestionComponent}, 
  {path:'allquestions', component:AllQuestionsComponent},
   {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
