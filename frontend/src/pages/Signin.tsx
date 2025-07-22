import { R } from "../components/R";
import {L} from "../components/L";

 export function Signin(){
    return (
      <div className="grid  grid-cols-1 lg:grid-cols-2 ">
      <div >
        <L type="signin"/>
      </div>
      <div className="hidden lg:block">
      <R/>
      </div>
    </div>
    )
}