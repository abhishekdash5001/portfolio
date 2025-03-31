
'use server'
import type { portfolioType } from "@/type/portfolio";

type bodyType = portfolioType ;

export type responseType={
    message:string
}


export async function postData(url: string, body: bodyType): Promise<responseType> {


    return await fetchData();


    async function fetchData(): Promise<responseType> {
        try {
            const response = await fetch(process.env.API_URL + url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'  // Indicate that the body will contain JSON data
                },
                body: JSON.stringify(body)
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data: responseType = await response.json();
            return data
        } catch (err: unknown) {
            console.error('Error in postData:', err);
            return {
              message:  "An error occurred while processing the request."
            }
        }

    }





}