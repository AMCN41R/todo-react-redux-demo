import * as React from "react"
import LinkContainer from "../containers/link-container";
import { filterOptions } from "../redux/visibility/visibility";

​
const Footer = () => (
  <p>
    Show:
    {' '}
    <LinkContainer filter={filterOptions.SHOW_ALL}>
      All
    </LinkContainer>
    {', '}
    <LinkContainer filter={filterOptions.SHOW_ACTIVE}>
      Active
    </LinkContainer>
    {', '}
    <LinkContainer filter={filterOptions.SHOW_COMPLETED}>
      Completed
    </LinkContainer>
  </p>
)
​
export default Footer