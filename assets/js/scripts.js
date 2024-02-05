/*--------------------------------------------------------------
  Auto Year
--------------------------------------------------------------*/
document.getElementById("year").innerHTML = (new Date().getFullYear());


/*--------------------------------------------------------------
  JSON
--------------------------------------------------------------*/
const json = {
  "content": {
    "name": "Demo Chat",
    "status": "Online",
  },
  "chat": [
    {
      "sender": "incoming",
      "msg": "Dydh da!",
      "emoji": "",
      "image": "",
      "reaction": "👋",
      "reactionSender": "outgoing",
      "animation": "emojiWave"
    },
    {
      "sender": "incoming",
      "msg": "Fatla genes?",
      "emoji": "🙂",
      "image": "",
      "reaction": "",
      "reactionSender": "",
      "animation": ""
    },
    {
      "sender": "outgoing",
      "msg": "Dydh da!",
      "emoji": "😄",
      "image": "",
      "reaction": "",
      "reactionSender": "",
      "animation": ""
    },
  ]
}

/*--------------------------------------------------------------
  Chat Box
--------------------------------------------------------------*/
const conversation = document.querySelector('.conversation__container');
  
const template = document.createElement('template');

for (const [key, value] of Object.entries(json.chat)) {

  setTimeout(function() {
    template.innerHTML = `
    <div class="bubble ${value.sender}">
      <div class="bubble__container">
        <div class="bubble__typing">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="bubble__content">
          ${
            !value.msg == '' ?
            `<span class="bubble__content--text">${value.msg}</span>` :
            ``
          }

          ${
            !value.msg == '' && !value.emoji == '' && !value.image == '' ?
            `<span class="bubble__content--emoji">${value.emoji}</span>
              <picture>
              <img class="full-width" src="data:image/png;base64,${value.image}" onerror="this.style.display='none'">
            </picture>` :
            
            value.msg == '' && !value.emoji == '' ?
            `<span class="bubble__content--emoji big">${value.emoji}</span>` :
            
            !value.msg == '' && !value.emoji == '' ?
            `<span class="bubble__content--emoji">${value.emoji}</span>` :

            !value.msg == '' && !value.image == '' ?
            `<picture>
              <img class="full-width" src="data:image/png;base64,${value.image}" onerror="this.style.display='none'">
            </picture>` :

            value.msg == '' && !value.image == '' ?
            `<picture>
              <img class="not-full-width" src="data:image/png;base64,${value.image}" onerror="this.style.display='none'"/>
            </picture>` :
            `` 
          }
          
        </div>
        <div class="bubble__content--reaction ${value.reactionSender}">
          <p class="bubble__content--emoji ${value.animation}">${value.reaction}</p>
        </div>
      </div>
    </div>
    `;

    conversation.appendChild(template.content);

  }, 4000 * key);
  
}