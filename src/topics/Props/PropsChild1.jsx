import PropsParent from "./PropsParent";
const PropsChild1=(props)=>{
    console.log(props); //{data:{data,arr}}
    let {x:{data,arr}}=props
    
    return(
        <div>
            <h1>Props child 1 {data}{arr}</h1>
        </div>
    )
}
export default PropsChild1;