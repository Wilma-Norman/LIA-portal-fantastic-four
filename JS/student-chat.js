//Dom elements
const scroolContainer = document.querySelector(".scrool-container");
const scroolContainerHamburger = document.querySelector(".scrool-container-hamburger");
const chatSidebar = document.querySelector(".chat-sidebar");
const chatSidebarHamburger = document.querySelector(".chat-sidebar-hamburger");
const modalIcon = document.querySelector(".modal-icon");
const chatArea = document.querySelector(".chat-area");
const chatPersonContainer = document.querySelector(".chat-person-container");
const sendMessageButton = document.querySelector("#send-message-button");
const writtenMessageInput = document.querySelector(".written-message-input");
const activeChatPersonName = document.querySelector(".active-chat-person-name");
const online = document.querySelector(".online");
const offline = document.querySelector(".offline");
const choseActiveStudent = document.querySelector(".chose-active-student");

//variables
let updateData;

/* Hamburder menu START */
function toggleModal() {
  var modal = document.getElementById("myModal");
  //   modal.style.display = modal.style.display === "none" ? "block" : "none";
  modal.classList.toggle("none-dis");
  toggleMenu();
}
modalIcon.addEventListener("click", toggleModal);

function toggleMenu() {
  modalIcon.classList.toggle("menu-open");
}
/* Hamburder menu END */

/**
 * LocalStorage add and get functions
 */
const setLocalStorage = (pStringKey, pArrar) => {
  localStorage.setItem(pStringKey, JSON.stringify(pArrar));
};
const getLocalStorage = (pStringKey) => {
  return JSON.parse(localStorage.getItem(pStringKey));
};
// Sayfa yuklendiginde datayi locae yukle.   <option value="volvo">Who is logged?</option>
const loadedPageSendDataLocalStorage = () => {
  choseActiveStudent.innerHTML = `
              <select id="active-students">
                  ${students.map((student) => {
                    return `<option value="${student.name} ${student.surname}">${student.name} ${student.surname}</option>`;
                  })}
              </select>
      `;
  if (getLocalStorage("allStudentList") == null) {
    students.forEach((student) => {
      student.isActive = false;
    });

    // Aktif öğrenciyi bul
    const activeStudent = students.find((student) => {
      const nameSurname = `${student.name} ${student.surname}`;
      return nameSurname === document.getElementById("active-students").value;
    });

    activeStudent.isActive = true;
    setLocalStorage("allStudentList", students);
    updateData = getLocalStorage("allStudentList");
  } else {
    updateData = getLocalStorage("allStudentList");
    // Tüm öğrencilerin isActive özelliğini false yap
    updateData.forEach((student) => {
      student.isActive = false;
    });
    // Aktif öğrenciyi bul
    const activeStudent = updateData.find((student) => {
      const nameSurname = `${student.name} ${student.surname}`;
      return nameSurname === document.getElementById("active-students").value;
    });
    activeStudent.isActive = true;
    setLocalStorage("allStudentList", updateData);
  }
};
loadedPageSendDataLocalStorage();

function selectActiveStudentChanged() {
  const choseSelectedElement = document.getElementById("active-students");

  // Seçilen değeri al
  const selectedValue = choseSelectedElement.value;

  // Güncel veriyi local storagedan al
  updateData = getLocalStorage("allStudentList");

  // Aktif öğrenciyi bul
  const activeStudent = updateData.find((student) => {
    const nameSurname = `${student.name} ${student.surname}`;
    return nameSurname === selectedValue;
  });

  // Eğer aktif öğrenci bulunduysa
  if (activeStudent) {
    // Tüm öğrencilerin isActive özelliğini false yap
    updateData.forEach((student) => {
      if (student.id == activeStudent.id) {
        student.isActive = true;
      } else {
        student.isActive = false;
      }
    });

    // Seçilen öğrencinin isActive özelliğini true yap
    // activeStudent.isActive = true;

    // Güncellenmiş veriyi local storageda sakla
    setLocalStorage("allStudentList", updateData);
    renderFriendsChatList();
  } else {
    console.log("No active students found.");
  }
}
// Değişiklik dinleyicisini <select> elementine ekle
choseActiveStudent.addEventListener("change", selectActiveStudentChanged);
console.log(choseActiveStudent);

// // Değişiklik dinleyicisi fonksiyonu
// function selectActiveStudentChanged() {
//   const choseSelectedElement = document.getElementById("active-students");

//   const selectedValue = choseSelectedElement.value;
//   const activeStudent = updateData.find((student) => {
//     const nameSurname = `${student.name} ${student.surname}`;
//     return nameSurname === selectedValue;
//   });

//   console.log(`Seçilen değer: ${selectedValue}`);
//   console.log(activeStudent);
// }

