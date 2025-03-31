
'use server'
import type {blogType} from "@/type/blogs"


type IGetData= {
  data: blogType[];
}

// interface IRevalidate{
//   revalidate:number
// }
export async function getData(url: string, tag: string) {

  // cache and next revalidate they will throw error in npm run build only one can be used
  return await fetchData();


  async function fetchData() {
    try {
      const response = await fetch(process.env.API_URL + url, {
        next: {
          tags: [tag]
        }
      })
      const data: IGetData = await response.json();
      return data
    } catch (err) {
      console.log(err)
    }

  }





}