export function Avatar({title}:{title:string}){
 return (
    <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-400 rounded-full
     dark:bg-black">
    <span className="font-medium text-white dark:text-gray-300">{title[0]}</span>
</div>
 )
}
