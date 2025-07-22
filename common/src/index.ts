import z from "zod";
export const signupInput =z.object({
    email:z.string(),
     password:z.string().min(8),
})
export type signupInput=z.infer<typeof signupInput>

export const signInInput =z.object({
    email:z.string(),
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
   content:z.string().min(10),

})
export type updateBlogInput=z.infer<typeof updateBlogInput>

