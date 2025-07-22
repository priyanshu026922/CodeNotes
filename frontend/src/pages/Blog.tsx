import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { BlogPost } from "../components/BlogPost";
import { BlogSkeleton } from "../components/BlogSkeleton";
export function Blog(){
    const {id}=useParams();
    const {loading,blog}=useBlog({
        id:id||""
    });

    if(loading){
        return <div>
          <BlogSkeleton/>
        </div>
    }

    return <div>
     <BlogPost blog={blog}/>
    </div>
}

