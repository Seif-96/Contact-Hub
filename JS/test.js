// // changeHeartIcon
// // function changeHeartIcon() {
// //   emergencyContact.classList.toggle("d-none");
// //   emergency2Contact.classList.toggle("d-none");
// // }

// // contactsFavorite;
// // var contactsFavorite;
// // localStorage Favorites
// // if (localStorage.getItem("AllContactsFavorite") == null) {
// //   contactsFavorite = [];
// // } else {
// //   contactsFavorite = JSON.parse(localStorage.getItem("AllContactsFavorite"));
// //   display(contactsFavorite);
// // }
// // function addContactsFavorite() {
// //   var theContactsFavorite = {
// //     img: `images/${userImage.files[0]?.name}`,
// //     userName: userName.value,
// //     userNumber: userNumber.value,
// //   };
// //   contactsFavorite.push(theContactsFavorite);
// //   localStorage.setItem("AllContactsFavorite", JSON.stringify(contactsFavorite));
// //   displayFavorites(theContactsFavorite);
// //   checkContactsFavorite();
// //   updateCounterFavorites();
// // }
// // noContactsFound
// // function checkContactsFavorite() {
// //   if (contactsFavorite.length === 0) {
// //     noFavorites.classList.remove("d-none");
// //   } else {
// //     noFavorites.classList.add("d-none");
// //   }
// // }
// // checkContactsFavorite();
// // Favorites
// // function displayFavorites(array) {
// //   var favorites = "";
// //   for (var i = 0; i < array.length; i++) {
// //     var firstLetter = array[i].userName.charAt(0).toUpperCase();
// //     favorites += `
// //                       <div class="d-flex align-items-center justify-content-between favorites-contain p-2 rounded-3 mb-2">
// //                     <div class="d-flex align-items-center gap-2">
// //                       <div class="avatar-two">
// //                         <img class="d-none" src="${array[i].img}" alt="avatar">
// //                         <span class="fs-4 fw-bold">${firstLetter}</span>
// //                       </div>
// //                       <!-- name-num -->
// //                       <div class="name-num-two">
// //                         <h4 class="m-0">${array[i].userName}</h4>
// //                         <span id="favoriteNumTwo">${array[i].userNumber}</span>
// //                       </div>
// //                     </div>
// //                     <a href="tell:${array[i].userNumber}" class="phone-icon d-flex align-items-center justify-content-center">
// //                       <i class="fa-solid fa-phone"></i>
// //                     </a>
// //                   </div>
// //     `;
// //   }
// //   document.getElementById("favoritesContain").innerHTML = favorites;
// // }

// // updateCounter
// // function updateCounterFavorites() {
// //   numFavorites.innerHTML = contactsFavorite.length;
// // }
// // function updateCounterEmergency() {
// //   numEmergency.innerHTML = userContacts.length;
// // }
// // noFavorites & noEmergency
// // var noEmergency = document.getElementById("noEmergency");
// // var noFavorites = document.getElementById("noFavorites");
// // Emergency
// // function displayEmergency(ar) {
// //   var emergency = "";
// //   for (var i = 0; i < ar.length; i++) {
// //     var firstLetter = ar[i].userName.charAt(0).toUpperCase();
// //     emergency = `
// //         <div class="d-flex align-items-center justify-content-between emergency-contain p-2 rounded-3 mb-2">
// //                     <div class="d-flex align-items-center gap-2">
// //                       <div class="avatar-two">
// //                         <img class="d-none" src="${ar[i].img}" alt="avatar">
// //                         <span class="fs-4 fw-bold" id="avatarThereLetter">${firstLetter}</span>
// //                       </div>
// //                       <!-- name-num -->
// //                       <div class="name-num-two">
// //                         <h4 id="emergencyName" class="m-0">${ar[i].userName}</h4>
// //                         <span id="emergencyNumTwo">${ar[i].userNumber}</span>
// //                       </div>
// //                     </div>
// //                     <a href="tell:${ar[i].userNumber}" class="phone-icon d-flex align-items-center justify-content-center">
// //                       <i class="fa-solid fa-phone"></i>
// //                     </a>
// //                   </div>
// //     `;
// //   }
// //   document.getElementById("noEmergency").innerHTML = favorites;
// // }
// var emergencyList;
// if (localStorage.getItem("EmergencyList") == null) {
//   emergencyList = [];
//   checkEmergency();
// } else {
//   emergencyList = JSON.parse(localStorage.getItem("EmergencyList"));
//   displayEmergency(emergencyList);
//   checkEmergency();
// }

