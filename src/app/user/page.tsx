import { Table } from "@/components/Table";
import { columns } from "@/components/user/columns";
import { DataTable } from "@/components/user/data-table";
import { getUserList } from "@/utils";

export default async function User() {
  const { allUsers, userKeyList } = await getUserList()


  return (
    <div className='mt-6'>
      <DataTable columns={columns} data={allUsers} />
      {/* <Table dataList={allUsers} dataKeyList={userKeyList} /> */}
    </div>
  );
}