
'use server'
import type {portfolioType} from "@/type/portfolio";
import portfolio from "@/content/portfolio.json"
export async function getData(url:string){
    

   return await fetchData();
  
 //fix this 
   async function fetchData(){
    try{
      const response = await fetch(process.env.API_URL+url);
      const data:portfolioType[] = await response.json();
       return data
    }catch(err){
      console.log(err)
      const data:portfolioType[]=portfolio;
       return data
    }
       
    }
   
   
  


}