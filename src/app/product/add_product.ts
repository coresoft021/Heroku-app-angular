import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'add_member',
  templateUrl: './add_product.html',
  styleUrls: ['./add_product.css']
})
export class Addproduct  {
 
 memberForm: FormGroup;
  units = ['pc','ltr','mtr','barrel','set'];
  constructor(private fb: FormBuilder, private ds :DataService, private router : Router ) { }

  ngOnInit() {
     this.memberForm = this.fb.group({ 

      product_name : ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      product_code : ['',[<any>Validators.required, <any>Validators.minLength(1),<any>Validators.maxLength(10)]],
      net_price : ['', [<any>Validators.required, <any>Validators.minLength(1)]],
      tax :['', [<any>Validators.required, <any>Validators.minLength(1)]],
      avail_qty : [0,[ <any>Validators.required]],
      net_purchase_price : 0,
      unit : 'pc'
    });
   
  }
  
  enter_def_tax()
  {

    this.memberForm.patchValue({tax:5});
  }
  add_product()
  {
      this.ds.addproduct(this.memberForm.value)
      .subscribe((jsonData) => { this.getjson(jsonData)
                      },(err) => console.error(err),
                     
                      );

  
  }

     getjson(json :any)
  {
 
   if (json.msg ==='Successfully saved')
   {
      alert('Product added sucessfully')
      this.router.navigate(['/dash']);
   }

   else if (json.msg === 'product already existed')
   {
      alert('product already existed')
      this.router.navigate(['/dash']);
   }

    else if (json.msg === 'Code already existed')
   {
      alert('Code already existed')
      this.router.navigate(['/dash']);
   }

   else{
      alert('Something wrong try again')
      this.router.navigate(['/dash']);
   }
   
  }
      
    
  

  }
  




            