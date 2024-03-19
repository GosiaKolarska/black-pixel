import styled from "styled-components";

export const TestimonialSection = styled.section`
  padding: 40px 0 20px;

  @media (max-width: 990px) {
    padding: 0 32px 20px;
  }
`;

export const TestimonialTitle = styled.h2`
  color: white;
  text-align: left;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  margin: 0;
  padding: 110px 0 0;

  @media (max-width: 590px) {
    font-size: 32px;
    line-height: 40px;
    padding: 57px 0 15px;
  }
`;

export const TestimonialSubTitle = styled.p`
  color: #d3d3d3;
  padding: 14px 0 110px;
  font-size: 22px;

  @media (max-width: 590px) {
    padding: 14px 0 60px;
  }
`;

export const TestimonialSubTitleLink = styled.a`
  cursor: pointer;
  color: #8196fc;
  text-decoration: underline;
  display: inline-block;
`;

export const TestimonialItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 60px;
  position: relative;
  max-width: 960px;

  & > img {
    opacity: 0.4;
  }

  @media (max-width: 590px) {
    padding: 10px 30px;
  }
`;

export const TestimonialDescription = styled.div`
  font-size: 18px;
  line-height: 26px;
  padding-top: 1.5em;

  p {
    padding-bottom: 0.5em;
  }
  P:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 590px) {
    font-size: 16px;
  }
`;

export const AuthorInfo = styled.div`
  padding-top: 25px;
  display: flex;
  gap: 20px;
`;

export const AuthorImage = styled.img`
  border-radius: 50%;
  max-width: 70px;
  max-height: 70px;
  object-fit: cover;
`;

export const AuthorInfoWrapper = styled.div`
  padding-top: 0.75em;

  @media (max-width: 590px) {
    padding-top: 0;
  }
`;

export const AuthorName = styled.h3`
  text-align: left:
`;

export const AuthorRole = styled.span`
  text-align: left:
`;

export const TestimonialList = styled.div``;
