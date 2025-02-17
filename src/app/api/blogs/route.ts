import { NextResponse } from 'next/server';
import blogs from "@/content/blogs.json"
import { portfolioType } from '@/type/portfolio';

export async function GET(){

  const blogsPromise:Promise<portfolioType[]>=  new   Promise((res)=>{
    setTimeout(()=>{
        res(blogs)
    },2000)
      
   })
   
  const a:portfolioType[]= await blogsPromise;
   return NextResponse.json({data:a})
}