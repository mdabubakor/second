import { Iskill } from "./Type"
import { BsCircleFill } from 'react-icons/bs'




export const nav =[
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    {title: "Contact", href: "/contact"},
    { title: "Resume", href: "/resume" },
]

export const services =[
    {
        id:Math.random(),
        tittle: "Frontend Development",
        discrib: "i can build a beautiful and scalable SPA using" ,
       skil:"<b> HTML</b>,<b>Css</b>,<b>Next.js</b>, <b>React.js</b>"
    },
    {
        id:Math.random(),
        tittle: "Backend Development",
        discrib: "handel database, server,api using<b>Express</b> & other popular frameworks" ,
       
    },
    {
        id:Math.random(),
        tittle: "API Development",
        discrib: "i can davepop rbust  REST API using <b>mongoDB-rest-api</b> &<b>Node API</b>" ,
       
    },
    {
        id:Math.random(),
        tittle: "Competitive Coder",
        discrib: "a daily problem solver in <b>HackerRank</b> and <b>Leet code</b>" ,
     
    },
  
   

   
]

export const language:Iskill[]=[
    {
        Icon:BsCircleFill,
        name:'python',
        level: '30%',
    },
    {
        Icon:BsCircleFill,
        name:'javascript',
        level:'50%',
    },
    {
        Icon:BsCircleFill,
        name:'Next.js',
        level:'60%',
    },
    {
        Icon:BsCircleFill,
        name:'Node.js',
        level:'70%',
    },
    {
        Icon:BsCircleFill,
        name:'mongoDB',
        level:'30%',
    },
]
export const tools:Iskill[]=[
    {
        Icon:BsCircleFill,
        name:'Figma',
        level: '70%',
    },
    {
        Icon:BsCircleFill,
        name:'Photoshop',
        level:'60%',
    },
    {
        Icon:BsCircleFill,
        name:'Illustrator',
        level:'70%',
    },
]