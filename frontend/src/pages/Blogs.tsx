import { HomePage } from "../components/HomePage";
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
export function Blogs(){
    const {loading,blogs}=useBlogs();

    if(loading){
        return<div>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
<BlogSkeleton/>
        </div>
    }
    return (
        <div className="max-w-full">
                 <div className="w-full mb-4 border-b"><Appbar/></div>

                 <div className="flex justify-center">
                 <div className="max-w-2xl  px-4">
                 <div className="pt-6">
                    {blogs.map(blog=><HomePage
                    id={blog.id}
                    //   authorName={blog.author.name||"Anonymous"}
                      title={blog.title}
                      content={blog.content}
                      publishedDate={"1st June 2025"}
                     /> )}
                    </div>
                 </div>
                 </div>
                 </div>
    )
}
