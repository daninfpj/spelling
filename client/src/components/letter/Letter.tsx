import * as React from 'react';

import AppState from '../app-state';
import Audio from '../audio';

import styles from './Letter.module.sass';

interface IProps {
  index: number;
  char: string;
  available: boolean;
  appState: AppState;
}

class Letter extends React.Component<IProps, {}> {
  public render() {
    const { available } = this.props;

    return (
      <div
        className={available ? styles.container : styles.containerUnavailable}
        onClick={this.onClick}
      >
        <span className={available ? styles.char : styles.charUnavailable}>
          {this.props.char === ' ' ? '_' : this.props.char}
        </span>
      </div>
    );
  }

  private onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!this.props.available) {
      return;
    }

    this.props.appState.tap(this.props.index);
    Audio.tap();
  };
}

export default Letter;
