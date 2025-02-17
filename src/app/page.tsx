
import type {portfolioType} from "@/type/portfolio"
import BlogList from '@/components/Blogs/BlogList';
import PortFolioList from '@/components/Portfolios/PortfolioList';
import { getData } from '@/server-hooks/GetData';

export interface IPortFolioGet{
  data:portfolioType[]
}

export default async function Home() {
  try{
   const portfolioData:IPortFolioGet|undefined=await getData('/api/portfolios',"no-cache");
   const blogListData:IPortFolioGet|undefined=await getData('/api/blogs',"no-cache");
  
  
    return (
      <>  
     { portfolioData?  <BlogList blogs={blogListData?.data}/>:null}
    {  portfolioData?  <PortFolioList portfolios={portfolioData?.data}/>:null}
      </>
      );
  }
  catch(err){
    console.log(err,"Error in fetching API")
    return <>
    Error in fetching API
    </>
  }

 
  
}
