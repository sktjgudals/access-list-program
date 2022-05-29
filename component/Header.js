import { useReducer } from "react"
import Select from "./Select"

const weekendValues = ["mon", "tue", "wed", "thu", "fri"]
const weekendNames = ["월요일", "화요일", "수요일", "목요일", "금요일"]
const classNames = ["급식", "국어", "영어기초", "영어중급", "중국어기초", "중국어중급", "일본어기초", "일본어중급", "한자", "역사", "서예", "문인화", "수채화", "발도로프", "웰빙요가", "한국무용기초", "한국무용중급", "사물놀이", "풍물놀이", "문서활용법", "유튜브활용법", "컴퓨터기초", "센터SNS활용법", "스마트폰기초", "스마트폰중급", "라지볼A", "라지볼B", "시니어로빅", "노래교실", "댄스스포츠기초", "댄스스포츠중급", "사교댄스기초", "사교댄스중급", "라인댄스", "민요"]
const classValues = ["food", "korean", "english1", "english2", "chinese1", "chinese2", "japanese1", "japanese2", "chinieseChar", "history", "calligraphy","drawing", "watercolor", "waldorf", "yoga", "koreaDance1", "koreaDance2", "thingPlay","windPlay" ,"doc", "youtube", "computer", "sns", "phone1", "phone2", "largeballA", "largeballB", "senior", "sing", "sportDance1", "sportDance2", "fourDance1", "fourDance2", "lineDance", "koreanSing"]
const DEFAULT_DATA = { name: "", day: "", class: "" }
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name }
    case 'setDay':
      return { ...state, day: action.day }
    case 'setClass':
      return { ...state, class: action.class }
    case 'reset':
      return { name: "", day: "", class: "" }
    default:
      return state
  }
}
const Header = ({ postData }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_DATA)
  function getDay(e) {
    dispatch({ type: 'setDay', day: e.target.value })
  }
  function getClass(e) {
    dispatch({ type: 'setClass', class: e.target.value })
  }
  const reset = () => {
    dispatch({ type: 'reset' })
  }
  return (
    <div className="relative">
      <label>
        이름:
        <input className="w-16 mx-1" placeholder={"기본값"} value={state.name} onChange={(e) => dispatch({ type: 'setName', name: e.currentTarget.value })} />
      </label>
      <Select subject={"요일"} currentValue={state.day} values={weekendValues} names={weekendNames} callback={(e) => getDay(e)} />
      <Select subject={"과목"} currentValue={state.class} values={classValues} names={classNames} callback={(e) => getClass(e)} />
      <button className="bg-gray-300 absolute right-1 active:bg-white rounded-md px-12 " onClick={() => { reset(); postData(state) }} >검색</button>
    </div>
  )
}

export default Header
