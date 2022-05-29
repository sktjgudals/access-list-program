import { useState } from "react"
import Login from "../component/Login";
import Reference from "../component/Reference"

export default function Home() {
  const [state, setstate] = useState(false);
  const checkPassword = () => {
    setstate(!state)
  }
  return (
    <div className="bg-white h-auto w-screen">
      <div>
        {/* {!state && <Login check={checkPassword} />} */}
        {!state && <Reference />}
      </div>
    </div>
 )
}