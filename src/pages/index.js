import { Inter } from 'next/font/google';
import Left from './layout/sidebar/left';
import Main from './layout/main';
import Right from './layout/sidebar/right';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="flex">
        <Left />
        <Main/>
        <Right />
      </div>
    </>
  );
}
