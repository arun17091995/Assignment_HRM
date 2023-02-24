Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I verify <dashboard>
    Then I click on Admin and check total records <recordfound>
    Then I check total permanent employees records <emprecords>
    Then I log out of the application

    Examples:
      | username | password   | dashboard | recordfound | emprecords |
      | Admin    | admin123   |  Dashboard | (70) Records Found | (119) Records Found |


     