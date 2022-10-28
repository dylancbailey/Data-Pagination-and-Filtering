/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.querySelector(".student-list");

   studentList.innerHTML = "";

   for (let [index, student] of list.entries()) {

      if (index >= startIndex && index < endIndex) {
         studentList.insertAdjacentHTML("beforeend", 
         `
         <li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
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
function addPagination(list) {
   const paginationButtons = list.length % itemsPerPage; 
   const linkList = document.querySelector(".link-list");

   linkList.innerHTML = "";

   for (let i = 1; i < paginationButtons; i++) {

      linkList.insertAdjacentHTML("beforeend", 
      `
         <li>
            <button type="button">${i}</button>
         </li>
      `
      );

      const btn = document.querySelector("button");
      btn.classList.add("active");
   }

   linkList.addEventListener("click", (e) => {
      const target = e.target;
      if (target.tagName === "BUTTON") {
         const btn = document.querySelector(".active");
         btn.className = "";
         target.className = "active";
         showPage(list, target.textContent);
      }
   });
}


// Call functions
showPage(data, 1);
addPagination(data);