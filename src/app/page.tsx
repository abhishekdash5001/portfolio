
import type {portfolioType} from "@/type/portfolio"
import BlogList from '@/components/Blogs/BlogList';
import PortFolioList from '@/components/Portfolios/PortfolioList';
import { Suspense } from 'react';


export interface IPortFolioGet{
  data:portfolioType[]
}

export default async function Home() {
 
  //  const portfolioData:IPortFolioGet|undefined=await getData('/api/portfolios',"no-cache");
  //  const blogListData:IPortFolioGet|undefined=await getData('/api/blogs',"no-cache");

  //sequental api call
  //  const portfolioData:IPortFolioGet|undefined=await getData('/api/portfolios',"no-cache");
  //  const blogListData:IPortFolioGet|undefined=await getData('/api/blogs',"no-cache");

//   const portfolioPromise = getData('/api/portfolios',"no-cache");
//   const blogsPromise = getData('/api/blogs',"no-cache");

//  const [portfolioData,blogListData] =await Promise.all([portfolioPromise,blogsPromise])
  
  
    return (
      <> 
      <div>
      <Suspense fallback={<>Loading Blogs ..</>}>
      <BlogList/>
      </Suspense>
      </div>
   
     <Suspense fallback={<>Loading Portfolios ..</>}>
     <PortFolioList/>
     </Suspense>

      </>
      );
  }
 

 
  

