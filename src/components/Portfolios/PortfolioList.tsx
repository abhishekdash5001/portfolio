import { getData } from '@/server-hooks/GetData';
import type {portfolioType} from "@/type/portfolio";
import Image from 'next/image';
// type BlogListType={
//     portfolios:portfolioType[]
// }
export interface IPortFolioGet{
    data:portfolioType[]
  }
  
const PortFolioList = async() => {
    const portfolioData:IPortFolioGet|undefined=  await getData('/api/portfolios');
    if(portfolioData){
        const data:portfolioType[]= portfolioData.data;
        return (  <>
            <h2>
             <b>
       
             Portfolio
             </b>
            </h2>
           {data?.map(({coverImage,description,id,slug,title}:portfolioType)=>
           <div key={id}>
                <h3>
                 {title}
                </h3>
                <p>
                 {description}
                </p>
                <Image src={process.env.NEXT_PUBLIC_CLOUDINARY_URL+coverImage} alt='cover image' height={200} width={200}  priority/>
       
           
             
                <p>
                 {slug}
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