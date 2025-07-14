Feature: Validate Filters
@smoke @regression @BTISTP-T420
Scenario: Validate Quickview filters in tire results page
    Given User is on Belle Tire Home Page
    And User selects shop for tires in homePage
    And User selects "<year>", "<vehicle>", "<model>", "<body>", "<trim>"
    And Select four tires and skip to results page
    When User is directed to the Tire Results Page
    And User verifies global filters
    Then User verifies Tire results filters and selects "<brandName>" tire
    And User clears all the filter for "<brandName>" and re-verify filter functionality
 
    Examples:
    | year | vehicle | model | body | trim | brandName |
    | 2022 | Acura | RDX | 4 Dr Sport Utility | PMC Edition | BFGoodrich |