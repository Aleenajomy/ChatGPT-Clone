import React from 'react';

const TableResponse = ({ tableData }) => {
  if (!tableData || tableData.length === 0) return null;

  const headers = Object.keys(tableData[0]);

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                {header.replace(/([A-Z])/g, ' $1').trim()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {tableData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableResponse;