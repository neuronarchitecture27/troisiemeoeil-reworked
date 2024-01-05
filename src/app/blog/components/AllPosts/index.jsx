
import * as styles from "./page.module.scss"
export default function AllPosts() {
  return (
    <div className=" w-full h-auto my-5 p-2">
      <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
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
</div>
    </div>
  )
}
