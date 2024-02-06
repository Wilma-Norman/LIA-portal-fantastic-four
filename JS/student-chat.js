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

/* Hamburder menu  */
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

    // Güncellenmiş veriyi local storageda sakla
    setLocalStorage("allStudentList", updateData);
  } else {
    console.log("No active students found.");
  }
  renderFriendsChatListStudent();
}
// Değişiklik dinleyicisini <select> elementine ekle
choseActiveStudent.addEventListener("change", selectActiveStudentChanged);

// Mesajlari gonderim tarihine gore siralayan fonksiyon
const SortMessages = (pMessagesArray) => {
  const sortedMessagesList = pMessagesArray.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });

  return sortedMessagesList;
};
// Sitede oturum acan kisinin chat alanina, mesajlastigi kisi ile arasindaki mesajlari render eder
const renderMessageStudent = (pReceiverId) => {
  updateData = getLocalStorage("allStudentList");

  // alici disindakilerin receiver degeri false olur
  const updatedList = updateData.map((student) => {
    return { ...student, receiver: student.id === pReceiverId };
  });

  setLocalStorage("allStudentList", updatedList);
  updateData = getLocalStorage("allStudentList");

  const receiverPerson = updateData.find((student) => student.id == pReceiverId);
  // This write receiver name to right side
  activeChatPersonName.innerText = `${receiverPerson.name} ${receiverPerson.surname}`;
  if (receiverPerson.receiver == true) {
    online.classList.remove("none-dis");
    offline.classList.add("none-dis");
  } else {
    online.classList.add("none-dis");
    offline.classList.remove("none-dis");
  }

  const sender = updateData.find((student) => student.isActive == true);
  if (sender.chatHistory == undefined) {
    chatArea.innerHTML = "";
  } else {
    const filterIncomingChatHistory = sender.chatHistory.filter(
      (message) => message.senderId == sender.id && message.receiverId == receiverPerson.id
    );
    const filterOngoingChatHistory = sender.chatHistory.filter(
      (message) => message.senderId == receiverPerson.id && message.receiverId == sender.id
    );

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
const getMessageFromActiveStudent = (pReceiverId) => {
  const senderPerson = updateData.find((student) => student.isActive == true);
  const receiverChathistory = updateData.find((student) => student.id == pReceiverId).chatHistory;
  let abc = `${pReceiverId} id li elemanin ${senderPerson.name} den alidigi mesaj`;
  let lastMessage = null;

  if (receiverChathistory.length > 0) {
    for (const message of receiverChathistory) {
      if (message.senderId == senderPerson.id || message.receiverId == senderPerson.id) {
        console.log(abc + "...mesajlar bulundu");
        lastMessage = [
          receiverChathistory[receiverChathistory.length - 1].content,
          receiverChathistory[receiverChathistory.length - 1].timestamp,
        ];
        break; // Döngüyü burada sonlandır
      } else {
        lastMessage = ["You don't have a connection yet!", null];
        console.log(abc + "...mesajlar bulunamadı");
      }
    }
  } else {
    console.log(abc + "...hiç mesaj yok");
    lastMessage = ["You don't have a connection yet!", null];
  }

  // if (receiverChathistory.length > 0) {
  //   receiverChathistory.forEach((message) => {
  //     if (message.senderId == senderPerson.id) {
  //       console.log(abc + "...mesarlar bulundu");
  //       lastMessage = [
  //         receiverChathistory[receiverChathistory.length - 1].content,
  //         receiverChathistory[receiverChathistory.length - 1].timestamp,
  //       ];
  //       break
  //     } else {
  //       lastMessage = ["You don't have a connection yet!", null];
  //       console.log(abc + "...mesarlar bulunamadu");
  //     }
  //   });
  // } else {
  //   console.log(abc + "...his mesaji yok");
  //   lastMessage = ["You don't have a connection yet!", null];
  // }

  return lastMessage;
};

/* Render dynamic friends list to sidebar of student chat page  START*/
const renderFriendsChatListStudent = () => {
  updateData = getLocalStorage("allStudentList");
  const friendsList = updateData.filter(
    (student) => student.school == "Changemaker Educations" && student.isActive == false
  );
  const activeStudent = updateData.find((e) => e.isActive == true);
  activeStudent.receiver = false;
  // friendsList[0].receiver = true;
  setLocalStorage("allStudentList", updateData);
  updateData = getLocalStorage("allStudentList");

  const chatList = friendsList
    .map((student) => {
      const lastMessageInfo = getMessageFromActiveStudent(student.id);
      return `
       <div onclick="renderMessageStudent(${student.id})" class="chat-person-container">
            <img class="chat-friend-img" src="../Image/lia.png" alt="" />
            <div class="friend-info">
                <p class="name">${student.name} ${student.surname}</p>
                <p class="last-message">
                    <span class="message">${lastMessageInfo[0].slice(
                      0,
                      32
                    )}</span> <span class="date">${
        lastMessageInfo[1] !== null
          ? new Date(lastMessageInfo[1]).getHours() +
            " " +
            new Date(lastMessageInfo[1]).getMinutes()
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

  /** */
  updateData = getLocalStorage("allStudentList");

  if (!updateData.find((e) => e.receiver == true)) {
    updateData.forEach((student) => (student.receiver = false));
    const findReceiver = updateData.find((student) => student.id == friendsList[0].id);
    findReceiver.receiver = true;
    renderMessageStudent(findReceiver.id);
    setLocalStorage("allStudentList", updateData);
    updateData = getLocalStorage("allStudentList");
    activeChatPersonName.innerText = `${findReceiver.name} ${findReceiver.surname}`;

    if (findReceiver.receiver == true) {
      online.classList.remove("none-dis");
      offline.classList.add("none-dis");
    } else {
      online.classList.add("none-dis");
      offline.classList.remove("none-dis");
    }
  } else {
    const activeRecevier = updateData.find((el) => el.receiver == true);
    renderMessageStudent(activeRecevier.id);

    activeChatPersonName.innerText = `${activeRecevier.name} ${activeRecevier.surname}`;
    online.classList.remove("none-dis");
    offline.classList.add("none-dis");
  }
  /** */
};
renderFriendsChatListStudent();
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
    renderMessageStudent(receiver.id);

    writtenMessageInput.value = "";
  } else {
    alert("Sending an empty message may not be polite :)");
  }
  renderFriendsChatListStudent();
};

sendMessageButton.addEventListener("click", sendNewMessage);
// Enter tuşu ile formu gönderme
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sendNewMessage();
  }
});
