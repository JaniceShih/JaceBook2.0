import React from "react";

import SignupContainer from "../session_form/signup_form_container";
import CreatePostContainer from '../posts/create_post_container'
import EditPostContainer from '../posts/edit_post_container'
import DeletePostContainer from '../posts/delete_post_container'

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.type) {
        case "create_user":
            component = <SignupContainer />
            break;
        case "create_post":
            component = <CreatePostContainer />
            break;
        case "edit_post":
            component = <EditPostContainer post={modal.post} />
            break;
        case "delete_post":
            component = <DeletePostContainer post={modal.post} />
            break;
        default:
            return null;
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

export default Modal;

