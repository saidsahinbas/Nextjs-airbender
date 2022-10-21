export default function Character({ character }){
    return(
        <div>
            <h1>{ character.name }</h1>
            <h2>Affiliation : { character.affiliation}</h2>
            <img src={character.photoUrl} alt=""></img>
        </div>
    )
}

export async function getStaticProps({ params }){
    const results = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${params.characterId.replace(/\-/g, '+')}`).then(r => r.json());
    return{
        props: {
            character: results[0]
        }
    }
}

export async function getStaticPaths(){
    const characters = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500').then(r =>r.json());
    return{
        paths : characters.map(character => {
            const characterId = character.name.toLowerCase().replace(/ /g,'-')
            return{ 
                params:{
                    characterId 
                }
            }
        }),
        fallback: false
    }
}