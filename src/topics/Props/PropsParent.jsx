import PropsChild1 from "./PropsChild1";
import PropsUser from "./PropsUser";

// Props means properties
const PropsParent=()=>{
    // let data="Hello World"
    // let arr=[10,20,30,40,50]

    let users=[
        {id:1,name:"Ashfaque",company:"TCS",designation:"Developer"},
        {id:2,name:"Albab",company:"Infosys",designation:"Tester"},
        {id:3,name:"Naveen",company:"Wipro",designation:"Manager"},
        {id:4,name:"Irfan",company:"Google",designation:"Clerk"},
        {id:5,name:"Manzil",company:"Facebook",designation:"Sales"},
        {id:6,name:"Prashant",company:"Meta",designation:"Intern"},
        {id:7,name:"Sukman",company:"Amazon",designation:"Analyst"}

    ]
    return(
        <div>
            <h1>Props Example</h1>
             {/* //single prop single data
            <PropsChild1 x={data} arr={arr}/> 
             //single prop multiple value
            <PropsChild1 x={{data,arr}}/>  */}

            <PropsUser users={users}/>
        </div>
    )
}
export default PropsParent;