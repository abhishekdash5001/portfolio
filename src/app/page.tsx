import portfolio  from "@/content/portfolio.json"
import blogs  from "@/content/blogs.json"
import type {portfolioType} from "@/type/portfolio"
import Image from 'next/image';

export default function Home() {
  const portfolioArray:portfolioType[]=portfolio;
  const blogsArray:portfolioType[]= blogs;
  return (
  <>
     <h2>
      <b>

      Blogs
      </b>
     </h2>
     {blogsArray.map(({coverImage,description,id,slug,title}:portfolioType)=>
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
    <h2>
      <b>

      Portfolio
      </b>
     </h2>

    {portfolioArray.map(({coverImage,description,id,slug,title}:portfolioType)=>
     <div key={id}>
     <h3>
      {title}
     </h3>
     <p>
      {description}
     </p>
     <p>
     <Image src={process.env.NEXT_PUBLIC_CLOUDINARY_URL+coverImage} alt='cover image' height={200} width={200}  priority={false}/>
         </p>
         <p>
          {slug}
         </p>
</div>
  )}
    
  </>
  );
}
