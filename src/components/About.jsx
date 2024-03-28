import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import notebook from '../assets/projects/note-taking.png'
import Portfolio1 from '../assets/projects/Portfolio1.png'
import Portfolio2 from '../assets/projects/animated-portfolio.png'


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })
    const Projects = () => [
        {
            id: 1,
            src: notebook,
            desc: "I have create this app using mern where user can login and signup user can add note & delete or edit notes..",
            appName: "Inotebook",
            demo: "",
            code: "https://github.com/Aditya-Panday/INotebook_App.git"
        },
        {
            id: 2,
            src: Portfolio1,
            desc: "I have create this project with the help of Html, Css & Javascript or for animation used aos library...",
            appName: "React Portfolio",
            demo: "https://kaleidoscopic-pie-162bc3.netlify.app/",
            code: "https://github.com/dipayansarkar47/shopeasy"
        },
        {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwWeQSSQQ_5wzWKIfhU3HdeNaST7mZZisvg&usqp=CAU",
            appName: "News App",
            desc: "I have create this project using react here you can fetch news state and category wise.",
            demo: "",
            code: "https://github.com/Aditya-Panday/NewsMonkey-App.git"
        },
        {
            id: 4,
            src: "https://s3-alpha.figma.com/hub/file/1630463834/71cd3eb9-a0c1-4d7f-9701-76de6b1d7cb5-cover.png",
            appName: "Gupshup Chat App",
            desc: "I have create this project using mern here you can do one on one chat & group chat as well..",
            demo: "",
            code: "https://github.com/Aditya-Panday/Gupshup-Chat-App.git"
        },
        {
            id: 5,
            src: "https://cdn.dribbble.com/userupload/10803706/file/original-199e92f5c75289f0aa064f88e3fe4e87.png?resize=752x",
            appName: "Ecommerce App",
            desc: "I have create this project using react here you can fetch news state and category wise..",
            demo: "https://upscaleai.vercel.app/",
            code: "https://github.com/Aditya-Panday/Ecommerce-website.git"
        },
        {
            id: 6,
            src: Portfolio2,
            appName: "Animated-Portfolio",
            desc: "I have create this project using Html, Css & JavaScript or for animation i have used Aos..",
            demo: "https://aditya-panday.github.io/Animated-Portfolio.github.io/#",
            code: "https://github.com/Aditya-Panday/Animated-Portfolio.github.io.git"
        },
        {
            id: 7,
            src: "https://images.ctfassets.net/cpumif18y1gd/3nCkDXAVEpP4E3Fu7S5y2d/bf60603c7fb1d58609afe7a80a0e8ba1/wordpress-imported-image-13837.jpg",
            appName: "Instagram Clone",
            desc: "I have create this project using Html, Css & JavaScript or for animation i have used Aos..",
            demo: "",
            code: ""
        },
        {
            id: 8,
            src: "https://cdn.techjockey.com/blog/wp-content/uploads/2022/08/04143928/What-are-Bill-Splitting-Apps.jpg",
            appName: "React Bill Management App",
            desc: "I have create this project using React, Redux and used json server for a dummy data.",
            demo: "",
            code: "https://github.com/Aditya-Panday/Bill-Management-Project.git"
        },
    ]

    return (

        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto '>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    Hy I Am Aditya, a passionate and versatile Full Stack
                    Developer with a knack for turning innovative ideas into robust, user-friendly web applications.
                    With a solid foundation in both front-end and back-end technologies

                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    Whether you're a fellow developer, a business owner
                    looking to enhance your online presence, or anyone in between, I look forward to collaborating with you. Let's
                    build something extraordinary together!                </p>
                {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="https://drive.google.com/file/d/1OfDFzQp_1rgjgdTFA-wLE96CrcJoY21j/view" target='_blank' rel='noreferrer' download>Download CV</a>
                </div>
                <br />


                {/* projects */}
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
                        <p className='py-6'>Check out some of my work </p>
                    </div>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 p-10px sm:px-10'>
                    {
                        Projects().map(({ id, src, desc, demo, code, appName }) => (

                            <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg' style={{ overflow: "hidden" }}>
                                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105 w-100 ' style={{ height: "170px", width: "100%" }} />
                                <h3 className='p-2 text-justify font-extralight'>{appName}</h3>
                                <p className='p-2 text-justify font-extralight'>{desc}</p>
                                <div className='flex items-center justify-center'>

                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                                        <a href={demo}>Demo</a>
                                    </button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                                        <a href={code}>Code</a>
                                    </button>
                                </div>
                            </div>

                        ))
                    }
                </div>


            </div>

        </div>
    )
}

export default About