

'use client'
import { portfolioAddAction } from '@/actions/portfolioAddAction';
import { useActionState } from 'react';

export type portfolioType={
  errors:string[],
  message:string[]
}


export default function  PortfolioForm(){

  const [portfolioState,portfolioAction]=useActionState<portfolioType,FormData>(portfolioAddAction,{
    errors:[],
    message:[]
  })
 
    return (
        <>
          <form action={portfolioAction}>
            <fieldset>
            <label htmlFor="companyName">Company Name</label>
            <input name="companyName" id="companyName" type="text"></input>
            </fieldset>
            <fieldset>
            <label htmlFor="companyStartDate">Start Date</label>
            <input name="companyStartDate" id="companyStartDate" type="date"></input>
            </fieldset>
            <fieldset>
            <label htmlFor="companyEndDate">End Date</label>
            <input name="companyEndDate" id="companyEndDate" type="date"></input>
            </fieldset>
            <fieldset>
            <label htmlFor="Designation">Designation</label>
            <input name="Designation" id="Designation" type="text"></input>
            </fieldset>
            <fieldset>
            <label htmlFor="Describe">Description</label>
            <textarea name="Describe" id="Describe"rows={5} cols={50}></textarea>
            </fieldset>
            <fieldset>
            <label htmlFor="companyImage">Company Image</label>
            <input  type="file" name="companyImage" id="companyImage"></input>
            </fieldset>
         

            <button type="submit" >Add </button>
          </form>

          {portfolioState.message}
        </>
    )
}