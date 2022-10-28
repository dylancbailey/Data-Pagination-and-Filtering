// * Global variables
const ITEMS_PER_PAGE = 9;
const LINK_LIST = document.querySelector(".link-list");
const HEADER = document.querySelector(".header");
let CURRENT_LIST = data;

// * Create and appends student elements to page
function showPage(list, page) {
  const startIndex = page * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
  const endIndex = page * ITEMS_PER_PAGE;
  const studentList = document.querySelector(".student-list");

  studentList.innerHTML = "";

  for (let [index, student] of list.entries()) {
    if (index >= startIndex && index < endIndex) {
      studentList.insertAdjacentHTML(
        "beforeend",
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
  const pageButtons = Math.ceil(list.length / ITEMS_PER_PAGE);

  LINK_LIST.innerHTML = "";

  for (let btn = 1; btn < pageButtons + 1; btn++) {
    LINK_LIST.insertAdjacentHTML(
      "beforeend",
      `
         <li>
            <button type="button">${btn}</button>
         </li>
      `
    );

    const activeBtn = document.querySelector("button");
    activeBtn.classList.add("active");
  }
}

// * Adds and removes btn styling
LINK_LIST.addEventListener("click", (btn) => {
  const target = btn.target;
  if (target.tagName === "BUTTON") {
    const pageBtn = document.querySelector(".active");
    pageBtn.classList.remove("active");
    target.classList.add("active");
    showPage(CURRENT_LIST, target.textContent);
  }
});

// * Creates and appends search bar
function searchBar(list) {
  HEADER.insertAdjacentHTML(
    "beforeend",
    `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `
  );

  searchFilter(list);
}

// * Creates a new array and adds logic for searching
function searchFilter(list) {
  const searchInput = document.querySelector("label[for='search']");
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    let studentList = [];

    for (let i = 0; i < list.length; i++) {
      let student = list[i];

      if (
        student.name.first.toLowerCase().includes(value) ||
        student.name.last.toLowerCase().includes(value)
      ) {
        studentList.push(student);
      }
    }

    CURRENT_LIST = studentList;

    if (CURRENT_LIST.length < 1) {
      if (!document.querySelector(".no-results")) {
        HEADER.insertAdjacentHTML(
          "afterend",
          `<h1 class="no-results">No results found.</h1>`
        );
      }
    } else {
      if (document.querySelector(".no-results")) {
        document.querySelector(".no-results").remove();
      }
    }

    showPage(CURRENT_LIST, 1);
    addPagination(CURRENT_LIST);
  });
}

// * Call functions
showPage(CURRENT_LIST, 1);
addPagination(CURRENT_LIST);
searchBar(CURRENT_LIST);