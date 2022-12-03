

function importAll(r) {
    return r.keys().map(r);
  }
  
const pdata = [
    {
        name: "Darshan.V",
        quote: "Curiosity about knowing my limits and a desire to challenge them keeps me motivated, making me enthusiastic about learning new technologies and building products. I have good problem-solving skills. I am also into web development. I am currently exploring javascript frameworks. ",
        about_image: require('../coder.png'),
        roles: ["Web Developer","Programmer","Developer","FreeLancer"],
        icons: [['fa-brands fa-linkedin-in fa-1x  p-2',"https://www.linkedin.com/in/darshan-v-39103a195/",1]
                ,['fa-brands fa-github fa-1x p-2',"https://github.com/darshanv237",2]
                ,['fa-brands fa-facebook fa-1x  p-2',"facebook.com",3]],
        education: [["B.E.(Computer Science)","K.N.S Institute of Technology",'CGPA: 8.2','2021',1],
                    ["P.U.C","Acharya PU College",'Percentage: 82.33','2017',2],
                    ["SSLC","Seshadripuram High School",'Percentage: 83.34','2015',3]],
        skills: [{
            name: "Web Development",
            icons: importAll(require.context('../Skill_icons/webicons', false, /\.(png|jpg)$/)),
            key: 1
            },
            {
                name: "Programming Languages",
                icons:importAll(require.context('../Skill_icons/picons', false, /\.(png|jpg)$/)),
                key:2
            },
            {
                name:"Other Skills",
                icons:importAll(require.context('../Skill_icons/sapicons', false, /\.(png|jpg)$/)),
                key:3
            }],
            work:[
                {
                    role:"Consultant",
                    Company:"Apsolut Software Pvt LTD",
                    experience: "Aug/2021-Present",
                    description:[
                    "Developed a package-based solution for the integrating of suppliers, purchase orders, and bi-directional invoices from the SAP ECC system with the customer tool.",
                    "Configuration of CIG middleware connection between the Ariba and SAP S4Hana system.",
                    "A custom solution proposal for automating business related department master data.",
                    "Code Modularization,Identifying and fixing bugs in solutions."]
                },
                {
                    role:"Product Developer Internship",
                    Company: "Ignite Xlabs",
                    experience: "3 Months ( Jul/2020 - Sept/2020 )",
                    description:[
                        "Worked as a product developer on the development of an educational ERP.",
                        "I was involved in UI and UX designing of webpages, developing the frontend of websites and also involved in backend development.",
                        "Got an opportunity to apply my skills in html, CSS, bootstrap, php, javascript, ajax in real time.",
                        "Exposure to various learning opportunities and challenges."
                    ]
                }
            ],
            awards:[
                {
                    id:"0ad96b67-b1b2-4595-a5b2-bd9be21f94a0",
                    name:"Microsoft Technology Associate Python",
                    description: "Scored above 80%. It was a very insightful learning experience where I learnt the basics of python, machine learning and data science, also worked on Data Visualization and Data Analytics."
                },
                {
                    id:"498fdf68-3756-424d-bf1b-a166c0cbd6e2",
                    name:"Microsoft Technology Associate Javascript",
                    description:"Scored above 80%. It was a very insightful learning experience where I learnt the basics of javascript,cross platform mobile app development and implemented in real time by developing games and few apps."
                    
                },
                {
                    id:0,
                    name:"National Level C Quiz ( BGS Institute of Technology )",
                    description: "Secured an 80% score in a national level quiz competition conducted by BGS Institute of Technology in the C programming language.",
                    image: require('../Certificates/C_quiz.PNG')
                }
            ],
            projects:[
                {
                    p_image: require('../Skill_icons/proj_icons/bike.jpg'),
                    name:"Gobikes - BRMS",
                    description:
                    ["A Digital solution to make the experience of renting a bike easier and joyful by reducing the friction and increasing the accessibility.",
                    "This solution was developed using the web technologies such as PHP for backend, MySql as database, and Bootstrap framework for the frontend and Instamojo as the payment gateway for online payments.",
                    "From this project I got exposure to learn the web technologies and implementing them in real time."],
                },
                {
                    p_image: require('../Skill_icons/proj_icons/bot.jpg'),
                    name:'Newz-Bot',
                    description:[
                        "This solution was built for Delivering the news articles and reduce the friction of getting proper news.",
                        "An additional feature of this bot is quiz and fun interaction with the users. It was built using Nodejs, Telegram Api's",
                        "From this project got exposure to learn API's, node.js."
                    ]
                }
            ],
            profiles:[
                {
                    name:'LeetCode',
                    link:'https://leetcode.com/darshanv237/',
                    src: require('../Skill_icons/profiles/leetcode.webp')
                },
                {
                    name:'GeeksForGeeks',
                    link:'https://auth.geeksforgeeks.org/user/darshanv237',
                    src:require('../Skill_icons/profiles/GeeksforGeeks.png')
                }]
    }   
]

export default pdata;