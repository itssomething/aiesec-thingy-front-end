import { gql } from "apollo-boost";

export const GET_OPPS_QUERY = gql`
  query($page: Int) {
    allOpportunity(page: $page, per_page: 10, smart_search: true) {
      data {
        project_name
        description
        cover_photo
      }
      paging {
        current_page
        total_items
        total_pages
      }
    }
  }
`;
