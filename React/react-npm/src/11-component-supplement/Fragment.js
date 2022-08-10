import { PureComponent, Fragment } from 'react'

export default class Fragments extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        films: [{
            id: 0,
            name: '大话西游'
        }, {
            id: 1,
            name: '月光宝盒'
        }, {
            id: 2,
            name: '西游记'
        }, {
            id: 3,
            name: '三国演义'
        }]
    }
  }
  render() {
    return (
      // Fragment标签替代div
    //   <Fragment>
    //     <h2>Fragment</h2>
    //     <div>
    //     {this.state.films.map(item => {
    //         return <div key={item.id}>{item.id}-{item.name}</div>
    //     })}
    //     </div>
    //   </Fragment>
      // Fragment标签短语法
      <>
        <h2>Fragment</h2>
        <div>
        {this.state.films.map(item => { // Fragment短语法不能添加可以属性，循环中不能用短语法
            return <Fragment key={item.id}>{item.id}-{item.name}</Fragment>
        })}
        </div>
      </>
    )
  }
}
