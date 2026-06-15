import { resolve } from "styled-jsx/css"

async function test(){
  await new Promise(resolve=>{
    setTimeout(resolve, 4000)
    
  })
}

const page = async () => {
  return (
    <div>This is a About Page route </div>
  )
}

export default page