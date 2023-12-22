export default function TextField(p) {
    const {ph, value="default value"} = p;
    console.log(ph, value);

    return (
        <input type="text" className="textField" placeholder={ph} value={value}/>
    )
}

export function NumberField() {
    return (
        <input type="number" placeholder="Enter Number"/>
    )
}

export function PasswordField() {
    return (
        <input type="password" placeholder="Enter password"/>
    )
}