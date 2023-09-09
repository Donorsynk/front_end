const PendingDonorTableList = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 px-3 py-4 text-left">
                Name
              </th>
              <th className="border-b-2 border-gray-300 px-3 py-4 text-left">
                Wallet
              </th>
              <th className="border-b-2 border-gray-300 px-3 py-4 text-left">
                Blood Type
              </th>
              <th className="border-b-2 border-gray-300 px-3 py-4 text-left">
                Date Donated
              </th>
              <th className="border-b-2 border-gray-300 px-3 py-4 text-left">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                Damian
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                0xd4ebc61981e5B...
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                A+
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                16th December, 2022
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                ...
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                Damian
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                0xd4ebc61981e5B...
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                A+
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                16th December, 2022
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                ...
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                Damian
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                0xd4ebc61981e5B...
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                A+
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                16th December, 2022
              </td>
              <td className="border-b border-gray-300 px-3 py-4 text-left">
                ...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PendingDonorTableList
