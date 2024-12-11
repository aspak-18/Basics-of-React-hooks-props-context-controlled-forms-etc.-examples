import StatesInFBC from "./topics/states/StatesInFBC";
import StatesInCBC from "./topics/states/StatesInCBC";
import Counter from "./topics/states/Counter";
import PropsParent from "./topics/Props/PropsParent";
import InlineCssExample from "./topics/React CSS/InlineCssExample";
import Button from "./topics/component/button/Button";
import Parent from "./topics/context/Parent";
import ContextApi from "./topics/context/ContextApi";
import X from "./topics/context/X";
import Y from "./topics/context/Y"
import Controlled from "./topics/Controlled Forms/Controlled";
import Controlled2 from "./topics/Controlled Forms/Controlled2";
import Uncontrolled from "./Uncontrolle Forms/Uncontrolled";
import Task from "./Uncontrolle Forms/Task";
import Reducer from "./usereducer/Reducer";
import Card from "./topics/hoc/Card";
import Hoc from "./topics/hoc/Hoc";
import Memo from "./topics/memo/Memo";
//!----Using Arrow Function-----

const App =()=>{
    return(
    <>
    {/* <StatesInFBC/>
    <hr />
    <StatesInCBC/>
    <hr/>
    <Counter/>
    <hr/> */}
    {/* <PropsParent/> */}
    {/* <InlineCssExample/>
    <Button/> */}
    {/* <Parent/> */}

    {/* <ContextApi>
        <X/>
        <Y/>
    </ContextApi> */}
    {/* <Controlled/> */}
    {/* <Controlled2/> */}
    {/* <Uncontrolled/> */}
    {/* <br />
    <Task/> */}
    {/* <Reducer/> */}
    {/* <Card/>
    <Hoc/> */}
    <Memo/>
    </>
    
    );
};
export default App;



// import Navbar from "./Component/Navbar";
//!----------function based-------------
// function App(){
//     return (
//         <div>
//             <h1>I am Parent Component</h1>
//         </div>
//     )
// }

// function App(){
//     return (
//         <Fragment>
//             <h1>I am Parent Component</h1>
//         </Fragment>
//     )
// }

//! It is used to wrap component without the need to create extra node(div)
// export default App;


//!-------class based component--------------
// import { Component, Fragment } from "react";
// class App extends Component{
//     render() {
//         return <h1>I am class based component</h1>
//     }
// }
// export default App;