// function addContactsEmergency(index) {
//   var emergency = {
//     img: userContacts[index].img,
//     userNameEmergency: userContacts[index].userName,
//     userNumberEmergency: userContacts[index].userNumber,
//   };
//   emergencyList.push(emergency);
//   localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
//   displayEmergency(emergencyList);
//   document.getElementById("emergencyContact").classList.add("d-none");
//   document.getElementById("emergency2Contact").classList.remove("d-none");
//   checkEmergency();
// }
// displayEmergency(emergencyList);

// function displayEmergency(arr) {
//   var containEmergency = "";
//   for (var i = 0; i < arr.length; i++) {
//     var firstLetter = arr[i].userNameEmergency.charAt(0).toUpperCase();
//     containEmergency += `
// //         <div class="d-flex align-items-center justify-content-between emergency-contain p-2 rounded-3 mb-2">
// //                     <div class="d-flex align-items-center gap-2">
// //                       <div class="avatar-two">
// //                         <img class="d-none" src="" alt="avatar">
// //                         <span class="fs-4 fw-bold" id="avatarThereLetter">${firstLetter}</span>
// //                       </div>
// //                       <!-- name-num -->
// //                       <div class="name-num-two">
// //                         <h4 id="emergencyName" class="m-0">${arr[i].userNameEmergency}</h4>
// //                         <span id="emergencyNumTwo">${arr[i].userNumberEmergency}</span>
// //                       </div>
// //                     </div>
// //                     <a href="tell:${arr[i].userNumberEmergency}" class="phone-icon d-flex align-items-center justify-content-center">
// //                       <i class="fa-solid fa-phone"></i>
// //                     </a>
// //                   </div>
// //     `;
//   }
//   document.getElementById("emergencyContian").innerHTML = containEmergency;
// }
// // Delete contact
// function deleteEmergency(deletedIndex) {
//   emergencyList.splice(deletedIndex, 1);
//   displayEmergency(emergencyList);
//   localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
//   document.getElementById("emergencyContact").classList.remove("d-none");
//   document.getElementById("emergency2Contact").classList.add("d-none");
//   checkContactsFavorite();
// }
// var noEmergency = document.getElementById("noEmergency");
// // checkContactsFavorite
// function checkEmergency() {
//   if (emergencyList.length === 0) {
//     noEmergency.classList.remove("d-none");
//   } else {
//     noEmergency.classList.add("d-none");
//   }
// }
// checkEmergency();
// contactsFavorite
// var favoritesList;
// if (localStorage.getItem("FavoritesList") == null) {
//   favoritesList = [];
//   checkContactsFavorite();
// } else {
//   favoritesList = JSON.parse(localStorage.getItem("FavoritesList"));
//   displayFavorites(favoritesList);
//   checkContactsFavorite();
// }
// function updateCounterFavorites() {
//   document.getElementById("numFavorites").innerHTML = userContacts.length;
// }
// var noFavorites = document.getElementById("noFavorites");
// var haveFavorites = document.getElementById("haveFavorites");
// updateCounterFavorites();
// function addContactsFavorite(index) {
//   var favorites = {
//     img: userContacts[index].img,
//     userNameFavorite: userContacts[index].userName,
//     userNumberFavorite: userContacts[index].userNumber,
//   };
//   favoritesList.push(favorites);
//   localStorage.setItem("FavoritesList", JSON.stringify(favoritesList));
//   displayFavorites(favoritesList);
//   document.getElementById("favoriteContact").classList.add("d-none");
//   document.getElementById("favorite2Contact").classList.remove("d-none");
//   document.getElementById("star").classList.remove("d-none");
//   checkContactsFavorite();
//   updateCounterFavorites();
// }
// displayFavorites(favoritesList);

