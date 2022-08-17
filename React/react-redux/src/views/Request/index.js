import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { getAction, postAction } from "@/store/actionCreator.js"
import { testGet, testPost } from "@/api"

class Request extends PureComponent {
  async componentDidMount() {
    const resGet = await testGet({ name: "lynne", age: "25" })
    const resPost = await testPost({ name: "lynne", age: "25" })
    this.props.resGet(resGet)
    this.props.resPost(resPost)
  }
  render() {
    const { getData, postData } = this.props
    return (
      <div>
        <h2>Request</h2>
        <div>
          <p>data</p>
          <h2>get请求</h2>
          <p>url: {getData.url}</p>
          <p>origin: {getData.origin}</p>
          <h2>post请求</h2>
          <p>url: {postData.url}</p>
          <p>params: {postData.data}</p>
          <p>origin: {postData.origin}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    getData: state.reqDataInfo.getData,
    postData: state.reqDataInfo.postData
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    // 传入store的dispatch函数
    resGet: function (getData) {
      dispatch(getAction(getData))
    },
    resPost: function (postData) {
      dispatch(postAction(postData))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Request)
