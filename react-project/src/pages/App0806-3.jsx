import React from 'react'

// 建立員工元件
const Empoyee = ({ name, age, h, w }) => {
  return (
    <div classname="emp">
      <h2>姓名：{name}</h2>
      <p>年齡：{age}</p>
      <p>身高：{h}</p>
      <p>體重：{w}</p>
    </div>
  )
}

// 建立物件資料
const employees = {
  emp1: {
    name: "襪襪",
    age: "0.6"
  },
  emp2: {
    name: "毛毛",
    age: "1.6"
  },
  emp3: {
    name: "比比",
    age: "25"
  },
}
// 建立陣列物件資料
const arrEemployees = [
  {
    id: 1,
    name: "襪襪",
    age: "0.6",
    h: 5,
    w: 4
  },
  {
    id: 2,
    name: "毛毛",
    age: "1.6",
    h: 5,
    w: 4
  },
  {
    id: 3,
    name: "比比",
    age: "25",
    h: 5,
    w: 4
  },
]

const App = () => {
  return (
    <div>
      <h1>員工資料</h1>
      {/* 呼叫員工物件，使用陣列物件資料:搭配map迴圈 */}
      {
        arrEemployees.map((emp) => {
          return (
          <Empoyee name={emp.name} age={emp.age} h={emp.h} w={emp.w} />
          )
        })
      }

      {/* 呼叫員工元件，使用物件資料
      <Empoyee name={employees.emp1.name} age={employees.emp1.age} />
      <Empoyee name={employees.emp2.name} age={employees.emp2.age} />
      <Empoyee name={employees.emp3.name} age={employees.emp3.age} /> */}

      {/* 呼叫員工元件，使用獨立資料 */}
      {/* <Empoyee name="襪襪" age="0.6"></Empoyee> */}
      {/* <Empoyee name="襪襪" age="0.6" />
      <Empoyee name="毛毛" age="2.6" />
      <Empoyee name="比比" age="25" /> */}
    </div>
  )
}

export default App