import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs';
import { contentHeaders } from './headers' ;


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {
  
    invo_number : number = 0;
    to_date : string;
    from_date : string;

    
    constructor(private http: Http) { }



 get_a_invoice(model:any)
  {
      let body= JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('http://localhost:8080/api/public/get_a_invoice',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
   
  }

   get_invoice_number()
    {
      
      return this.invo_number;
 
    }

    update_invoice(model:any) {

        let body= JSON.stringify(model); 
       
       
             console.log('body',body);
        
        return this.http.post('http://localhost:8080/api/public/update_invoice', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
    } 



    private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
