import "./listItem.css";

export default function ListItem({ title, reff, handleItem,id,activeListItem }) {

    let clazz = ['list-item'];

    if (id===activeListItem) {
        clazz.push('active-item')
    }

  return (
    <li className={clazz.join(' ')} onClick={() => handleItem(reff,id)}>
      {title}
    </li>
  );
}
