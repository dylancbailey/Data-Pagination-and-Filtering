/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// for (let [index, value] of data.entries()) {
//    console.log(value.name, index);
// }

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const student = document.querySelector(".student-list");

   student.innerHTML = "";

   for (let [index, value] of list.entries()) {

      if (index >= startIndex && index < endIndex) {
         student.insertAdjacentHTML("beforeend", 
         `
         <li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src="${value.picture.large}" alt="Profile Picture">
            <h3>${value.name.first} ${value.name.last}</h3>
            <span class="email">${value.email}</span>
            </div>
            <div class="joined-details">
            <span class="date">Joined ${value.registered.date}</span>
            </div>
         </li>
         `
         );
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);