// function displayFavorites(arr) {
//   var containFavorites = "";
//   for (var i = 0; i < arr.length; i++) {
//     var firstLetter = arr[i].userNameFavorite.charAt(0).toUpperCase();
//     containFavorites += `
//                       <div id="haveFavorites" class="d-flex align-items-center justify-content-between favorites-contain p-2 rounded-3 mb-2">
//                     <div class="d-flex align-items-center gap-2">
//                       <div class="avatar-two">
//                         <img class="d-none" src="" alt="avatar">
//                         <span class="fs-4 fw-bold">${firstLetter}</span>
//                       </div>
//                       <!-- name-num -->
//                       <div class="name-num-two">
//                         <h4 class="m-0">${arr[i].userNameFavorite}</h4>
//                         <span id="favoriteNumTwo">${arr[i].userNumberFavorite}</span>
//                       </div>
//                     </div>
//                     <a href="tel:${arr[i].userNumberFavorite}" class="phone-icon d-flex align-items-center justify-content-center">
//                       <i class="fa-solid fa-phone"></i>
//                     </a>
//                   </div>
//     `;
//   }
//   document.getElementById("favoritesContain").innerHTML = containFavorites;
//   if (favoritesList.length === 0) {
//     document.getElementById("favoriteContact").classList.remove("d-none");
//     document.getElementById("favorite2Contact").classList.add("d-none");
//     document.getElementById("star").classList.add("d-none");
//   } else {
//     document.getElementById("favoriteContact").classList.add("d-none");
//     document.getElementById("favorite2Contact").classList.remove("d-none");
//     document.getElementById("star").classList.remove("d-none");
//   }
// }
// // Delete contact
// function deleteFavorite(deletedIndex) {
//   favoritesList.splice(deletedIndex, 1);
//   displayFavorites(favoritesList);
//   localStorage.setItem("FavoritesList", JSON.stringify(favoritesList));
//   document.getElementById("favoriteContact").classList.remove("d-none");
//   document.getElementById("favorite2Contact").classList.add("d-none");
//   document.getElementById("star").classList.add("d-none");
//   checkContactsFavorite();
//   updateCounterFavorites();
// }

// checkContactsFavorite;
// function checkContactsFavorite() {
//   if (favoritesList.length === 0) {
//     noFavorites.classList.remove("d-none");
//     haveFavorites.classList.add("d-none");
//   } else {
//     noFavorites.classList.add("d-none");
//     haveFavorites.classList.remove("d-none");
//   }
// }
// checkContactsFavorite();

var emergencyList;
if (localStorage.getItem("EmergencyList") == null) {
  emergencyList = [];
} else {
  emergencyList = JSON.parse(localStorage.getItem("EmergencyList"));
  displayEmergency(emergencyList);
  checkEmergency();
}

function addContactsEmergency(index) {
  var emergency = {
    img: userContacts[index].img,
    userNameEmergency: userContacts[index].userName,
    userNumberEmergency: userContacts[index].userNumber,
  };
  emergencyList.push(emergency);
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  displayEmergency(emergencyList);
  document.getElementById("emergencyContact").classList.add("d-none");
  document.getElementById("emergency2Contact").classList.remove("d-none");
  checkEmergency();
  console.log("wellcom");
}
displayEmergency(emergencyList);

