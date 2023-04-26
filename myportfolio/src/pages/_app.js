import '@/styles/globals.css'
import Link from 'next/link';
import { AiFillHome } from "react-icons/ai";

export default function App({ Component, pageProps }) {
return (
<>
    <header className='bg-my_bg_image'>
        <div className='flex justify-between'>
            <div class="emptybox"></div>
            <div><h2 className="text-white text-3xl mt-4 tracking-wide">&lt; FREDRIK &gt;</h2><h3 className="text-white text-3xl ml-20 tracking-widest">Frontend developer</h3></div>
            <div className="mr-10 mt-6 mb-6 bg-white hover:bg-yellow-500 rounded-full">
              <Link href="/"><AiFillHome className='border-4 border-black p-1 rounded-full h-12 w-12'/></Link>
              </div>
        </div>
        <nav className='bg-white bg-opacity-40'>
            <ul className='flex justify-end text-black mt-2'>
                <li className='ml-10 hover:text-red-600'><Link href="/presentation" class="presentation"><b>PRESENTATION</b></Link></li>
                <li className='ml-10 hover:text-red-600'><Link href="/cv" class="cv"><b>CV</b></Link></li>
                <li className='ml-10 hover:text-red-600'><Link href="/portfolio" class="portfolio"><b>PORTFOLIO</b></Link></li>
                <li className='ml-10 mr-10 hover:text-red-600'><Link href="/contact" class="contact"><b>CONTACT</b></Link></li>
            </ul>   
        </nav> 
    </header>
  <Component {...pageProps} />

     <footer className='bg-black flex justify-end'>
        <img className='h-12 w-auto py-1' src="./socialmedia.jpg" alt="Socialmedia-logos"/>        
    </footer>
</>
);
}
