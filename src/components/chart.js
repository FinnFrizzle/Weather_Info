import React from 'react';
import _ from 'lodash';
import { Sparklines,
         SparklinesLine,
         SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  const height = 100;
  const width = 180;

  // avg = average
  return (
    <div>
      <Sparklines height={height} width={width} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div> {average(props.data)} {props.unit} </div>
    </div>
  )
};
