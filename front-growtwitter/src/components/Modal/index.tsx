
// import React, { useState } from "react";
// import closeIcon from "../images/X.svg";
// import { ButtonCloseModal, ButtonTweet, Line, ModalContent, ModalWrapper, PlainTextarea } from "./styles";
// import { Tweet } from "../../types/tweet";



// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children?: React.ReactNode;
//   tweet?: Tweet
//   userId?: string;
// }

// function Modal({ isOpen, onClose, children, userId }: ModalProps) {
//   const [editableContent, setEditableContent] = useState("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setEditableContent(e.target.value);
//   };

//   async function createTweet(e: React.MouseEvent<HTMLButtonElement>) {
//     e.preventDefault();

//     console.log(userId, "tweet 123");

//     const tweetCreate: Tweet = {
//       content: editableContent,
//       type: "tweet",
//       userId: userId,
//     };

//     const response = await create(tweetCreate);

//     if (response.code === 201) {
//       onClose();
//     }
//   }
//   if (!isOpen) return null;

//   return (
//     <ModalWrapper>
//       <ModalContent>
//         <div>
//           <ButtonCloseModal onClick={onClose}>
//             <img src={closeIcon} alt="CloseIcon" />
//           </ButtonCloseModal>
//           {children}
//           <PlainTextarea
//             value={editableContent}
//             onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//               handleInputChange(e)
//             }
//             placeholder="Digite aqui..."
//           />
//         </div>

//         <div>
//           <Line />
//           <ButtonTweet onClick={createTweet}>Tweetar</ButtonTweet>
//         </div>
//       </ModalContent>
//     </ModalWrapper>
//   );
// }

// export default Modal;