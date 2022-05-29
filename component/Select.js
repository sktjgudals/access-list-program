
const Select = ({ subject, values, names, callback, currentValue }) => {
  return (
    <>
      <label>
        {subject}:
        <select className="mx-1" value={currentValue} onChange={callback} >
          <option value={null}>기본값</option>
          {values.map((value, index) => <option value={value} key={value}>{names[index]}</option>)}
        </select>
      </label>
    </>
  )
}

export default Select
