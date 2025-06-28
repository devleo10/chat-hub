// import { useEffect } from "react";
// import NewDm from "./components/new-dm";
// import ProfileInfo from "./components/profile-info";
// import { apiClient } from "@/lib/api-client";
// import { GET_USERS_CHANNEL } from "@/utils/constants";
// import { useAppStore } from "@/store";
// import ContactList from "@/components/ui/contact-list";
// import CreateChannel from "./components/create-channel";

const ContactsContainer = () => {
//   const {
//     directMesagesContacts,
//     setDirectMesagesContacts,
//     getContacts,
//     channels,
//     setChannels,
//     userInfo,
//   } = useAppStore();
  
//    useEffect(() => {
//     getContacts();
//   }, [setDirectMesagesContacts]);

//   useEffect(() => {
//     const getChannels = async () => {
//       const response = await apiClient.get(GET_USERS_CHANNEL, {
//         withCredentials: true,
//       });
//       if (response.data.channels) {
//         setChannels(response.data.channels);
//       }
//     };
//     getChannels();
//   }, []);

  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#454143cc] w-full ">
     
      ContactsContainer
    </div>
  );
};

export default ContactsContainer;

// const Logo = () => {
//   return (
//     <div className="flex p-5  justify-start items-center gap-2">
//       <svg
//         id="logo-38"
//         width="78"
//         height="28"
//         viewBox="0 0 78 32"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {" "}
//         <path
//           d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
//           className="ccustom"
//           fill="#8338ec"
//         ></path>{" "}
//         <path
//           d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
//           className="ccompli1"
//           fill="#975aed"
//         ></path>{" "}
//         <path
//           d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
//           className="ccompli2"
//           fill="#a16ee8"
//         ></path>{" "}
//       </svg>
//       <span className="text-2xl lg:text-3xl font-semibold ">Syncronus</span>
//     </div>
//   );
// };

// const Title = ({ text }) => {
//   return (
//     <h6 className="uppercase tracking-widest text-neutral-300 pl-10 text-opacity-90 font-light text-sm">
//       {text}
//     </h6>
//   );
// };
