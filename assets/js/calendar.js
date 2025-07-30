
var calendarList = [
    {
        id: "1",
        name: 'अप्रैल 2025 / April 2025',
        link: "assets/img/calendar/Spjv calendar April.png"
    },
    {
        id: "2",
        name: 'मई 2025 / May 2025',
        link: "assets/img/calendar/Spjv calendar may.png"
    },
    {
        id: "3",
        name: 'जून 2025 / June 2025',
        link: "assets/img/calendar/Spjv calendar June.png"
    },
    {
        id: "4",
        name: 'जुलाई 2025 / July 2025',
        link: "assets/img/calendar/Spjv calendar Final july.png"
    },
    {
        id: "5",
        name: 'अगस्त 2025 / Agust 2025',
        link: "assets/img/calendar/Spjv calendar august.png"
    }
]



function displayCalendarNames(divid, calendarList) {
    const studentsList = document.getElementById(divid);
    for (let i = 0; i < calendarList.length; i++) {

        studentsList.innerHTML =
            studentsList.innerHTML +
            `
                <div class="col-lg-3 col-md-3 col-sm-12 mb-5">
                    <div class="card karkhanaListCard">
                        <div class="card-img-body">
                            <img src="${calendarList[i].link}" class="card-img-top" style="aspect-ratio: auto;">
                        </div>
                        <div class="card-body text-center">
                           <div class="contact-detail">
                                <span class="mb-2">कैलेंडर डाउनलोड करें:</span>
                                <p class="card-text">${calendarList[i].name}</p>
                            </div>
                            <a style="font-size:18px;" download="${calendarList[i].name} " href="${calendarList[i].link}" class="btn btn-primary btnapply">डाउनलोड करे</a>
                        </div>
                    </div>
                 </div>
          
                
                `;
    }
}
displayCalendarNames("calendarList", calendarList);


// calendar start 
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Sample events yyyy-mm-dd
const events = {
    "2025-04-12": {
        text: "श्री बाईजूराज महारानी जी प्रगटन महोत्सव",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-04-20": {
        text: "श्री रामरतन दास महाराज जी प्रगटन दिवस",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-04-30": {
        text: "अक्षय तृतीया (छत्रसाल जी द्वारा चौपड़ा मंदिर में श्रीजी की पधरावनी)",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-05-05": {
        text: "श्री बाईजूराज अंतर्धान तिथि 5 मई वैशाख शुक्ल 8 सोमवार",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-05-28": {
        text: "श्री बाबा दयाराम साहेब जी प्रगटन दिवस ज्येष्ठ शुक्ल द्वितीय 8 बुधवार ",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-05-29": {
        text: "महाराजा श्री छत्रसाल जयंती 29 मई जयेष्ठ शुक्ल 3 गुरूवार",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-10-18": {
        text: "गुरु जी श्री मंगल दास जी की जन्म तिथि",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-05-01": {
        text: "धामगमन, 1 मई ईस्वी 1985 बैसाख मास शुक्ल पक्ष द्वादशी ",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-07-10": {
        text: "गुरु पूर्णिमा- आषाढ़ शुक्ल पूर्णिमा - गुरुवार ",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-07-14": {
        text: "महामति श्री प्राणनाथ जी अन्तर्धान चतुर्थीं व्रत श्रावण कृष्ण 04 सोमवार",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-07-15": {
        text: "पंचमी भंडारा, श्री बीतक चर्चा प्रारंभ श्रावण कृष्ण 05 मंगलवार",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-08-09": {
        text: "रक्षा बंधन (बीतक में श्रीजी और छत्रसाल भेंट प्रसंग) भाद्रपद कृष्ण 08 - शनिवार",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-08-16": {
        text: "श्री कृष्ण जन्माष्टमी (श्री बीतक चर्चा की पूणाहुति) भाद्रपद कृष्ण 08 - शनिवार",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    },
    "2025-08-17": {
        text: "श्री राज प्रगटन महोत्सव - भाद्रपद कृष्ण नवमी - रविवार",
        bgColor: "#99093a",
        textColor: "#fff",
        image: ""
    }
};

