function Evenmentt(){
    const list = () => {
        const users = [
            {id:1,name:"nina"},
            {id:2,name:"ora"}
        ];
        const shout = (a) => {
            alert ("bnjr " + arguments.user.names);
            console.log(a)
        }
   
    return (
        <div>
            <h1>users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} <button onClick={()=> shout({user})}>Click here!!</button>
                    </li>
                ))}
            </ul>
        </div>
    )
     };
}


export default Evenmentt ;