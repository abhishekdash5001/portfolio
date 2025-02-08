import portfolio  from "@/content/portfolio.json"
import blogs  from "@/content/blogs.json"
import type {portfolioType} from "@/type/portfolio"

export default function Home() {
  let portfolioArray:portfolioType[]=portfolio;
  let blogsArray:portfolioType[]= blogs;
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
    </div>
    )}
    
  </>
  );
}
