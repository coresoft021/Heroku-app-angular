import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers' ;
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    total = 0;
    
  

    
    constructor(private http: Http) { }

    post_cash_reciept_b2b(model:any)
    {
      let body = JSON.stringify(model); 
      console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/post_cash_reciept_b2b',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
    }

    delete_customer(model:any)
    {
         let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/delete_customer',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
    }


    update_customer(model:any)
    {
         let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/update_customer',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
    }

    update_product(model:any)
    {
       let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/update_product',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())

    }

get_figure(model:any)
  {
    let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/number_to_word',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }



       get_estimate_number(model:any)
  {
    let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/get_estimate_number',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }



      post_estimate(model:any) {

        let body= JSON.stringify(model); 
             console.log('body',body);
         return this.http.post('http://localhost:8080/api/public/post_estimate', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
    } 


get_estimates()
{
  return this.http.get('http://localhost:8080/api/public/list_estimate',{headers : contentHeaders})  
      .map((res: Response) => res.json())
}

get_purchase_report(model : any)
 {

     let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/report_purchase',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
 } 
    get_partial_report(model : any)
 {

     let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/partial_pay_report',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
 }   

 get_sales_report(model : any)
 {

     let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/sales_report',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
 }   

get_tax_report(model : any)
 {

     let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/tax_report',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
 }   

 update_invoice(model : any)
  {

      let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/update_invoice',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())

  }
  
 add_expence_entry(model : any)
 {

    let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/add_expence_entry',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())

 }   

get_exp_type_list()

{

      return this.http.get('http://localhost:8080/api/public/list_expence_category',{headers : contentHeaders})  
      .map((res: Response) => res.json())

}


  addcategory(model:any)
  
  {
    
     let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/add_category',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
  }


  get_report_revenue(model: any)
  {

     let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/reports_income',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())

  }  
  
 get_report_expence(model: any)
  {

     let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/reports_expence',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())

  }  
    get_customer_list()
     {
    
      return this.http.get('http://localhost:8080/api/public/list_customers',{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
   }


add_customer(model:any)
{
  let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/add_customer',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
}


 get_invoices()
  {
    
      return this.http.get('http://localhost:8080/api/public/list_invoices',{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }


get_invoices_b2b()
{
    
      return this.http.get('http://localhost:8080/api/public/list_invoices_b2b',{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }
  get_invo_number()
  {
   
      return this.http.get('http://localhost:8080/api/public/get_invoice_number',{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }

  
  get_invo_number_b2b()
  {
   
      return this.http.get('http://localhost:8080/api/public/get_invoice_number_b2b',{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }





 
   get_product_list(model:any)
    {
      
      return this.http.get('http://localhost:8080/api/public/list_pdts',{headers : contentHeaders})  
      .map((res: Response) => res.json())
 
    }



    post_invoice(model:any) {

        let body= JSON.stringify(model); 
       
       
             console.log('body',body);
        
        return this.http.post('http://localhost:8080/api/public/post_invoice', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
    } 

        post_invoice_b2b(model:any) {

        let body= JSON.stringify(model); 
       
       
             console.log('body',body);
        
        return this.http.post('http://localhost:8080/api/public/post_invoice_b2b', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
    } 

    








     addproduct(model:any) {

        let body= JSON.stringify(model); 
       
       
          console.log(body);
        
        return this.http.post('http://localhost:8080/api/public/add_new_product', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
    } 
    
  


  
  get_total()
  {
    return this.total;
  }
  



    adduser(model:any) {

        let body= JSON.stringify(model); 

        
        return this.http.post('http://localhost:8080/api/public/add_user', body, { headers: contentHeaders})
            .map((response: Response) => {
                
                
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    }


  
 
 


    private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
