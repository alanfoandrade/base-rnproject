import React from 'react';

import {
  Container,
  Text,
  Card,
  BorderTopLeft,
  BorderTopRight,
  BorderBottomLeft,
  BorderBottomRight,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Text>DASHBOARD</Text>

      <Card>
        <BorderBottomLeft />
        <BorderBottomRight />
      </Card>

      <Card>
        <BorderTopLeft />
        <BorderTopRight />
      </Card>
    </Container>
  );
};

export default Dashboard;
