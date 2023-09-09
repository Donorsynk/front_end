const BloodDonation = () => {
  return (
    <div className="w-[90%] mx-auto flex justify center item-center p-10 my-14">
      <div className="w-full px-10 py-6 mr-10 bg-white rounded-lg">
        <h1 className="pb-4 text-2xl font-bold">Blood Donations</h1>
        <table className="min-w-full ">
          <thead>
            <tr>
              <th className="px-3 py-4 text-left border-b-2 border-gray-300 text-slate-400">
                Hospital
              </th>
              <th className="px-3 py-4 text-left border-b-2 border-gray-300 text-slate-400">
                Token Incentive
              </th>
              <th className="px-3 py-4 text-left border-b-2 border-gray-300 text-slate-400">
                Blood
              </th>
              <th className="px-3 py-4 text-left border-b-2 border-gray-300 text-slate-400">
                Date Donated
              </th>
              <th className="px-3 py-4 text-left border-b-2 border-gray-300 text-slate-400">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                Sr. Mary Clinic
              </td>
              <td className="px-3 py-4 text-left text-pink-400 border-b border-gray-300">
                30 $DSK
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                2 Litres
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                16th December, 2022
              </td>
      
            </tr>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                Anthony Hospital
              </td>
              <td className="px-3 py-4 text-left text-pink-400 border-b border-gray-300">
                60 $DSK
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                5 Litres
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                6th November, 2021
              </td>
            
            </tr>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                John Doe CLinic
              </td>
              <td className="px-3 py-4 text-left text-pink-400 border-b border-gray-300">
                70 $DSK
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                8 Litres
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                16th April, 2023
              </td>
              
            </tr>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                St. Mary Clinic
              </td>
              <td className="px-3 py-4 text-left text-pink-400 border-b border-gray-300">
                70 $DSK
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                4 Litres
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                16th December, 2022
              </td>
            
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="w-[60%] bg-white rounded-lg px-10 py-6">
        <h2 className="pb-4 text-xl font-semibold">Donation Appointments</h2>
        <hr></hr>
        <div className="flex justify-between w-full p-4 m-2 rounded-md item-center hover:bg-pink-100">
          <h5 className="text-sm font-semibold">St. Johns Hospital</h5>
          <p className="text-xs text-pink-500 ">2nd Feb, 23</p>
          <p className="text-xs text-gray-300">Plot, 32 HO, Volta region</p>

        </div>
        <div className="flex justify-between w-full p-4 m-2 rounded-md item-center hover:bg-pink-100">
          <h5 className="text-sm font-semibold">St. Johns Hospital</h5>
          <p className="text-xs text-pink-500 ">2nd Feb, 23</p>
          <p className="text-xs text-gray-300">Plot, 32 HO, Volta region</p>
        </div>
        <div className="flex justify-between w-full p-4 m-2 rounded-md item-center hover:bg-pink-100">
          <h5 className="text-sm font-semibold">St. Johns Hospital</h5>
          <p className="text-xs text-pink-500 ">2nd Feb, 23</p>
          <p className="text-xs text-gray-300">Plot, 32 HO, Volta region</p>
        </div>
        <div className="flex justify-between w-full p-4 m-2 rounded-md item-center hover:bg-pink-100">
          <h5 className="text-sm font-semibold">St. Johns Hospital</h5>
          <p className="text-xs text-pink-500 ">2nd Feb, 23</p>
          <p className="text-xs text-gray-300">Plot, 32 HO, Volta region</p>
        </div>
        <div className="flex justify-between w-full p-4 m-2 rounded-md item-center hover:bg-pink-100">
          <h5 className="text-sm font-semibold">St. Johns Hospital</h5>
          <p className="text-xs text-pink-500 ">2nd Feb, 23</p>
          <p className="text-xs text-gray-300">Plot, 32 HO, Volta region</p>
        </div>
      </div>
    </div>
  );
}; export default BloodDonation;