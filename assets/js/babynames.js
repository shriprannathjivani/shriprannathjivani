
var babynamesGirl = [{
    id: '1',
    babyName: 'अनदया',
    babyG: 'g',
    meaningH: 'अनंत काल के लिए विद्यमान; भगवान कृष्ण; अनन्त; धार्मिक',
    meaningE: 'Honor, Pride, Respect, Glory, Dignity, Honour, Pride, Respect',
},{
    id: '2',
    babyName: 'आदिया',
    babyG: 'g',
    meaningH: 'उपहार; प्रथम; अप्रतिम; उत्तम; पृथ्वी; दुर्गा का दूसरा नाम; प्रारंभिक वास्तविकता',
    meaningE: 'NA',
},
{
    id: '3',
    babyName: 'अहान',
    babyG: 'g',
    meaningH: 'भोर, सूर्योदय, सुबह की महिमा, प्रकाश की पहली किरण; वह जो समय की प्रकृति का है',
    meaningE: 'NA',
},
{
    id: '4',
    babyName: 'अही',
    babyG: 'g',
    meaningH: 'बादल; सूरज; पानी; पृथ्वी और स्वर्ग का मिलन; आठ ',
    meaningE: 'NA',
},
{
    id: '5',
    babyName: 'आभा',
    babyG: 'g',
    meaningH: ' दीप्ति; आलोक; चमक',
    meaningE: 'NA',
},
{
    id: '6',
    babyName: 'इभान',
    babyG: 'g',
    meaningH: 'भगवान गणेश, हाथी के मुंह वाले भगवान',
    meaningE: 'NA',
},
{
    id: '7',
    babyName: 'ईप्सिता',
    babyG: 'g',
    meaningH: 'भोर, सूर्योदय, सुबह की महिमा, प्रकाश की पहली किरण; वह जो समय की प्रकृति का है',
    meaningE: 'NA',
},
{
    id: '8',
    babyName: 'अही',
    babyG: 'g',
    meaningH: 'बादल; सूरज; पानी; पृथ्वी और स्वर्ग का मिलन; आठ ',
    meaningE: 'NA',
},
{
    id: '9',
    babyName: 'आभा',
    babyG: 'g',
    meaningH: ' दीप्ति; आलोक; चमक',
    meaningE: 'NA',
}
]

var babynamesBoy = [
{
    id: '1',
    babyName: 'अहान',
    babyG: 'b',
    meaningH: 'भोर, सूर्योदय, सुबह की महिमा, प्रकाश की पहली किरण; वह जो समय की प्रकृति का है',
    meaningE: 'NA',
},
{
    id: '2',
    babyName: 'ईशान',
    babyG: 'b',
    meaningH: 'भगवान शिव; प्रभु; एक रुद्र; सूर्य का नाम',
    meaningE: 'NA',
},
{
    id: '3',
    babyName: 'इभान',
    babyG: 'b',
    meaningH: 'भगवान गणेश, हाथी के मुंह वाले भगवान',
    meaningE: 'NA',
}
,
{
    id: '4',
    babyName: 'ओबलेश',
    babyG: 'b',
    meaningH: 'भगवान शिव, लिंग के भगवान, शिव का एक विशेष नाम',
    meaningE: 'NA',
}
,
{
    id: '5',
    babyName: 'ऐदेन',
    babyG: 'b',
    meaningH: 'शक्तिशाली',
    meaningE: 'NA',
}
,
{
    id: '6',
    babyName: 'काचीम',
    babyG: 'b',
    meaningH: 'जहां बादल विश्राम करते हैं; एक पवित्र वृक्ष',
    meaningE: 'NA',
}
,
{
    id: '7',
    babyName: 'क्षमाकरम',
    babyG: 'b',
    meaningH: 'क्षमा का स्थान',
    meaningE: 'NA',
}
,
{
    id: '8',
    babyName: 'केयोन',
    babyG: 'b',
    meaningH: 'उगता हुआ सूरज',
    meaningE: 'NA',
}
,
{
    id: '9',
    babyName: 'गालव',
    babyG: 'b',
    meaningH: 'पूजा करना; आबनूस; मजबूत; एक ऋषि',
    meaningE: 'NA',
}
,
{
    id: '10',
    babyName: 'घनानंद',
    babyG: 'b',
    meaningH: 'बादलों की तरह खुश',
    meaningE: 'NA',
}
,
{
    id: '11',
    babyName: 'छायांक',
    babyG: 'b',
    meaningH: 'चांद',
    meaningE: 'NA',
}
,
{
    id: '12',
    babyName: 'जन्य',
    babyG: 'b',
    meaningH: 'ऊर्जावान और बहुत मजबूत',
    meaningE: 'NA',
}

]


function displayBabyNames(divid, teamName) {
    const studentsList = document.getElementById(divid);
    for (let i = 0; i < teamName.length; i++) {
        if (teamName[i].babyG.endsWith("g")) {
            studentsList.innerHTML =
                studentsList.innerHTML +
                `
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="flex-row d-flex babyName-entry babyName_girl bg-white" data-aos="fade-up">
                        <div class="image girl" style="background-image: url('assets/img/icon_girl.png');"></div>
                        <div class="text">
                            <h3 class="babytitle"> ${teamName[i].babyName}</h3>
                            <div class="text-white"><span class="text-black-opacity-05"><b> अर्थात्: </b> ${teamName[i].meaningH}</span></div>
                        </div>
                    </div>
                </div>
                `;
        } else {
            studentsList.innerHTML =
            studentsList.innerHTML +
            `
            <div class="col-12 col-sm-12 col-md-12">
                <div class="flex-row d-flex babyName-entry babyName_boy bg-white" data-aos="fade-up">
                    <div class="image boy" style="background-image: url('assets/img/icon_boy.png');"></div>
                    <div class="text">
                        <h3 class="babytitle">${teamName[i].babyName}</h3>
                        <div class="text-white"><span class="text-black-opacity-05"><b> अर्थात्: </b> ${teamName[i].meaningH}</span></div>
                    </div>
                </div>
            </div>
            `;
        }
    }
}
displayBabyNames("babyNameslistingGirl", babynamesGirl);
displayBabyNames("babyNameslistingBoy", babynamesBoy);
