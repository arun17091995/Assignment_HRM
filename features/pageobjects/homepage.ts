import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';
class HomePage extends Page{

    public get dashboardHeader(){ 


       return $ ('//h6[text()="Dashboard"]');}

     public get adminbtn(){

        return $('//a[@class="oxd-main-menu-item active"]');
     }

   
     public get recordno(){

        return $('//span[normalize-space()="(70) Records Found"]');
     }

     public get employeebtn(){

        return $('//a[@class="oxd-main-menu-item active"]')
     }

     public get employeeno(){

        return $('//span[normalize-space()="(119) Records Found"]')
     }

     public async clickAdmin(){

        await this.adminbtn.click();
     }
     public async clickPIM(){

        await this.employeebtn.click();
     }


     
    




}
export default new HomePage();