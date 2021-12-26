import TopicsItem from "../topicsItem";
import "./topics.css";

export default function Topics({ topics, handleTopic, activeTopic }) {
  const res = [];
  for (let key in topics) {
    res.push(
      <TopicsItem
        activeTopic={activeTopic}
        id={res.length + 1}
        title={key.toUpperCase()}
        reff={topics[key]}
        handleTopic={handleTopic}
      />
    );
  }

  return (
    <div className="topics">
      <ul>{res}</ul>
    </div>
  );
}
