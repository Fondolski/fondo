import {useEffect} from 'react';
import AOS from 'aos';
import '@newcomponent/styles/globals.css';
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
  <div className="w-full bg-[url('/bghome.jpg')] h-full bg-fixed" >
      <Component {...pageProps} /> 
    </div>)
}
