import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers' ;


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdateService {
  
    invo_number : number = 0;
    invo_number_b2b : number = 0;
    cus_id : number = 0 ;
    invo_date : string;
    Amount_payed : number ;
    due_balance : number ;
    Cheque_Date : string ;
    bank_name : string ='';
    cheque_number : number;
    cus_name : string;
    fig_main : string;
    fig_sub : string;
    is_cash_pay : boolean = true;
    
    constructor(private http: Http) { }

 backup()
 {

   return this.http.get('http://localhost:8080/api/user/backup',{headers : contentHeaders})  
      .map((res: Response) => res.json())
 }


    delete_invo(model:any) {

        let body= JSON.stringify(model); 
       
       
             console.log('body',body);
        
        return this.http.post('http://localhost:8080/api/public/delete_invoice', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
    } 
    
 get_a_invoice(model:any)
  {
      let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/get_a_invoice',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }
get_a_invoice_b2b(model:any)
{
   let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/get_a_invoice_b2b',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())

}
   get_invoice_number()
    {
      
      return this.invo_number;
 
    }

      get_invoice_number_b2b()
    {
      
      return this.invo_number_b2b;
 
    }

    update_invoice(model:any) {

        let body= JSON.stringify(model); 
           console.log('body',body);
            return this.http.post('http://localhost:8080/api/public/update_invoice', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
    } 
update_stock(model:any) {

        let body= JSON.stringify(model); 
             console.log('body',body);
              return this.http.post('http://localhost:8080/api/public/update_stock', body, { headers: contentHeaders})
              .map((res: Response) => res.json())
            
    } 

  get_avail_qty(model:any)
  {

        let body= JSON.stringify(model); 
             console.log('body',body);
              return this.http.post('http://localhost:8080/api/public/get_avail_qty', body, { headers: contentHeaders})
              .map((res: Response) => res.json())
  }

    private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
