/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const ITEMS_PER_PAGE = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * ITEMS_PER_PAGE) - ITEMS_PER_PAGE;
   const endIndex = page * ITEMS_PER_PAGE;
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
   const pageButtons = list.length % ITEMS_PER_PAGE;
   const linkList = document.querySelector(".link-list");

   linkList.innerHTML = "";

   for (let btn = 1; btn < pageButtons; btn++) {
      linkList.insertAdjacentHTML("beforeend",
      `
         <li>
            <button type="button">${btn}</button>
         </li>
      `);

      const activeBtn = document.querySelector("button");
      activeBtn.classList.add("active");
   }

   linkList.addEventListener("click", (btn) => {
      const target = btn.target;
      if (target.tagName === "BUTTON") {
         const pageBtn = document.querySelector(".active");
         pageBtn.classList.remove("active");
         target.classList.add("active");
         showPage(list, target.textContent);
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);