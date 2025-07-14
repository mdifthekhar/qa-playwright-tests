Feature: Validate BeleTire first Mile payment method
@regression @firstMile
Scenario: Validate Order with TPP with 1st mile payment method
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
  Then User clicks Review Purchase button
  When the user clicks the "<buttonType>" button and completes the payment process
  Then User verifies the Order details on Order Confirmation page
  Examples:
	| year | vehicle | model | body | trim | buttonType |
  | 2023 | Acura | RDX | 4 Dr Sport Utility | SH-AWD A-Spec | next |