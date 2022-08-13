import React, { PureComponent, Fragment } from 'react'

import { PageWrap } from './style.js'
import CommentInput from './CommentInput'
import CommentItem from './CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super()
    this.state = {
        commentList: []
    }
  }
  render() {
    const { commentList } = this.state
    return (
      <Fragment>
        <h2>App</h2>
        <PageWrap>
            {/* 评论列表 */}
            { commentList.map((comment, index) => 
                <CommentItem key={comment.id} commentInfo={comment} removeComment={e => {this.removeComment(index)}} />) }
            {/* 评论输入添加 */}
            <CommentInput addComment={(e) => this.addCommentInfo(e)} />
        </PageWrap>
      </Fragment>
    )
  }
  removeComment(index) {
    const newArr = [...this.state.commentList]
    newArr.splice(index, 1)
    this.setState({
        commentList: newArr
    }, res => {
        console.log(this.state.commentList)
    })
  }
  addCommentInfo(commentInfo) {
    const newArr = [...this.state.commentList]
    newArr.push(commentInfo)
    this.setState({
        commentList: newArr
    }, res => {
        console.log(this.state.commentList)
    })
  }
}
