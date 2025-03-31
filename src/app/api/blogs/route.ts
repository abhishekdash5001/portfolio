import { NextResponse } from 'next/server';
import type {blogType} from "@/type/blogs"
import blogs from "@/content/blogs.json"


export async function GET(){
  const blogsPromise:Promise<blogType[]>=  new   Promise((res)=>{
    res(blogs)
   
      
   })
   
  const a:blogType[]= await blogsPromise;
   return NextResponse.json({data:a})
}