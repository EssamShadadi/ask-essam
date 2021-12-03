Create new project: ng new Ask-Essam
addinnd routign to it
choose the styling script
run the project : ng serve --open
make ask question component: ng g c ask-question
add the path to the routing module
edit the ask-question template :
	add div
	add label
	add text area
	add button 
	asign function to the button 
edit the css file for ask question
	center the div
	add margen to the textarea
	make the wiidth of the text area 50%
	float the button right
edit the ts file 
	import {RouterModule, Router} from '@angular/router';
	make two vars (name,question) to bind them with the inputed values usiing  [(ngModel)]
	add new function to log the name and the question
import FormsModule to the app module to enable data binding thougth [(ngModel)]
	import {FormsModule} from '@angular/forms'
	add it to iimpport array
make all questions component
add the path to the routing module
edit ask question ts file to make the function navigate to the all questions component
edit the all question teamplate to show a list of questions
	add div as contaainer
	add div as questin container
	add p as name 
	add p as question
	add hr as seperator
make a post provider service
	make new folder "providers"
	generate service post-provider 
	ng g s post-provider
	import { HttpClient, HttpRequest, HttpHeaders} from "@angular/common/http";
	import {Observable} from "rxjs";
	add APIURL
	add postdata metthod
	postData(body: object): Observable<object> {
    	return this.http.post(this.APIURL, JSON.stringify(body));
  	}
import post-provider into ask questiion and all question
import { HttpClientModule } from '@angular/common/http';  to app.module.ts
add it to import array
edit the html templates to view the data
builld the applicatiion and publish it to a real server


