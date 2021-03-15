import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;  
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#212121')};;
  border-bottom-style: dotted;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
