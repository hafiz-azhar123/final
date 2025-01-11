import { createContext, useReducer } from "react"

export const postlist=createContext({
    postlist2:[],
    addpost:()=>{}
})
const reducerfunction=(current,action)=>{
      let newlist=current;
      if(action.type=="addpost"){
        newlist=[...current,action.payload]
      }
      return newlist
}
const POSTLISTPROVIDER=({children})=>{
    const [postlist2,dispatch]=useReducer(reducerfunction,[])
    const addpost=(formData)=>{
        console.log("dispath",formData)
        dispatch({
            type:"addpost",
            payload:{
                formData
            }
        })
     
    }
 return <postlist.Provider value={{postlist2,addpost}}>{children}</postlist.Provider>
}
export default POSTLISTPROVIDER