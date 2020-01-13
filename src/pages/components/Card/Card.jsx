import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import styles from './Card.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class Card extends Component {
  render() {
    const { children, title, actions } = this.props;
    return (
      <div className={styles.root}>
        {title ? (
          <div className={styles.header}>
            <div className={styles.left}>{title}</div>
            <div className={styles.right}>
              {(actions || []).map((item, key) => (
                <div className={styles.actions} key={key}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}

export default Card;
