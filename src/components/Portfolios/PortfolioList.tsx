import { getData } from '@/server-hooks/portfolios/getData';
import type {portfolioType} from "@/type/portfolio";
import Image from 'next/image';

export interface IPortFolioGet{
    data:portfolioType[]
  }
  
const PortFolioList = async() => {
    const portfolioData:IPortFolioGet|undefined=  await getData('api/portfolios',"portfolios");
    if(portfolioData){
        const data:portfolioType[]= portfolioData.data;
        return (  <>
            <h2>
             <b>
       
             Portfolio
             </b>
            </h2>
           {data?.map(({companyName,description,companyImage}:portfolioType)=>
           <div key={companyName}>
                <h3>
                 {companyName}
                </h3>
               
                <Image src={companyImage} alt='cover image' height={200} width={200}  priority/>
       
           
             
                <p>
                 {description}
                </p>
           </div>
           )}
           </>)
    }else{
        return (<>
        
        No portfolio
        </>)
    }
 
    ;
}
 
export default PortFolioList;