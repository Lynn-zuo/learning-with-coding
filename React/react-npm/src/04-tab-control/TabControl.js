import { Component } from "react"
import PropTypes from "prop-types"

export default class TabControl extends Component {
  // 类组件获取父组件传递的参数
  constructor(props) {
    super(props) // 父类保存 - 类的继承原理ES5
    this.state = {
        curIndex: props.curIndex
    }
  }
  static propTypes = {
    // 方式二：es6中的class field写法
    tabTitles: PropTypes.array,
    curIndex: PropTypes.number
  }
  render() {
    const { tabTitles } = this.props
    const { curIndex } = this.state
    return (
      <div className='tab-panel'>
        {tabTitles.map((title, tIndex) => (
          <div key={title}
            className={'tab-item ' + (curIndex === tIndex ? 'active' : '')}
            onClick={() => this.clickTab(tIndex)}>
            {title}
          </div>
        ))}
      </div>
    )
  }
  clickTab(index) {
    this.setState({
        curIndex: index
    })
    this.props.tabClick(index)
  }
}
