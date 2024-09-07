import React from 'react'

const Table = () => {
  return (
    <div className="mt-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Why book your ticket with us?
      </h1>
      
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 text-left font-medium text-gray-700 text-lg md:text-xl">Feature</th>
              <th className="py-4 px-6 text-left font-medium text-gray-700 text-lg md:text-xl">
                Booking online with us
              </th>
              <th className="py-4 px-6 text-left font-medium text-gray-700 text-lg md:text-xl">
                Booking at the ticket office
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Last-minute availability", online: true, office: false },
              { feature: "Advanced booking", online: true, office: true },
              { feature: "Multiple options (guided tours, combos, skip-the-line tickets)", online: true, office: false },
              { feature: "24/7 customer support", online: true, office: false },
              { feature: "Flexible cancellation", online: true, office: false },
              { feature: "Pay in the currency of your choice", online: true, office: false },
            ].map(({ feature, online, office }, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-4 px-6 text-gray-700 text-base md:text-lg">{feature}</td>
                <td className="py-4 px-6">
                  <div className={`flex items-center justify-center rounded-full w-8 h-8 ${online ? 'bg-green-100' : 'bg-red-100'}`}>
                    <i className={`text-${online ? 'green' : 'red'}-600`}>{online ? '✓' : 'X'}</i>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className={`flex items-center justify-center rounded-full w-8 h-8 ${office ? 'bg-green-100' : 'bg-red-100'}`}>
                    <i className={`text-${office ? 'green' : 'red'}-600`}>{office ? '✓' : 'X'}</i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="block md:hidden">
        {[
          { feature: "Last-minute availability", online: true, office: false },
          { feature: "Advanced booking", online: true, office: true },
          { feature: "Multiple options (guided tours, combos, skip-the-line tickets)", online: true, office: false },
          { feature: "24/7 customer support", online: true, office: false },
          { feature: "Flexible cancellation", online: true, office: false },
          { feature: "Pay in the currency of your choice", online: true, office: false },
        ].map(({ feature, online, office }, index) => (
          <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{feature}</h2>
            <div className="flex items-center mb-2">
              <div className={`flex items-center justify-center rounded-full w-8 h-8 ${online ? 'bg-green-100' : 'bg-red-100'}`}>
                <i className={`text-${online ? 'green' : 'red'}-600`}>{online ? '✓' : 'X'}</i>
              </div>
              <span className="ml-2 text-gray-700">Booking online with us</span>
            </div>
            <div className="flex items-center">
              <div className={`flex items-center justify-center rounded-full w-8 h-8 ${office ? 'bg-green-100' : 'bg-red-100'}`}>
                <i className={`text-${office ? 'green' : 'red'}-600`}>{office ? '✓' : 'X'}</i>
              </div>
              <span className="ml-2 text-gray-700">Booking at the ticket office</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table
