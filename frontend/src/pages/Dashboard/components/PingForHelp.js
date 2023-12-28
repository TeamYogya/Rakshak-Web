// import React, { useState, useEffect } from 'react';
// import man from "../TrialJSON/images/emergency_man.png";
//
// const PingForHelp = () => {
//   const [priority, setPriority] = useState('low');
//   const [customTime, setCustomTime] = useState('');
//   const [showCustomTime, setShowCustomTime] = useState(true);
//   const [showAllCards, setShowAllCards] = useState(false);
//
//   useEffect(() => {
//
//     setCustomTime('1hour');
//   }, []);
//
//   const handlePriorityChange = (event) => {
//     const selectedPriority = event.target.value;
//     setPriority(selectedPriority);
//     if (selectedPriority === 'low') {
//       setShowCustomTime(true);
//     } else {
//       setShowCustomTime(false);
//     }
//   };
//
//   const cardData = [
//     {
//       title: 'Authority 1',
//       description: 'This is the first card description.',
//     },
//     {
//       title: 'Authority 2',
//       description: 'This is the second card description.',
//     },
//     {
//       title: 'Authority 3',
//       description: 'This is the third card description.',
//     },
//     {
//       title: 'Authority 4',
//       description: 'This is the fourth card description.',
//     },
//     {
//       title: 'Authority 5',
//       description: 'This is the fifth card description.',
//     },
//   ];
//
//   return (
//     <div className="h-screen flex">
//       <div className="h-16 bg-purple_primary rounded-t-lg"></div>
//
//
//       <div className="flex-grow bg-gray-200 p-8">
//
//         <div className="h-[120px] bg-purple_primary rounded-lg">
//
//           <div className="flex items-center">
//
//             <img src={man}alt="Emergency Image" className="w-[130px] h-[130px]  mt-[0px] mr-4" />
//
//             <div>
//               <h2 className="text-2xl font-semibold mb-2 text-white">Don't Worry We Are Here To Help You!</h2>
//               <p className="text-sm text-black-200">Your trusted disaster management companion in an emergency.</p>
//             </div>
//           </div>
//         </div>
//
//         <div className="overflow-x-auto flex space-x-4 p-4">
//
//           <div id='slider' className='flex space-x-4 w-[400px] mt-[40px]'>
//             {cardData.map((card, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-2xl border border-primary_purple p-4 w-80 min-w-[200px] h-[220px]">
//                 <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//                 <p className="text-sm text-gray-600">{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//
//       <div className="w-30 bg-gray-100 p-8">
//
//         <div className="bg-white rounded-lg shadow-lg p-4">
//           <h2 className="text-xl font-semibold mb-4">Details about your emergency situation</h2>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="description" className="block text-sm font-medium text-gray-600">
//                 Describe your situation
//               </label>
//               <textarea
//                 id="description"
//                 name="description" rows="4" className="w-full px-4 py-2 border rounded-lg focus:out focus:border-black-200 bg-purple-200 text-black h-[250px]"
//             placeholder="Describe your situation"
//               />
//             </div>
//
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600">Priority Level</label>
//               <div className="flex items-center">
//                 <label className="mr-4">
//                   <input
//                     type="radio"
//                     name="priority" value="medium" checked={priority === 'medium'}
//                     onChange={handlePriorityChange}/>{' '} Medium </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="priority" value="low"checked={priority === 'low'}onChange={handlePriorityChange}/>{' '} Low</label>
//               </div>
//             </div>
//             {showCustomTime && (
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-600">
//                   Select Time for Low Priority
//                 </label>
//                 <div className="flex flex-col">
//                   <div className="flex mb-[20px] mt-[30px] ml-[60px]">
//                     <label className="mr-4">
//                       <input type="radio" name="time" value="30mins" className="hidden" />
//                       <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
//                         30 mins
//                       </button>
//                     </label>
//                     <label className="mr-4">
//                       <input type="radio" name="time" value="1hour" className="hidden" />
//                       <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white ">
//                         1 hour
//                       </button>
//                     </label>
//                     <label>
//                       <input type="radio" name="time" value="2hours" className="hidden" />
//                       <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
//                         2 hours
//                       </button>
//                     </label>
//                   </div>
//                   <div className="ml-[60px] flex">
//                     <label className="mr-4">
//                       <input type="radio" name="time" value="3hours" className="hidden" />
//                       <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
//                         3 hours
//                       </button>
//                     </label>
//                     <label className="mr-4">
//                       <input type="radio" name="time" value="4hours" className="hidden" />
//                       <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
//                         4 hours
//                       </button>
//                     </label>
//                     <label>
//                       <input type="radio" name="time" value="5hours" className="hidden" />
//                       <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
//                         5 hours
//                       </button>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <button
//               type="submit"
//               className="w-full bg-purple_primary text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-[30px]"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default PingForHelp;

