Feature: Schedule an Appointment
@regression @BTISTP-T414
Scenario: Create A Wheel Alignment Appointment without Alignment Protection Plan
    Given User is on Belle Tire Home Page
    And user selects wheel alignment from the list and clicks on Schedule now button
    Then user should see the Total Due in Store on quote page without Alignment Protection Plan
    When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T141
Scenario: Create A Wheel Alignment Appointment with Alignment Protection Plan
    Given User is on Belle Tire Home Page
    And user selects wheel alignment from the list and clicks on Schedule now button
    Then user should see the Total Due in Store on quote page with Alignment Protection Plan
    When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T415
Scenario: Create A Wheel Alignment Appointment without Alignment Protection Plan from hero dropdown
    Given User is on Belle Tire Home Page
    And user selects wheel alignment from the hero dropdown
    Then user should see the Total Due in Store on quote page without Alignment Protection Plan
    When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T142
Scenario: Create A Vehicle Inspection Appointment
    Given User is on Belle Tire Home Page
    And user selects Visual Vehicle Inspection from the list and clicks on Schedule now button
    And user selects any checkbox from the page and clicks on Schedule now button
    When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
    Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T416
Scenario: Create A Mechanical Vehicle Inspection Appointment from hero dropdown
    Given User is on Belle Tire Home Page
    And user selects mechanical Vehicle Inspection from the list
    And user selects any checkbox from the page and clicks on Schedule now button
    When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
    Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T417
Scenario: Verify new tires from the Schedule Appointment footer link
    Given User is on Belle Tire Home Page
    Then user clicks on Schedule Appointment footer link and verify the Quotes & Appointments page
    And user clicks on Find tires now button
    And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
    And Select four tires and skip to results page
    Then User is directed to the Tire Results Page
    Examples:
 	| year | vehicle | model | body | trim |
	| 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition |

@regression @BTISTP-T418
Scenario: Create a Wheel Alignment Appointment from Schedule Appointment footer link
    Given User is on Belle Tire Home Page
    Then user clicks on Schedule Appointment footer link and verify the Quotes & Appointments page
    And user clicks on Schedule appointment button for Alignment
    Then user should see the Total Due in Store on quote page without Alignment Protection Plan
    When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T419
Scenario: Verify Free Visual Vehicle Inspection from the Schedule Appointment footer link
    Given User is on Belle Tire Home Page
    Then user clicks on Schedule Appointment footer link and verify the Quotes & Appointments page
    And user clicks on Schedule appointment button for Free Visual Vehicle Inspection
    And user selects any checkbox from the page and clicks on Schedule now button
    When User enters the following details in Contact Information form:
    | FirstName | LastName | EmailAddress         | PhoneNumber |
    | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
    Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T140
Scenario: Verify the Wheel Quote via the Wheel Finder Menu
    Given User is on Belle Tire Home Page
    Then User click on Tires & Wheels menu item and select Wheel Finder
    And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>" 
    Then User is directed to the Tire Results Page
    And User is directed to the Wheel Finder Page
    Then Verify the Quote page and send quote to Customer
    Examples:
 	| year | vehicle | model | body | trim |
	| 2022 | Acura | RDX | 4 Dr Sport Utility | SH-AWD A-Spec |


@regression @BTISTP-T206
Scenario: Verify the Wheel Alignment Quote Link should redirect the User to the Alignment Quote Page for Ohio State
    Given User on Belle Tire Home Page
    #Given User is on Belle Tire Home Page
    When user changes location to "Ohio"
    And user selects wheel alignment from the list and clicks on Schedule now button
    Then user should see the Total Due in Store on quote page with Alignment Protection Plan
    When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T205
Scenario: Verify the Wheel Alignment Quote Link should redirect the User to the Alignment Quote Page for Illinois State
    Given User on Belle Tire Home Page
    #Given User is on Belle Tire Home Page
    When user changes location to "Illinois"
    And user selects wheel alignment from the list and clicks on Schedule now button
    Then user should see the Total Due in Store on quote page with Alignment Protection Plan
    When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T204
Scenario: Verify the Wheel Alignment Quote Link should redirect the User to the Alignment Quote Page for Indiana State
    Given User on Belle Tire Home Page
    #Given User is on Belle Tire Home Page
    When user changes location to "Indiana"
    And user selects wheel alignment from the list and clicks on Schedule now button
    Then user should see the Total Due in Store on quote page with Alignment Protection Plan
    When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page

@regression @BTISTP-T207
Scenario: Verify the Wheel Alignment Quote Link should redirect the User to the Alignment Quote Page for Michigan State
    Given User on Belle Tire Home Page
    #Given User is on Belle Tire Home Page
    When user changes location to "Michigan"
    And user selects wheel alignment from the list and clicks on Schedule now button
    Then user should see the Total Due in Store on quote page with Alignment Protection Plan
    When User enters the following details in Contact Information form:
     | FirstName | LastName | EmailAddress         | PhoneNumber |
     | Gopi      | Ulava    | gulava@belletire.com | 3135555555  |
    Then User clicks on Next step button and verifies the Schedule appointment page
	Then User clicks on Next week button and click on appointment time
    Then User validates Review and Confirm page and click Confirm appointment button
	Then User verifies the Order details on Appointment Confirmation page