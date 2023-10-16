import Header from '../header';
import Image from 'next/image';
export default function Left() {
  return (
    <>
      <Header />
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-3/12 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-screen px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center pl-2 pt-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group  "
              >
                <img src="home.png" alt="home"></img>
                <span className="ml-3">Home</span>
              </a>
            </li>

            <div className="flex items-center pl-2 pt-1 text-gray-900 border-b  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group  ">
            </div>

            <li>
              <a className="flex items-center ">
                <div className="mt-3 pl-2">
                  Contact us:
                  <div className="flex items-center py-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <img className="  mr-4" src="Vector.png" alt="location"></img>
                    Сүхбаатар, 8-р хороо, Нэст Эдүкэйшн Ахлах сургууль
                  </div>
                  <div className="flex items-center py-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <img className="  mr-4" src="phone.png" alt="phone"></img>
                    80680226
                  </div>
                  <div className="flex items-center py-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <img className="  mr-4" src="Group.png" alt="mail"></img>
                    Irmuunmuuk@gmail.com
                  </div>
                  <div className="flex items-center justify-evenly py-3  ">
                    {/* <a href="https://www.facebook.com/NestEducationSchool"> */}
                    <img className="  mr-4" src="fb.png" alt="social"></img>
                    {/* </a> */}
                    {/* <a href="https://www.youtube.com/@nesteducationitschool3493"> */}
                    <img className="  mr-4" src="youtube.png" alt="social"></img>
                    {/* </a> */}
                    <img className="  mr-4" src="twitter.png" alt="social"></img>
                    <img className="  mr-4" src="snap.png" alt="social"></img>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center pt-3 ">
                <div className=" pl-2">
                  Advertisement
                  <img
                    className="my-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    src="ad.png"
                    alt="ad"
                  ></img>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
