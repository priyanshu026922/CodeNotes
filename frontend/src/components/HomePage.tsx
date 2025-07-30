import { Link } from "react-router-dom"
import { Avatar } from "./Avatar";

interface BlogCardProp{
  authorName:string,
     title:string,
     content:string,
     publishedDate:string,
     id:number 
}

export function HomePage({title,authorName,content,publishedDate,id}:BlogCardProp){
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="border-b-2 max-w border-slate-400 pb-4 hover:bg-gray-50 transition-colors duration-200 rounded-md px-2 cursor-pointer">
    
        <div className="flex items-center space-x-2">
          <div className="flex justify-center flex-col py-3">
            <Avatar title={authorName} />
          </div>
          <div className="text-slate-600 text-lg">{title}</div>
          <div className="h-1 w-1 text-slate-400 rounded-full">•</div>
          <div className="text-slate-400 text-base">{publishedDate}</div>
        </div>

        <div className="text-2xl py-3 font-bold">{title}</div>
        <div className="py-3 text-slate-500">
          {content.slice(0, 400) + "...."}
        </div>

        <div className="text-slate-400">
          {`${Math.ceil(content.length / 100)} minute read`}
        </div>
      </div>
    </Link>
  );
}



