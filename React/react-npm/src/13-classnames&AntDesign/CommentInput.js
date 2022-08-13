import React, { PureComponent } from "react"
import { Input, Button } from "antd"
import dayjs from 'dayjs'
export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        comment: ''
    }
  }
  render() {
    const { comment } = this.state
    return (
      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <Input.TextArea
          style={{ width: "350px" }}
          autoSize={{ minRows: 3, maxRows: 6 }}
          placeholder='说点儿什么吧'
          value={comment}
          onChange={(e) => {this.changeComment(e)}}
        />
        <br />
        <Button
          style={{ marginTop: "10px" }}
          onClick={(e) => {
            this.addComment(e)
          }}>
          添加评论
        </Button>
      </div>
    )
  }
  changeComment(e) {
    this.setState({
        comment: e.currentTarget.value
    })
  }
  addComment() {
    this.props.addComment({
        id: (new Date().getTime()),
        nickname: 'lynne',
        avatar: 'https://avatars.githubusercontent.com/u/59142364?v=4',
        dateTime: dayjs(),
        comment: this.state.comment
    })
    this.setState({
        comment: ''
    })
  }
}
