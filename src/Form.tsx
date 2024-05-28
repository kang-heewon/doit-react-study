import {FormEvent, useState} from "react"

type FormProps = {
    addHomework: (homework: string) => void
}

export const Form = ({addHomework}: FormProps) => {
    const [title, setTitle] = useState("")
    const submit = (e: FormEvent) => {
        e.preventDefault();

        if (title.trim() === "") return;
        addHomework(title)
    }

    return <form onSubmit={submit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">발행 발행</button>
    </form>
}
