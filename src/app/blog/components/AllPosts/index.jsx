import Link from 'next/link'
import Postdiv from './RestPost/Postdiv'

export default function AllPosts() {
  return (
    <div className=" w-full flex flex-col items-center justify-center h-auto my-5 p-2">
      {/* <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
  {[...Array(7)].map((_, i) => (
    <div
      key={i}
      className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
        i === 3 || i === 6 ? "col-span-2" : ""
      }`}
    >
      <h1 className=" text-red-500">heyy</h1>
    </div>
  ))}
</div> */}
   <div className=" w-4/5 grid lg:grid-cols-3 grid-cols-1 gap-6 px-3 mt-10">
            {[...Array(5)].map((_, i) => (
           
                  <div
                    key={i}
                    className={`rounded-xl border border-neutral-800 bg-neutral-900  relative  overflow-hidden
                    ${i === 0 && "md:row-span-2 row-start-1 "}
                    ${i === 2 && "lg:h-80 h-64 "}
                    ${i === 1 && "lg:h-[280px] h-64 "}
                    ${i === 3 && "lg:h-[330px] h-64 lg:-mt-9 "}
                    ${i === 4 && "h-72"}
                    `}
                  >
                    <Link href='#'>
                      <img
                        className="h-full  w-full object-cover"
                        src='./images/maven.jpg'
                        alt=""
                      />

                      <p className="text-neutral-50 bottom-14 font-InterBold text-xl ml-2  absolute z-20 ">
                        Atlas Communications
                      </p>

                      <div className="absolute bottom-3 z-20 flex justify-between items-center w-full px-2 font-InterMedium text-neutral-500 text-sm">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="w-6 h-6 rounded-full object-cover"
                            // src="images/img3.jpg"
                            src='./images/troisiemeoeillogo.png'
                            alt=""
                          />
                          <p>Troisieme Oeil</p>
                        </div>
                        <p>21/02/2021</p>
                      </div>
                    </Link>
                    <div className=" bg-gradient-to-t  w-full absolute z-10  from-[#000000] via-black/80  to-transparent bottom-0   h-44 transition-all ease-in duration-200" />
                  </div>
                )
            )}
          </div>

          <div className="mt-6 grid lg:grid-cols-2 lg:gap-11 p-3 gap-7  w-4/5">
          {[...Array(5)].map((_, i, post) => (
           
              <Postdiv key={i} {...post} />
            ))}
            </div>
    </div>
  )
}
