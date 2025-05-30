
var reelsaList = [
    {
        id: "1",
        name: '💖 हर किरण लीला रूप में है 💖',
        link: "kWXgNvTVMFk"
    },
    {
        id: "2",
        name: '💖 श्री निजानंद पद्धति 💖',
        link: "yZysOoxDa5Q"
    },
    {
        id: "3",
        name: '💖 विरहाश्रुओं में झीलन की मिठास 💖',
        link: "YYcox11XZW4"
    },
    {
        id: "4",
        name: '💖 सोहागनियों के लक्षण 💖',
        link: "X0nx-pvmyXE"
    },
    {
        id: "5",
        name: '💖 श्री तारतम वाणी के सब ग्रंथों में कौन कौन से खज़ाने छुपे हैं? 💖',
        link: "Uowtqgpp84k"
    }
]




function displaysahiyogitaNames(divid, reelsName) {
    const studentsList = document.getElementById(divid);
    for (let i = 0; i < reelsName.length; i++) {

        studentsList.innerHTML =
            studentsList.innerHTML +
            `
            <div class="reelItem">
                <iframe loading="lazy" src="https://www.youtube.com/embed/${reelsName[i].link}?autoplay=0&mute=1&controls=1&&modestbranding=0&rel=0&loop=1" allowfullscreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
                <h4>${reelsName[i].name}</h4>
            </div>
                `;
    }
}
displaysahiyogitaNames("reelsList", reelsaList);

