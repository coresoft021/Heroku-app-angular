
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
   MyForm: FormGroup;
   constructor( private fb: FormBuilder) {}

  
    ngOnInit()  {
  
   this.MyForm = this.fb.group({
            1: [''],
            2: [''],
            3:[''],
             4: [''],
            5: [''],
            6:[''],
             7: [''],
            8: [''],
            9:[''],
             10: [''],
            11: [''],
            12:[''],
             13:[''],
             14: [''],
            15: [''],
            16:[''],
             17: [''],
            18: [''],
            19:[''],
             20: [''],
            21: ['']
            
                     });

  }
  clear()
  {
    this.MyForm.reset();
  }
}
