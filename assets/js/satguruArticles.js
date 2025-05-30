
var satguruArticlesList = [
    {
        id: "1",
        name: 'ई-मंथन - श्री प्रकाश ग्रन्थ का मर्म क्या है?',
        img: 'assets/img/rajan_swamiji.jpeg',
        link: "link of artical",
        articleDetails:`<div class="apple-card-content"> <h3>Hello world</h3> </div>`,
        tikaName: "टीका - श्री राजन स्वामी जी",
        writer: "लेखक - दुष्यंत तोमर जी"
    },
    {   
        id: "1",
        name: 'ई-मंथन - श्री प्रकाश ग्रन्थ का मर्म क्या है?',
        img: 'assets/img/rajan_swamiji.jpeg',
        link: "link of artical",
        tikaName: "टीका - श्री राजन स्वामी जी",
        writer: "लेखक - दुष्यंत तोमर जी"
    },
    {
        id: "1",
        name: 'ई-मंथन - श्री प्रकाश ग्रन्थ का मर्म क्या है?',
        img: 'assets/img/rajan_swamiji.jpeg',
        link: "link of artical",
        tikaName: "टीका - श्री राजन स्वामी जी",
        writer: "लेखक - दुष्यंत तोमर जी"
    }
]




function displaysahiyogitaNames(divid, atguruArticlesName) {
    const studentsList = document.getElementById(divid);
    for (let i = 0; i < atguruArticlesName.length; i++) {

        studentsList.innerHTML =
            studentsList.innerHTML +
            `
            <a href="${atguruArticlesName[i].link}" class="apple-card-link">
            <div class="apple-card">
                <img src="${atguruArticlesName[i].img}" alt="iPhone">
                <div class="apple-card-content">
                    <h3>${atguruArticlesName[i].name}</h3>
                    <p>${atguruArticlesName[i].tikaName}</p>
                    <p>${atguruArticlesName[i].writer}</p>
                </div>
            </div>
            </a>
                `;
    }
}
displaysahiyogitaNames("satguruArticlesList", satguruArticlesList);

