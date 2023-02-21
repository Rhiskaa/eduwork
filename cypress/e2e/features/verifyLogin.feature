Feature: Scenario Login Application with Background

Background: User Have Page Login
    Given User have login page

    Scenario: User Access with invalid credential
        When User have username "username"
        And password "password1"
        And Submit login
        Then User will get notif error

    #  Scenario Outline: Scenario Valid Credent with Outline Scenario
    #     When User have username '<user>'
    #     And password '<password>'
    #     And Submit login
    #     Then User successfully get Home page
    #     Examples:
    # | user        |   password |
    # | standard_user   | secret_sauce |
    # |problem_user     |secret_sauce|