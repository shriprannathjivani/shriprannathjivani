
var bitakSahebList = [
    {
        id: 1,
        date: { day: "15", month: "July", year: "2025" },
        title: "अथ तीन सरूपों की बीतक",
        speaker: "सोनिया सखी (ऑस्ट्रेलिया)",
        time: "6:00-7:30 am",
        description: "अथ तीन सरूपों की बीतक — जीव, माया और ब्रह्म का गूढ़ ज्ञान, श्रद्धा और भक्ति से ओतप्रोत पहली दिन की अद्भुत शुरुआत।",
        image: "/assets/img/bitaksaheb/bitaksaheb_day1.png",
        link: "https://youtu.be/P2S20KesJhI?si=3p9J2L4A5WCRe0HB",
        bitakSandesh : {
            text: "️सुनो नहीं, जी लो श्री बीतक साहेब का हर पल",
            image: "/assets/img/bitaksaheb/quotes/quote_message_day1.jpeg",
        },
        quote: {
            text: "ध्यान से भीतर उतरने वाला ही आत्मा की शांति और ब्रह्म का साक्षात्कार कर सकता है।",
            author: "श्री प्राणनाथ जी"
        },
        qa: {
            question: "श्री बीतक क्विज़",
            answer: "SPJV श्री बीतक साहेब <br> Quiz Day 1",
            link: "https://forms.gle/QGYee9gWsSMJTdHb7"
        },
        game: {
            title: "ज्ञानवर्धक खेल",
            description: "अपना ज्ञान परखें इस मजेदार खेल के साथ!",
            link: "#"
        },
        reel: {
            youtube_embed: "MajSGbv7iic",
            title: " स्वामी जी की ओर से सभी प्यारे सुंदरसाथ जी को प्रेम भरा निमंत्रण",
            subtext: "श्री प्राणनाथ ज्ञानपीठ के 19वें वार्षिकोत्सव के लिए स्वामी जी की ओर से सभी प्यारे सुंदरसाथ जी को प्रेम भरा निमंत्रण एवं श्री बीतक साहेब चर्चा के प्रथम प्रयास के लिए पूज्य स्वामी जी का आशीर्वाद व शुभकामनाएँ"
        }
    }
]


function displaykarkhanaNames(divid, bitakSaheb) {
    const studentsList = document.getElementById(divid);

    for (let i = 0; i < bitakSaheb.length; i++) {

        studentsList.innerHTML =
            studentsList.innerHTML +
            `
            <li class="timeline-item">
                <div class="timeline-info">
                    <div class="date-box">
                        <div class="date-day">${bitakSaheb[i].date.day}</div>
                        <div class="date-month-year">
                            <span class="date-month">${bitakSaheb[i].date.month}</span>
                            <span class="date-year">${bitakSaheb[i].date.year}</span>
                        </div>
                    </div>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="container">
                        <div class="row bitak-card">
                            <div class="col-md-8">
                                <img src="${bitakSaheb[i].image}"
                                    alt="Event Image" class="bitak-card-image mb-4">
                                <div class="row">
                                    <div class="col-md-9">
                                        <a target="_blank" href="${bitakSaheb[i].link}" class="bitak-title"> ${bitakSaheb[i].title}
                                        </a>
                                        <h6 class="bitak-meta d-md-block"><i data-feather="user"
                                                class="mb-2"></i>${bitakSaheb[i].speaker} |

                                            <div class="event-date d-inline-block">
                                                <i data-feather="clock"></i>
                                            ${bitakSaheb[i].time}
                                            </div>
                                        </h6>
                                    </div>
                                    <div class="col-md-3">
                                        <a href="${bitakSaheb[i].link}" target="_blank"
                                                        class="btn btn-primary bitak-btn pulse-button" > लाइव देखें</a>
                                    </div>
                                </div>
                                <p class="bitak-text">
                                    ${bitakSaheb[i].description}
                                </p>
                                <div class="row">
                                    
                                    <div class="col-sm-6">
                                        <div class="qa-box">
                                            <i data-feather="help-circle" class="mb-2 "></i><br>
                                            <div class="question">${bitakSaheb[i].qa.question}</div>
                                            <div class="answer">${bitakSaheb[i].qa.answer}</div>
                                            <a target="_blank" class="btn btn-primary pulse-btn-sm " href="${bitakSaheb[i].qa.link}">अभी क्लिक करें</a> 
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="game-card">
                                            <i data-feather="github" class="mb-2 "></i><br>
                                            <div class="game-title">${bitakSaheb[i].game.title}</div>
                                            <div class="game-desc">${bitakSaheb[i].game.description}</div>
                                            <a href="${bitakSaheb[i].game.link}" target="_blank"
                                                class="btn btn-primary pulse-btn-sm  "> अभी खेलें</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="quote-glass">
                                            <div class="quote-text">
                                                <i data-feather="message-circle"
                                                    class="mb-2 "></i><br>
                                                ${bitakSaheb[i].quote.text}
                                            </div>
                                            <div class="quote-author">– ${bitakSaheb[i].quote.author}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="bitakSandesh-card">
                                            <img src="${bitakSaheb[i].bitakSandesh.image}"
                                            alt="Event Image" class="bitakSandesh-image mb-4">
                                            <h2 class="bitakSandesh-title">${bitakSaheb[i].bitakSandesh.text}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="reel-video">
                                    <iframe
                                        src="https://www.youtube.com/embed/${bitakSaheb[i].reel.youtube_embed}?autoplay=0&mute=1&controls=1&&modestbranding=0&rel=0&loop=1"
                                        title="YouTube Reel"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                    <h2 class="reel-video-title">${bitakSaheb[i].reel.title}</h2>
                                    <p class="bitak-text text-center">${bitakSaheb[i].reel.subtext}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="timeline-item">
                <div class="timeline-info">
                    <div class="date-box">
                        <div class="date-day">${parseInt(bitakSaheb[i].date.day) + 1}</div>
                        <div class="date-month-year">
                            <span class="date-month">${bitakSaheb[i].date.month}</span>
                            <span class="date-year">${bitakSaheb[i].date.year}</span>
                        </div>
                    </div>
                </div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="container">
                        <div class="row bitak-card">
                            <div class="col-md-8">
                                <a target="_blank" href="#" class="bitak-title"> श्री बीतक साहेब का यह भाग कल तक जोड़ा जाएगा। कृपया प्रतीक्षा बनाए रखें। (Coming Soon...!)</a>
                                <h6 class="bitak-meta d-md-block"><i data-feather="user"
                                        class="mb-2"></i>${bitakSaheb[i].speaker}|

                                    <div class="event-date d-inline-block">
                                        <i data-feather="clock"></i>
                                       ${bitakSaheb[i].time}
                                    </div>
                                </h6>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
                `;
    }
}
displaykarkhanaNames("bitakSahebList", bitakSahebList);
