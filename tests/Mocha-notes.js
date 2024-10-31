/*
  To our frame wok we add Mocha by
    npm insta  mocha
    now we are able to run our tests by
    npx mocha ./PATH OF TESTS

    after adding Mocha to our frame work t
    there are 6 HOOKS are availble
    1.BefroeAll
    2.BeforEach
    3.Before
    4.AfterAll
    5.AfterEach
    6.After

  Running Sing test :-
      1.it.only()
      2.npx mocha ./tests/MochaTests.js -g 'Explict waits'

    Implicit wait :-
       Implicit waits , waits for each element in the test. thts its not recomenedd
       syntex is
       this.timeouts(0)
       driver.manage().setTimeouts({implicit:10000});
    Explicit wait :-
       Explicit wait waits for that element which it os added.
       syntex is
       drivr.wait(until.)
*/