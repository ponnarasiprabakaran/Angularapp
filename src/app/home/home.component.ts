import { MatFormFieldModule} from '@angular/material/form-field';
import { Component, OnInit} from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedService } from 'shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private apiService :SharedService
    ) { }

  ngOnInit() {

  }
  
  homeform= new FormGroup({
    username: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)])
  });

  loginsubmited()
  {
console.log(this.homeform.value);
  }


  get username() : FormControl{
    return this.homeform.get('username') as FormControl;
  }

  get password() : FormControl{
    return this.homeform.get('password') as FormControl;
  }

}
