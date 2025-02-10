import { NextResponse } from 'next/server';
import portfolio from "@/content/portfolio.json"
import { portfolioType } from '@/type/portfolio';

export async function GET(){
    const promise :Promise<portfolioType[]>= new Promise((res)=>{
        setTimeout(()=>{
        res(portfolio)
        },1500)
    })
    const response:portfolioType[]= await promise;
    return NextResponse.json(response)
}