import { Appbar } from "../components/Appbar"
import { BlogArea } from "../components/BlogArea"
export const Publish=()=>{
    return <div>
         <Appbar/>
    <div className="flex justify-center items-center">
       
        <div className="max-w-screen-lg w-full pt-12">
           <BlogArea/>
       </div>
    </div>
    
    </div>
}