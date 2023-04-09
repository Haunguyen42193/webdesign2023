const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const btnSend = $('button._btnSendCmt_2vs8i_198');
const inpCmt = $('div._cmtInp_2vs8i_180');
const btnAddNote = $("._btnAddNote_2vs8i_48");
const comments = $("._comments_2vs8i_149");
const cmtList = $("._cmtList_2vs8i_188");
const headerTime = document.querySelector("._headerTime_2vs8i_117");
const headerDeleteBtn = $("._headerRightDelete_2vs8i_126");
const icon = $("._icon_2vs8i_172 ");
const bodyRight = $('._bodyRight_2vs8i_90');
const btnCreateNote = bodyRight.querySelector('._headerRight_2vs8i_124');
const btnDeleteNote = bodyRight.querySelector('._headerRight_2vs8i_123');
const mainRight = $("._bodyRight_2vs8i_90");
const cmtHeader = $("._cmtHeader_2vs8i_158")
btnAddNote.addEventListener("click", function () {
    cmtList.style.display = "none";
    headerTime.style.display = "none";
});


const app = {
    currentIndex: 0,

    notes: [
        {
            content: 'Note1',
            info: 'Note and ideas in one convenient place. With this app, you can easilycreate,organize, and access your notes from anywhere and at any time.Now, you can focus on what matters most to you.',
            time: "Created at 09/04/2023, 08:06:36 by Hoàng Nguyễn Đức",
            conment: "123"
        },
        {
            content: 'Note2',
            info: 'Note and ideas in one convenient place. With this app, you can easilycreate,organize, and access your notes from anywhere and at any time.Now, you can focus on what matters most to you.',
            time: "Created at 09/04/2023, 08:06:36 by Hoàng Nguyễn Đức",
            conment: "123"
        }
    ],
    render: function () {
        const htmls = this.notes.map((note, index) => {
            return `
        <li class="_leftItem_2vs8i_22  ${index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
          <h6 class="_leftItemTitle_2vs8i_30">${note.content}</h6>
          <p class="_leftItemText_2vs8i_39">${note.info}</p>
        </li>
      `
        }).join('') // use join to convert array of strings to a single string

        const ul = $("ul._bodyLeft_2vs8i_13");
        ul.innerHTML = htmls; // set the innerHTML of the ul to the htmls string
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentNote", {
            get: function () {
                return this.notes[this.currentIndex];
            }
        });
    },
    hideCmt: function () {
        cmtList.style.display = "none";
    },
    showCmt: function () {
        cmtList.style.display = "inline-block"
    },
    getCurrentDateTime: function () {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear().toString();
        const hour = now.getHours().toString().padStart(2, '0');
        const minute = now.getMinutes().toString().padStart(2, '0');
        const second = now.getSeconds().toString().padStart(2, '0');
        return `${day}/${month}/${year}, ${hour}:${minute}:${second}`;
    },
    display: function () {
        // $("._headerTitle_2vs8i_110").textContent = this.currentNote.content;
        // $("._bodyRightContent_2vs8i_141").textContent = this.currentNote.info;
    },
    hideControl: function () {
        // comments.style.display = "none";
        // headerTime.style.display = "none";
        // hide the comments and timestamp elements
        btnCreateNote.style.display = 'inline-block';
        // btnDeleteNote.style.display = 'none';
    },
    showControl: function () {
        // comments.style.display = "inline-block";
        // headerTime.style.display = "inline-block";
        // // hide the comments and timestamp elements
        // btnCreateNote.style.display = 'none';
        // btnDeleteNote.style.display = 'inline-block';
    },
    render2: function () {
        this.notes.forEach((note, index) => {
            if (index === this.currentIndex) {
                $("._headerTitle_2vs8i_110").textContent = note.content;
                $("._bodyRightContent_2vs8i_141").textContent = note.info;
            }

        })

    },
    handleEvent: function () {
        headerDeleteBtn.onclick = function () {
            const ul = document.querySelector("ul._bodyLeft_2vs8i_13");
            const liToRemove = ul.querySelector("li._leftItem_2vs8i_22.active");

            liToRemove.remove();
        }
        btnSend.onclick = function () {
            const cmtText = inpCmt.textContent;
            // Tạo một phần tử div mới cho comment
            const cmtDiv = document.createElement('div');
            cmtDiv.classList.add('_wrapper_14aty_1');

            // Tạo phần tử header cho comment
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('_header_14aty_8');

            const headerLeftDiv = document.createElement('div');
            headerLeftDiv.classList.add('_headerLeft_14aty_15');
            headerLeftDiv.textContent = `Created at ${app.getCurrentDateTime()} by ${$('._userName_5waku_84').textContent}`;

            headerDiv.appendChild(headerLeftDiv);

            // Tạo phần tử content cho comment
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('_content_14aty_36');
            contentDiv.textContent = cmtText;

            // Chèn phần tử header và content vào comment
            cmtDiv.appendChild(headerDiv);
            cmtDiv.appendChild(contentDiv);

            // Chèn comment vào danh sách comment
            const cmtListDiv = document.querySelector('div._cmtList_2vs8i_188');
            cmtListDiv.appendChild(cmtDiv);

            // Xóa nội dung của input comment sau khi đã thêm comment thành công
            inpCmt.textContent = '';

        }
        btnAddNote.onclick = function () {
            // comments.style.display = "none";
            // headerTime.style.display = "none";
            // // hide the comments and timestamp elements
            // btnCreateNote.style.display = 'inline-block';
            // btnDeleteNote.style.display = 'none';
            app.hideControl();
        }
        btnCreateNote.onclick = function () {
            app.notes.push({
                content: $("._headerTitle_2vs8i_110").textContent,
                ignfo: $("._bodyRightContent_2vs8i_141").textContent
                // time: $("._headerTime_2vs8i_117").textContent
                // comment: $("._bodyRihtContent_2vs8i_141").textContent
            });
            app.render();
            app.handleEvent();
        }
        cmtHeader.onclick = function () {
            if (icon.classList.contains("_active_2vs8i_26")) {

                icon.classList.remove("_active_2vs8i_26")
                app.hideCmt();
            }
            else {
                icon.classList.add("_active_2vs8i_26")
                app.showCmt();
            }
        }
        mainRight.onclick = function (e) {
            const btn = e.target.closest("_bodyRightContent_2vs8i_141")
            console.log(btn);
        }
        const ulList = document.querySelector('._bodyLeft_2vs8i_13');
        ulList.onclick = function (e) {
            const liNode = e.target.closest("._leftItem_2vs8i_22:not(.active)")
            if (liNode) {
                app.currentIndex = Number(liNode.dataset.index);

                app.render();
                // $("._headerTitle_2vs8i_110").textContent = liNode.querySelector('._leftItemTitle_2vs8i_30').textContent; // select the h6 element within the li element
                // $("._bodyRightContent_2vs8i_141").textContent = liNode.querySelector('._leftItemText_2vs8i_39').textContent;
                app.render2();
            }

        }

    },

    start: function () {
        this.render();
        this.handleEvent();

    }
}

app.start();
