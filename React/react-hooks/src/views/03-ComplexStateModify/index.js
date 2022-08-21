import React, {useState} from 'react'

export default function ComplexStateModify() {
    const [friends, setFriends] = useState([{
        id: 1,
        name: 'lynne',
        age: 25
    }, {
        id: 2,
        name: 'dong',
        age: 25
    }, {
        id: 3,
        name: 'gao',
        age: 25
    }])
    function addFriend() {
        const newFriends = [...friends]
        const latest = (newFriends.slice(-1) || [])[0] || {id: 0}
        newFriends.push({ id: latest.id+1, name: 'new', age: 18 })
        setFriends(newFriends)
        // 更改原数组不会触发组件重新渲染
        // setFriends(friends.push({ id: latest.id+1, name: 'new', age: 18 }))
    }
    function addAge(index) {
        const newFriends = [...friends]
        newFriends[index].age = newFriends[index].age + 1
        setFriends(newFriends)
    }
  return (
    <div>
        <h2>ComplexStateModify</h2>
        <h3>好友列表</h3>
        <ul>
            {friends.map((friend, index) => {
                return <li key={friend.id}>
                    {friend.id} -- {friend.name} -- {friend.age}
                    <button onClick={() => addAge(index)}>age++</button>
                </li>})}
        </ul>
        <button onClick={() => setFriends([...friends, { id: (friends[friends.length-1]).id+1, name: 'new', age: 18 }])}>添加好友</button>
        <button onClick={() => addFriend()}>添加好友</button>
    </div>
  )
}
