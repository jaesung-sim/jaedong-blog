import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>💻</Emoji> Profile
      </div>
      <div className="content">
        <div className="top">
          <Image src={CONFIG.profile.image} fill alt="" />
        </div>
        <div className="mid">
          <div className=" name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="bio">
            <span className="keyword">const</span>{" "}
            <span className="bracket">[</span>
            <span className="variable">isTired</span>
            <span className="punctuation">, </span>
            <span className="function">setKeepGoing</span>
            <span className="bracket">]</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="function">useState</span>
            <span className="parenthesis">(</span>
            <span className="boolean">true</span>
            <span className="parenthesis">);</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      position: relative;
      width: 65%;
      margin: 0 auto;
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
    .mid {
      display: flex;
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-style: italic;
        font-weight: 700;
        margin-top: 1rem;
      }
      .role {
        margin-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray10};
      }
      .bio {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        background-color: #1e1e1e;
        color: #d4d4d4;

        font-family: 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace';
        font-size: 0.75rem;
        line-height: 1.2rem;
        width: 100%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        .keyword { color: #569cd6; }    /* const (파랑) */
        .variable { color: #9cdcfe; }   /* 변수명 (하늘색) */
        .function { color: #dcdcaa; }   /* 함수명 (노랑) */
        .boolean { color: #569cd6; }    /* true/false (파랑) */
        .bracket { color: #ffd700; }    /* 대괄호 (금색) */
        .parenthesis { color: #da70d6; }/* 소괄호 (보라) */
        .operator { color: #d4d4d4; }   /* 등호 */
        .punctuation { color: #d4d4d4; }/* 콤마, 세미콜론 */
      }
    }
  }
`
