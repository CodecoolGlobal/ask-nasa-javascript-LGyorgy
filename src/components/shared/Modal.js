import "../../css/Modal.css";

 const Modal = ({ title, body, onClose, show }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                </div>
                <div className="modal-body">
                    {body}
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
