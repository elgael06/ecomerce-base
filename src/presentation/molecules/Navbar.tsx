import Link from "next/link";
import {RootLayoutLinkInterface} from "@/domain/models/";

const accessLinks: RootLayoutLinkInterface[] = [
  { title: 'Inicio', uri: '/' },
  {title: 'Servicios', uri:'/services'},
  {title: 'Productos', uri:'/produts'},
];

export default function Navbar() {
  return (<nav className="flex h-4 relative p-13 w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg hover:text-black focus:text-black lg:py-4">
    <div className='flex w-full flex-wrap items-center justify-between px-3'>
      <div className="ml-2">
        <Link href='/' className="text-xl text-black">
        App name
        </Link>
      </div>

      <div className="relative flex items-center">
        <Link
          className="mr-4 text-black transition duration-200 hover:text-neutral-100 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  [&.active]:text-black/90 "
          href='/sesion'>Login</Link>
      </div>
    </div>
  </nav>);
}