//Helps to connect next with sanity jismai sab credentials hongy
//create client client banai ga client is a function jo return karta hai object 
//sanity sai related credentials clientfunction mai paas horahi hai 
//use cdn ka matlab cdn mai rakhna hai ya server per
//api version vision sanity sai millay ga 

import { createClient } from "next-sanity";
import { apiVersion,dataset,projectId,useCdn } from "sanity/env";
export const client=createClient(
    {
        apiVersion :"v2023-06-24" , 
        dataset : "production" ,
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
        useCdn : false , 
    }
)


