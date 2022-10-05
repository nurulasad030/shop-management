import React, { Fragment, useState } from "react";
import AddInvoiceModal from "../AddInvoiceModal/AddInvoiceModal";

const Invoice = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="flex justify-center border-4 border-gray-400 mt-5 p-5 bg-green-500">
        <button className="text-2xl w-1/4" onClick={() => setShowModal(true)}>
          Invoice
        </button>
      </div>
      <AddInvoiceModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></AddInvoiceModal>
    </Fragment>
  );
};

export default Invoice;
