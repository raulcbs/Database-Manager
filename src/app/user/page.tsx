import { Table } from "@/components/Table";
import { getUserList } from "@/utils";

export default async function User() {
  const { allUsers, userKeyList } = await getUserList()


  return (
    <div className='mt-6'>
      <Table dataList={allUsers} dataKeyList={userKeyList} />
    </div>
  );
}