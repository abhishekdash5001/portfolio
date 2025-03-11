import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req:NextRequest){
        const tag:string|null = req.nextUrl.searchParams.get("tag");
        const secret:string|null = req.nextUrl.searchParams.get("seceret");
        if(secret === process.env.REVALIDATION_TOKEN){
            if(tag)revalidateTag(tag);
            else{
                return NextResponse.json({message:"Tag not provided"},{status:400}) 
            }
        }else{
            return NextResponse.json({message:"Invalid Secret key"},{status:401}) 
        }
        

return NextResponse.json({revalidated:true,timeStamp:Date.now()})
}