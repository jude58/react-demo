import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPostsAction } from '../actions/post_action';
import {countAddAction,countReduceAction} from '../actions/counter_action';

class PostList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

//   componentDidMount() {
//     this.props.dispatch(loadPostsAction); // 加载远程数据
    
//   }

  render() {
    const { list } = this.props.post;
    const { count } = this.props.counter;
    const {clickCount} = this.props
    const Posts = list.map(post=>{
      return (<li key={post.id}>{post.title}</li>)
    })
    return (
      <div>
          <button onClick={clickCount}>获取标题与计数</button>
          <span>{count}</span>
        <ul>{ Posts }</ul>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
    counter:state.counter
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
      clickCount: () => {
          dispatch(loadPostsAction)
          dispatch(countAddAction);
    }
    };
  }

// 通过connect连接组件和redux数据,传递state数据和dispatch方法
export default connect(mapStateToProps,mapDispatchToProps)(PostList);
