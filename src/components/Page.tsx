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
}

export class Page extends React.Component<PageProps, PageState> {

  constructor(props:any) {
    super(props);
    this.state = {
      width: document.body.offsetWidth
    }
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
          height={1200}
          width={width}
          loopForever={true}
          className={'react-flip-page'}
          pageBackground={"#fff url('./img/notebook.jpg') top center / cover no-repeat scroll"}
          >
          <article>
            <h2>CEO Questionaires</h2>
            <div className={"question-point"}>
              <div>&bull;How do you feel for potato ? I know kartofell is not here</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
            </div>
          </article>
          <article>
            <h2>CEO Questionaires</h2>
            <div className={"question-point"}>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
            </div>
          </article>
          <article>
            <h2>CEO Questionaires</h2>
            <div className={"question-point"}>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
              <div>&bull;How do you feel for potato ?</div>
            </div>
          </article>
        </ReactFlipPage>
        <Progressive/>
      </div>
    );
  }
}
