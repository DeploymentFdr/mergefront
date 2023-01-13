import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('types_po') teams!: ElementRef;
	selectedTeam = '';
	onSelected():void {
		this.selectedTeam = this.teams.nativeElement.value;
    console.log(this.selectedTeam)
	}
  login(){
    if(this.selectedTeam === '1'){
      console.log("Prop")
    }if(this.selectedTeam === '2'){
      console.log("Pla")
    }
  }
  // onChange(value:string){
  //   console.log(value)
  // }
  // onChange(element: HTMLSelectElement){
  //   console.log(element.value)
  // }

}
