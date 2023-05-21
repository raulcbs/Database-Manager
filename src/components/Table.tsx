import { Post, Profile, User } from "@prisma/client"

type DataList = (User | Profile | Post)[];
type DataKeyList<T> = (keyof T)[];

interface TableProps<T> {
  dataList: DataList;
  dataKeyList: DataKeyList<T>;
}

export function Table<T>({ dataList, dataKeyList }: TableProps<T>) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {dataKeyList.map((nameColumn) => (
              <th
                scope="col"
                className="px-6 py-3"
                key={String(nameColumn)}
              >
                {String(nameColumn)}
              </th>
            ))}
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              {
                dataKeyList.map((key, index) => (
                  <td
                    className={`px-6 py-4 ${index === 0 ? 'font-bold text-gray-200' : ''}`}
                    key={String(key)}
                  >
                    {String(data[ key as keyof typeof data ])}
                  </td>
                ))
              }
              <td className="px-4 py-4">
                <div className="flex gap-4 items-center justify-center w-full h-full">
                  <button className="w-14 h-8 text-sm font-medium focus:outline-none rounded-md border focus:z-10 bg-gray-800 text-yellow-400 border-yellow-600 hover:bg-gray-700">
                    Edit
                  </button>
                  <button className="w-20 h-8 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 bg-gray-800 text-red-400 border-red-600 hover:bg-gray-700">
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