function displayEmergency(arr) {
  var containEmergency = "";
  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].userNameEmergency.charAt(0).toUpperCase();
    containEmergency += `
        <div class="d-flex align-items-center justify-content-between emergency-contain p-2 rounded-3 mb-2">
                    <div class="d-flex align-items-center gap-2">
                      <div class="avatar-two">
                        <img class="d-none" src="" alt="avatar">
                        <span class="fs-4 fw-bold" id="avatarThereLetter">${firstLetter}</span>
                      </div>
                      <!-- name-num -->
                      <div class="name-num-two">
                        <h4 id="emergencyName" class="m-0">${arr[i].userNameEmergency}</h4>
                        <span id="emergencyNumTwo">${arr[i].userNumberEmergency}</span>
                      </div>
                    </div>
                    <a href="tel:${arr[i].userNumberEmergency}" class="phone-icon d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-phone"></i>
                    </a>
                  </div>
    `;
  }
  document.getElementById("emergencyContain").innerHTML = containEmergency;
}
// Delete contact
function deleteEmergency(deletedIndex) {
  emergencyList.splice(deletedIndex, 1);
  displayFavorites(emergencyList);
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  document.getElementById("emergencyContact").classList.remove("d-none");
  document.getElementById("emergency2Contact").classList.add("d-none");
  checkContactsFavorite();
}
var noEmergency = document.getElementById("noEmergency");
// checkContactsFavorite
function checkEmergency() {
  if (emergencyList.length === 0) {
    noEmergency.classList.remove("d-none");
  } else {
    noEmergency.classList.add("d-none");
  }
}
checkEmergencyFavorite();
// NoEmailAddressGruop
function NoEmailAddressGruop() {
  for (var i = 0; i < noData.length; i++) {
    // for no userEmail
    if (userEmail.value == "") {
      document
        .getElementById("formEmailDiv")
        .classList.replace("d-flex", "d-none");
    } else {
      document
        .getElementById("formEmailDiv")
        .classList.replace("d-none", "d-flex");
    }
    // for no userAddress
    if (userAddress.value == "") {
      document
        .getElementById("formAddressDiv")
        .classList.replace("d-flex", "d-none");
    } else {
      document
        .getElementById("formAddressDiv")
        .classList.replace("d-none", "d-flex");
    }
    // for no selectGruop
    if (selectGruop.value == "Select a gruop" || selectGruop.value == "") {
      document.getElementById("dataOfGruop").classList.add("d-none");
    } else {
      document.getElementById("dataOfGruop").classList.remove("d-none");
    }
  }
}
function styleingFavoritesContact() {
  if (favoritesList.length === 0) {
    document.querySelector(".favoriteContact").classList.remove("d-none");
    document.querySelector(".favorite2Contact").classList.add("d-none");
    document.querySelector(".star").classList.add("d-none");
  } else {
    document.querySelector(".favoriteContact").classList.add("d-none");
    document.querySelector(".favorite2Contact").classList.remove("d-none");
    document.querySelector(".star").classList.remove("d-none");
  }
}
var num = document.getElementById("numFavorites");
// numEmergency
var numEmergency = document.getElementById("numEmergency");

var emergencyList;
if (localStorage.getItem("EmergencyList") == null) {
  emergencyList = [];
} else {
  emergencyList = JSON.parse(localStorage.getItem("EmergencyList"));
  displayEmergency(emergencyList);
  updateCounterEmergency();
  checkContactsEmergency();
}
// for counter in Favorites
function updateCounterEmergency() {
  document.getElementById("numFavorites").innerHTML = emergencyList.length;
}
function checkContactsEmergency() {
  if (emergencyList.length === 0) {
    document.getElementById("noEmergency").classList.remove("d-none");
    document.querySelector(".emergency-contain").classList.add("d-none");
  } else {
    document.getElementById("noEmergency").classList.add("d-none");
    document.querySelector(".emergency-contain").classList.remove("d-none");
  }
}

