import React, {useState} from 'react'

export default function MultiState() {
  const [name, setName] = useState('lynne')
  const [age, setAge] = useState(25)
  const [friends, setFriends] = useState(['kobe', 'kitty'])
  return (
    <div>
        <h2>MultiState</h2>
        <div>
            <p onClick={() => setName('zuo')}>姓名：{name}</p>
            <p onClick={() => setAge(24)}>年龄：{age}</p>
            <p onClick={() => setFriends(['zuo'])}>好友：{friends.map(item => <li key={item}>{item}</li>)}</p>
        </div>
    </div>
  )
}
