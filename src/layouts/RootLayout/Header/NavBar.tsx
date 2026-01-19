import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  ul {
    display: flex;
    gap: 0.5rem;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
    }

    a {
      display: inline-flex;
      align-items: center;
      height: 2rem;
      padding: 0 0.75rem;
      border-radius: 999px;
      color: ${({ theme }) => theme.colors.gray11};
      background: ${({ theme }) =>
        theme.scheme === "light" ? theme.colors.gray3 : theme.colors.gray5};

      &:hover {
        color: ${({ theme }) => theme.colors.gray12};
        background: ${({ theme }) =>
          theme.scheme === "light" ? theme.colors.gray4 : theme.colors.gray6};
      }
    }
  }
`
