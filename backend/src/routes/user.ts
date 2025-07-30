import {Hono} from "hono";
import { sign } from 'hono/jwt';
import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate} from '@prisma/extension-accelerate';
import { signInInput } from "@priyanshu026/common";
import { signupInput } from "@priyanshu026/common";
export const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    }
}>();

userRouter.post('/signup',async (c)=>{
    const body=await c.req.json();
    const {success}=signupInput.safeParse(body);
    if(!success){
     c.status(411);
     return c.json({
        message:"Inputs are not correct"
     })
    }
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

try{
const user=await prisma.user.create({
    data:{
        email:body.email,
        password:body.password,
        name:body.name
    }
})
const jwt=await sign({
id:user.id
},c.env.JWT_SECRET);

return c.text(jwt);
}catch(e:any){
  console.log(e);
c.status(411);
return c.text("Email already exists/Try again")
}

})

userRouter.post('/signin',async (c)=>{
     const body=await c.req.json();
      const {success}=signInInput.safeParse(body);
    if(!success){
     c.status(411);
     return c.json({
        message:"Inputs are not correct"
     })
    }
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

try{
const user=await prisma.user.findFirst({
    where:{
        email:body.email,
        password:body.password,
    }
})
if(!user){
    c.status(403);
    return c.json({
        message:"Invalid Credentials"
    })
}

const jwt=await sign({
id:user.id
},c.env.JWT_SECRET);

return c.text(jwt);

}catch(e:any){
  console.log(e);
c.status(411);
return c.text("Something went wrong/Try again")
}

})