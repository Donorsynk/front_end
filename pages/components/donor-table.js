const DonorTableList = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-3 py-4 text-left text-pink-700 border-b-2 border-gray-300">
                Name
              </th>
              <th className="px-3 py-4 text-left text-pink-700 border-b-2 border-gray-300">
                Wallet
              </th>
              <th className="px-3 py-4 text-left text-pink-700 border-b-2 border-gray-300">
                Blood Type
              </th>
              <th className="px-3 py-4 text-left text-pink-700 border-b-2 border-gray-300">
                Date Donated
              </th>
              <th className="px-3 py-4 text-left text-pink-700 border-b-2 border-gray-300">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                Damian
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                0xd4ebc61981e5B...
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                A+
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                16th December, 2022
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                ...
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                Scarllet
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                0xd4ebc61934e5B...
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                A-
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                6th November, 2021
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                ...
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                Nickolas
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                0xsi3bc61981e5B...
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                0+
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                16th April, 2023
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                ...
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                Raya
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                0xd4e31b91e5B...
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                0+
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                16th December, 2022
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                ...
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                Damian
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                0xd4ebc61981e5B...
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                A+
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                16th December, 2022
              </td>
              <td className="px-3 py-4 text-left border-b border-gray-300">
                ...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DonorTableList;