

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { DashComponent } from './dash/dash';
import { HomeComponents } from './home/home';
import { LoginComponent } from './login/login';
import { Invoice_reciept } from './invoice/reciept';
import { B_to_c_reciept } from './invoice/b2c';
import { Invoiceall } from './report/invoice-all/invoice-all';
import { AddCustomerComponent } from './admin/customer/add-customer/add-customer.component';
import { Update_invoice } from './admin/invoice/update_invo/update_invo';
import { MainReportComponent } from './report/main/main.component';
import { RevenueReport } from './report/revenue/revenue';
import { IncomeexpenceReport } from './report/income-expence/income-expence';
import { ExpenceReport } from './report/expence/exp_report';
import { SalesReport } from './report/sales/sales';
import { VatReport } from './report/tax/tax';
import { PartialReport } from './report/partial -pay/partial';  
import { Estimate_reciept } from './estimate/estimate';    
import { Estimateall } from './admin/estimate/list';      
import { AddExpCatComponent } from './admin/expence/add-exp-cat/add-exp-cat.component';
import { AddExpEntryComponent } from './admin/expence/add-exp-entry/add-exp-entry.component';
import { DeleteinvoComponent } from './admin/invoice/delete_invoice/delete_invoice'  ; 
import { Addproduct } from './product/add_product';
import { ContactusComponent } from './admin/contact-us/us';
import { Stock_mainComponent } from './stock/main/main';
import { Stock_addComponent } from './stock/add/add';
import { Updateproduct } from './product/update_product';
import { PurchaseReport } from './report/purchase/purchase';
import { UpdateCustomerComponent } from './admin/update-customer/main';
import { Invoiceallb2b } from './report/invoice-all/b2ball';
import { CashrecComponent  } from './cash/reciept';
import { CashmakeComponent  } from './cash/make';
import { Update_invoice_b2b } from './admin/invoice/update_invo/update_b2b';
const routes: Routes = [
    { path: '', component: HomeComponents },
    { path: 'login',component: LoginComponent },
    { path: 'dash', component: DashComponent ,canActivate: [AuthGuard] },
    { path: 'invoice_reciept',component: Invoice_reciept, canActivate :[AuthGuard] },
    { path: 'invoice_all',component: Invoiceall, canActivate :[AuthGuard] },
     { path: 'b2b-all-invo',component: Invoiceallb2b, canActivate :[AuthGuard] },
    { path: 'update_invoice',component: Update_invoice, canActivate :[AuthGuard] },
     { path: 'update_invoice_b2b',component: Update_invoice_b2b, canActivate :[AuthGuard] },
    { path: 'add_customer',component: AddCustomerComponent, canActivate :[AuthGuard] },
    { path: 'report_main',component: MainReportComponent, canActivate :[AuthGuard] },
    { path: 'report_revenue',component: RevenueReport, canActivate :[AuthGuard] },
    { path: 'add_product', component : Addproduct , canActivate : [AuthGuard]},
    { path: 'add_exp_cat',component: AddExpCatComponent },
    { path: 'add_exp_entry',component: AddExpEntryComponent },
    { path: 'report_expence',component: ExpenceReport },
    { path: 'income_expence',component: IncomeexpenceReport },
    { path: 'sales-report',component: SalesReport },
    { path: 'vat-report',component: VatReport },
    { path: 'par-report',component: PartialReport },
    { path: 'estimate_reciept',component: Estimate_reciept },
    { path: 'estimate_list',component: Estimateall },
    { path: 'contact_us',component: ContactusComponent },
    { path: 'stocks_main',component: Stock_mainComponent },
    { path: 'add_to_stock',component:  Stock_addComponent },
    { path: 'delete_invoice',component: DeleteinvoComponent, canActivate :[AuthGuard]  },
    { path: 'update_product',component: Updateproduct, canActivate :[AuthGuard]  },
    { path: 'purchase_report',component: PurchaseReport, canActivate :[AuthGuard]  },
    { path: 'update-customer',component: UpdateCustomerComponent, canActivate :[AuthGuard]  },
    { path: 'b2c-invoice',component: B_to_c_reciept, canActivate :[AuthGuard]  },
    { path: 'cash-invoice',component: CashrecComponent, canActivate :[AuthGuard]  },
    { path: 'cash-make',component: CashmakeComponent, canActivate :[AuthGuard]  },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }