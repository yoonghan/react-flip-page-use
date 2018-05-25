`use strict`

import * as React from "react";
import * as ReactDOM from 'react-dom';
import ReactFlipPage from 'react-flip-page';
import {Progressive} from './Progressive';

export interface PageProps {
  compiler: string;
  framework: string;
}

export interface PageState {
  width?: number;
  resize_timer?: any;
}

export class Page extends React.Component<PageProps, PageState> {

  constructor(props:any) {
    super(props);
    this.state = {
      width: document.body.offsetWidth,
      resize_timer: 0
    }
  }

  _handleResize = () => {
    this.setState(
      (prevState, props) => {
        return {
          width: window.innerWidth
        };
      }
    );
  }

  _debounceResize = () => {
    const self = this;
    clearTimeout(this.state.resize_timer);

    this.setState(
      (prevState, props) => {
        return {
          resize_timer: setTimeout(self._handleResize.bind(self), 100)
        };
      }
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this._debounceResize.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._debounceResize.bind(this));
  }

  render() {
    const {width} = this.state;

    return (
      <div>
        <ReactFlipPage
          orientation="horizontal"
          uncutPages={false}
          showSwipeHint={true}
          showTouchHint={true}
          height={1450}
          width={width}
          loopForever={true}
          className={'react-flip-page'}
          pageBackground={"#fff url('./img/notebook.jpg') top center / cover no-repeat scroll"}
          >
          <article>
            <h2>Security</h2>
            <div className={"question-point"}>
              <ol>
                <li>Sample Question 1</li>
                <li>Sample Question 2</li>
                <li>Sample Question 3</li>
              </ol>
            </div>
          </article>
          <article>
            <h2>SPM</h2>
            <div className={"question-point"}>
              <ol>
                <li>Sample Question 4</li>
                <li>Sample Question 5</li>
                <li>Sample Question 6</li>
              </ol>
            </div>
          </article>
        </ReactFlipPage>
      </div>
    );
  }
}
