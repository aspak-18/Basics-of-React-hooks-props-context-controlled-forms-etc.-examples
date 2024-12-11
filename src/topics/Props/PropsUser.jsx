const PropsUser=({users})=>{  // destructure in the parameter
    console.log(users);
    
    return(
        <div>
            <h1>Props Users</h1>
            {
                users.map((ele,i)=>{
                    console.log(ele);
                    let{id,name,company,designation}=ele
                    return(
                        <section key={id}>
                            <h1>ID: {id}</h1>
                            <h1>NAME: {name}</h1>
                            <h1>Company: {company}</h1>
                            <h1>Designation: {designation}</h1>
                            <hr />
                        </section>
                    )
                    
                })
            }
            {/* Destructuring in the parameter
            {
                users.map(({id,name,company,designation},i)=>{                    
                    return(
                        <section key={i}>
                            <h1>ID: {id}</h1>
                            <h1>NAME: {name}</h1>
                            <h1>Company: {company}</h1>
                            <h1>Designation: {designation}</h1>
                            <hr />
                        </section>
                    )
                    
                })
            } */}
        </div>
    )
}
export default PropsUser;