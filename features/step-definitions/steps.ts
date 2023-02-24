import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage  from '../pageobjects/homepage.js';


const pages = {
    login: LoginPage,
    home:  HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I verify (.+)$/, async (dashboard) => {
expect(await HomePage.dashboardHeader).toHaveTextContaining(dashboard); 

  });

 Then (/^I click on Admin and check total records (.+)$/, async(recordfound) => {
    await HomePage.clickAdmin()
    expect(await HomePage.recordno).toHaveTextContaining(recordfound);

 } );

 Then (/^I check total permanent employees records (.+)$/, async(emprecords) => {

    await HomePage.clickPIM()
    expect(await HomePage.employeeno).toHaveTextContaining(emprecords);

 });

 Then (/^I log out of the application$/, async() => {
    await LoginPage.logout();
 });



