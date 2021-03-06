import styled from 'styled-components';

const ClockBar = styled.div`
  width: ${props => props.big ? 4 : 2}px;
  height: ${props => props.big ? 30 : 15}px;
  background: black;
  position: absolute;
  left: 50%;
  transform-origin: 50% 35vw;
  transform: rotate(${props => props.index * 6}deg);

  @media(min-width: 1024px) {
    height: ${props => props.big ? 60 : 30}px;
    transform-origin: 50% 35vh;
  }
`;

function ClockBars() {
  const bars = [...Array(60).keys()].map((index) => {
    const isBig = (index % 5) ? undefined : true;
    
    return (
      <ClockBar index={index} big={isBig} key={index} />
    );
  });
  
  return (
    <>
      {bars}
    </>
  );
}

export default ClockBars;