import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers' ;



import 'rxjs/add/operator/map'

@Injectable()
export class PostService {

   
    names: string;
    total = 0;
     private mainUrl = 'http://localhost:4200/api/public/delete'
      private mainUrl2 = 'http://localhost:4200/api/public/cancel'
    constructor(private http: Http) { }

      

   

     submit(model:any)
  {
    

     let body= JSON.stringify(model); 
     console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/add_new_invo_product', body, { headers: contentHeaders})
            .map((response: Response) => {
                
                
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    
  }


 

  
    get_invo_obs(model:any)
    {
      let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/get_invo_product',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
 
    }


    get_invo_number(model:any)
    {
      let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/get_invoice_number',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
 
    }
 
 post_updated_invo(model:any)
 {
   let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/edit_invo',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
 }
delete_invo(model:any)
{

   let id = model; 
      console.log('id',id);
     
      const url = `${this.mainUrl}/${id}`;
      return this.http.get(url,{headers : contentHeaders})  
      .map((res: Response) => res.json())
}

cancel_invo(model:any)
{

   let id = model; 
      console.log('id',id);
     
      const url = `${this.mainUrl2}/${id}`;
      return this.http.get(url,{headers : contentHeaders})  
      .map((res: Response) => res.json())
}
  get_total()
  {
    return this.total;
  }
  
  get_username()
  {
    return this.names;
  }

}