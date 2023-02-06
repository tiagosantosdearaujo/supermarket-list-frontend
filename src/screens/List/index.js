import "./index.css";
import { useEffect, useState } from "react";
import { getList } from "../../services/request";
import { ListCard } from "../../components";

export const ListScreen = () => {
  const [loading, setloading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () => {
    setloading(true);
    const result = await getList();
    console.log({ result });
    setListData(result);
    setloading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <img
            className="list-screen-header-logo-image"
            src="/images/logo.png"
            alt="supermarket-list-logo"
          />
          <h1>Lista de Supermercado</h1>
        </div>
        <div className="list-screen-list-container">
          {loading && <h3>Carregando ...</h3>}
          {!loading && listData?.length > 0 ? (
            listData.map((item) => <ListCard key={item._id} item={item} />)
          ) : (
            <h3>Lista vazia</h3>
          )}
        </div>
      </div>
    </div>
  );
};
