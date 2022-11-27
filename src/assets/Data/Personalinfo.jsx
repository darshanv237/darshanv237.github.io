import Bike from '../bike.jpg'
import Bot from '../bot.jpg'

function importAll(r) {
    return r.keys().map(r);
  }
  
const pdata = [
    {
        name: "Darshan.V",
        quote: "Curiosity to know my boundaries and break out of them keeps me motivated and makes me Enthusiastic to learn new technolgies and build products ",
        roles: ["Web Developer","Programmer","Developer","FreeLancer"],
        icons: [['fa-brands fa-linkedin-in fa-2x p-2',"https://www.linkedin.com/in/darshan-v-39103a195/",1]
                ,['fa-brands fa-github fa-2x p-2',"https://github.com/darshanv237",2]
                ,['fa-brands fa-facebook fa-2x p-2',"facebook.com",3]],
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
                    experience: "2021-Present",
                    description:[
                    "Developed a package-based solution for the integrating of suppliers, purchase orders, and bi-directional invoices from the SAP ECC system with the customer tool.",
                    "Configuration of CIG middleware connection between the Ariba and SAP S4Hana system.",
                    "A custom solution proposal for automating business related department master data.",
                    "Code Modularization,Identifying and fixing bugs in solutions."]
                },
                {
                    role:"Product Developer Internship",
                    Company: "Ignite Xlabs",
                    experience: "3 Months",
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
                    name:"Microsoft Technology Associate Python & JS",
                    description: "Scored above 80%. It was a very insightful learning experience where I learnt the basics of javascript, cross platform application development using cordova,machine learning and data science using python, also worked with Data Visualization and Data Analytics."
                },
                {
                    name:"National Level Quiz",
                    description: "Secured an 80% score in a national level quiz competition conducted by BGS Institute of Technology in the C programming language"
                }
            ],
            projects:[
                {
                    name:"Gobikes - BRMS",
                    description:"Developed with the basics of web development including PHP, MySQL and Bootstrap for front-end design using the Bike Rental System. As part of this project, the Instamojo API implementation is demonstrated, so the user can also make payments through the app. As a whole, this reduces the mobility of renting a bike.",
                },
                {
                    name:'Newz-Bot',
                    description:'Play and have fun with this interactive Telegram bot. By using newsapi, this bot also provides the 10 latest articles of the day. This reduces the need for people to search multiple sites for information and allows people to learn about their surroundings, Built using Nodejs, Nodejs-telegram-bot-api,Telegram API'
                }
            ],
            profiles:[
                {
                    name:'LeetCode',
                    link:'https://leetcode.com/darshanv237/'
                    
                },
                {
                    name:'GeeksForGeeks',
                    link:'https://auth.geeksforgeeks.org/user/darshanv237'
                }]
    }   
]

export default pdata;