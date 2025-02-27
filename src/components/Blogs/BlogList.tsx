
import type {portfolioType} from "@/type/portfolio";
import Image from 'next/image';
import { IPortFolioGet } from '../Portfolios/PortfolioList';
import { getData } from '@/server-hooks/GetData';

// type BlogListType={
//     blogs:portfolioType[]|undefined
// }
const BlogList = async() => {
    const blogListData:IPortFolioGet|undefined=await getData('/api/blogs');
    if(blogListData){
        const {data}= blogListData;
        return (  <>
            <h2>
              <b>
        
              Blogs
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
            </>);
    }else{
        return (<>
        No Blogs
        </>)
    }
   
}
 
export default BlogList;