// Default weekday text
const defaultWeekdayTexts = {
    0: {
        text: "ई-गोष्ठी व ‘आत्मदर्शनम्’ कार्यक्रम",
        bgColor: "#ffe7df",
        textColor: "#ff2543"
    },
    1: {
        text: "श्री बीतक साहेब व श्री सिंधी चर्चा ",
        bgColor: "#f9eeff",
        textColor: "#5e17eb"
    },
    2: {
        text: "श्री बीतक साहेब व श्री सिंधी चर्चा ",
        bgColor: "#f9eeff",
        textColor: "#5e17eb"
    },
    3: {
        text: "श्री बीतक साहेब व श्री सिंधी चर्चा ",
        bgColor: "#f9eeff",
        textColor: "#5e17eb"
    },
    4: {
        text: "श्री बीतक साहेब चर्चा & महाराजजी बीतक",
        bgColor: "#ffecf9",
        textColor: "#f518a0"
    },
    5: {
        text: "ई-मंथन & महाराजजी बीतक",
        bgColor: "#ecf9ff",
        textColor: "#065a83"
    },
    6: {
        text: "एकांत",
        bgColor: "#f5f5f5",
        textColor: "#6f0523"
    }
};

function initDropdowns() {
    const monthSelect = document.getElementById("monthSelect");
    const yearSelect = document.getElementById("yearSelect");

    for (let i = 0; i < 12; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = monthNames[i];
        if (i === currentMonth) opt.selected = true;
        monthSelect.appendChild(opt);
    }

    for (let y = currentYear - 5; y <= currentYear + 5; y++) {
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = y;
        if (y === currentYear) opt.selected = true;
        yearSelect.appendChild(opt);
    }

    // ✅ Fix: update globals, then render
    monthSelect.addEventListener("change", function () {
        currentMonth = parseInt(this.value);  // update global first
        renderCalendar();                     // then render
    });

    yearSelect.addEventListener("change", function () {
        currentYear = parseInt(this.value);  // update global first
        renderCalendar();                     // then render
    });
    renderEventList();
}

function renderCalendar() {
    const month = parseInt(document.getElementById("monthSelect").value);
    const year = parseInt(document.getElementById("yearSelect").value);

    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach(day => {
        const div = document.createElement("div");
        div.className = "day-name";
        div.textContent = day;
        grid.appendChild(div);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        grid.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const div = document.createElement("div");
        div.className = "day";
        div.innerHTML = `<span>${day}</span>`;

        // ✅ Highlight today's date
        const isToday =
            day === currentDate.getDate() &&
            month === currentDate.getMonth() &&
            year === currentDate.getFullYear();
        if (isToday) {
            div.classList.add("today");
        }

        const weekday = new Date(year, month, day).getDay();
        let event = events[dateStr];

        // Apply default event text if no custom event exists
        if (!event && defaultWeekdayTexts.hasOwnProperty(weekday)) {
            const defaultData = defaultWeekdayTexts[weekday];
            event = {
                text: defaultData.text,
                bgColor: defaultData.bgColor || "#f0f0f0",
                textColor: defaultData.textColor || "#333",
                image: defaultData.image || ""
            };
        }

        if (event) {
            if (event.bgColor) div.style.backgroundColor = event.bgColor;
            if (event.textColor) div.style.color = event.textColor;
            if (event.image) {
                div.classList.add("with-bg");
                div.style.backgroundImage = `url(${event.image})`;
            }
            const evtDiv = document.createElement("div");
            evtDiv.className = "eventday";
            evtDiv.textContent = event.text;
            div.appendChild(evtDiv);
        }

        // Optionally enable event editing here
        /*
        div.onclick = () => {
          const text = prompt("Enter event title:", event?.text || "");
          const bgColor = prompt("Background color (e.g., #f00):", event?.bgColor || "");
          const textColor = prompt("Text color:", event?.textColor || "");
          const image = prompt("Image URL (optional):", event?.image || "");
          if (text) {
            events[dateStr] = { text, bgColor, textColor, image };
            renderCalendar();
          }
        };
        */

        grid.appendChild(div);
    }

    renderEventList();
}

function changeMonth(offset) {
    currentMonth += offset;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    document.getElementById("monthSelect").value = currentMonth;
    document.getElementById("yearSelect").value = currentYear;
    renderCalendar();
    renderEventList();
}

function renderEventList() {
    const eventListEl = document.getElementById("eventList");
    eventListEl.innerHTML = "";

    const filteredDates = Object.keys(events).filter(dateStr => {
        const [y, m] = dateStr.split("-").map(Number);
        return y === currentYear && m === currentMonth + 1;
    }).sort();

    filteredDates.forEach(dateStr => {
        const event = events[dateStr];
        const li = document.createElement("li");
        li.innerHTML = `<strong>${dateStr}</strong>: ${event.text}`;
        eventListEl.appendChild(li);
    });

    if (filteredDates.length === 0) {
        eventListEl.innerHTML = "<li>इस महीने कोई महत्वपूर्ण तिथियाँ नहीं है।</li>";
    }
}

// Initialize calendar
initDropdowns();
renderCalendar();
renderEventList();

