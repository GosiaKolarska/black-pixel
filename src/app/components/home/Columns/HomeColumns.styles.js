import styled from "styled-components";

export const ColumnsSection = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 85px 0 76px;

  @media (max-width: 1100px) {
    padding: 85px 20px 76px;
  }

  @media (max-width: 990px) {
    padding: 85px 32px 76px;
  }

  @media (max-width: 590px) {
    padding: 54px 32px 40px;
  }
`;

export const ColumnsSectionContainer = styled.div``;

export const ColumnsSectionTitle = styled.h2`
  color: #111827;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  margin-bottom: 22px;

  @media (max-width: 590px) {
    font-size: 32px;
  }
`;

export const ColumnsSectionTitleList = styled.ul`
  padding: 0 0 88px;

  @media (max-width: 1440px) {
    padding: 0;
  }
`;

export const ColumnsSectionTitleListItem = styled.li`
  padding: 65px 0;

  &:nth-child(odd) {
    article {
      flex-direction: row;
    }

    div:nth-child(2) {
      padding-left: 80px;
    }
  }

  &:nth-child(even) {
    article {
      flex-direction: row-reverse;
    }

    div:nth-child(2) {
      padding-right: 80px;
    }
  }
  @media (max-width: 990px) {
    &:nth-child(odd) {
      div:nth-child(2) {
        padding-left: 40px;
        width: 50%;
      }
    }
    &:nth-child(even) {
      div:nth-child(2) {
        padding-right: 40px;
        width: 50%;
      }
    }
  }

  @media (max-width: 590px) {
    padding: 24px 0 30px;

    &:nth-child(odd) {
      article {
        flex-direction: column;
      }
      div:nth-child(2) {
        padding-left: 0;
        width: 100%;
      }
    }

    &:nth-child(even) {
      article {
        flex-direction: column;
      }
      div:nth-child(2) {
        padding-right: 0;
        width: 100%;
      }
    }
  }
`;
export const ColumnsSectionTitleListItemWrapper = styled.article`
  display: flex;
  align-items: center;
`;

export const ColumnSectionImageWrapper = styled.div`
  max-width: 480px;

  img {
    object-fit: contain;
  }

  @media (max-width: 990px) {
    width: 50%;

    img {
      height: auto;
      width: 100%;
    }
  }

  @media (max-width: 590px) {
    width: 100%;
    margin-right: auto;

    img {
    }
  }
`;

export const ColumnsSectionTitleListItemInner = styled.div`
  @media (max-width: 590px) {
    padding-top: 27px;
  }
`;

export const ColumnsSectionTitleListItemInnerTitle = styled.h3`
  color: #111;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 30px;
  max-width: 330px;

  @media (max-width: 590px) {
    flex-direction: column;
    font-size: 24px;
    padding-bottom: 29px;
    line-height: 30px;
    max-width: 100%;
  }
`;

export const ColumnsSectionTitleListItemInnerParagraph = styled.p`
  color: #0c0e15;
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 40px;

  @media (max-width: 590px) {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 20px;
  }
`;
