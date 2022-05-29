
const ItemList = ({ getData, postData }) => {
  return (
    <div className="bg-white w-full h-96 mt-1 border overflow-y-auto" >
      <div className="text-center">
        <div className="grid grid-cols-11">
          <div className="border  col-span-1">이름</div>
          <div className="border  col-span-2">ID</div>
          <div className="border col-span-7">과목</div>
          <div className="border  col-span-1">출석</div>
        </div>
      </div>
      {getData.length ? <div>
        {getData.map((item) => <div className=" grid grid-cols-11" key={item.id}>
          <div className="border col-span-1"><div className="m-1">{item.name}</div></div>
          <div className="border col-span-2"><div className="m-1">{item.cardId}</div></div>
          <div className="border col-span-7 overflow-hidden"><div className="m-1">{item.subject}</div></div>
          <div className="border col-span-1 text-center"><button onClick={() => { postData(item.id) }} className="bg-green-300 active:bg-white rounded-md m-1 px-1">출석?</button></div>
        </div>)} </div> : <div>검색된 사용자가 없습니다.</div>
      }
    </div>
  )
}

export default ItemList