import Itemchild from "../itemchild";
import "./item.css";


export default function Item({ item }) {
  let res = [];
  for (let key in item) {
      console.log(typeof item[key])
    if ((typeof item[key] === "string")&&(item[key].length<50)) {
      res.push(
          <Itemchild prop = {key} val={item[key]}/>
        // <li>
        //  <h4>{key}</h4> "{item[key]}"
        // </li>
      );
    }
  }

  return (
    <div className="item">
      <ul>{res}</ul>
    </div>
  );
}
