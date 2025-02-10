
import type {portfolioType} from "@/type/portfolio";
export async function getData(url:string){
    

   return await fetchData();
  
 //fix this 
   async function fetchData(){
        const response = await fetch(process.env.API_URL+url);
        const data:portfolioType[] = await response.json();
       
       return data
    }
   
   
  


}