import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UpdateService } from '../services/update.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.html',
  styleUrls: ['./dash.css']
})
export class DashComponent  {
  

 ngOnInit() {
   
  }
  constructor(private ag : AuthGuard,private _formBuilder: FormBuilder,private router: Router, private us : UpdateService ) { }
  
  back_up_data()
  {
   this.us.backup()
  .subscribe((jsonData) => { this.getval3(jsonData)  
                      },(err) => console.error(err)
                      
                      );

  }
  getval3(x:any)
  {

  
    if (x === 'Backup completed')
    {
      alert('Backup Completed')
    }
    else
    {
      alert(x);
    }
  }
   logout()
  {
    this.ag.token=false;
  }

  update_customer()
  {
  
   this.router.navigate(['/update-customer']);

  }

 


    add_member()
    {
       this.router.navigate(['/add_product']);

    }
  add_reciept()
  {
   this.router.navigate(['/invoice_reciept']);

  }
 go_report()
  {
   this.router.navigate(['/estimate']);

  }
  all_invo()

  {
       this.router.navigate(['/invoice_all']);
  }

  add_cus()

  {
     this.router.navigate(['/add_customer']);
  }

  add_exp_cat()
  {

this.router.navigate(['/add_exp_cat']);

  }
  
  add_exp_entry()
  {
    this.router.navigate(['/add_exp_entry']);
  }

  go_estimate()
  {
     this.router.navigate(['/estimate_reciept']);
  }

estimate_list()
{
  this.router.navigate(['/estimate_list']);
}

update_product()
{
  this.router.navigate(['/update_product']);
}

b2c()
{

this.router.navigate(['/b2c-invoice']);
  
}

all_invo_b2b()
{
  this.router.navigate(['/b2b-all-invo']);
}

}