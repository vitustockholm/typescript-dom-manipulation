"use strict";
// Variables
// - - - DoM elements
var formElement = document.querySelector('form');
var userListElement = document.querySelector('#users-list');
// - - - logic
var tableCreated = false;
// Functions
var getFormdata = function (e) {
    e.preventDefault();
    console.log(e.target);
    var user = {
        name: e.target.username.value,
        surname: e.target.usersurname.value,
    };
    registerUser(user);
};
var registerUser = function (user) {
    if (!tableCreated) {
        var table = "<table>\n    <thead>\n        <tr>\n          <th>Name</th>\n           <th>Surname</th>\n        </tr></thead>\n       <tbody>\n     \n       </tbody>\n   </table>";
        userListElement.innerHTML = table;
        tableCreated = true;
    }
    var tBodyElement = document.querySelector('tbody');
    // - - - - creating new row  and columns for table body
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    // - - - - adding context for table columns
    td1.innerText = user.name;
    td2.innerText = user.surname;
    // - - - appending columns to row
    tr.prepend(td1, td2);
    // - - - - appending row to table
    tBodyElement.appendChild(tr);
};
// Events
formElement.addEventListener('submit', getFormdata);
