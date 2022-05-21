import React, { Fragment } from 'react';

import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import 'components/Appointment/styles.scss';
import useVisualMode from 'hooks/useVisualMode';

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      { props.interview ? 
        <Show student={props.interview.student} interviewer={props.interview.interviewer} />
        : <Empty/> 
      }
    </article>
)

}
