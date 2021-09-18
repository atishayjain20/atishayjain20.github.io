// import React from "react";
// import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// // projects
// import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
// import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
// import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
// import L_SmartBrain from "../../assets/img/projects/brain.webp";
// import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
// import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
// import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";

// // skills
// import L_REACT from "../../assets/img/skills/react.svg";
// import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
// import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
// import L_MONGODB from "../../assets/img/skills/mongodb.svg";
// import Image from "react-bootstrap/Image";
// import L_REDUX from "../../assets/img/skills/redux.svg";
// import L_HTML5 from "../../assets/img/skills/html-5.svg";
// import L_CSS3 from "../../assets/img/skills/css3.svg";
// import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


// import "./projects-timeline.styles.css";

// const TimeLine = () => {
//   return (
//     <div id="projects">
//       <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
//       <Timeline>
//         <Events>
//         {/* Project: Todo List With MUI */}
//         <ImageEvent
//             date="01/06/2021"
//             className="text-center"
//             text="E-voting App"
//             src={L_ReactToDoList}
//             alt="E-voting App"
//           >
//             <div className="d-flex justify-content-between flex-column mt-1">
//               <div>
//                 <Accordion>
//                   <Card>
//                     <Accordion.Toggle
//                       as={Card.Header}
//                       eventKey="0"
//                       className="p-2 text-center accordian-main"
//                     >
//                       PROJECT DETAILS
//                     </Accordion.Toggle>

//                     <Accordion.Collapse eventKey="0" className="text-left">
//                       <Card.Body>
//                         <strong>Description:</strong> This is a E-voting WebApp created with DJango and HTML and CSS that controls whole Voting System.The page is different for every User according to their address and in last also shpws the result page
//                         <hr />
//                         <strong>Features:</strong>
//                         <ul className="list-styles pt-1">
//                           <li>Keeps track of Votes</li>
//                           <li>Powered by Django</li>
//                           <li>Responsive Design</li>
//                         </ul>
//                         <hr />
//                         <strong>Tech used:</strong>
//                         <ul>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_HTML5}
//                                 alt="HTML 5"
//                                 rounded
//                                 className="image-style m-1"
//                               ></Image>{" "}
//                               HTML5
//                             </span>
//                           </li>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_CSS3}
//                                 alt="CSS 3"
//                                 rounded
//                                 className="image-style m-1"
//                               ></Image>{" "}
//                               CSS3
//                             </span>
//                           </li>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_REACT}
//                                 alt="React"
//                                 rounded
//                                 className="image-style1 m-1"
//                               ></Image>{" "}
//                               Django
//                             </span>
//                           </li>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_MATERIALUI}
//                                 alt="Material-UI"
//                                 rounded
//                                 className="image-style1 m-1"
//                               ></Image>{" "}
//                               Sql(Database)
//                             </span>
//                           </li>
                          
//                         </ul>
//                       </Card.Body>
//                     </Accordion.Collapse>
//                   </Card>
//                 </Accordion>
//               </div>
//               <div className="d-flex justify-content-between flex-nowrap text-center">
//                 <UrlButton
//                   href="#"
//                   target="_blank"
//                 >
//                   SEE LIVE
//                 </UrlButton>
//                 <UrlButton
//                   href="#"
//                   target="_blank"
//                 >
//                   SOURCE CODE
//                 </UrlButton>
//               </div>
//             </div>
//           </ImageEvent>


// {/* Project: MERN Tip Calculator */}
// <ImageEvent
//             date="01/09/2019"
//             className="text-center"
//             text="Maths Game"
//             src={L_MernTipCalc}
//             alt="Maths Game"
//           >
//             <div className="d-flex justify-content-between flex-column mt-1">
//               <div>
//                 <Accordion>
//                   <Card>
//                     <Accordion.Toggle
//                       as={Card.Header}
//                       eventKey="0"
//                       className="p-2 text-center accordian-main"
//                     >
//                       PROJECT DETAILS
//                     </Accordion.Toggle>

//                     <Accordion.Collapse eventKey="0" className="text-left">
//                       <Card.Body>
//                         <strong>Description:</strong> This app generates the two digit and four options we have to choose the correct option and our score is increase and get time for 60 seconds to do maximum score
//                         It uses JavaScript and jQueryto accomplish this
//                         <hr />
//                         <strong>Features:</strong>
//                         <ul className="list-styles pt-1">
//                           <li>Get two Digits On Screen</li>
//                           <li>Choose Correct option</li>
//                           <li>Styled CSS</li>
//                         </ul>
//                         <hr />
//                         <strong>Tech used:</strong>
//                         <ul>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_HTML5}
//                                 alt="HTML 5"
//                                 rounded
//                                 className="image-style m-1"
//                               ></Image>{" "}
//                               HTML5
//                             </span>
//                           </li>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_CSS3}
//                                 alt="CSS 3"
//                                 rounded
//                                 className="image-style m-1"
//                               ></Image>{" "}
//                               CSS3
//                             </span>
//                           </li>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_REACT}
//                                 alt="React"
//                                 rounded
//                                 className="image-style1 m-1"
//                               ></Image>{" "}
//                               Javascript
//                             </span>
//                           </li>
//                           <li>
//                             <span className="p-2">
//                               <Image
//                                 src={L_REACT}
//                                 alt="React"
//                                 rounded
//                                 className="image-style1 m-1"
//                               ></Image>{" "}
//                               jQuery
//                             </span>
//                           </li>
//                         </ul>
//                       </Card.Body>
//                     </Accordion.Collapse>
//                   </Card>
//                 </Accordion>
//               </div>
//               <div className="d-flex justify-content-between flex-nowrap text-center">
//                 <UrlButton
//                   href="#"
//                   target="_blank"
//                 >
//                   SOURCE CODE
//                 </UrlButton>
//               </div>
//             </div>
//           </ImageEvent>
//         </Events>
//       </Timeline>
//     </div>
//   );
// };

// export default TimeLine;
