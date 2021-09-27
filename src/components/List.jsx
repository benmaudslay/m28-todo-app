import Item from "./Item"

const List = (props) => {
    return (
      <ul>
        {props.todos.map((element, index) => {
          return <Item value={element} key={index} />
        })}
      </ul>
    )
}

export default List