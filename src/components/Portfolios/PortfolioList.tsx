import type {portfolioType} from "@/type/portfolio";
import Image from 'next/image';
type BlogListType={
    portfolios:portfolioType[]
}
const PortFolioList = ({portfolios}:BlogListType) => {
    return (  <>
     <h2>
      <b>

      Portfolio
      </b>
     </h2>
    {portfolios?.map(({coverImage,description,id,slug,title}:portfolioType)=>
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
}
 
export default PortFolioList;