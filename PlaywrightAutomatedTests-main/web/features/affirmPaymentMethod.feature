Feature: Verify Affirm Payment method with Paynow and Schedule & pay
@regression @BTISTP-T39
Scenario: Verify Affirm Payment method with Paynow
  Given User is on Belle Tire Home Page
  And User clicks on Shop for Tires button
  And User clicks on Search by vehicle
  And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>"
  And User clicks on Select all four tires
  And User clicks on Next Step
  When User clicks on Skip to results
  Then User is directed to the Tire Results Page
  And Click on Get Total Price button
  Then Verify the user navigates to Quote page and selected tire protection plan by default.
  And User clicks Pay now button
  When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    And User clicks on Next step button
    When User selects the affirm radio button
    When User enters the following details in Billing Information for:
    | FirstName | | LastName | | StreetAddress | | City |    | State |   | ZipCode |
    | Gopi |      | Ulava |    | 4 |             | Atlanta | | ga | | 30330 |
    And User clicks on Review purchase button to navigate to Review and confirm page
    Then User validates Review and Confirm page and click purchase button
    Then User Verifies the Affirm popup and complete the payment process
    Then User verifies the Order details on Order Confirmation page
    Examples:
	  | year | vehicle | model | body | trim |
    | 2023 | Acura | RDX | 4 Dr Sport Utility | SH-AWD A-Spec |

@regression @BTISTP-T409
Scenario: Verify Affirm Payment method with Schedule & pay
  Given User is on Belle Tire Home Page
  And User clicks on Shop for Tires button
  And User clicks on Search by vehicle
  And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>"
  And User clicks on Select all four tires
  And User clicks on Next Step
  When User clicks on Skip to results
  Then User is directed to the Tire Results Page
  And Click on Get Total Price button
  Then Verify the user navigates to Quote page and selected tire protection plan by default.
  And User clicks Schedule and pay button
  When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
  Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
  When User selects the affirm radio button
  When User enters the following details in Billing Information for:
   | FirstName | | LastName | | StreetAddress | | City |    | State |   | ZipCode |
   | Gopi |      | Ulava |    | 4 |             | Atlanta | | ga | | 30330 |
  And User clicks on Review purchase button to navigate to Review and confirm page
  Then User validates Review and Confirm page and click purchase and set appointment button
  Then User Verifies the Affirm popup and complete the payment process
  Then User verifies the Order details on Order Confirmation page
  Examples:
	  | year | vehicle | model | body | trim |
    | 2023 | Acura | RDX | 4 Dr Sport Utility | SH-AWD A-Spec |