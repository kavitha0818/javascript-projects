// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function () {

  // Write your unit tests here!
  test('should have organization key with value "nonprofit"', function () {
    expect(launchcode.organization).toEqual('nonprofit');
  });

  test('should have executiveDirector key with value "Jeff"', function () {
    expect(launchcode.executiveDirector).toEqual('Jeff');
  });

  test('should have percentageCoolEmployees key with value 100', function () {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test('should have programsOffered key with value', function () {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });


});

describe("Testing launchcode", function () {
  test('when passed a number that is only divisible by 2', function () {
    expect(launchcode.launchOutput(4)).toEqual('Launch!');
  });

  test('when passed a number that is only divisible by 3', function () {
    expect(launchcode.launchOutput(9)).toEqual('Code!');
  });

  test('when passed a number that is only divisible by 5', function () {
    expect(launchcode.launchOutput(25)).toEqual('Rocks!');
  });

  test('when passed a number that is divisible by 2 and 3', function () {
    expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
  });

  test('when passed a number that is divisible by 3 and 5', function () {
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
  });

  test('when passed a number that is divisible by 2 and 5', function () {
    expect(launchcode.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)');
  });

  test('when passed a number that is divisible by 2,3  and 5', function () {
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
  });

  test('when passed a number that is not divisible by 2,3  and 5', function () {
    expect(launchcode.launchOutput(7)).toEqual(`Rutabagas! That doesn't work.`);
  });

});

