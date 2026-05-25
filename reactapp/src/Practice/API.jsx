import React, { useEffect, useState } from "react";

function API() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (isMounted) setUsers(data);
      } catch (err) {
        if (isMounted) setError(err.message);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {users.products &&
        users.products.map((u) => (
          <div
            key={u.id}
            className="group relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={u.thumbnail}
                alt={u.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Stock Badge */}
            <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
              {u.stock} left
            </span>

            {/* Content */}
            <div className="p-4">
              
              {/* Title */}
              <h2 className="font-bold text-lg text-white truncate">
                {u.title}
              </h2>

              <div className="flex justify-between items-center">
              {/* Rating */}
              <p className=" text-yellow-400 text-sm mt-1">
                ⭐ {u.rating}
              </p>

              {/* Price */}
              <p className=" text-red-400 font-bold text-lg mt-2">
                ${u.price.toFixed(2)}
              </p>
              </div>

              {/* Button */}
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300">
                Buy Now
              </button>

            </div>
          </div>
        ))}
    </div>
  );
}

export default API;





// import React, { useEffect, useState } from "react";

// function API() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let isMounted = true;

//     (async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/products");
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         if (isMounted) setUsers(data);
//       } catch (err) {
//         if (isMounted) setError(err.message);
//       }
//     })();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="min-h-screen bg-slate-100 p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//       {users.products &&
//         users.products.map((u) => (
//           <div
//             key={u.id}
//             className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
//           >
            
//             {/* Image */}
//             <div className="overflow-hidden">
//               <img
//                 src={u.thumbnail}
//                 alt={u.title}
//                 className="w-full h-48 object-cover group-hover:scale-105  transition duration-300"
//               />
//             </div>

//             {/* Stock Badge */}
//             <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
//               {u.stock} left
//             </span>

//             {/* Content */}
//             <div className="p-4">
              
//               {/* Title */}
//               <h2 className="font-bold text-lg text-gray-800 truncate">
//                 {u.title}
//               </h2>

//               {/* Rating */}
//               <p className="text-yellow-500 text-sm mt-1">
//                 ⭐ {u.rating}
//               </p>

//               {/* Price */}
//               <p className="text-red-500 font-bold text-lg mt-2">
//                 ${u.price.toFixed(2)}
//               </p>

//               {/* Button */}
//               <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default API;