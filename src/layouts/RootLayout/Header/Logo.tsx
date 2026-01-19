import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.gray12};

  &:hover {
    opacity: 0.85;
  }
`