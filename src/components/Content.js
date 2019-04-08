import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import {categories, more} from './Navigator';

const router = categories
  .filter((i) => i.children)
  .flatMap((i) => i.children)
  .concat(more);

const styles = (theme) => ({});

function Content(props) {
  return (
    <Switch>
      {router.map((item) => {
        return <Route exact key={item.id} path={item.url} component={() => <div>{item.icon}</div>} />;
      })}
      <Redirect from='/' to='/home' />
    </Switch>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Content));
