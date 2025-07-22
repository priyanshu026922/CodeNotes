import {Hono} from "hono";
import { verify} from 'hono/jwt';
import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate} from '@prisma/extension-accelerate';
import { createBlogInput,updateBlogInput } from "@priyanshu026/common";
export const blogRouter=new Hono<{
    Bindings:{
         DATABASE_URL:string;
        JWT_SECRET:string;
    },
    Variables:{
        userId:any;
    }
}>();


blogRouter.use("/*",async (c,next)=>{
    const authH=c.req.header("authorization")||"";
    const user=await verify(authH,c.env.JWT_SECRET);//authentication---header+payload+signature
   try{if(user){
      c.set('userId',user.id);
      return  await  next();
    }
    else{
    c.status(403);
    return c.json({
    message:"You are not logged in"
})
    }}catch(e){
        c.status(404)
        return c.json({
            message:"Something went wrong"
        })
    } 
});


blogRouter.post('/',async (c)=>{
const body=await c.req.json();
 const {success}=createBlogInput.safeParse(body);
    if(!success){
     c.status(411);
     return c.json({
        message:"Given input not correct"
     })
    }
const authorId=c.get('userId');
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

const blog =await prisma.blog.create({
    data:{
      title:body.title,
      content:body.content,
       authorId:Number(authorId)
    }
})
return c.json({
   id:blog.id
})
})


blogRouter.put('/',async(c)=>{
    const body=await c.req.json();
     const {success}=updateBlogInput.safeParse(body);
        if(!success){
         c.status(411);
         return c.json({
            message:"Given format not correct"
         })
        }
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());
const blog =await prisma.blog.update({
    where:{
     id:body.id
    },
    data:{
        title:body.title,
        content:body.content
    }
})
return c.json({
   id:blog.id
})

})

blogRouter.get('/bulk',async (c)=>{
    const query=c.req.query();
    const skip=parseInt(query.skip||'0');
     const take=parseInt(query.take||'10');
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

//skip, take,
const blogs=await prisma.blog.findMany({
    select:{
     content:true,
     title:true,
     id:true
    }
} );

return c.json({
    blogs
})
})

blogRouter.get('/:id',async (c)=>{
    const id=await c.req.param("id");
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());
try{
    const blog =await prisma.blog.findFirst({
    where:{
     id:Number(id)
    },
    select:{
        id:true,
        title:true,
        content:true,
        author:{
            select:{
              name:true,
            }
        }
    }
})
return c.json({
  blog
});
}catch(e){
    c.text("This blog doesnt exist")
}
})

