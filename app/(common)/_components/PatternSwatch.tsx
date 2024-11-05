'use client';

import styled from 'styled-components';

interface PatternSwatchProps {
  pattern: 'none' | 'pattern1' | 'pattern2';
  onClick?: () => void;
}

const StyledPatternSwatch = styled.button`
  width: 4rem;
  height: 4rem;
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  
  
  &:hover {
    border-color: #666;
  }
  
  &:focus {
    outline: 2px solid #0066ff;
    outline-offset: 2px;
  }
`;

const PatternImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const EmptyPattern = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background: #ff0000;
    transform: rotate(45deg);
  }
`;

export function PatternSwatch({ pattern, onClick }: PatternSwatchProps) {
  const getPatternSource = (pattern: string) => {
    switch (pattern) {
      case 'pattern1':
        return '/patterns/pattern1.png';
      case 'pattern2':
        return '/patterns/pattern2.png';
      default:
        return '';
    }
  };

  return (
    <StyledPatternSwatch
      onClick={onClick}
      aria-label={`${pattern} 패턴`}
      title={pattern}
    >
      {pattern === 'none' ? (
        <EmptyPattern />
      ) : (
        <PatternImage src={getPatternSource(pattern)} alt={`${pattern} 패턴`} />
      )}
    </StyledPatternSwatch>
  );
} 