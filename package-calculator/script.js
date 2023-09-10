// developed by Gaurav Bharane
// for navbar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
  x.style.display = "none";} 
  else {
  x.style.display = "block";
}};
//  logic for calculation of salary
$(document).ready(function() {
    $('#salary-form').submit(function(e) {
      e.preventDefault();
  
      // Get the annual salary from the form.
      const annualSalary = parseFloat($('#annual-salary').val());
  
      // Calculate the monthly salary.
      const monthlySalary = annualSalary / 12;
  
      // Calculate the daily salary.
      const dailySalary = monthlySalary / 30;
  
      // Calculate the hourly salary.
      const hourlySalary = dailySalary / 8;
  
      // Display the results.
      $('#results').html(`
        <p>Monthly salary: ${monthlySalary}</p>
        <p>Daily salary: ${dailySalary}</p>
        <p>Hourly salary: ${hourlySalary}</p>
      `);
    });
  });