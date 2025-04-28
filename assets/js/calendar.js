
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
    }
]



function displayCalendarNames(divid, calendarList) {
    const studentsList = document.getElementById(divid);
    for (let i = 0; i < calendarList.length; i++) {

        studentsList.innerHTML =
            studentsList.innerHTML +
            `

            <div class="col-sm-12 col-lg-4 text-center">
                <img src="${calendarList[i].link}" class="w-100">
                <hr>

                <p> कैलेंडर डाउनलोड करें: <br> <b>${calendarList[i].name} </b> </p>
                <a download="${calendarList[i].name} " target="_blank"
                                    href="${calendarList[i].link}"
                                    class="btn btn-primary slider-btn mt-2"> डाउनलोड करे <i
                                        data-feather="download"></i></a>
            </div>
                
                `;
    }
}
displayCalendarNames("calendarList", calendarList);
