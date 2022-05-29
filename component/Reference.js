import Header from "./Header"
import ItemList from "./ItemList"
import Input from "./Input"
import Header2 from "./Header2"
import axios from "axios"
import { useState, useReducer } from "react"
import ItemList2 from "./ItemList2"
import Image from 'next/image'
import Link from 'next/link'

const DEFAULT_DATA = { name: "", id: "", temp: "", class1: "", class2: "", class3: "", class4: "" }
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name }
    case 'setID':
      return { ...state, id: action.id }
    case 'setTemp':
      return { ...state, temp: action.temp }
    case 'setClass1':
      return { ...state, class1: action.class1 }
    case 'setClass2':
      return { ...state, class2: action.class2 }
    case 'setClass3':
      return { ...state, class3: action.class3 }
    case 'setClass4':
      return { ...state, class4: action.class4 }
    case 'userToInput':
      return { id: action.id, name: action.name, temp: "", class1: action.class1, class2: action.class2, class3: action.class3, class4: action.class4 }
    case 'reset':
      return { name: "", id: "", temp: "", class1: "", class2: "", class3: "", class4: "" }
    default:
      return state
  }
}

const Reference = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_DATA)
  function getClass1(e) {
    dispatch({ type: 'setClass1', class1: e.target.value })
  }
  function getClass2(e) {
    dispatch({ type: 'setClass2', class2: e.target.value })
  }
  function getClass3(e) {
    dispatch({ type: 'setClass3', class3: e.target.value })
  }
  function getClass4(e) {
    dispatch({ type: 'setClass4', class4: e.target.value })
  }
  function getName(e) {
    dispatch({ type: 'setName', name: e.target.value })
  }
  function getId(e) {
    dispatch({ type: 'setID', id: e.target.value })
  }
  function getTemp(e) {
    dispatch({ type: 'setTemp', temp: e.target.value })
  }
  const reset = () => {
    dispatch({ type: 'reset' })
  }
  const [data, setData] = useState([])
  const [refData, setRefData] = useState([])
  const postData = (state) => {
    axios.post('/api/ref', { state: state }).then(res => {
      setData(res.data)
    })
  }
  const userToInput = (userId) => {
    axios.post('/api/userToInput', { state: userId }).then(res => {
      const data = res.data[0]
      const classes = data.subject.split(",")
      dispatch({ type: 'userToInput', id: data.cardId, name: data.name, class1: classes[0], class2: classes[1], class3: classes[2], class4: classes[3] })
    })
  }
  const userReference = (userdata) => {
    axios.post('/api/userReference', { state: userdata }).then(res => {
      setRefData(res.data)
    })
  }
  const createUser = (userdata) => {
    if (!(userdata.name && userdata.id)) {
      window.alert("필수항목이 빠졌습니다.")
    } else {
      window.alert("성공적으로 등록되었습니다.")
      axios.post('/api/createUser', { state: userdata })
    }
  }
  const attendanceUser = (userdata) => {
    if (!(userdata.temp && userdata.name && userdata.id)) {
      window.alert("필수항복이 빠졌습니다.")
    } else {
      window.alert("출석이 완료되었습니다.")
      axios.post('/api/attendanceUser', { state: userdata })
    }
  }
  return (
    <div>
      <div className="h-20 bg-gray-200">
        <div className="relative text-center">
          <div className="text-3xl font-semibold pt-5">
            <a href="/">가좌노인문화센터</a>
          </div>
          <div className="absolute right-3 top-0 w-20">
            <Image src="/logo.png" alt="" width={100} height={100}></Image>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0">
        <div className="bg-gray-100 py-1 px-2 pb-2">
          <Header postData={(state) => postData(state)}></Header>
          <div className="text-center">
            <ItemList getData={data} postData={(data) => userToInput(data)}></ItemList>
          </div>
        </div>
        <div>
          <Input state={state} getId={(e) => getId(e)} getTemp={(e) => getTemp(e)} getName={(e) => getName(e)} getClass1={(e) => getClass1(e)} getClass2={(e) => getClass2(e)} getClass3={(e) => getClass3(e)} getClass4={(e) => getClass4(e)} reset={reset} create={(data) => createUser(data)} attend={(data) => attendanceUser(data)} />
          <div className="h-3 bg-gray-100"></div>
          <Header2 postData={(data) => userReference(data)} />
          <div className="h-3 bg-gray-100"></div>
          <ItemList2 getData={refData} />
        </div>
      </div>
      <div className="h-screen bg-gray-100"></div>
    </div>
  )
}
export async function getStaticProps() {

}

export default Reference
