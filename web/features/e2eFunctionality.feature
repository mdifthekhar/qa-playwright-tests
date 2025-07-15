Feature: Validate BeleTire End to End functionality

@smoke @regression @BTISTP-T111
Scenario: Validate Home page
	Given user enters the url
	Then user navigated to Home page

@smoke @regression @BTISTP-T223 @e2e
Scenario: Receive Tire Results via Search By Vehicle
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	Examples:
	| year | vehicle | model | body | trim |
    | 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition |

@regression@BTISTP-T412 @e2e
Scenario: Schedule appointment with Tire Protection Plan
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>"
	And User clicks on Select all four tires
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	#Then Verify the user navigates to Quote page and selected tire protection plan by default.
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	And click on Schedule now button
	When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
	Then User clicks on Confirm button and clicks on Confirm appointment button on Review and Confirm page
	Then Verify the order in appointment confirmation page
	Examples:
	| year | vehicle | model | body | trim | with_tireprotection |
    | 2023 | Acura | RDX | 4 Dr Sport Utility | SH-AWD A-Spec | Yes |

@regression @BTISTP-T118 @e2e
Scenario: Validate Schedule appointment without Tire Protection Plan
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	#Then Verify the user navigates to Quote page and select No tire protection plan
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	And click on Schedule now button
	When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
	Then User clicks on Confirm button and clicks on Confirm appointment button on Review and Confirm page
	Then Verify the order in appointment confirmation page
	Examples:
	| year | vehicle | model | body | trim |with_tireprotection |
    | 2023 | Acura | RDX | 4 Dr Sport Utility | SH-AWD A-Spec |No |

@regression @BTISTP-T121 @e2e
Scenario: Create a Tire Order via Pay Now With Tire Protection Plan
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	#Then Verify the user navigates to Quote page and selected tire protection plan by default.
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	And User clicks Pay now button
	When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    And User clicks on Next step button
	#And User clicks on Next step button
  	Then User clicks Review Purchase button
  	When the user clicks the "<buttonType>" button and completes the payment process
  	Then User verifies the Order details on Order Confirmation page
 	Examples:
	| year | vehicle | model | body               | trim | buttonType |with_tireprotection|
  	| 2023 | Acura   | RDX   | 4 Dr Sport Utility | SH-AWD A-Spec | next   | Yes |

@regression @BTISTPT122 @e2e
Scenario: Create a Tire Order via Pay Now Without Tire Protection Plan
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	#Then Verify the user navigates to Quote page and select No tire protection plan
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	And User clicks Pay now button
	When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	And User clicks on Next step button
  	Then User clicks Review Purchase button
  	When the user clicks the "<buttonType>" button and completes the payment process
  	Then User verifies the Order details on Order Confirmation page
 	Examples:
	| year | vehicle | model | body               | trim | buttonType |with_tireprotection|
  	| 2023 | Acura   | RDX   | 4 Dr Sport Utility | SH-AWD A-Spec | next   |No|

@regression @BTISTP-T129 @e2e
Scenario: Validate Order with TPP with Credit card payment method using schedule and pay option
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires
	# To be added different tyres.
	And User clicks on Next Step
	When User clicks on Skip to results
	# To be added without skip flow.
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	#Then Verify the user navigates to Quote page and selected tire protection plan by default.
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	And User clicks Schedule and pay button
	When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
	Then User clicks Review Purchase button
	When the user clicks the "<buttonType>" button and completes the payment process
	Then User verifies the Order details on Order Confirmation page
	Examples:
	| year | vehicle | model | body               | trim | buttonType |with_tireprotection |
	| 2023 | Acura   | RDX   | 4 Dr Sport Utility | SH-AWD A-Spec | next   |Yes|
 

	
	# @MilitaryDiscount
	# Scenario Outline: Validate Tire Order With Military Discount via Pay With Tire Protection Plan
	# Given User is on Belle Tire Home Page
	# And User clicks on Shop for Tires button
	# And User clicks on Search by vehicle
	# And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	# And User clicks on Select all four tires	
	# And User clicks on Next Step
	# When User clicks on Skip to results
	# Then User is directed to the Tire Results Page
	# And Click on Get Total Price button
	# Then Verify the user navigates to Quote page and selected tire protection plan by default.
	# Then user clicks on verify with id
	# Then verify user navigates to group selection page and selected the "<group>" group by default
	# Then click on "Continue to sign in" 
	# Then enter the singnIn details and click on signin
	# Examples:
 	# | year | vehicle | model | body 		| trim 	|	group |
	# | 2022 | Acura | RDX | 4 Dr Sport Utility | Base |Military |

@regression @BTISTP-T116 @e2e
Scenario Outline: Verify we are able to hit the Quote Page via the Tire Details Page
	 Given User is on Belle Tire Home Page
	 And User clicks on Shop for Tires button
	 And User clicks on Search by vehicle
	 And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	 And User clicks on Select all four tires	
	 And User clicks on Next Step
	 When User clicks on Skip to results
	 And user clicks on "See Details"
	 Then verify user is redirected to "Tire details page"
	 And user clicks on "Get total price in tire details"
	 Then verify user is redirected to "Tire quote page"
	 Examples:
 	| year | vehicle | model | body 		| trim 	|	
	| 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition |

@regression @BTISTP-T411 @e2e
Scenario Outline: Verify the caluclations in quote page
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires	
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	Then validate the total quote "<with_tireprotection> " ,"<with_cuponcode>" and "<with_militarydiscount>"
	Examples:
 	| year | vehicle | model | body 		| trim 	| with_tireprotection | with_cuponcode | with_militarydiscount |
	| 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition |	Yes			  | No				 |  No					|

