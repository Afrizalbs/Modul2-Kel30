import styled from "styled-components";

const Link = ({ href, label, className }) => (
  <a className={className} href={href}>
    {label}
  </a>
);

const StyledLink = styled(Link)`
  color: #f9bc60;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #f9bc60;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
`;

export default StyledLink;
