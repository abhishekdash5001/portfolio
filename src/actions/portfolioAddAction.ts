'use server'

import { postData } from "@/server-hooks/portfolios/postData";
import {uploadImageToCloudinary} from "../../lib/cloudinary";
import type {portfolioType} from "../app/portfolioForm/page";
import { redirect } from 'next/navigation'
import type {responseType} from "@/server-hooks/portfolios/postData"
 type portfolioAddActionType=(a: portfolioType,b:FormData)=> Promise< portfolioType>

//  prevState:portfolioType
export const portfolioAddAction:portfolioAddActionType= async(_,formData:FormData)=>{
    const errors:string[]=[];
    const message:string[]= [];
    const companyImage = formData.get("companyImage");
    if(companyImage !== null && companyImage instanceof File){
        const image:FormDataEntryValue = companyImage;
        
        if (!image || image.size === 0) {
            errors.push("Please upload an image")
        }
        if (errors.length > 0) {
            return { errors ,message}
        }
        let imageUrl: string;
    try{
        imageUrl = await uploadImageToCloudinary(image)
        message.push("Image uploaded Successfully");
        const companyName = formData.get("companyName");
        const companyStartDate = formData.get("companyStartDate");
        const companyEndDate = formData.get("companyEndDate");
        const designation = formData.get("Designation");
        const description = formData.get("Describe");
        
        const safeCompanyName = companyName instanceof File ? '' : companyName || '';
        const safeCompanyStartDate = companyStartDate instanceof File ? '' : companyStartDate || '';
        const safeCompanyEndDate = companyEndDate instanceof File ? '' : companyEndDate || '';
        const safeDesignation = designation instanceof File ? '' : designation || '';
        const safeDescription = description instanceof File ? '' : description || '';
        if(companyEndDate && companyName && companyStartDate && designation && description){
            const postObj={
                companyName:safeCompanyName,
                companyStartDate:safeCompanyStartDate,
                companyEndDate:safeCompanyEndDate,
                designation:safeDesignation,
                description:safeDescription,
                companyImage:imageUrl
            }
            try{
                const data:responseType= await postData('api/portfolios',postObj);
                message.push(data.message);
                const params = new URLSearchParams();
                params.append('path', '/');
                params.append('secret', process.env.REVALIDATION_TOKEN || "123");

                await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST}'api/revalidatePath`,{
                    method:"POST",
                    body:params
                });
               
           
               }catch(err){
                console.log(err)
                   errors.push('Portfolio saved error')
               }
        }else{
            errors.push("All felids are mandatory")
        }
        
      
       

    }catch(error){
        console.log(error)
        errors.push("Image upload failed")
       
    }
    }else{
        errors.push("Please add image ")
    }
  
   
    
   
    if(errors.length === 0){
        redirect("/")
    }
    return {
        message,
        errors
    }
}