
import type {portfolioType} from "@/type/portfolio"
import BlogList from '@/components/Blogs/BlogList';
import PortFolioList from '@/components/Portfolios/PortfolioList';
import { getData } from '@/server-hooks/GetData';



export default async function Home() {
  const portfolioArray:portfolioType[]=await getData('/api/portfolios');
  const blogsList:portfolioType[]|undefined=await getData('/api/blogs');

  return (
  <>  
    <BlogList blogs={blogsList}/>
    <PortFolioList blogs={portfolioArray}/>
  </>
  );
}