// Mesajlari gonderim tarihine gore siralayan fonksiyon
const SortMessages = (pMessagesArray) => {
  console.log(pMessagesArray);
  const sortedMessagesList = pMessagesArray.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  console.log(sortedMessagesList);

  return sortedMessagesList;
};
// Sitede oturum acan kisinin chat alanina, mesajlastigi kisi ile arasindaki mesajlari render eder
const renderMessage = (pReceiverId) => {
  updateData = getLocalStorage("allStudentList");

  const updatedList = updateData.map((student) => {
    return { ...student, receiver: student.id === pReceiverId };
  });
  console.log(updatedList);
  setLocalStorage("allStudentList", updatedList);
  updateData = getLocalStorage("allStudentList");

  const receiverPerson = updateData.filter((student) => student.id == pReceiverId);
  // This write receiver name to right side
  activeChatPersonName.innerText = `${receiverPerson[0].name} ${receiverPerson[0].surname}`;
  if (receiverPerson[0].isActive == true) {
    online.classList.remove("none-dis");
    offline.classList.add("none-dis");
  } else {
    online.classList.add("none-dis");
    offline.classList.remove("none-dis");
  }

  updateData = getLocalStorage("allStudentList");
  const sender = updateData.find((student) => student.isActive == true);
  if (sender.chatHistory == undefined) {
    chatArea.innerHTML = "";
  } else {
    const filterIncomingChatHistory = sender.chatHistory.filter(
      (message) => message.senderId == sender.id && message.receiverId == receiverPerson[0].id
    );
    const filterOngoingChatHistory = sender.chatHistory.filter(
      (message) => message.senderId == receiverPerson[0].id && message.receiverId == sender.id
    );

    console.log(receiverPerson[0].id);
    console.log(sender.id);
    console.log(filterIncomingChatHistory.concat(filterOngoingChatHistory));

    const messagesList = SortMessages(filterIncomingChatHistory.concat(filterOngoingChatHistory));
    chatArea.innerHTML = messagesList
      .map((message) => {
        return message.type === "incoming"
          ? `<p class="received-message">${message.content}</p>`
          : `<p class="sended-message">${message.content}</p>`;
      })
      .join("");
  }
};

/* Render dynamic friends list to sidebar of student chat page  START*/
const renderFriendsChatList = () => {
  const friendsList = updateData.filter(
    (student) => student.school == "Changemaker Educations" && student.isActive == false
  );

  const chatList = friendsList
    .map((studnet) => {
      return `
       <div onclick="renderMessage(${studnet.id})" class="chat-person-container">
            <img class="chat-friend-img" src="../Image/lia.png" alt="" />
            <div class="friend-info">
                <p class="name">${studnet.name} ${studnet.surname}</p>
                <p class="last-message">
                    <span class="message">${
                      studnet.chatHistory == undefined
                        ? studnet.chatHistory[studnet.chatHistory.length - 1].message
                        : "You don't connettion yet!"
                    }</span> <span class="date">${
        studnet.chatHistory == undefined
          ? studnet.chatHistory[studnet.chatHistory.length - 1].date
          : ""
      }</span>
                </p>
            </div>
        </div>
        `;
    })
    .join("");

  scroolContainer.innerHTML = chatList;
  scroolContainerHamburger.innerHTML = chatList;

  // arkadas listesi yuklendiginde ilk siradaki kisinin alici olarak belirlenmesi
  updateData = getLocalStorage("allStudentList");
  updateData.forEach((student) => (student.receiver = false));
  const findReceiver = updateData.find((student) => student.id == friendsList[0].id);
  findReceiver.receiver = true;
  renderMessage(findReceiver.id);
  //   friendsList[0].receiver = true;
  setLocalStorage("allStudentList", updateData);
  console.log(friendsList[0]);
  activeChatPersonName.innerText = `${friendsList[0].name} ${friendsList[0].surname}`;
  if (friendsList[0].isActive == true) {
    online.classList.remove("none-dis");
    offline.classList.add("none-dis");
  } else {
    online.classList.add("none-dis");
    offline.classList.remove("none-dis");
  }
};
renderFriendsChatList();
/* Render dynamic friends list to sidebar of student chat page  END*/

// This fonksiyon send message
const sendNewMessage = () => {
  const timestamp = new Date().getTime();

  updateData = getLocalStorage("allStudentList");
  const messageContent = writtenMessageInput.value;
  if (messageContent) {
    const sender = updateData.find((student) => student.isActive === true);
    const receiver = updateData.find((student) => student.receiver === true);
    console.log(updateData);
    console.log(receiver);
    // Gönderen için yeni mesaj
    const newMessageSender = {
      receiverId: receiver.id,
      senderId: sender.id,
      content: messageContent,
      type: "outgoing",
      timestamp: timestamp,
    };

    // Alıcı için yeni mesaj
    const newMessageReceiver = {
      receiverId: receiver.id,
      senderId: sender.id,
      content: messageContent,
      type: "incoming",
      timestamp: timestamp,
    };

    // Gönderenin ve alıcının chatHistory alanlarına yeni mesajları ekleyin
    sender.chatHistory.push(newMessageSender);
    receiver.chatHistory.push(newMessageReceiver);

    // Güncellenmiş veriyi localStorage'a geri yazın
    setLocalStorage("allStudentList", updateData);

    // updateData'ı güncelleyin
    updateData = getLocalStorage("allStudentList");
    renderMessage(receiver.id);

    writtenMessageInput.value = "";
    console.log(sender);
    console.log(receiver);
  } else {
    alert("Sending an empty message may not be polite :)");
  }

  console.log(messageContent);
};

sendMessageButton.addEventListener("click", sendNewMessage);
// Enter tuşu ile formu gönderme
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sendNewMessage();
  }
});
