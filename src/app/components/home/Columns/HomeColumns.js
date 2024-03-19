import React from "react";
import StyledLink from "../../common/link/StyledLink";
import homeData from "../../../data/home.json";
import {
  ColumnsSection,
  ColumnsSectionContainer,
  ColumnsSectionTitle,
  ColumnsSectionTitleList,
  ColumnsSectionTitleListItem,
  ColumnsSectionTitleListItemInner,
  ColumnsSectionTitleListItemWrapper,
  ColumnsSectionTitleListItemInnerTitle,
  ColumnsSectionTitleListItemInnerParagraph,
  ColumnSectionImageWrapper,
} from "./HomeColumns.styles";
import Image from "next/image";

const HomeColumns = () => {
  const { title, columns } = homeData.stories;

  return (
    <ColumnsSection id="featured-projects">
      <ColumnsSectionContainer className="container">
        <ColumnsSectionTitle>{title}</ColumnsSectionTitle>
        <ColumnsSectionTitleList>
          {columns.map((column, index) => (
            <ColumnsSectionTitleListItem key={column.headline + index}>
              <ColumnsSectionTitleListItemWrapper>
                <ColumnSectionImageWrapper>
                  <Image
                    src={`/assets/${column.image}`}
                    alt={`Story about ${column.headline}`}
                    width="480"
                    height="420"
                    priority={index < 1}
                  />
                </ColumnSectionImageWrapper>
                <ColumnsSectionTitleListItemInner>
                  <ColumnsSectionTitleListItemInnerTitle>
                    {column.headline}
                  </ColumnsSectionTitleListItemInnerTitle>
                  <ColumnsSectionTitleListItemInnerParagraph>
                    {column.description}
                  </ColumnsSectionTitleListItemInnerParagraph>
                  <StyledLink
                    href={column.href}
                    type={column.type}
                    aria-label={`Read more about ${column.headline}`}
                  >
                    {column.text}
                  </StyledLink>
                </ColumnsSectionTitleListItemInner>
              </ColumnsSectionTitleListItemWrapper>
            </ColumnsSectionTitleListItem>
          ))}
        </ColumnsSectionTitleList>
      </ColumnsSectionContainer>
    </ColumnsSection>
  );
};

export default HomeColumns;
