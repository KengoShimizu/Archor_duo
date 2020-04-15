import React from 'react';
import { Paper } from '@material-ui/core';

import FormToPostCss from '../sass/FormToPost.scss';
import CommonCss from '../sass/CommonCss.scss';

interface State {
  nameVal: string;
  roomIDVal: string;
  commentVal: string;
}

class FormToPost extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      nameVal: '',
      roomIDVal: '',
      commentVal: '',
    };
  }

  handleSubmit = (e) => {
    const posttime_date = new Date();
    const arrString = posttime_date.toString().split(/\s/);
    const month = ('0' + (posttime_date.getMonth()+1)).slice(-2);
    const posttime = arrString[3] + '-' + month + '-' + arrString[2] + ' ' + arrString[4];
    fetch('/submit', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.nameVal,
        comment: this.state.commentVal,
        roomID: this.state.roomIDVal,
        posttime: posttime,
      }),
      headers: new Headers({ 'Content-type' : 'application/json' })
    }).then(() => {
      alert('正しく入力してください');
    }).catch( error => console.log(error) );
    window.location.href = '/';

  }

  handleChangeName = (e) => { this.setState({nameVal: e.target.value}); }
  handleChangeRoom = (e) => { this.setState({roomIDVal: e.target.value}); }
  handleChangeComment = (e) => { this.setState({commentVal: e.target.value}); }

  render() {
    return (
      <div className={CommonCss.w90}>
        <div className={CommonCss.Title}>募集する</div>
        <Paper
          variant="outlined"
          className={FormToPostCss.Paper}>
          <p className={FormToPostCss.textFormLabel}>名前</p>
          <div className={FormToPostCss.textFormWrap}>
            <input className={FormToPostCss.textForm} type="text" name="" value={this.state.nameVal} onChange={this.handleChangeName} placeholder="匿名"/>
          </div>
          <p className={FormToPostCss.textFormLabel}>ルームID<span className={CommonCss.require}> *</span></p>
          <div className={FormToPostCss.textFormWrap}>
            <input className={FormToPostCss.textForm} type="text" name="" value={this.state.roomIDVal} onChange={this.handleChangeRoom} />
          </div>
          <p className={FormToPostCss.textFormLabel}>コメント</p>
          <div className={FormToPostCss.textFormWrap}>
            <textarea className={FormToPostCss.textForm} name="" value={this.state.commentVal} onChange={this.handleChangeComment} rows={3} cols={20} placeholder="コメント"/>
          </div>
          <button className={FormToPostCss.submitBtn} onClick={this.handleSubmit}>募集</button>
        </Paper>
      </div>
    );
  }
};

export default FormToPost;
