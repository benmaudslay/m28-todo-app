import "./Item.css"

const Item = ({ value, checked, handleChecked }) => {
  return (
    <li className={`itemContainer ${checked ? "checked" : undefined}`}>
      <p>{value}</p>
      <input
        type="checkbox"
        name=""
        id=""
        checked={checked}
        onChange={handleChecked}
      />
    </li>
  );
};

export default Item;
