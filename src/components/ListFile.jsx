import React, { useContext } from 'react'
import { postlist } from '../store/store_file'
import Display from './Display'

function ListFile() {
    const {postlist2}=useContext(postlist)
    console.log("postlist2",postlist2)
  return (
    <div>{postlist2.map((data)=>(
     <Display data={data}/>
    )
        
    )}</div>
  )
}

export default ListFile