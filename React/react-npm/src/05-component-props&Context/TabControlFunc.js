import { UserContext } from './userContext'

export default function TabControl(props) {
  console.log(props, '------propfunc')
  // 类组件获取父组件传递的参数
  function clickTab(index) {
    props.tabClick(index)
  }
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div className='tab-panel'>
              {value.tabTitles.map((title, tIndex) => (
                <div
                  key={title}
                  className={"tab-item " + (props.curIndex === tIndex ? "active" : "")}
                  onClick={() => clickTab(tIndex)}>
                  {title}
                </div>
              ))}
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}
