import {ChangeEvent, useState} from "react";


type ProfileStatusType = {
    title: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = ({title, updateStatus}: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(true)
    let [titleInput, setTitleInput] = useState<string>("")

    const clickHandler = () => {
        setEditMode(false)
    }
    const onBlurHandler = () => {
        setEditMode(true)
        updateStatus(titleInput)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.currentTarget.value)
    }
        return (
            <div>
                {
                    editMode ?
                        <div><span onClick={clickHandler}>{title || "new title"}</span></div> :
                        <div><input
                            type="text"
                            placeholder={title}
                            autoFocus={true}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        /></div>}
            </div>
        )
}