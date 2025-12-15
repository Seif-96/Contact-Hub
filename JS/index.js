// form Inputs
var userImage = document.getElementById("userImage");
var userName = document.getElementById("userName");
var userNumber = document.getElementById("userNumber");
var userEmail = document.getElementById("userEmail");
var userAddress = document.getElementById("userAddress");
var selectGruop = document.getElementById("selectGruop");
var aboutContact = document.getElementById("aboutContact");
// check inputs
var checkFavorite = document.getElementById("checkFavorite");
var checkEmergency = document.getElementById("checkEmergency");
// btnNumOne in form
var btnNumOne = document.getElementById("btnNumOne");
// btnSaveContact
var btnSaveContact = document.getElementById("btnSaveContact");
// btnUpdateContact
var btnUpdateContact = document.getElementById("btnUpdateContact");
// lightBoxContainer
var lightBoxContainer = document.getElementById("lightBoxContainer");
// close lightBoxContainer
var close = document.getElementById("close");
var btnCansel = document.getElementById("btnCansel");
// addContacts & noContactsFound
var addContacts = document.getElementById("addContacts");
var noContactsFound = document.getElementById("noContactsFound");
// formEmailDiv
var formEmailDiv = document.getElementById("formEmailDiv");
// contactNameError & contactPhoneError
var contactNameError = document.getElementById("contactNameError");
var contactPhoneError = document.getElementById("contactPhoneError");
var contactEmailError = document.getElementById("contactEmailError");
var contactAddressError = document.getElementById("contactAddressError");
var selectGruopError = document.getElementById("selectGruopError");
// numTotal
var numTotal = document.getElementById("numTotal");
var contactsTotal = document.getElementById("contactsTotal");

