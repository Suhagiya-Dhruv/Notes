import B from "./B";

const A = (props) => {

    const {name} = props;

    console.log("A component")
    return(
        <div>
            <B name={name}/>
        </div>
    )
}

export default A;