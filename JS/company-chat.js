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
const choseActiveCompany = document.querySelector(".chose-active-company");

//variables
let updateCompanyData;
let updateStudentData;

/* Hamburder menu START */
function toggleModal() {
  var modal = document.getElementById("myModal");
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
  choseActiveCompany.innerHTML = `
              <select id="active-company">
                  ${internships.map((company) => {
                    return `<option value="${company.companyName}">${company.companyName}</option>`;
                  })}
              </select>
      `;
  if (
    getLocalStorage("allCompanyList") == null ||
    getLocalStorage("allStudentListToCompany") == null
  ) {
    // internships.forEach((company) => {
    //   company.isActive = false;
    // });

    const currentlyActiveCompany = document.getElementById("active-company").value;
    internships.forEach((company) => {
      if (company.companyName == currentlyActiveCompany) {
        company.isActive = true;
      } else {
        company.isActive = false;
      }
    });

    setLocalStorage("allCompanyList", internships);
    setLocalStorage("allStudentListToCompany", students);
    updateCompanyData = getLocalStorage("allCompanyList");
    updateStudentData = getLocalStorage("allStudentListToCompany");
    console.log(updateCompanyData);
  } else {
    updateStudentData = getLocalStorage("allStudentListToCompany");
    updateCompanyData = getLocalStorage("allCompanyList");
    // Tüm company isActive özelliğini false yap
    const currentlyActiveCompany = document.getElementById("active-company").value;
    updateCompanyData.forEach((company) => {
      if (company.companyName == currentlyActiveCompany) {
        company.isActive = true;
      } else {
        company.isActive = false;
      }
    });
    const currentlyReceiverStudent = updateStudentData[0];
    updateStudentData.forEach((student, index) => {
      if (index == 0) {
        student.receiver = true;
      } else {
        student.receiver = false;
      }
    });

    setLocalStorage("allCompanyList", updateCompanyData);
    setLocalStorage("allStudentListToCompany", updateStudentData);
    updateCompanyData = getLocalStorage("allCompanyList");
    updateStudentData = getLocalStorage("allStudentListToCompany");
    console.log(updateCompanyData);
  }
};
loadedPageSendDataLocalStorage();

function selectactiveCompanyChanged() {
  // Güncel veriyi local storagedan al
  updateCompanyData = getLocalStorage("allCompanyList");
  updateStudentData = getLocalStorage("allStudentListToCompany");

  // Aktif company bul
  const SelectedCompanyName = document.getElementById("active-company").value;
  const activeCompany = updateCompanyData.find((company) => {
    return company.companyName === SelectedCompanyName;
  });

  // Eğer aktif company bulunduysa
  if (activeCompany) {
    // Tüm companies isActive özelliğini false yap
    updateCompanyData.forEach((company) => {
      if (company.id == activeCompany.id) {
        company.isActive = true;
      } else {
        company.isActive = false;
      }
    });

    // Güncellenmiş veriyi local storageda sakla
    setLocalStorage("allCompanyList", updateCompanyData);
    // renderFriendsChatList();
  } else {
    console.log("No active students found.");
  }
  const receiver = updateStudentData.find((student) => student.receiver == true);
  renderMessage(receiver.id);
}

// Değişiklik dinleyicisini <select> elementine ekle
choseActiveCompany.addEventListener("change", selectactiveCompanyChanged);

// Mesajlari gonderim tarihine gore siralayan fonksiyon
const SortMessages = (pMessagesArray) => {
  const sortedMessagesList = pMessagesArray.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  return sortedMessagesList;
};

// Sitede oturum acan kisinin chat alanina, mesajlastigi kisi ile arasindaki mesajlari render eder
const renderMessage = (pReceiverId) => {
  updateCompanyData = getLocalStorage("allCompanyList");
  updateStudentData = getLocalStorage("allStudentListToCompany");

  const updatedList = updateStudentData.map((student) => {
    return { ...student, receiver: student.id === pReceiverId };
  });
  console.log(updatedList);
  setLocalStorage("allStudentListToCompany", updatedList);
  updateStudentData = getLocalStorage("allStudentListToCompany");

  const receiverPerson = updateStudentData.find((student) => student.id == pReceiverId);
  // This write receiver name to right side
  activeChatPersonName.innerText = `${receiverPerson.name} ${receiverPerson.surname}`;
  if (receiverPerson.receiver == true) {
    online.classList.remove("none-dis");
    offline.classList.add("none-dis");
  } else {
    online.classList.add("none-dis");
    offline.classList.remove("none-dis");
  }

  const sender = updateCompanyData.find((company) => company.isActive == true);
  console.log(sender);
  if (sender.chatHistory == undefined) {
    chatArea.innerHTML = "";
  } else {
    const filterIncomingChatHistory = sender.chatHistory.filter(
      (message) => message.senderId == sender.id && message.receiverId == receiverPerson.id
    );
    const filterOngoingChatHistory = sender.chatHistory.filter(
      (message) => message.senderId == receiverPerson.id && message.receiverId == sender.id
    );

    console.log(receiverPerson.id);
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
  updateStudentData = getLocalStorage("allStudentListToCompany");

  const friendsList = updateStudentData.filter(
    (student) => student.school == "Changemaker Educations" && student.receiver == false
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
  updateStudentData.forEach((student) => (student.receiver = false));
  const findReceiver = updateStudentData.find((student) => student.id == friendsList[0].id);
  findReceiver.receiver = true;
  renderMessage(findReceiver.id);
  setLocalStorage("allStudentListToCompany", updateStudentData);
  updateStudentData = getLocalStorage("allStudentListToCompany");

  console.log(friendsList[0]);
  activeChatPersonName.innerText = `${friendsList[0].name} ${friendsList[0].surname}`;
  if (friendsList[0].receiver == true) {
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

  updateCompanyData = getLocalStorage("allCompanyList");
  updateStudentData = getLocalStorage("allStudentListToCompany");
  const messageContent = writtenMessageInput.value;
  if (messageContent) {
    const sender = updateCompanyData.find((company) => company.isActive === true);
    const receiver = updateStudentData.find((student) => student.receiver === true);
    console.log(updateCompanyData);
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
    setLocalStorage("allCompanyList", updateCompanyData);

    // updateCompanyData'ı güncelleyin
    updateCompanyData = getLocalStorage("allCompanyList");
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
