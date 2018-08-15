import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'update_product',
  templateUrl: './update_product.html',
  styleUrls: ['./update_product.css']
})
export class Updateproduct  {
 
 memberForm: FormGroup;
 post : any = {"f":"k"};
 arrayOfCusValues : any[] =[];
  units = ['pc','ltr','mtr','barrel','set'];
  constructor(private fb: FormBuilder, private ds :DataService, private router : Router ) { }

  ngOnInit() {

       this.get_products();

     this.memberForm = this.fb.group({ 

      product_name : ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      product_code : ['',[<any>Validators.required, <any>Validators.minLength(1),<any>Validators.maxLength(10)]],
      net_price : ['', [<any>Validators.required, <any>Validators.minLength(1)]],
      tax :['', [<any>Validators.required, <any>Validators.minLength(1)]],
      avail_qty : ['',[ <any>Validators.required]],
      net_purchase_price : '',
      unit : ''
    });
   
  }
  
  get_products()
  {
       this.ds.get_product_list(this.post)
  .subscribe((jsonData) => { this.p_r(jsonData)
                      },(err) => console.error(err),
                      
                      );
  }
  p_r(json:any)
  {
     this.arrayOfCusValues = json;
   

  }
  cus_blur(ss:any)
  {
        let s : any; 

s = this.arrayOfCusValues.filter(xi=> xi.PRODUCT_NAME === ss);



      this.memberForm.patchValue({product_name : ss , product_code : s[0].PRODUCT_CODE , net_price : s[0].NET_PRICE, tax : s[0].TAX , 
         avail_qty : s[0].AVAIL_QTY ,  net_purchase_price : s[0].NET_PURCHASE_PRICE , unit : s[0].UNIT });
  }

  update_product()
  {
      this.ds.update_product(this.memberForm.value)
      .subscribe((jsonData) => { this.getjson(jsonData)
                      },(err) => console.error(err),
                     
                      );

  
  }

     getjson(json :any)
  {
    
  
   if (json.msg ==='Successfully updated')
   {
      alert('Product Updated')
      this.router.navigate(['/dash']);
   }

  
   else{
      alert('Something wrong try again')
      this.router.navigate(['/dash']);
   }
   
  }
      
    
  

  }
  




            