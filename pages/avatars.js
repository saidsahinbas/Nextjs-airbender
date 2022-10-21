export default function Avatars({avatars}){
    return(
        <div>
            <h1>Avatars</h1>
            <ul>
                {avatars.map(avatar =>{
                    return(
                        <li key={avatar._id}>
                            {avatar.name}
                            <img src={avatar.photoUrl}></img>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getStaticProps(){
    const avatars = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar').then(r => r.json());
    return{
        props: {
            avatars
        }
    }
}