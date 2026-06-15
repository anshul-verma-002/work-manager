import { resolve } from "styled-jsx/css"

async function test(){
  await new Promise(resolve=>{
    setTimeout(resolve, 4000)
    
  })
}

const page = async () => {
  await test();
  throw new Error("This is a manual error thrown");
  return (
    <div>This is a About Page route </div>
  )
}

export default page