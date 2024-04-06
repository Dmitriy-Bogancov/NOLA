// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import css from "./MyVerticallyCenteredModal.module.css";
import ReactModal from 'react-modal';

export const MyVerticallyCenteredModal = () => {

}

// export const MyVerticallyCenteredModal = (props) => {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className={css.backdrop}
//     >
//       <Modal.Header closeButton className={css.modal}>
//         <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
//       </Modal.Header>
//       <Modal.Body className={css.modal}>
//         {/* <h4>{props.text}</h4> */}
//         <p>{props.text}</p>
//       </Modal.Body>
//       {/* <Modal.Footer className={css.modal}>
//         <Button onClick={props}>Close</Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// };

MyVerticallyCenteredModal.propTypes = {
  props: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
