import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class ButtonLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const {
      icon, primary, secondary, to,
    } = this.props;
    return (
      <li>
        <Button button component={this.renderLink}>
          <ListItemText inset primary={primary} secondary={secondary} />
        </Button>
      </li>
    );
  }
}
