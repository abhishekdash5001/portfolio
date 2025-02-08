import portfolio  from "@/content/portfolio.json"
import blogs  from "@/content/blogs.json"
import type {portfolioType} from "@/type/portfolio"
import Image from 'next/image';
import BlogList from '@/components/Blogs/BlogList';
import PortFolioList from '@/components/Portfolios/PortfolioList';


export default function Home() {
  const portfolioArray:portfolioType[]=portfolio;
  const blogsArray:portfolioType[]= blogs;
  return (
  <>
     
     <BlogList blogs={blogsArray}/>
    
   

   <PortFolioList blogs={portfolioArray}/>

  </>
  );
}
