import { gql } from "@apollo/client";

export const AllCategoriesQuery = gql`
  query {
    categories {
      name
      subCategories {
        subCategoryId
        categoryId
        name
      }
      products {
        productId
        name
        price
        discount
        description
        categoryId
        subCategoryId
        images {
          productImageId
          productId
          url
        }
      }
    }
  }
`;
