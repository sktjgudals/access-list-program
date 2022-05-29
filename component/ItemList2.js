
const ItemList2 = ({ getData }) => {
  return (
    <div className="bg-white w-full h-96 border overflow-y-auto">
      <div className="text-center">
        <div className="grid grid-cols-12">
          <div className="border col-span-1">이름</div>
          <div className="border col-span-2">ID</div>
          <div className="border col-span-3">날짜</div>
          <div className="border col-span-5 ">과목</div>
          <div className="border col-span-1">체온</div>
        </div>
      </div>
      {getData.length ? <div>
        {getData.map((item) => <div className=" grid grid-cols-12 text-center" key={item.id}>
          <div className="border col-span-1 h-9"><div className="m-1">{item.name}</div></div>
          <div className="border col-span-2 h-9"><div className="m-1">{item.cardId}</div></div>
          <div className="border col-span-3 h-9 overflow-hidden"><div className="m-1">{item.time}</div></div>
          <div className="border col-span-5 h-9 overflow-hidden"><div className="m-1">{item.subject}</div></div>
          <div className="border col-span-1 h-9"><div className="m-1">{item.temp}</div></div>
        </div>)} </div> : <div className="text-center">검색된 사용자가 없습니다.</div>
      }
    </div>
  )
}

export default ItemList2
