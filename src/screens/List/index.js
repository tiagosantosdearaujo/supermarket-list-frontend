import "./index.css";
import { useEffect, useState } from "react";
import { getList } from "../../services/request";
import { Button, ListRender, Loader, Modal } from "../../components";

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setloading] = useState(true);
  const [listData, setListData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const loadListItems = async () => {
    setloading(true);
    const result = await getList();
    setListData(result);
    setloading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  const onClickAddButton = () => {
    setSelectedItem(null);
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
    loadListItems();
    setSelectedItem(null);
  };

  const onEditItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // const onCheckItem = async (item) => {
  //   const result = await updateItem(item?._id, {
  //     name: item?.name,
  //     quantity: Number(item?.quantity),
  //     checked: !item?.checked,
  //   });
  //   if (!result.error) {
  //     await loadListItems();
  //   }
  // };

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-header-text-container ">
            <img
              className="list-screen-header-logo-image"
              src="/images/logo.png"
              alt="supermarket-list-logo"
            />
            <h1 className="list-screen-header-logo-title">
              Lista de Supermercado
            </h1>
          </div>
          <div className="list-screen-header-button">
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (
            <Loader />
          ) : (
            <ListRender onEdit={onEditItem} list={listData} />
          )}
        </div>
      </div>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </div>
  );
};
