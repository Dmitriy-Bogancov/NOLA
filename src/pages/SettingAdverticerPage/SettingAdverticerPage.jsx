// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import SettingPage from "../SettingPage/SettingPage";
// import { Modal } from "../../components/Modal/Modal";
// import { NavLink } from "react-router-dom";
// import { logoutAction } from "../../redux/auth/authSlice.js";
// import { ToastError } from "../../services/ToastError/ToastError.js";

// const SettingAdverticerPage = () => {
//   const dispatch = useDispatch();

//   const [isModal, setIsModal] = useState(false);

//   const handleToggleModal = () => {
//     setIsModal((prev) => !prev);
//   };

//   const handleLogOut = () => {
//     try {
//       dispatch(logoutAction());
//     } catch (error) {
//       ToastError("Error! Try later");
//     }
//   };

//   return (
//     <div>
//       <SettingPage />
//       <ul>
//         <li>
//           <button type="button" onClick={handleToggleModal}>
//             Log out
//           </button>
//         </li>
//         <li>
//           <NavLink to="changePassword">
//             <button type="button">Change password</button>
//           </NavLink>
//         </li>
//       </ul>

//       {isModal && (
//         <Modal handleToggleModal={handleToggleModal} feedback={true}>
//           <p>Are you sure you want to Sign Out?</p>
//           <button type="button" onClick={handleLogOut}>
//             Yes
//           </button>
//           <button type="button" onClick={handleToggleModal}>
//             No
//           </button>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default SettingAdverticerPage;
