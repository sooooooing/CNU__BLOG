import styled from '@emotion/styled';

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Resume = () => {
  return (
    <div>
      <Name>실전코딩 수강</Name>
      <Description>2024.03 ~ 2024.06</Description>
      <Description>React, SpringBoot 등 다양한 실무 관련 지식 수강</Description>
      <Name>조깅어플 개발 프로젝트</Name>
      <Description>2023.09 ~2023.12</Description>
      <Description>조깅 경로 추천 어플 프로젝트를 진행함</Description>
      <Name>사이보보안 인재 양성과정 참여</Name>
      <Description>2024.03 ~ 2026.02</Description>
      <Description>정보보호 특성화대학에서 주관하는 정보보안 양성과정에 참여함. </Description>
    </div>
  );
};

export default Resume;