// addContactsFavorite
function addContactsEmergency(index) {
  var emergency = {
    img: userContacts[index].img,
    userNameEmergency: userContacts[index].userName,
    userNumberEmergency: userContacts[index].userNumber,
  };
  favoritesList.push(emergency);
  localStorage.setItem("FavoritesList", JSON.stringify(favoritesList));
  displayEmergency(emergencyList);
  updateCounterEmergency();
  checkContactsEmergency();
}
// displayFavorites
function displayEmergency(arr) {
  var containEmergency = "";
  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].userNameEmergency.charAt(0).toUpperCase();
    containEmergency += `
        <div class="d-flex align-items-center justify-content-between emergency-contain p-2 rounded-3 mb-2">
                    <div class="d-flex align-items-center gap-2">
                      <div class="avatar-two">
                        <img class="d-none" src="" alt="avatar">
                        <span class="fs-4 fw-bold" id="avatarThereLetter">${firstLetter}</span>
                      </div>
                      <!-- name-num -->
                      <div class="name-num-two">
                        <h4 id="emergencyName" class="m-0">${arr[i].userNameEmergency}</h4>
                        <span id="emergencyNumTwo">${arr[i].userNumberEmergency}</span>
                      </div>
                    </div>
                    <a href="tel:${arr[i].userNumberEmergency}" class="phone-icon d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-phone"></i>
                    </a>
                  </div>
    `;
  }
  document.getElementById("emergencyContain").innerHTML = containEmergency;
  // styleingFavoritesContact();
}
// Delete contact
function deleteEmergency(deletedIndex) {
  emergencyList.splice(deletedIndex, 1);
  displayEmergency(emergencyList);
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  // styleingFavoritesContact();
  updateCounterEmergency();
  checkContactsEmergency();
}

// /////////////////////////////////
// numEmergency
var numEmergency = document.getElementById("numEmergency");

// emergencyList
var emergencyList;
if (localStorage.getItem("EmergencyList") == null) {
  emergencyList = [];
} else {
  emergencyList = JSON.parse(localStorage.getItem("EmergencyList"));
  displayEmergency(emergencyList);
  updateCounterEmergency();
  checkContactsEmergency();
}

// for counter in Emergency
function updateCounterEmergency() {
  document.getElementById("numEmergency").innerHTML = emergencyList.length;
}

// check emergency contacts
function checkContactsEmergency() {
  if (emergencyList.length === 0) {
    document.getElementById("noEmergency").classList.remove("d-none");
    document.getElementById("emergencyContain").classList.add("d-none");
  } else {
    document.getElementById("noEmergency").classList.add("d-none");
    document.getElementById("emergencyContain").classList.remove("d-none");
  }
}

// add contact to Emergency
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
  checkContactsEmergency();
}

// display emergency contacts
function displayEmergency(arr) {
  var containEmergency = "";
  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].userNameEmergency.charAt(0).toUpperCase();
    containEmergency += `
      <div class="d-flex align-items-center justify-content-between emergency-contain p-2 rounded-3 mb-2">
        <div class="d-flex align-items-center gap-2">
          <div class="avatar-two">
            <img class="d-none" src="${arr[i].img}" alt="avatar">
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
        <div class="deleteEmergencyBtn" onclick="deleteEmergency(${i})">
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>
    `;
  }
  document.getElementById("emergencyContain").innerHTML = containEmergency;
}

// delete contact from Emergency
function deleteEmergency(deletedIndex) {
  emergencyList.splice(deletedIndex, 1);
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  displayEmergency(emergencyList);
  updateCounterEmergency();
  checkContactsEmergency();
  styleingEmergencyContact();
}

