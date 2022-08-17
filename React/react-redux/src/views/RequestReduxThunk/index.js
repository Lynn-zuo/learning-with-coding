import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { thunkRequestAction } from "@/store/actionCreator.js"

class Request extends PureComponent {
  async componentDidMount() {
    this.props.dispatch(thunkRequestAction)
  }
  render() {
    const { getData, postData } = this.props
    return (
      <div>
        <h2>Request -- Redux-Thunk</h2>
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

export default connect(mapStateToProps)(Request)
