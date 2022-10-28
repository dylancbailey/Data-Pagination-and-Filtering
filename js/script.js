// * Global variable for number of student cards
const ITEMS_PER_PAGE = 9;

// * Create and appends student elements to page
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

// * Creates and appends elements for pagination buttons
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

// * Creates and appends search bar
function searchBar() {
   const header = document.querySelector(".header");

   header.insertAdjacentHTML("beforeend", 
   `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `);
}

// Call functions
showPage(data, 1);
addPagination(data);
searchBar();