import { lusitana } from '@/app/ui/fonts';
import logo from '@/app/logo.png';
import Image from 'next/image';
export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src={logo} alt="Logo" className="h-16 w-16" />
      <p className="text-[30px]">Cuisine Craze</p>
    </div>
  );
}
