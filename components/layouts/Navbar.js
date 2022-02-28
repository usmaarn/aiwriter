import Image from 'next/image'
import Link from 'next/link';

const navbar = () => {
    return ( 
        <div className="text-gray-800 dark:text-gray-50 m-3">
            <nav className='flex justify-between'>
              <div>
                {/* <Image src="/logo.png" alt="" width={128} height={33} /> */}
              </div>

              <div>
                <ul className="flex justify-between font-bold">
                  <Link href="/">
                    <a>
                      <li className='flex md:mx-3 mx-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span className='hidden md:block'>Home</span>
                      </li>
                    </a>
                  </Link>
                    
                    <Link href="/about">
                      <a>
                        <li className='flex md:mx-3 mx-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <span className='hidden md:block'>About</span>
                        </li>
                        </a>
                    </Link>
                    <Link href={'/FAQ'}>
                      <a>
                        <li className='flex md:mx-3 mx-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                          <span className='hidden md:block'>FAQ</span>
                        </li>  
                      </a>
                    </Link>
                </ul>
              </div> 
            </nav>
        </div>
     );
}
 
export default navbar;