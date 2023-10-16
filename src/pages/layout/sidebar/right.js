import Header from '../header';
export default function Right() {
  return (
    <>
      <Header />
      <div className=" h-screen w-1/3  bg-gray-800 flex flex-col justify-end p-5  overflow-y-auto">
        <div className="flex flex-col items-end">
          <div className="">
            <img className=" w-52 h-44 " src="ad.png" />
          </div>
          <input
            type="file"
            className=" my-2 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-50 file:text-zinc-600 hover:file:bg-gray-200"
          />

          <div className="grid grid-cols-2 gap-2">
            <div>
              <img src="image 4.png" />
            </div>
            <div>
              <img src="image 4-1.png" />
            </div>
            <div>
              <img src="image 3.png" />
            </div>
            <div>
              <img src="image 8.png" />
            </div>
            <div>
              <img src="image 11.png" />
            </div>
            <div>
              <img src="image 7.png" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
