



const Excutor = (props:ExcutorNamePropsType) => {
    return (
        <div>
            <div>{props.name}</div>
        </div>
    )
}

const Track = (props:TrackNamePropsType) =>{
    return(
        <div>
            <div>{props.name}</div>
        </div>
    )
}
type ExcutorNamePropsType ={
    id:number,
    name:string
}
let ExcutorName = [
    {id:1, name:"Nizkiz"},
    {id:2, name:"LP"},
    {id:3, name:"Zvery"},
    {id:4, name:"Nirvana"},
    {id:5, name:"tehno"},
]
let nameElemet = ExcutorName.map(d => <Excutor name={d.name} id={d.id}/>)


type TrackNamePropsType ={
    id:number,
    name: string
}

let TrackName = [
    {id:1, name:"my first track"},
    {id:2, name:"my first 2"},
    {id:3, name:"my first 3"},
    {id:4, name:"my first 4"},
    {id:5, name:"my first 5"}
]
let trackElement = TrackName.map(t => <Track name={t.name} id={t.id}/>)

const Music = () => {
    return (
        <div>
            {nameElemet}
            {trackElement}
        </div>
    )
}
export default Music