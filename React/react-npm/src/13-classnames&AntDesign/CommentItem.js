import React, { PureComponent } from 'react'
import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export default class CommentItem extends PureComponent {
  constructor(props) {
    super()
  }
  render() {
    const { nickname, avatar, dateTime, comment } = this.props.commentInfo
    return (
      <Comment
        author={<a href='https://github.com/Lynn-zuo'>{nickname}</a>}
        avatar={<Avatar src={avatar} alt={nickname} />}
        content={<p>{comment}</p>}
        datetime={
          <Tooltip title={dayjs(dateTime).format('YYYY-MM-DD')}>
            <span>{dayjs(dateTime).fromNow()}</span>
          </Tooltip>
        }
        actions={[
            <span onClick={(e) => {this.removeItem(e)}}><DeleteOutlined />删除</span>
        ]}
      />
    )
  }
  removeItem() {
    this.props.removeComment()
  }
}
