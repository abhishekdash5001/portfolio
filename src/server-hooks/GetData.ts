
'use server'
import type {portfolioType} from "@/type/portfolio";


interface IGetData{
  data:portfolioType[];
}
export async function getData(url:string,cache:RequestCache){
    

   return await fetchData();
  
 //fix this 
   async function fetchData(){
    try{
      const response = await fetch(process.env.API_URL+url,{cache});

      const data:IGetData = await response.json();
       return data
    }catch(err){
      console.log(err)
      // const data:IgetData=portfolio;
      //  return data
    }
       
    }
   
   
  


}