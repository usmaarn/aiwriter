import Image from "next/image";
const footer = () => {
    return ( 
      <div>
        <footer className="flex justify-center border-t">
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by {' '}
          <span className=''>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        </footer>
      </div>
     );
}
 
export default footer;