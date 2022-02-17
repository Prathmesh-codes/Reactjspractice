import './App.css';
//component - reusable entity
//types
//-Functional component
//Class component
function App() {
 
 const uname='Prathamesh'
 const user={name:'Prathmesh', address:`Pune`, email:`prat.babar@test.com`}

const task=[

  {
    id: 1,
    title: `learn nestjs`,
    description:`learn NestJS by practically writing the code`
  },

  
  {
    id: 2,
    title: `Finish assignment`,
    description:`Finish the assignment before tuesday`
  },

  
  {
    id: 3,
    title: `Start reading about GraphQL`,
    description:`Start reading the content on GraphQL`
  }
  
]



 return (
    <div className="App">

      <h1> This is a sample app</h1>

      <div> {uname}, Welcome to the React JS </div>
      <hr />

<div>
      <div>email:{user.email}</div>
      <div>Address:{user.address}</div>
</div>

<hr />

{task.map(task=>{
  return(
<div>
        <div>Id:{task.id}</div>
        <div>Title:{task.title}</div>
        <div>Description:{task.description}</div>
      </div>

  )
})}

      
     
    </div>
  
  );
}

export default App;
