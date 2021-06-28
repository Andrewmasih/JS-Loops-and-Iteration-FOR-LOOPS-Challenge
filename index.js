/* Challege.

write a for loop that iterates through the usernames,and for each username logs a valid HTML paragraph tag to the console containing the usernames (e.g <p> useranme1 </p>) 

Requirement

1/ the output must match exactly, and every username must be included.

*/

let usernames = ["nicky", "zara", "seb", "has", "lieh", "stacy", "sara", "lisa", "nancy", "joey"]

for (let i = 0; i < usernames.length; i++)  {
  //this loop will iterate through the Array
  
  console.log(`<p> ${usernames[i]} congratulations, you have won a holidays of your dreams </p>`)
  // using template literals to log the HTML paragraph tags.


  
}