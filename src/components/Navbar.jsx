import {Link} from "react-router-dom"

const Navbar = ({elements}) => {
    return (
        <div>
            π½πΎπ Navbar ππΎπ½
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={"/private/QuestionsPage"}>{element.titulo}</Link>)
               })
           }
        </div>
        </div>
    )
}

export default Navbar
