import "./Item.css";
import Date from "./Date"

const Item = ({ value, checked, handleChecked, handleDelete, date }) => {
  return (
    <li className={`${checked ? "checked" : undefined}`}>
      <div className="itemContainer">
        <p>{value}</p>
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            checked={checked}
            onChange={handleChecked}
          />
          <button onClick={handleDelete}>🗑</button>
        </div>
      </div>
      <Date todoDate={date} />
    </li>
  );
};

export default Item;
