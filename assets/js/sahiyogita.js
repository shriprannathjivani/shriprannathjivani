
var sahiyogitaList = [
    {
        id: "1",
        name: 'श्री कृष्ण त्रिधा लीला गूगल क्विज़ - 1',
        link: "https://docs.google.com/forms/d/e/1FAIpQLSesSWifApOqAB6hd9rE3ud8ZcSljwa6D_sgdTAl1B2i-m5yQg/viewform"
    },
    {
        id: "2",
        name: 'श्री कृष्ण त्रिधा लीला गूगल क्विज़ - 2',
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeARFA2TF51MIn4En_lpmTlEdAIjgmR3FPp8sCdY8xDUmM2sA/viewform"
    },
    {
        id: "3",
        name: 'श्री कृष्ण त्रिधा लीला गूगल क्विज़ - 3',
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeGZ435SyVSQ4oqdZvmZ6KIcfBD7tHlW19Ew2i6YfuI5dj-jA/viewform"
    },
    {
        id: "4",
        name: 'श्री कृष्ण त्रिधा लीला गूगल क्विज़ - 4',
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdCkCMbmm78gk2oxRkBE_OLo6rpgmU2p7oiBhUM4MGh4gQNnQ/viewform"
    },
    {
        id: "5",
        name: 'श्री कृष्ण त्रिधा लीला गूगल क्विज़ - 5',
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe2cdedfuMCAZB-f2hJ3-VtDP6DTyCw9PYcyrGuAr0q0sE5GQ/viewform"
    },
    {
        id: "6",
        name: 'श्री कृष्ण त्रिधा लीला गूगल क्विज़ - 6',
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe8rzh-PPBLrk8562oBAt0R0cWR-Yu_GKhF5HFBj4S99l_AUw/viewform?pli=1"
    }
]

var BitakSahebList = [
    {
        id: "1",
        name: 'जल्द ही सूचीबद्ध किया जाएगा',
        link: ""
    }
]


function displaysahiyogitaNames(divid, sahiyogitaName) {
    const studentsList = document.getElementById(divid);
    for (let i = 0; i < sahiyogitaName.length; i++) {

        studentsList.innerHTML =
            studentsList.innerHTML +
            `
             <div class="col-12 col-sm-6 col-md-4 mb-5">
                <a class="text-large" target="_blank" href="${sahiyogitaName[i].link}"> ${sahiyogitaName[i].name} <i data-feather="arrow-up-right"></i> </a>
                <hr>
                <div class="flex-row d-flex podcast-entry bg-white mb-4" data-aos="fade-up">
                    <iframe style="height: 100vh;" width="100%"
                        src="${sahiyogitaName[i].link}"></iframe>
                </div>
            </div>
                
                `;
    }
}
displaysahiyogitaNames("sahiyogitaList", sahiyogitaList);

displaysahiyogitaNames("bitaksahebsahiyogitaList", BitakSahebList);
