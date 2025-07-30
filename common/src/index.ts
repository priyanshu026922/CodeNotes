import z from "zod";
export const signupInput =z.object({
    email:z.string().email(),//
     password:z.string().min(8),
     name:z.string().optional()  //
})
export type signupInput=z.infer<typeof signupInput>

export const signInInput =z.object({
    email:z.string().email(),
     password:z.string().min(8),
})
export type signInInput=z.infer<typeof  signInInput>

export const createBlogInput =z.object({
   title:z.string(),
   content:z.string().min(10),

})
export type createBlogInput=z.infer<typeof createBlogInput>

export const updateBlogInput =z.object({
    id:z.number(),
   title:z.string(),
   content:z.string(),

})
export type updateBlogInput=z.infer<typeof updateBlogInput>

