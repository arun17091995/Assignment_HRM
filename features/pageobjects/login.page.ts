import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('input[placeholder="Username"]');
    }

    public get inputPassword () {
        return $('input[placeholder="Password"]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get profilebutton(){

        return $('//p[@class="oxd-userdropdown-name"]');
    }

    public get logoutbtn(){

        return $('//a[normalize-space()="Logout"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
       
    }

    public async logout (){

        await this.profilebutton.click();
        await this.logoutbtn.click();
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
