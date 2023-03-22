import {useState, useEffect, useRef} from 'react'
import { useScroll, animated } from '@react-spring/web'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillDetails = [ {
    name: 'HTML & CSS',
    value: 100
},
{name: 'JavaScript',
value: 100},
{
    name: 'TypeScript',
    value: 50
},
{
    name: 'React',
    value: 90
}, 
{name: 'React Native',
value: 90},
{name: 'Express.js',
value: 80},
{name: 'Node.js',
value: 80},
{name: 'MongoDB',
value: 100},
{name: 'SQL',
value: 60},
{name: 'Problem Solving',
value: 90},
{name: 'Three.js',
value: 60},
{name: 'Electron.js',
value: 70},
{name: 'Planning',
value: 90},

{name: 'Communication', 
value: 90},
{name: 'Git', 
value: 100}
]

const projects = [{
    name: 'TaliiTravel',
    link: 'https://www.taliitravel.com',
    description: 'Talii Travel is a tour and safari web application that makes it easy for user to find and book a tour or safari.',
    photo: 'https://firebasestorage.googleapis.com/v0/b/boozenextdoor.appspot.com/o/1smartmockups_lfi4dwy2.jpg?alt=media&token=6ab6d34b-8603-440d-9196-e798d4b9d0d0'
},
{name: 'We Are Next Door Website',
link: 'https://www.wearenextdoor.com',
description: 'WeAreNextDoor is a startup Kenyan tech company. We connect customers, businesses, couriers and riders, for delivery or transport.',
photo: 'https://firebasestorage.googleapis.com/v0/b/boozenextdoor.appspot.com/o/1smartmockups_lfi4r9u8.jpg?alt=media&token=05d6b464-5633-4662-bd2a-4a1993c69acf'},
{
    name: 'We Are Next Door Android app',
    link: '',
    description: 'Android app that delivers food and drinks to customers. A customer can also book rides with the app',
    photo: 'https://firebasestorage.googleapis.com/v0/b/boozenextdoor.appspot.com/o/1smartmockups_lfi4q3mb.jpg?alt=media&token=adc48f37-2f78-49df-bb5e-80337bc03c44'
},

]

export default function AppBody() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [calculatedPosition, setCalculatedPosition] = useState(0)
    
    const { scrollYProgress } = useScroll()


    

        const handleScroll = () => {
            const position = window.pageYOffset;
            setCalculatedPosition(position * 0.007)
            console.log(position)
            setScrollPosition(position);
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        useEffect(()=> {
            console.log(scrollYProgress)
        },[scrollYProgress])




    return(
        <div className="w-full h-max flex items-center justify-center mt-10 flex-col">
            <div  className={`p-5 w-full  fixed flex items-center justify-center   bg-black top-0 z-40`} style={{opacity: calculatedPosition}}>
                <div className='w-11/12 max-w-6xl flex items-center flex-row'>
                    <div className=" bg-cover w-10 h-10 rounded-full md:max-w-lg bg-[url('/profile2.jpg')]"></div>
                    <div className='font-poppins text-3xl ml-5 text-white' data-aos="fade-up">Stephen Fondo</div>
                </div>
            </div>
            <div className="w-full md:w-11/12 h-full flex items-stretch justify-center fixed flex bg-black opacity-50 top-0 md:top-10" >
               <div className=''></div>
                
            </div> 
            
            <div className="mt-10 bg-cover w-40 h-40 rounded-full md:w-60 md:h-60 md:max-w-lg hover:animate-none animate-pulse bg-[url('/profile2.jpg')] z-20" data-aos="flip-up" data-aos-duration={3000} ></div>
            <div className="text-white mt-10 font-poppins text-3xl z-20" data-aos='fade-down' data-aos-duration={3000}>Stephen Fondo</div>
            <div className="text-white z-20 font-raleway italic text-xl text-center md:text-2xl mt-10">Make it work, make it right, make it fast.</div>
            <div className="text-white z-20 font-anton text-2xl md:text-5xl mt-10">Full Stack Developer.</div>
            <div className="text-white mt-20 font-poppins text-3xl z-20">MERN</div>
            <div className='font-poppins text-white z-20 mt-20 text-lg md:text-2xl border-b' data-aos='flip-up'>Professional Skils</div>
            <div className='z-20 flex flex-wrap max-w-xl items-center justify-center mt-20'>
                {skillDetails.map((item, i)=> {
                    return(<div key={i} className='m-3 flex flex-col items-center w-40 justify-center' data-aos='fade-down' data-aos-duration={300}>
                    <CircularProgressbar value={item.value} text={`${item.value}%`}
                    
                    styles={{
                        // Customize the root svg element
                        root: {
                            width: 80
                        },
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: item.value > 80 ? '#1184e8': item.value > 50 && item.value < 81 ? '#25D366': 'red',
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          // Customize transition animation
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          // Rotate the path
                          transformOrigin: 'center center',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: '#d6d6d6',
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Rotate the trail
                          transform: 'rotate(0.25turn)',
                          transformOrigin: 'center center',
                        },
                        // Customize the text
                        text: {
                          // Text color
                          fill: 'white',
                          // Text size
                          fontSize: '16px',
                        },
                        // Customize background - only used when the `background` prop is true
                        background: {
                          fill: '#3e98c7',
                        },
                      }}
                    />;
                    <div className='text-white font-poppins'>{item.name}</div>
                </div>)
                })}
                
            </div>
            <div className='mt-20 flex items-center justify-center  z-30'>
            <div className='w-10/12'>
                <div className='text-white font-poppins text-lg md:text-2xl border-b' data-aos='flip-up'>Past projects</div>
                <div className='flex flex-col items-center' >
                {projects.map((item, i)=> {
                    return(
                        <div key={i} className='mt-10 mr-10 flex flex-col md:flex-row justify-center' data-aos='fade-down'>
                            <div className='w-40 h-40 rounded' style={{backgroundImage: 'url(' + `${item.photo}` + ')', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', overflow: 'hidden'}}></div>
                            <div className='text-white md:ml-3 w-11/12 md:w-11/12 max-w-2xl mt-5'>
                                <div className='font-poppins text-2xl'>{item.name}</div>
                                <div className='mt-5 font-poppins'>{item.description}</div>
                                <div>
                                    <a className='mt-5 font-poppins pb-2 border-b' href={item.link} rel="noopener noreferrer" target='_blank'>{item.link}</a>
                                </div>
                                </div>
                        </div>
                    )
                })}
                </div>
            </div>
            </div>
            <div  className='p-5 w-full mt-20  flex items-center justify-center p-10  bg-black z-40'>
                <div className='w-11/12 max-w-6xl flex items-center flex-wrap justify-center'>
                    <div className=' font-poppins text-white' >Email: fondolski@gmail.com</div>
                    <div className=' font-poppins text-white md:ml-5 mt-5 md:mt-0'>Phone/WhatsApp: +254714892078</div>
                </div>
            </div>
        </div>
    )
}