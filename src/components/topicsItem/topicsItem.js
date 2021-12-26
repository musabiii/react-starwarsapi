import "./topicsItem.css";
export default function TopicsItem({ title, reff, handleTopic,id,activeTopic }) {

console.log(id)
  const handleClick = (e) => {
    handleTopic(reff,id);
  };

  let clazz = ["topics__item"];

  if (activeTopic===id) {
    clazz.push("active");
  }

  return (
    <li className={clazz.join(' ')} onClick={handleClick}>
      {title}
    </li>
  );
}
