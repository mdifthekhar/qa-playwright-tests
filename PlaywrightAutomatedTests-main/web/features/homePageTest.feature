Feature: Validate Home Page
  @smoke @regression @BTISTP-T413
  Scenario: Validate the Belle Tire's Home Page
    Given User is on Belle Tire Home Page
    Then Verify the Home page title
    Then Verify the drop down options for the first CTA Shop for tires and Schedule an appointment exists on the home page
    Then verify the dropdown options for Schedule an appointment
    Then Verify the dropdown options for Shop for tires
    Then verify clicking on all the menu bar items in the home page
    Then Verify the promo cards by clicking the arrow buttons
    Then Verify Auto Services carousel by clicking each element in the carousel

  @smoke @regression @BTISTP-T367
  Scenario: Validate Home page footer links
    Given User is on Belle Tire Home Page
    Then Verify the home page footer links

  @smoke @regression @homePageMenu @BTISTP-T363
  Scenario: Validate Home page Tire & Wheels menu links
    Given User is on Belle Tire Home Page
    Then click on "Tire Finder" link under "Tires & Wheels" and verify user navigating to "Tire Finder" page
    Then click on "Tire Brands" link under "Tires & Wheels" and verify user navigating to "All Tire Brands" page
    Then click on "Off-Season Storage" link under "Tires & Wheels" and verify user navigating to "Seasonal" page
    Then click on "Trailer Tires" link under "Tires & Wheels" and verify user navigating to "Trailer Tires" page
    Then click on "Wheel Finder" link under "Tires & Wheels" and verify user navigating to "Wheels & Customer Service" page
    Then click on "Installation Package" link under "Tires & Wheels" and verify user navigating to "Tire Installation" page

  @smoke @regression @homePageMenu @BTISTP-T364
  Scenario: Validate Home page Auto Service menu links
    Given User is on Belle Tire Home Page
    Then click on "Alignment" link under "Auto Service" and verify user navigating to "Wheel Alignment Service" page
    Then click on "Auto Glass" link under "Auto Service" and verify user navigating to "Auto Glass Repair & Maintenance" page
    Then click on "Oil & Lube" link under "Auto Service" and verify user navigating to "Oil and Lube Service" page
    Then click on "Suspension" link under "Auto Service" and verify user navigating to "Suspension Maintenance" page
    Then click on "Batteries" link under "Auto Service" and verify user navigating to "Car Battery Checks" page
    Then click on "AC & Coolant" link under "Auto Service" and verify user navigating to "Car Air Conditioning" page

  @smoke @regression @homePageMenu @BTISTP-T365
  Scenario: Validate Home page Offers & Savings menu links
    Given User is on Belle Tire Home Page
    Then click on "Rebates" link under "Offers & Savings" and verify user navigating to "Tire Coupons and Manufacturer Rebates" page
    Then click on "Tire Protection Plan" link under "Offers & Savings" and verify user navigating to "Tire Protection Plan" page
    Then click on "Alignment Protection Plan" link under "Offers & Savings" and verify user navigating to "Alignment Protection Plan" page
    Then click on "Found It Lower" link under "Offers & Savings" and verify user navigating to "Price Matching the Lowest Tire Prices" page
    Then click on "The Advantage Club" link under "Offers & Savings" and verify user navigating to "Advantage Club" page

  @smoke @regression @homePageMenu @BTISTP-T366
  Scenario: Validate Home page Tips & Guides menu links
    Given User is on Belle Tire Home Page
    Then click on "Flat Tire Answers & Solutions" link under "Tips & Guides" and verify user navigating to "Flat Tire Solutions" page
    Then click on "Car Care " link under "Tips & Guides" and verify user navigating to "Car Care Tips & Guides" page
    Then click on "Tire Pressure Sensors" link under "Tips & Guides" and verify user navigating to "Tire Pressure Monitoring" page
    Then click on "Wheel Care" link under "Tips & Guides" and verify user navigating to "Wheel Care Tips" page

  @smoke @regression @homePageMenu @BTISTP-T397
  Scenario: Validate Home page Our Company menu links
    Given User is on Belle Tire Home Page
    Then click on "Belle Tire History" link under "Our Company" and verify user navigating to "Belle Tire History" page
    Then click on "Community" link under "Our Company" and verify user navigating to "Community" page
    Then click on "Contact Us" link under "Our Company" and verify user navigating to "Contact Us" page
    Then click on "Coming Soon" link under "Our Company" and verify user navigating to "Belle Tire Opening Near You" page

  @smoke @regression @homePageMenu @BTISTP-T398
  Scenario: Validate Home page enTireLife™ menu links
    Given User is on Belle Tire Home Page
    Then click on "enTireLife™ Package" link under "enTireLife™" and verify user navigating to "enTireLife™ Package" page