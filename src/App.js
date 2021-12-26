import "./App.css";
import Header from "./components/header";
import List from "./components/list";
import Topics from "./components/topics/topics";
import Item from "./components/item";
import ServiceAPI from "./service/api";
import { useEffect, useState } from "react";

function App() {
  const [topics, setTopics] = useState([]);
  const [list, setList] = useState([]);
  const [item, setItem] = useState();
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeListItem, setActiveListItem] = useState(0);

  const service = new ServiceAPI();
  service.getRoot();

  useEffect(() => {
    service.getRoot().then((data) => {
      setTopics(data);
    });
  }, []);

  const handleTopic = (reff, id) => {
    service.getData(reff).then((data) => {
      console.log("handlet topic", data.results);
      setList(data.results);
      setItem({});
      console.log('handle topic id',id)
      setActiveTopic(id);
      setActiveListItem(0);

    });
  };

  const handleItem = (reff,id) => {
    document.body.style.setProperty('cursor','progress','important');
    service.getData(reff).then((data) => {
      console.log(data);
      setItem(data);
      setActiveListItem(id);
      document.body.style.cursor = 'default';

    });
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Topics
          topics={topics}
          handleTopic={handleTopic}
          activeTopic={activeTopic}
        />
        <List
          list={list}
          handleItem={handleItem}
          activeListItem={activeListItem}
        />
        <Item item={item} />
      </div>
    </div>
  );
}

export default App;
