Feature: General tests

  Scenario: Opening landing page
    Given A user visits localhost:3000
    Then the user should see the following
    	| OPTIONS		|
        | Name		    |
        | Info	        |
    When clicks on a checkbox  
    Then the user should see selected
        