// style emergency buttons (مش ضروري دلوقتي بس لو عايز تعمل أي أيقونات تفعيل/تعطيل)
function styleingEmergencyContact() {
  var allContacts = document.querySelectorAll(".items-Pernat");

  allContacts.forEach((contactDiv, i) => {
    var emergencyBtn = contactDiv.querySelector("#emergencyContact");
    var emergencyBtnActive = contactDiv.querySelector("#emergency2Contact");

    var currentName = userContacts[i].userName;
    var currentNumber = userContacts[i].userNumber;

    var isEmergency =
      emergencyList.findIndex(
        (e) =>
          e.userNameEmergency === currentName &&
          e.userNumberEmergency === currentNumber
      ) !== -1;

    if (isEmergency) {
      emergencyBtn.classList.add("d-none");
      emergencyBtnActive.classList.remove("d-none");
    } else {
      emergencyBtn.classList.remove("d-none");
      emergencyBtnActive.classList.add("d-none");
    }
  });
}
function styleingEmergencyContact() {
  var allContacts = document.querySelectorAll(".items-Pernat");
  var i;

  for (i = 0; i < allContacts.length; i++) {
    var contactDiv = allContacts[i];

    var emergencyBtn = contactDiv.querySelector(".emergencyContact");
    var emergencyBtnActive = contactDiv.querySelector(".emergency2Contact");
    var heartIcon = contactDiv.querySelector(".haert");

    var currentName = userContacts[i].userName;
    var currentNumber = userContacts[i].userNumber;

    var isEmergency = false;
    var j;
    for (j = 0; j < emergencyList.length; j++) {
      if (
        emergencyList[j].userNameEmergency === currentName &&
        emergencyList[j].userNumberEmergency === currentNumber
      ) {
        isEmergency = true;
      }
    }
    if (isEmergency) {
      emergencyBtn.classList.add("d-none");
      emergencyBtnActive.classList.remove("d-none");
      heartIcon.classList.remove("d-none");
    } else {
      emergencyBtn.classList.remove("d-none");
      emergencyBtnActive.classList.add("d-none");
      heartIcon.classList.add("d-none");
    }
  }
}
// emergencyList
var emergencyList;
if (localStorage.getItem("EmergencyList") == null) {
  emergencyList = [];
} else {
  emergencyList = JSON.parse(localStorage.getItem("EmergencyList"));
  displayEmergency(emergencyList);
  checkContactsEmergency();
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
  checkContactsEmergency();
  styleingEmergencyContactOne();
  console.log(emergencyList);
}

// displayEmergency
function displayEmergency(arr) {
  var emergency = "";
  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].userNameEmergency.charAt(0).toUpperCase();
    emergency += `
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
  document.getElementById("emergencyContian").innerHTML = emergency;
}
// deleteEmergency
function deleteEmergency(index) {
  emergencyList.splice(index, 1);
  localStorage.setItem("EmergencyList", JSON.stringify(emergencyList));
  displayEmergency(emergencyList);
  updateCounterEmergency();
  checkContactsEmergency();
  styleingEmergencyContactTwo();
}
// for counter in Emergency
function updateCounterEmergency() {
  document.getElementById("numEmergency").innerHTML = emergencyList.length;
}
// checkContactsFavorite
function checkContactsEmergency() {
  var container = document.getElementById("emergencyContian");
  if (emergencyList.length === 0) {
    document.getElementById("noEmergency").classList.remove("d-none");
    container.classList.add("d-none");
  } else {
    document.getElementById("noEmergency").classList.add("d-none");
    container.classList.remove("d-none");
  }
}
function styleingEmergencyContactOne() {
  document.querySelector(".emergencyContact").classList.remove("d-none");
  document.querySelector(".emergency2Contact").classList.add("d-none");
  document.querySelector(".haert").classList.add("d-none");
  document.querySelector(".dataOfEmergency").classList.add("d-none");
}
function styleingEmergencyContactTwo() {
  document.querySelector(".emergencyContact").classList.toggle("d-none");
  document.querySelector(".emergency2Contact").classList.toggle("d-none");
  document.querySelector(".haert").classList.toggle("d-none");
  document.querySelector(".dataOfEmergency").classList.toggle("d-none");
}
