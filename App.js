import { useEffect } from "react"

function App(){
  useEffect(
    ()=>{
      postdata()
    }
  )

  async function postdata(){
    let res = await fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(
          {
              title: 'test product',
              price: 13.5,
              description: 'lorem ipsum set',
              image: 'https://i.pravatar.cc',
              category: 'test'
          }
      )
  })
  
    let data = await res.json()
    console.log(data)

  }
  return(
    <div>
      <h2 className="container">API Integration is react</h2>
    </div>
  )
}

export default App