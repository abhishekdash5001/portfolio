import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request:NextRequest){
    const path:string|null = request.nextUrl.searchParams.get("path");
    const secret:string|null = request.nextUrl.searchParams.get("secret");
    if(!path){
     return NextResponse.json({message:"Path is not provided"},{status:400})
    }
    if(secret === process.env.REVALIDATION_TOKEN){
       if(path) revalidatePath(path)
        else{
            return NextResponse.json({message:"Token  is not valid"},{status:401})
    }
    }
 return  NextResponse.json({message:`Path ${path} revalidated`},{status:200})
}

