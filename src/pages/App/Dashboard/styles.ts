import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Medium';
  color: #444;
`;

export const Container = styled.View`
  flex: 1;
  background: #ddd;
  padding: 8px;
  align-items: center;
`;

export const Card = styled.View`
  border-radius: 8px;
  height: 200px;
  background: #fff;
  align-self: stretch;
  position: relative;
`;

export const BorderTopLeft = styled.View`
  background: #ddd;
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-bottom-right-radius: 24px;
`;

export const BorderTopRight = styled.View`
  background: #ddd;
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-bottom-left-radius: 24px;
`;

export const BorderBottomLeft = styled.View`
  background: #ddd;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 12px;
  height: 12px;
  border-top-right-radius: 24px;
`;

export const BorderBottomRight = styled.View`
  background: #ddd;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 12px;
  height: 12px;
  border-top-left-radius: 24px;
`;
