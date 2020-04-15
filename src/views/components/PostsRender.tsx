import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Paper } from '@material-ui/core';

import PostsRenderCss from '../sass/PostsRenderCss.scss';
import CommonCss from '../sass/CommonCss.scss';

interface Props{
  result: {
    name: string;
    roomID: string;
    comment: string;
    posttime: Date;
  }[];
  counter?: number;
}

class PostsRender extends React.Component<Props, {}> {
  render() {
    let { result, counter } = this.props;
    const now = new Date();
    if(counter === undefined){ counter = 0; }
    return (
      <div className={CommonCss.w90}>
        <div className={CommonCss.Title}>募集一覧</div>
        <div className={PostsRenderCss.kousinNum}>{`${counter}秒前に更新`}</div>
        <div className={PostsRenderCss.postsListWrap}>
          {result.map((item) => {
            //投稿からの経過時間，小数点以下省略
            const timeDiff = now.getTime() - item.posttime.getTime();
            const secDiff = Math.floor(timeDiff / 1000);
            let displayDiff;
            if(secDiff <= 60){ displayDiff = `${secDiff}秒前`; }
            else if(secDiff > 1200){ displayDiff = 'かなり前'; }
            else if(secDiff > 600){ displayDiff = '10分以上前'; }
            else if(secDiff > 300){ displayDiff = '5分以上前'; }
            else if(secDiff > 60){ displayDiff = '1分以上前'; }

            return (<List className={PostsRenderCss.postsList}>
                      <ListItem alignItems="flex-start" className={PostsRenderCss.noneFlex}>
                        <div className={CommonCss.mb10}>
                          {item.name}<span className={PostsRenderCss.gray}>{` - ${displayDiff}`}</span>
                        </div>
                        <Paper
                          elevation={0}
                          className={PostsRenderCss.paperStyle}>
                          <span className={PostsRenderCss.roomID}>{item.roomID}</span>
                          <br />
                          <span className={PostsRenderCss.comment}>{item.comment}</span>
                        </Paper>
                      </ListItem>
                    <Divider component="li" />
                  </List>);
          })}
        </div>
      </div>
    );
  }
}

export default PostsRender;
