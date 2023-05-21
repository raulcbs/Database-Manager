import { Table } from "@/components/Table"
import { getProfileList } from "@/utils"

export default async function Profile() {

  const { allProfiles, profileKeyList } = await getProfileList()

  return (
    <div className='mt-6'>
      <Table dataList={allProfiles} dataKeyList={profileKeyList} />
    </div>
  )
}