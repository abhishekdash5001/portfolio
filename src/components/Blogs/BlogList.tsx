
import type {blogType} from "@/type/blogs";
import Image from 'next/image';

import { getData } from '@/server-hooks/blogs/getData';

type BlogListType={
    data:blogType[];
}


const BlogList = async() => {
    const blogListData:BlogListType|undefined=await getData('api/blogs',"blogs");


    if(blogListData){
        const {data}= blogListData;
        return (  <>
            <h2>
              <b>
        
              Blogs
              </b>
             </h2>
        
            {data?.map(({coverImage,description,id,slug,title}:blogType)=>
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