@regression @BTISTP-T225 @e2e
Scenario Outline: Compare the review and confirm page details with quote page 
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires	
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	Then validate the total quote "<with_tireprotection> " ,"<with_discountcode>" and "<with_militarydiscount>"
	And User clicks Pay now button
	When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    And User clicks on Next step button
	Then verify user is redirected to "Payment Details"
	And user clicks on "Next"
	Then verify user is redirected to "Review & confirm"
	Then compare all price amounts in review and confirm page with Quote page "<with_tireprotection> " ,"<with_discountcode>" and "<with_militarydiscount>"
	When the user clicks the "<buttonType>" button and completes the payment process
	Then User verifies the Order details on Order Confirmation page
	Examples:
 	| year | vehicle | model | body 		| trim 	| with_tireprotection | with_discountcode | with_militarydiscount | buttonType |
	| 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition |	No			  | No				 |  No					| next |

@regression @BTISTP-T131 @e2e
Scenario Outline: Tire Order With Coupons via Pay Now With Tire Protection Plan 
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires	
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	Then validate the total quote "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	And User clicks Pay now button
	When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	And User clicks on Next step button
	Then verify user is redirected to "Payment Details"
	And user clicks on "Next"
	Then verify user is redirected to "Review & confirm"
	Then compare all price amounts in review and confirm page with Quote page "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	When the user clicks the "<buttonType>" button and completes the payment process
	Then User verifies the Order details on Order Confirmation page
	Examples:
 	| year | vehicle | model | body 		| trim 	| with_tireprotection | with_couponcode | with_militarydiscount | buttonType |
	| 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition |	Yes			  | Yes 849219			 |  No					| next |


@regression @BTISTP-T410 @e2e
Scenario Outline: Create a tire order With Coupons via Pay Now, With/Without Tire Protection Plan for both front and Rear Tire. 
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>"
	And User clicks on Select all four tires
	And User clicks on Next Step
	#When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	Then validate the total quote "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	And User clicks Pay now button
	When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	And User clicks on Next step button
	Then verify user is redirected to "Payment Details"
	And user clicks on "Next"
	Then verify user is redirected to "Review & confirm"
	Then compare all price amounts in review and confirm page with Quote page "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	When the user clicks the "<buttonType>" button and completes the payment process
	Then User verifies the Order details on Order Confirmation page
	Examples:
 	| year | vehicle | model   | body 		| trim 	| with_tireprotection 	 | with_couponcode | with_militarydiscount | buttonType |
	| 2023 | Aston Martin  | DB11  | 2 Dr Convertible | Volante | Front Yes and Rear No  | Yes 849219      |  No					| next       |
	| 2023 | Aston Martin  | DB11  | 2 Dr Convertible | Volante | Front No and Rear No   | Yes 849219	   |  No					| next       |
    | 2023 | Aston Martin  | DB11  | 2 Dr Convertible | Volante | Front Yes and Rear Yes | Yes 849219	   |  No					| next       |
	| 2023 | Aston Martin  | DB11  | 2 Dr Convertible | Volante | Front No and Rear Yes  | Yes 849219	   |  No					| next       |
	| 2023 | Aston Martin  | DB11  | 2 Dr Convertible | Volante | Front No and Rear Yes  | No       	   |  No					| next       |

@regression @BTISTP-T428 @e2e
Scenario Outline: Create a tire Order after changing the tire quantity in quote page. 
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
	And User clicks on Select all four tires
	And User clicks on Next Step
	When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	Then User changes the tire quantity to "2"
	Then validate the total quote "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	And User clicks Pay now button
	When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	And User clicks on Next step button
	Then verify user is redirected to "Payment Details"
	And user clicks on "Next"
	Then verify user is redirected to "Review & confirm"
	Then compare all price amounts in review and confirm page with Quote page "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	When the user clicks the "<buttonType>" button and completes the payment process
	Then User verifies the Order details on Order Confirmation page
	Examples:
 	| year | vehicle | model | body 		| trim 	| with_tireprotection | with_couponcode | with_militarydiscount | buttonType |
	| 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition |	Yes			  | No			 |  No					| next |

@regression @BTISTP-T429 @e2e
Scenario Outline: Create a tire Order after changing the tire quantity in quote page for both front and Rear Tire. 
	Given User is on Belle Tire Home Page
	And User clicks on Shop for Tires button
	And User clicks on Search by vehicle
	And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>"
	And User clicks on Select all four tires
	And User clicks on Next Step
	#When User clicks on Skip to results
	Then User is directed to the Tire Results Page
	And Click on Get Total Price button
	Then Verify the user navigates to Quote page and selected tire protection plan as "<with_tireprotection>"
	Then User changes the tire quantity front as "1" and rear as "1"
	Then validate the total quote "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	And User clicks Pay now button
	When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
	And User clicks on Next step button
	Then verify user is redirected to "Payment Details"
	And user clicks on "Next"
	Then verify user is redirected to "Review & confirm"
	Then compare all price amounts in review and confirm page with Quote page "<with_tireprotection> " ,"<with_couponcode>" and "<with_militarydiscount>"
	When the user clicks the "<buttonType>" button and completes the payment process
	Then User verifies the Order details on Order Confirmation page
	Examples:
 	| year | vehicle | model   | body 		| trim 	| with_tireprotection 	 | with_couponcode | with_militarydiscount | buttonType |
	| 2023 | Aston Martin  | DB11  | 2 Dr Convertible | Volante | Front Yes and Rear No  | Yes 849219      |  No					| next       |