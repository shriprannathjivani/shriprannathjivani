
var quickLink = [
    {
        id: "1",
        name: 'आत्मदर्शनम्',
        link: "atmadarshanam.html",
        img: "eye"
    }, {
        id: "2",
        name: 'खेल-खेल में ज्ञान',
        link: "atmadarshanam_games.html",
        img: "dribbble"
    }, {
        id: "3",
        name: 'ज्ञानपीठ वाणी साहित्य',
        link: "https://drive.google.com/drive/folders/1gLm214M5g71RT397XsWfCxHbCyoNxqKv",
        img: "music"
    }, {
        id: "4",
        name: 'पुस्तकालय',
        link: "sahitya.html",
        img: "book-open"
    }, {
        id: "5",
        name: 'ऑडियो',
        link: "audio.html",
        img: "headphones"
    }, {
        id: "6",
        name: 'वीडियो',
        link: "video.html",
        img: "video"
    }, {
        id: "7",
        name: 'ई-मंथन लेखन',
        link: "articles.html",
        img: "pen-tool"
    }, {
        id: "8",
        name: 'शिशु नामकरण',
        link: "babynames.html",
        img: "smile"
    }, {
        id: "9",
        name: 'सेवा कारखाना',
        link: "SevaKarkhana.html",
        img: "users"
    }, {
        id: "10",
        name: 'गूगल क्विज़',
        link: "quizzes.html",
        img: "file-text"
    }, {
        id: "11",
        name: 'मासिक कैलेंडर (डाउनलोड)',
        link: "monthlyCalendar.html",
        img: "calendar"
    }, {
        id: "12",
        name: 'परमहंस श्री रामरतन दास जी <span class="quicklinksmall">श्री बीतक साहेब </span>',
        link: "bitakSaheb_shri_RR_D_Ji.html",
        img: "book"
    },
]


function displaysahiyogitaNames(divid, quickLinkName) {
    const studentsList = document.getElementById(divid);
    for (let i = 0; i < quickLinkName.length; i++) {

        studentsList.innerHTML =
            studentsList.innerHTML +
            `
                    <a target="_blank" href="${quickLinkName[i].link}" class="quicklinkItem">
                        <i data-feather="${quickLinkName[i].img}"></i>
                        ${quickLinkName[i].name}
                    </a>
                `;
    }
}
displaysahiyogitaNames("quickLink", quickLink);

