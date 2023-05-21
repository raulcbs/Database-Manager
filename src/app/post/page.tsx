import { Table } from "@/components/Table"
import { getPostList } from "@/utils"

export default async function Post() {
  const { allPost, postKeyList } = await getPostList()

  return (
    <div className='mt-6'>
      <Table dataList={allPost} dataKeyList={postKeyList} />
    </div>
  )
}