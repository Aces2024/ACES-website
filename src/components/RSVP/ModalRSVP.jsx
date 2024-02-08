import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalRSVP = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleForm = (e) => {
        e.preventDefault();
        toggle();
    };

    return (
        <>
            <button
                className="px-4 py-2 bg-green-400 rounded-xl"
                onClick={handleForm}
            >
                Register
            </button>
            <Modal isOpen={modal} toggle={toggle} fullscreen="sm">
                <ModalHeader toggle={toggle}>
                    <div className="text-lg flex flex-row px-8  justify-between items-center ">
                        <h1 className=""> Add Your details</h1>
                        <button className="font-bold " onClick={toggle}>
                            Close
                        </button>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSezY5PunbfFrVca8iYseArJjI6mpN9OUdt6GqIYRYBZmcTuIQ/viewform?embedded=true"
                        width="100%"
                        height="610"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                    >
                        Loading…
                    </iframe>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ModalRSVP;
