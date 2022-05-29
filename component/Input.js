import Select from "./Select"

const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인학", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["급식", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy", "drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay", "windPlay", "doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]

const Input = ({ getId, getTemp, getName, create, attend, state, getClass1, getClass2, getClass3, getClass4, reset }) => {
  return (
    <div className="bg-gray-300">
      <div className="p-1">
        <label>
          이름:
          <input className="w-16 mx-1" placeholder={"기본값"} value={state.name} onChange={(e) => getName(e)} />
        </label>
        <label>
          ID:
          <input className="w-16 mx-1" placeholder={"기본값"} value={state.id} onChange={(e) => getId(e)} />
        </label>
        <label>
          온도:
          <input className="w-16 mx-1" placeholder={"기본값"} value={state.temp} onChange={(e) => getTemp(e)} />
        </label>
        <button className="bg-green-300 px-12 absolute right-3  active:bg-white rounded-md " onClick={() => { reset(); attend(state) }} >출석</button>
      </div>
      <div className="p-1 my-1">
        <Select className="" subject={"과목1"} currentValue={state.class1} values={classValues} names={classNames} callback={(e) => getClass1(e)} />
        <Select className="" subject={"과목2"} currentValue={state.class2} values={classValues} names={classNames} callback={(e) => getClass2(e)} />
        <button className="bg-yellow-500 px-12 absolute right-3 active:bg-white rounded-md " onClick={() => { reset(); create(state) }} >등록</button>
      </div>
      <div className="p-1 my-1">
        <Select subject={"과목3"} currentValue={state.class3} values={classValues} names={classNames} callback={(e) => getClass3(e)} />
        <Select subject={"과목4"} currentValue={state.class4} values={classValues} names={classNames} callback={(e) => getClass4(e)} />
        <button className="bg-red-500 px-12 py-0   absolute right-3 active:bg-white rounded-md " onClick={() => { reset() }} >취소</button>
      </div>
    </div>

  )
}

export default Input