// openForm
function openForm() {
  lightBoxContainer.classList.remove("d-none");
}
// closeForm
function closeForm() {
  lightBoxContainer.classList.add("d-none");
}
// userContacts for localStorage
var userContacts;
// localStorage
if (localStorage.getItem("Contacts") == null) {
  userContacts = [];
} else {
  userContacts = JSON.parse(localStorage.getItem("Contacts"));
  display(userContacts);
  updateCounter();
  addContacts.classList.remove("d-none");
  noContactsFound.classList.add("d-none");
}
// noContactsFound
function checkContacts() {
  if (userContacts.length === 0) {
    addContacts.classList.add("d-none");
    noContactsFound.classList.remove("d-none");
  } else {
    addContacts.classList.remove("d-none");
    noContactsFound.classList.add("d-none");
  }
}
checkContacts();
// updateCounter
function updateCounter() {
  numTotal.innerHTML = userContacts.length;
  contactsTotal.innerHTML = userContacts.length;
}
updateCounter();
// addContact
function addContact() {
  if (
    contactNameError.classList.contains("noErorr") &&
    contactPhoneError.classList.contains("noErorr") &&
    contactEmailError.classList.contains("noErorr") &&
    contactAddressError.classList.contains("noErorr") &&
    selectGruopError.classList.contains("noErorr")
  ) {
    contact = {
      img: `images/${userImage.files[0]?.name}`,
      userName: userName.value,
      userNumber: userNumber.value,
      userEmail: userEmail.value,
      userAddress: userAddress.value,
      selectGruop: selectGruop.value,
      aboutContact: aboutContact.value,
    };
    userContacts.push(contact);
    localStorage.setItem("Contacts", JSON.stringify(userContacts));
    lightBoxContainer.classList.add("d-none");
    addContacts.classList.remove("d-none");
    noContactsFound.classList.add("d-none");
    contactNameError.classList.remove("noErorr");
    contactPhoneError.classList.remove("noErorr");
    checkContacts();
    addSuccess();
    display(userContacts);
    clearInputs();
    updateCounter();
  } else {
    errorModal();
  }
}
// display
function display(arr) {
  var contain = "";
  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].userName.charAt(0).toUpperCase();
    contain += `
        <div class="items-Pernat mb-3 mb-md-0 p-0 p-md-2">
                  <div class="items p-0 rounded-4">
                    <!-- info -->
                    <div class="info  p-3">
                      <!-- top -->
                      <div class="top d-flex gap-3 align-items-center mb-2">
                        <!-- avatar -->
                        <div class="avatar position-relative">
                          <img class="d-none" src="${arr[i].img}" alt="avatar">
                          <span class="fs-4 fw-bold" id="avatarLetter">${firstLetter}</span>
                          <span class="position-absolute translate-middle d-none star"><i
                              class="fa-solid fa-star"></i></span>
                          <span class="position-absolute translate-middle d-none haert"><i
                              class="fa-solid fa-heart-pulse"></i></span>
                        </div>
                        <!-- name-num -->
                        <div class="name-num">
                          <h3>${arr[i].userName}</h3>
                          <div class="num d-flex align-items-center gap-2">
                            <div class="numIconOne d-flex justify-content-center align-items-center"><i
                                class="fa-solid fa-phone"></i></div>
                            <span id="numIconOne">${arr[i].userNumber}</span>
                          </div>
                        </div>
                      </div>
                      <!-- email-gps -->
                      <div class="email-gps mb-2">
                        <div id="formEmailDiv" class="email d-flex align-items-center gap-2  mb-2">
                          <div class="d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-envelope"></i>
                          </div>
                          <span id="email">${arr[i].userEmail}</span>
                        </div>
                        <div id="formAddressDiv" class="gps d-flex align-items-center gap-2 mb-3">
                          <div class="d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-location-dot"></i>
                          </div>
                          <span id="gps">${arr[i].userAddress}</span>
                        </div>
                      </div>
                      <!-- gruop -->
                      <div class="gruop">
                        <span class="px-2 py-1 rounded me-1" id="dataOfGruop">${arr[i].selectGruop}</span>
                        <span class="px-2 py-1 rounded d-none dataOfEmergency" id="dataOfEmergency"><i
                            class="fa-solid fa-heart-pulse"></i>
                          Emergency</span>
                      </div>
                    </div>
                    <!--edits  -->
                    <div class="edits p-3 d-flex align-items-center justify-content-between">
                      <div class="left d-flex align-items-center gap-1">
                        <a href="tel:${arr[i].userNumber}" id="numIconTwo"
                          class="numIconTwo d-flex justify-content-center align-items-center"><i
                            class="fa-solid fa-phone"></i></a>
                        <a href="mailto:${arr[i].userEmail}" id="emailIconTwo"
                          class="emailIconTwo d-flex justify-content-center align-items-center">
                          <i class="fa-solid fa-envelope"></i>
                        </a>
                      </div>
                      <div class="right d-flex align-items-center gap-2">
                        <!--favoriteContact  -->
                        <div class="favoriteContact" onclick="addContactsFavorite(${i})">
                        <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="d-none favorite2Contact" onclick="deleteFavorite(${i})">
                          <i class="fa-solid fa-star afer-focus"></i>
                        </div>
                        
                        <!--emergencyContact  -->
                        <div class="emergencyContact" onclick="addContactsEmergency(${i})">
                          <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="emergency2Contact d-none" onclick="deleteEmergency(${i})">
                          <i class="fa-solid fa-heart-pulse afer-focus"></i>
                        </div>
                        <div onclick="editContact(${i})" id="updateContact"><i class="fa-solid fa-pen"></i></div>
                        <div onclick="openModal(${i})" id="deleteContact"><i class="fa-solid fa-trash"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
  }
  document.getElementById("row").innerHTML = contain;
}
// searchContact
function searchContact() {
  var word = searchInput.value;
  var contain = "";
  //  For Show Data
  for (var i = 0; i < userContacts.length; i++) {
    if (
      userContacts[i].userName.toLowerCase().includes(word.toLowerCase()) ||
      userContacts[i].userNumber.includes(word) ||
      userContacts[i].userEmail.toLowerCase().includes(word.toLowerCase())
    ) {
      contain += `
        <div class="items-Pernat mb-3 mb-md-0 p-0 p-md-2">
                  <div class="items p-0 rounded-4">
                    <!-- info -->
                    <div class="info  p-3">
                      <!-- top -->
                      <div class="top d-flex gap-3 align-items-center mb-2">
                        <!-- avatar -->
                        <div class="avatar position-relative">
                          <img class="d-none" src="${userContacts[i].img}" alt="avatar">
                          <span class="fs-4 fw-bold" id="avatarLetter">s</span>
                          <span class="position-absolute translate-middle d-none" id="star"><i
                              class="fa-solid fa-star"></i></span>
                          <span class="position-absolute translate-middle d-none haert"><i
                              class="fa-solid fa-heart-pulse"></i></span>
                        </div>
                        <!-- name-num -->
                        <div class="name-num">
                          <h3>${userContacts[i].userName}</h3>
                          <div class="num d-flex align-items-center gap-2">
                            <div class="numIconOne d-flex justify-content-center align-items-center"><i
                                class="fa-solid fa-phone"></i></div>
                            <span id="numIconOne">${userContacts[i].userNumber}</span>
                          </div>
                        </div>
                      </div>
                      <!-- email-gps -->
                      <div class="email-gps mb-2">
                        <div id="formEmailDiv" class="email d-flex align-items-center gap-2  mb-2">
                          <div class="d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-envelope"></i>
                          </div>
                          <span id="email">${userContacts[i].userEmail}</span>
                        </div>
                        <div class="gps d-flex align-items-center gap-2 mb-3">
                          <div class="d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-location-dot"></i>
                          </div>
                          <span id="gps">${userContacts[i].userAddress}</span>
                        </div>
                      </div>
                      <!-- gruop -->
                      <div class="gruop">
                        <span class="px-2 py-1 rounded me-1" id="dataOfGruop">${userContacts[i].selectGruop}</span>
                        <span class="px-2 py-1 rounded d-none dataOfEmergency" id="dataOfEmergency"><i
                            class="fa-solid fa-heart-pulse"></i>
                          Emergency</span>
                      </div>
                    </div>
                    <!--edits  -->
                    <div class="edits p-3 d-flex align-items-center justify-content-between">
                      <div class="left d-flex align-items-center gap-1">
                        <a href="tel:${userContacts[i].userNumber}" id="numIconTwo"
                          class="numIconTwo d-flex justify-content-center align-items-center"><i
                            class="fa-solid fa-phone"></i></a>
                        <a href="mailto:${userContacts[i].userEmail}" id="emailIconTwo"
                          class="emailIconTwo d-flex justify-content-center align-items-center">
                          <i class="fa-solid fa-envelope"></i>
                        </a>
                      </div>
                      <div class="right d-flex align-items-center gap-2">
                        <div class="favoriteContact" onclick="addContactsFavorite(${i})">
                          <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="d-none favorite2Contact" onclick="deleteFavorite(${i})">
                          <i class="fa-solid fa-star afer-focus"></i>
                        </div>
                        <div class="emergencyContact" onclick="addContactsEmergency(${i})">
                          <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="d-none emergency2Contact" onclick="deleteEmergency(${i})">
                          <i class="fa-solid fa-heart-pulse afer-focus"></i>
                        </div>
                        <div onclick="editContact(${i})" id="updateContact"><i class="fa-solid fa-pen"></i></div>
                        <div onclick="openModal()" id="deleteContact"><i class="fa-solid fa-trash"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
    }
  }
  // If No Data To Show
  if (contain == "") {
    addContacts.classList.add("d-none");
    noContactsFound.classList.remove("d-none");
  } else {
    document.getElementById("row").innerHTML = contain;
    addContacts.classList.remove("d-none");
    noContactsFound.classList.add("d-none");
  }
}
// clearInputs
function clearInputs() {
  userImage.value = null;
  userName.value = null;
  userNumber.value = null;
  userEmail.value = null;
  userAddress.value = null;
  selectGruop.value = null;
  aboutContact.value = null;
  checkFavorite.value = null;
  checkEmergency.value = null;
}
// Edit Products
var updateIndex;
function editContact(index) {
  updateIndex = index;
  userName.value = userContacts[index].userName;
  userNumber.value = userContacts[index].userNumber;
  userEmail.value = userContacts[index].userEmail;
  userAddress.value = userContacts[index].userAddress;
  selectGruop.value = userContacts[index].selectGruop;
  aboutContact.value = userContacts[index].aboutContact;
  // checkEmergency.value
  btnSaveContact.classList.add("d-none");
  btnUpdateContact.classList.remove("d-none");
  lightBoxContainer.classList.remove("d-none");
  contactNameError.classList.add("noErorr");
  contactPhoneError.classList.add("noErorr");
  contactAddressError.classList.add("noErorr");
  contactEmailError.classList.add("noErorr");
  selectGruopError.classList.add("noErorr");
}
// Update Products
function updateContact() {
  if (
    contactNameError.classList.contains("noErorr") &&
    contactPhoneError.classList.contains("noErorr") &&
    contactEmailError.classList.contains("noErorr") &&
    contactAddressError.classList.contains("noErorr") &&
    selectGruopError.classList.contains("noErorr")
  ) {
    // save value for update
    var oldName = userContacts[updateIndex].userName;
    var oldNumber = userContacts[updateIndex].userNumber;
    // userContacts value
    userContacts[updateIndex].userName = userName.value;
    userContacts[updateIndex].userNumber = userNumber.value;
    userContacts[updateIndex].userEmail = userEmail.value;
    userContacts[updateIndex].userAddress = userAddress.value;
    userContacts[updateIndex].selectGruop = selectGruop.value;
    userContacts[updateIndex].aboutContact = aboutContact.value;
    // update  favoritesList
    for (var i = 0; i < favoritesList.length; i++) {
      if (
        favoritesList[i].userNameFavorite === oldName &&
        favoritesList[i].userNumberFavorite === oldNumber
      ) {
        favoritesList[i].userNameFavorite = userName.value;
        favoritesList[i].userNumberFavorite = userNumber.value;
      }
    }
    // update  emergencyList
    // for (var i = 0; i < emergencyList.length; i++) {
    //   if (
    //     emergencyList[i].userNameEmergency === oldName &&
    //     emergencyList[i].userNumberEmergency === oldNumber
    //   ) {
    //     emergencyList[i].userNameEmergency = userName.value;
    //     emergencyList[i].userNumberEmergency = userNumber.value;
    //   }
    // }
    // localStorage of all
    localStorage.setItem("Contacts", JSON.stringify(userContacts));
    localStorage.setItem("FavoritesList", JSON.stringify(favoritesList));
    // localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
    // display
    display(userContacts);
    displayFavorites(favoritesList);
    // displayEmergency(emergencyList);
    // updateCounter
    updateCounter();
    updateCounterFavorites();
    // updateCounterEmergency();
    btnSaveContact.classList.remove("d-none");
    btnUpdateContact.classList.add("d-none");
    lightBoxContainer.classList.add("d-none");
    addContacts.classList.remove("d-none");
    noContactsFound.classList.add("d-none");
    showUpdateSuccess();
    clearInputs();
    contactNameError.classList.remove("noErorr");
    contactPhoneError.classList.remove("noErorr");
    contactEmailError.classList.remove("noErorr");
    contactAddressError.classList.remove("noErorr");
    selectGruopError.classList.remove("noErorr");
  } else {
    errorModal();
  }
}
// Delete contact
function deleteContact() {
  var deletedContact = userContacts[deletedIndex];
  userContacts.splice(deletedIndex, 1);
  document.getElementById("deleteModal").classList.remove("d-flex");
  localStorage.setItem("Contacts", JSON.stringify(userContacts));
  display(userContacts);
  checkContacts();
  updateCounter();
  DeletedSuccess();
  // favoritesList
  for (var i = 0; i < favoritesList.length; i++) {
    if (
      favoritesList[i].userNameFavorite === deletedContact.userName &&
      favoritesList[i].userNumberFavorite === deletedContact.userNumber
    ) {
      favoritesList.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("FavoritesList", JSON.stringify(favoritesList));
  displayFavorites(favoritesList);
  updateCounterFavorites();
  // emergencyList
  for (var j = 0; j < emergencyList.length; j++) {
    if (
      emergencyList[j].userNameEmergency === deletedContact.userName &&
      emergencyList[j].userNumberEmergency === deletedContact.userNumber
    ) {
      emergencyList.splice(j, 1);
      break;
    }
  }
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  displayEmergency(emergencyList);
  updateCounterEmergency();
}
// deletedIndex
var deletedIndex;
// open deleteModal
function openModal(Index) {
  deletedIndex = Index;
  document.getElementById("deleteModal").classList.add("d-flex");
}
// close deleteModal
function closeModal() {
  document.getElementById("deleteModal").classList.remove("d-flex");
}
// UpdateSuccess
function showUpdateSuccess() {
  var modal = document.getElementById("updateSuccess");
  modal.classList.remove("d-none");
  setTimeout(function () {
    modal.classList.add("d-none");
  }, 1000);
}
// DeletedSuccess
function DeletedSuccess() {
  var modalDelete = document.getElementById("deleteSuccess");
  console.log("wellcom");
  modalDelete.classList.remove("d-none");
  setTimeout(function () {
    modalDelete.classList.add("d-none");
  }, 1000);
}
// addSuccess
function addSuccess() {
  var modalAdd = document.getElementById("addSuccess");
  modalAdd.classList.remove("d-none");
  setTimeout(function () {
    modalAdd.classList.add("d-none");
  }, 1000);
}
// errorModal
function errorModal() {
  var errorModal = document.getElementById("errorModal");
  errorModal.classList.remove("d-none");
}
function closeErrorModal() {
  document.getElementById("errorModal").classList.add("d-none");
}
// validateInuts
function validateInuts(element) {
  var regex = {
    userName: /^[a-zA-Z][a-z A-Z]{1,50}$/,
    userNumber: /^(\+2|2){0,1}01[0125][0-9]{8}$/,
    userEmail: /^[a-zA-Z]\w{3,10}@(gmail|yahoo|hotmail)\.(com|net)$/,
    userAddress: /^[a-zA-Z][a-z A-Z]{2,50}$/,
    selectGruop: /^(Family|Friends|Work|School|Other)$/i,
  };
  if (regex[element.id].test(element.value) == true) {
    element.nextElementSibling.classList.add("d-none");
    element.nextElementSibling.classList.add("noErorr");
  } else {
    element.nextElementSibling.classList.remove("d-none");
    element.nextElementSibling.classList.remove("noErorr");
  }
}
/////////////////////////////////////////////////////////
// favoritesList
var favoritesList;
if (localStorage.getItem("FavoritesList") == null) {
  favoritesList = [];
} else {
  favoritesList = JSON.parse(localStorage.getItem("FavoritesList"));
  displayFavorites(favoritesList);
  updateCounterFavorites();
  styleingFavoritesContact();
  checkContactsFavorite();
}
// for counter in Favorites
function updateCounterFavorites() {
  document.getElementById("numFavorites").innerHTML = favoritesList.length;
}
function checkContactsFavorite() {
  if (favoritesList.length === 0) {
    document.querySelectorAll("#noFavoritesYet").classList.remove("d-none");
    document.querySelectorAll("#haveFavorites").classList.add("d-none");
  } else {
    document.querySelectorAll("#noFavoritesYet").classList.add("d-none");
    document.querySelectorAll("#haveFavorites").classList.remove("d-none");
  }
}
// addContactsFavorite
function addContactsFavorite(index) {
  var favorites = {
    img: userContacts[index].img,
    userNameFavorite: userContacts[index].userName,
    userNumberFavorite: userContacts[index].userNumber,
  };
  favoritesList.push(favorites);
  localStorage.setItem("FavoritesList", JSON.stringify(favoritesList));
  displayFavorites(favoritesList);
  styleingFavoritesContact();
  updateCounterFavorites();
  checkContactsFavorite();
}
// displayFavorites
function displayFavorites(arr) {
  var containFavorites = "";
  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].userNameFavorite.charAt(0).toUpperCase();
    containFavorites += `
                      <div id="haveFavorites" class="d-flex align-items-center justify-content-between favorites-contain p-2 rounded-3 mb-2">
                    <div class="d-flex align-items-center gap-2">
                      <div class="avatar-two">
                        <img class="d-none" src="" alt="avatar">
                        <span class="fs-4 fw-bold">${firstLetter}</span>
                      </div>
                      <!-- name-num -->
                      <div class="name-num-two">
                        <h4 class="m-0">${arr[i].userNameFavorite}</h4>
                        <span id="favoriteNumTwo">${arr[i].userNumberFavorite}</span>
                      </div>
                    </div>
                    <a href="tel:${arr[i].userNumberFavorite}" class="phone-icon d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-phone"></i>
                    </a>
                  </div>
    `;
  }
  document.getElementById("favoritesContain").innerHTML = containFavorites;
}
// Delete contact
function deleteFavorite(deletedIndex) {
  favoritesList.splice(deletedIndex, 1);
  displayFavorites(favoritesList);
  localStorage.setItem("FavoritesList", JSON.stringify(favoritesList));
  updateCounterFavorites();
  checkContactsFavorite();
  styleingFavoritesContact();
}
function styleingFavoritesContact() {
  var allContacts = document.querySelectorAll(".items-Pernat");
  var i;
  for (i = 0; i < allContacts.length; i++) {
    var contactDiv = allContacts[i];
    var favBtn = contactDiv.querySelector(".favoriteContact");
    var favBtnActive = contactDiv.querySelector(".favorite2Contact");
    var starIcon = contactDiv.querySelector(".star");
    var currentName = userContacts[i].userName;
    var currentNumber = userContacts[i].userNumber;
    var isFavorite = false;
    var j;
    for (j = 0; j < favoritesList.length; j++) {
      if (
        favoritesList[j].userNameFavorite === currentName &&
        favoritesList[j].userNumberFavorite === currentNumber
      ) {
        isFavorite = true;
      }
    }
    if (isFavorite) {
      favBtn.classList.add("d-none");
      favBtnActive.classList.remove("d-none");
      starIcon.classList.remove("d-none");
    } else {
      favBtn.classList.remove("d-none");
      favBtnActive.classList.add("d-none");
      starIcon.classList.add("d-none");
    }
  }
}
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// emergencyList
var emergencyList;
if (localStorage.getItem("EmergencyList") == null) {
  emergencyList = [];
} else {
  emergencyList = JSON.parse(localStorage.getItem("EmergencyList"));
  displayEmergency(emergencyList);
  checkContactsEmergency();
  // styleingEmergencyContacts();
}
// addContactsEmergency
function addContactsEmergency(index) {
  var emergency = {
    img: userContacts[index].img,
    userNameEmergency: userContacts[index].userName,
    userNumberEmergency: userContacts[index].userNumber,
  };
  emergencyList.push(emergency);
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  displayEmergency(emergencyList);
  updateCounterEmergency();
  // checkContactsEmergency();
  // styleingEmergencyContacts();
  document.querySelector(".emergencyContact").classList.add("d-none");
  document.querySelector(".emergency2Contact").classList.remove("d-none");
  document.querySelector(".haert").classList.remove("d-none");
  document.querySelector(".dataOfEmergency").classList.remove("d-none");
}
// deleteEmergency
function deleteEmergency(index) {
  emergencyList.splice(index, 1);
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  displayEmergency(emergencyList);
  updateCounterEmergency();
  // checkContactsEmergency();
  // styleingEmergencyContacts();
  document.querySelector(".emergencyContact").classList.remove("d-none");
  document.querySelector(".emergency2Contact").classList.add("d-none");
  document.querySelector(".haert").classList.add("d-none");
  document.querySelector(".dataOfEmergency").classList.add("d-none");
}
// displayEmergency
function displayEmergency(arr) {
  var emergencyHtml = "";
  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].userNameEmergency.charAt(0).toUpperCase();
    emergencyHtml += `
      <div class="haveEmergency d-flex align-items-center justify-content-between emergency-contain p-2 rounded-3 mb-2">
        <div class="d-flex align-items-center gap-2">
          <div class="avatar-two">
            <img class="d-none" src="" alt="avatar">
            <span class="fs-4 fw-bold">${firstLetter}</span>
          </div>
          <div class="name-num-two">
            <h4 class="m-0">${arr[i].userNameEmergency}</h4>
            <span>${arr[i].userNumberEmergency}</span>
          </div>
        </div>
        <a href="tel:${arr[i].userNumberEmergency}" class="phone-icon d-flex align-items-center justify-content-center">
          <i class="fa-solid fa-phone"></i>
        </a>
      </div>`;
  }
  document.getElementById("emergencyContian").innerHTML = emergencyHtml;
}
// updateCounterEmergency
function updateCounterEmergency() {
  document.getElementById("numEmergency").innerHTML = emergencyList.length;
}
// checkContactsEmergency
function checkContactsEmergency() {
  var noEmergencyMsg = document.getElementById("noEmergency");
  if (emergencyList.length === 0) {
    noEmergencyMsg.classList.remove("d-none");
  } else {
    noEmergencyMsg.classList.add("d-none");
  }
}
// styleingEmergencyContacts
// function styleingEmergencyContacts() {
//   var allContacts = document.querySelectorAll(".items-Pernat");

//   allContacts.forEach((contactDiv, i) => {
//     if (i >= userContacts.length) return;

//     var currentName = userContacts[i].userName;
//     var currentNumber = userContacts[i].userNumber;

//     var emergencyBtn = contactDiv.querySelector(".emergencyContact");
//     var emergencyBtnActive = contactDiv.querySelector(".emergency2Contact");
//     var heartIcon = contactDiv.querySelector(".haert");
//     var emergencyBadge = contactDiv.querySelector(".dataOfEmergency");

//     var isEmergency = emergencyList.some(
//       (item) =>
//         item.userNameEmergency === currentName &&
//         item.userNumberEmergency === currentNumber
//     );

//     if (isEmergency) {
//       emergencyBtn.classList.add("d-none");
//       emergencyBtnActive.classList.remove("d-none");
//       heartIcon.classList.remove("d-none");
//       emergencyBadge.classList.remove("d-none");
//     } else {
//       emergencyBtn.classList.remove("d-none");
//       emergencyBtnActive.classList.add("d-none");
//       heartIcon.classList.add("d-none");
//       emergencyBadge.classList.add("d-none");
//     }
//   });
// }
