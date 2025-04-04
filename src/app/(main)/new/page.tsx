import NewTaskForm from "@/components/NewTaskForm/NewTaskForm"

const NewTaskPage = () => {
    return (
        <div className="flex flex-col justify-center py-20">
            <h2 className="text-center text-2xl font-bold">タスクの新規作成</h2>
            <NewTaskForm />
        </div>
    )
}

export default NewTaskPage