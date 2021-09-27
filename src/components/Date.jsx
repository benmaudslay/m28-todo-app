const Date = ({todoDate}) => {
    // let date = `${todoDate.getHours()}:${todoDate.getMinutes()}:${todoDate.getSeconds()} on ${}`
    return (
        <p className="date">{todoDate.toLocaleString()}</p>
    )
}

export default Date