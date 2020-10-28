import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  font-size: 1.6rem;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.articleText};
  background-color: ${({ theme }) => theme.colors.card};
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 700px;
  width: calc(100vw - 1rem);
  position: relative;
  overflow: hidden;
  p {
    margin-bottom: 2rem;
  }
  @media (min-width: 420px) {
    width: calc(100vw - 4rem);
  }
  & > .minimal {
    padding: 20px;
    width: 100%;
    position: relative;
  }
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.colors.articleText};
  font-size: 3rem;
  margin: 0 !important;
  margin-bottom: 2rem !important;
`;

export const Button = styled.button`
  border: 0;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  padding: 0;
  position: relative;
  vertical-align: middle;
  flex-grow: 1;
  background: linear-gradient(
    135deg,
    rgba(198, 54, 189, 1) 0%,
    rgba(76, 1, 175, 1) 100%
  );

  &:hover,
  &:focus {
    outline: none;
    & > span {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  & > span {
    display: block;
    transition: all 200ms ease-in-out;
    padding: 12px 24px;
  }
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  font-size: 15px;
  padding: 12px;
  border: 1px solid #888;
  line-height: 1.4;
  width: 100%;
  height: 100%;
  min-width: 200px;
  transition: all ease-out 200ms;
  color: ${({ theme }) => theme.colors.articleText};
  &:focus {
    outline: none;
    border-color: #1677be;
    box-shadow: inset 0px 0px 5px #1677be, 0px 0px 5px #1677be;
    transition: all ease 200ms;
  }
  &::--webkit-input-placeholder,
  &::-moz-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    color: inherit;
    opacity: 0.8;
  }
`;

const PoweredBy = styled.a`
  color: #7d7d7d;
  display: block;
  font-size: 12px;
  margin: 10px 0 0 0;
  text-align: center;
`;
const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 420px) {
    flex-wrap: nowrap;
  }
  margin-bottom: 2rem;
`;
const Field = styled.div`
  flex: 2;
  margin-bottom: 0.5rem;
  @media (min-width: 420px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  text-align: center;
`;

const SignupForm = () => {
  return (
    <Container>
      <Form
        action="https://app.convertkit.com/forms/1486954/subscriptions"
        method="post"
      >
        <div className="minimal">
          <div data-element="header">
            <Header>Join the Newsletter</Header>
          </div>
          <p data-element="subheader">
            Sign up to get regular updates and early-access builds, and get a
            discount with Thorium Nova launches.
          </p>
          <Fields>
            <Field>
              <Input
                name="email_address"
                placeholder="Your email address"
                required=""
                type="email"
              />
            </Field>
            <Button data-element="submit">
              <span>Subscribe</span>
            </Button>
          </Fields>
          <Center data-element="guarantee">
            We won't send you spam. Unsubscribe at any time.
          </Center>
          <PoweredBy
            href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
            data-element="powered-by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By ConvertKit
          </PoweredBy>
        </div>
      </Form>
    </Container>
  );
};

export default SignupForm;
