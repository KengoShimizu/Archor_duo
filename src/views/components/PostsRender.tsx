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
}

class PostsRender extends React.Component<Props, {}> {
  render() {
    const { result } = this.props;
    return (
      <div className={CommonCss.w90}>
        <div className={CommonCss.Title}>募集一覧</div>
        <div className={PostsRenderCss.postsListWrap}>
          {result.map((item) => (
            <List className={PostsRenderCss.postsList}>
              <ListItem alignItems="flex-start" className={PostsRenderCss.noneFlex}>
                <div className={CommonCss.mb10}>
                  {`${item.name} `}<span className={PostsRenderCss.gray}>{item.posttime.getTime().toString()}</span>
                </div>
                <Paper
                  elevation={0}
                  className={PostsRenderCss.paperStyle}>
                  {item.roomID}<br />{item.comment}
                </Paper>
              </ListItem>
            <Divider component="li" />
          </List>
          ))}
        </div>
      </div>
    );
  }
}

export default PostsRender;
