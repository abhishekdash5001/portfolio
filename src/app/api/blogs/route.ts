import { NextResponse } from 'next/server';
import blogs from "@/content/blogs.json"

export async function GET(){
  const blogsPromise=  new   Promise((res)=>{
    setTimeout(()=>{
        res(blogs)
    },2000)
      
   })
  const a = await blogsPromise;
   return NextResponse.json(a)
}