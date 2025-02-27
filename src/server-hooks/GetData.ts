
'use server'
import type {portfolioType} from "@/type/portfolio";



interface IGetData{
  data:portfolioType[];
}
interface IRevalidate{
  revalidate:number
}
export async function getData(url:string,revalidate?:IRevalidate){

// cache and next revalidate they will throw error in npm run build only once can be used
   return await fetchData();
  
 //fix this 
   async function fetchData(){
    try{
      let response;
      if(revalidate){
         response = await fetch(process.env.API_URL+url,{next:
          revalidate
  });
      }else{
        response =  await fetch(process.env.API_URL+url)
      }
      

      const data:IGetData = await response.json();
       return data
    }catch(err){
      console.log(err)
      // const data:IgetData=portfolio;
      //  return data
    }
       
    }
   
   
  


}