import "./itemchild.css";
export default function Itemchild({ prop, val }) {
  return (
    <li className="itemchild">
      <div className="itemchild__prop">{removeUS(prop)}</div>
      <div className="itemchild__val">{removeUS(val)}</div>
    </li>
  );
}


function removeUS(title) {
    return title.replace('_',' ');
}