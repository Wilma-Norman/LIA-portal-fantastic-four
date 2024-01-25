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

//variables
let updateData;
const timestamp = new Date().getTime();

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
if (getLocalStorage("allStudentList") == null) {
  students[0].isActive = true;
  setLocalStorage("allStudentList", students);
  updateData = getLocalStorage("allStudentList");
} else {
  updateData = getLocalStorage("allStudentList");
}

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

// Sitede oturum acan kisinin chat alanina, mesajlastigi kisi ile arasindaki mesajlari render eder
const renderMessage = (pReceiverId) => {
  updateData = getLocalStorage("allStudentList");

  const updatedList = updateData.map((student) => {
    return { ...student, receiver: student.id === pReceiverId };
  });

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

  console.log(receiverPerson);
  if (receiverPerson[0].chatHistory == undefined) {
    chatArea.innerHTML = "";
  } else {
    const messagesList = SortMessages(receiverPerson[0].chatHistory);
    chatArea.innerHTML = messagesList
      .map((message) => {
        return message.type === "incoming"
          ? `<p class="sended-message">${message.content}</p>`
          : `<p class="received-message">${message.content}</p>`;
      })
      .join("");
  }
};

// Mesajlari gonderim tarihine gore siralayan fonksiyon
const SortMessages = (pMessagesArray) => {
  const sortedMessagesList = pMessagesArray.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });

  return sortedMessagesList;
};

// This fonksiyon send message
const sendNewMessage = () => {
  updateData = getLocalStorage("allStudentList");

  const sender = updateData.find((student) => student.isActive === true);
  const receiver = updateData.find((student) => student.receiver === true);
  const messageContent = writtenMessageInput.value;
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

  console.log(sender);
  console.log(receiver);
  console.log(messageContent);
};

sendMessageButton.addEventListener("click", sendNewMessage);
