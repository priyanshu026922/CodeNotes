
import { Appbar } from "./Appbar"
import type{ Blog } from "../hooks"

export const BlogPost=({blog}:{
    blog:Blog
})=>{
    return(
    <div>
    <Appbar/>
    <div className="flex justify-center pt-16">
<div className="grid grid-cols-12 px-10 w-full  max-w-screen-xl p-16">

<div className="col-span-8">
      <div className= "text-5xl font-extrabold">
        {blog.title}
      </div>
      <div className="text-slate-500 pt-2">
          Posted on 13th July
      </div>
      <div className="pt-4 col-span-4">
      {blog.content}
     </div>
     
</div>

<div className="col-span-4 text-slate-600">
    AUTHOR
<div className="col-span-4">
     </div>
     <div>Anonymous</div>
</div>

</div> 
</div>
</div>

)
}

