import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import AddProductModal from "../AddProductModal/AddProducModal";

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-center border-4 border-gray-400 mt-5 p-5 bg-blue-700">
        <button className="text-2xl w-full" onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          Add Product
        </button>
      </div>
      <AddProductModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></AddProductModal>
    </Fragment>
  );
};

export default AddProduct;
