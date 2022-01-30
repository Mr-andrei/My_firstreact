import {useState} from "react";


type ProfileStatusType = {
    title:string
}

export const ProfileStatus = ({title}:ProfileStatusType) => {
    let [editMode, setEditMode] = useState(true)

    const clickHandler = () => {
        setEditMode (false)
    }

    return(
        <div>
            {
            editMode ?
            <div><span onClick={clickHandler}>{title}</span></div> :
            <div><input
                type="text"
                placeholder={title}
                autoFocus={true}
                onBlur={()=>setEditMode(true) }
            /></div>}
        </div>
    )
}