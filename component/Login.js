import { useState, useRef } from "react"

const Login = ({ check }) => {
  const passwordInput = useRef()
  const event = e => {
    if (e.key === "Enter") {
      if (password === "isncc") {
        check()
      }
      setPassword("")
      passwordInput.current.focus()
    }
    if (e.type === "click") {
      if (password === "isncc") {
        check()
      }
      setPassword("")
      passwordInput.current.focus()
    }
  }
  const [password, setPassword] = useState("")
  return (
    <div>
      <div className="bg-gray-100 w-2/5 mx-auto p-1 mt-60">
        <div className="text-center bg-gray-200 h-36 p-14 mx-auto text-2xl font-black">가좌노인문화센터 출석기록부</div>
        <div className="bg-gray-200 h-2/5 text-center mx-auto mt-1 p-12">
          <input className="w-3/5 h-auto p-2 text-lg rounded-lg bg-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-800" type="password" value={password} placeholder={"비밀번호"} ref={passwordInput} onChange={(e) => setPassword(e.target.value)} onKeyDown={event} />
          <button className="block w-1/4 mx-auto p-2 my-4 bg-gray-100 rounded-xl active:bg-white" onClick={event}>Enter</button>
        </div>
      </div>
    </div>
  )
}

export default Login