import React, { useState, useEffect } from 'react';
import man from "../TrialJSON/images/emergency_man.png";
import Medical from "../TrialJSON/images/health.png";
import Fire from "../TrialJSON/images/fire.png";
import LocalPolice from "../TrialJSON/images/security-officer.png";
import Military from "../TrialJSON/images/soldier.png";
import NGO from "../TrialJSON/images/solidarity.png";
import { FaTrash } from 'react-icons/fa';



const PingForHelp = () => {
  const [priority, setPriority] = useState('low');
  const [customTime, setCustomTime] = useState('');
  const [showCustomTime, setShowCustomTime] = useState(true);
  const [showAllCards, setShowAllCards] = useState(false);
  const [entriesToShow, setEntriesToShow] = useState(4);
  const [emergencyRequests, setEmergencyRequests] = useState([
    {
      srNo: 1,
      contactedAgency: 'Fire Department',
      location: 'Alandi',
      status: 'Not Reached',
    },
    {
      srNo: 2,
      contactedAgency: 'Medical Services',
      location: 'Dehu Phata',
      status: 'Pending',
    },
    {
      srNo: 3,
      contactedAgency: 'Police Department',
      location: 'Moshi',
      status: 'Completed',
    },
    {
      srNo: 4,
      contactedAgency: 'NGO',
      location: 'Charoli Phata',
      status: 'Not Reached',
    },
    {
      srNo: 5,
      contactedAgency: 'NGO',
      location: '202 Avenue,Viman Nagar',
      status: 'Pending',
    },
  ]);
  useEffect(() => {
    setCustomTime('1hour');
  }, []);

  const handlePriorityChange = (event) => {
    const selectedPriority = event.target.value;
    setPriority(selectedPriority);
    if (selectedPriority === 'low') {
      setShowCustomTime(true);
    } else {
      setShowCustomTime(false);
    }
  };
  const handleEmergencyRequest = (event) => {

    const newRequest = {
      srNo: emergencyRequests.length + 1,
      contactedAgency: 'Medical',
      location: 'Some Location',
      status: 'Pending',
    };
    setEmergencyRequests([...emergencyRequests, newRequest]);
    event.preventDefault();
  };

  const cardData = [
    {
      title: 'Medical',
      description: 'This is the first card description.',
      Icon: <img src={Medical} alt="Medical Icon" />,
    },
    {
      title: 'Fire',
      description: 'This is the second card description.',
      Icon: <img src={Fire} alt="Fire Icon" />,
    },
    {
      title: 'Local Police',
      description: 'This is the third card description.',
      Icon: <img src={LocalPolice} alt="Local police Icon" />,
    },
    {
      title: 'Military',
      description: 'This is the fourth card description.',
     Icon: <img src={Military} alt="Military Icon" />,
    },
    {
      title: 'NGO',
      description: 'This is the fifth card description.',
      Icon: <img src={NGO} alt="NGO Icon" />,
    },
  ];
  return (
    <div className="overflow-y-auto h-[640px] flex">
      <div className="h-16 bg-purple_primary rounded-t-lg"></div>


      <div className="flex-grow bg-gray-200 p-8">

        <div className="h-[120px] bg-purple_primary rounded-lg">

          <div className="flex items-center">

            <img src={man} alt="Emergency Image" className="w-[120px] h-[120px]  mt-[0px] mr-4" />

            <div>
              <h2 className="text-2xl font-semibold mb-2 text-white">Don't Worry We Are Here To Help You!</h2>
              <p className="text-sm text-black-200">Your trusted disaster management companion in an emergency.</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto flex space-x-4 p-4">

          <div id='slider' className='flex space-x-4 w-[400px] mt-[40px]'>
            {cardData.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-2xl border border-primary_purple p-4 w-80 min-w-[200px] h-[220px]">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <div className="h-[30px] w-[100px] mx-auto">{card.Icon}</div>
              </div>
            ))}
          </div>
        </div>

       <div className="bg-white rounded-lg shadow-lg p-4 mt-4 text-sm">
          <h2 className="text-lg font-semibold mb-4 text-left">Recently Contacted Emergencies</h2>

          <table className="w-full bg-white rounded-lg shadow-lg text-left p-4">
            <thead>
               <tr>
                <th className="py-2 border-b  px-3">Sr No</th>
                <th className="py-2 border-b  px-3">Contacted Agency</th>
                <th className="py-2 border-b  px-3">Location</th>
                <th className="py-2 border-b  px-3">Status</th>
                <th className="py-2 border-b  px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {emergencyRequests.map((request, index) => (
                <tr key={request.srNo}>
                  <td className="py-2 border-b px-3">{request.srNo}</td>
                  <td className="py-2 border-b px-3">{request.contactedAgency}</td>
                  <td className="py-2 border-b px-3">{request.location}</td>
                  <td className="py-2 border-b px-3">
                    <div
                      className={`inline-block px-2 py-1 ${
                        request.status === 'Not Reached' ? 'bg-red-500' :
                        request.status === 'Pending' ? 'bg-blue-500' :
                        request.status === 'Completed' ? 'bg-green-500' : ''
                      }`}
                    >
                      {request.status}
                    </div>
                  </td>
                  <td className="py-2 border-b text-center">
  <div className="grid place-items-center">
    <FaTrash size={20} className="mr-2" />
  </div>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-[450px] gray-100 p-8">

        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Details about your emergency situation</h2>
          <form>
            <div className="mb-4">
              {/*<label htmlFor="description" className="block text-sm font-medium text-gray-600">*/}
              {/*  Describe your situation*/}
              {/*</label>*/}
              <textarea
                id="description"
                name="description" rows="4" className="resize-none w-full px-4 py-2 border rounded-3xl focus:outline-0 focus:border-purple-800 text-black h-[350px]"
            placeholder="Describe your situation"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-600">Priority Level</label>
              <div className="items-center mt-2">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="priority" value="medium" checked={priority === 'medium'}
                    onChange={handlePriorityChange}/>{' '} Medium </label>
                <label>
                  <input
                    type="radio"
                    name="priority" value="low"checked={priority === 'low'} onChange={handlePriorityChange}/>{' '} Low</label>
              </div>
            </div>
            {showCustomTime && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Select Time for Low Priority
                </label>
                <div className="flex flex-col">
                  <div className="flex mb-[20px] mt-[30px] ml-[60px]">
                    {/*<label className="rounded-l-lg ">*/}
                    {/*       <input type="number" placeholder="Enter time limit in which you need help in mins">*/}
                    {/*</label>*/}
                    <label className="mr-4">
                      <input type="radio" name="time" value="30mins" className="hidden" />
                      <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
                        30 mins
                      </button>
                    </label>
                    <label className="mr-4">
                      <input type="radio" name="time" value="1hour" className="hidden" />
                      <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white ">
                        1 hour
                      </button>
                    </label>
                    <label>
                      <input type="radio" name="time" value="2hours" className="hidden" />
                      <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
                        2 hours
                      </button>
                    </label>
                  </div>
                  <div className="ml-[60px] flex">
                    <label className="mr-4">
                      <input type="radio" name="time" value="3hours" className="hidden" />
                      <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
                        3 hours
                      </button>
                    </label>
                    <label className="mr-4">
                      <input type="radio" name="time" value="4hours" className="hidden" />
                      <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
                        4 hours
                      </button>
                    </label>
                    <label>
                      <input type="radio" name="time" value="5hours" className="hidden" />
                      <button className="rounded-full border border-gray-300 px-3 py-2 hover:bg-black text-white hover:border-black-200 bg-purple_primary text-white">
                        5 hours
                      </button>
                    </label>
                  </div>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-purple_primary text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-[30px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PingForHelp;