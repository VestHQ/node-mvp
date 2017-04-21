import React from 'react';
import { Segment } from 'semantic-ui-react';

const CustomerListItem = ({customer}) => {

  return (
    <Segment.Group>
      <Segment>
        {customer.firstName}
      </Segment>
    </Segment.Group>
  );
};

export default CustomerListItem;