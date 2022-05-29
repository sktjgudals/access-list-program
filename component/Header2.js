import { useReducer } from "react"
import Select from "./Select"

const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인화", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["food", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy","drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay","windPlay" ,"doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]
const DEFAULT_DATA = { name: "", date: "", class: "" }
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name }
    case 'setDate':
      return { ...state, date: action.date }
    case 'setClass':
      return { ...state, class: action.class }
    case 'reset':
      return { name: "", date: "", class: "" }
    default:
      return state
  }
}

const Header2 = ({ postData }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_DATA)
  function getClass(e) {
    dispatch({ type: 'setClass', class: e.target.value })
  }
  const reset = () => {
    dispatch({ type: 'reset' })
  }
  return (
    <div className="bg-gray-300 px-1 pt-2 relative">
      <div>
        <label>
          이름:
          <input className="w-16 mx-1" placeholder={"기본값"} value={state.name} onChange={(e) => dispatch({ type: 'setName', name: e.currentTarget.value })} />
        </label>
        <Select subject={"과목"} currentValue={state.class} values={classValues} names={classNames} callback={(e) => getClass(e)} />
      </div>
      <div className="py-2">
        <label>
          날짜:
          <input className="focus:outline-none" type="date" value={state.date} onChange={(e) => dispatch({ type: 'setDate', date: e.target.value })} />
        </label>
        <button className="bg-blue-300 active:bg-blue-400 absolute right-7 top-3 rounded-md py-4 px-12 " onClick={() => { reset(); postData(state) }} >검색</button>
      </div>
    </div>
  )
}

export default Header2
