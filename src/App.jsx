const app = () => {
   
  const name = "Peter";
  const names = ["peter", "james", "jane"];
  
  const [ peter, james, jane] = names;
  return (
    <div>
      <h1 className="p-5 text-3xl font-bold underline text-center">
      
        
        <p>{ peter }</p>
    </h1>
    </div>
  )
 }

 export default app;