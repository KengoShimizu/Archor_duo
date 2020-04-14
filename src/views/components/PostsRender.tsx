import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Paper } from '@material-ui/core';

import PostsRenderCss from '../sass/PostsRenderCss.scss';
import CommonCss from '../sass/CommonCss.scss';

interface Props{
  result: {id: number; name: string; text: string;}[];
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
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <React.Fragment>
                      {item.name + " "}
                      <Typography
                        variant="body2"
                        className={PostsRenderCss.inline}
                        color="textSecondary">
                        — to
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Paper
                        elevation={0}
                        className={PostsRenderCss.paperStyle}>
                          {item.text}
                      </Paper>
                    </React.Fragment>
                  }
                />
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
