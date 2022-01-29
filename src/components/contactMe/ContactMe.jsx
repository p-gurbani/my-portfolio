import { useRef, useState } from "react";
import { useTheme } from "styled-components";
import { THEMES } from "../../theme/themes";
import BusinessCardFront from "../../images/businessCard/BusinessCardFront.png";
import BusinessCardBack from "../../images/businessCard/BusinessCardBack.png";
import {
  ContactFormContainer,
  ContactMeContainer,
  FlexWrapper,
  FormHeadingContainer,
  FormHeadingHighlight,
  FormHeadingInfo,
  FormInput,
  FormLabel,
  FormTextArea,
  FormWrapper,
  BusinessCard,
  BusinessCardContainer,
  ThankYouMessage,
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
} from "./contactMeStyled";

import { SubmitButton, GradientText } from "../common/styled";

import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";

const ContactMe = () => {
  const formRef = useRef();
  const theme = useTheme();
  const isDarkMode = theme.type === THEMES.DARK;

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setSubmitted(true);
          setLoading(false);
        },
        (err) => {
          console.log(err);
          setLoading(false);
        }
      );
  };

  return (
    <ContactMeContainer>
      <BusinessCardContainer>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <BusinessCard src={BusinessCardBack} />
            </FlipCardFront>
            <FlipCardBack>
              <BusinessCard src={BusinessCardFront} />
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </BusinessCardContainer>

      <ContactFormContainer>
        {!submitted && (
          <>
            <FormHeadingContainer>
              <FormHeadingHighlight>Get In Touch.</FormHeadingHighlight>
              <FormHeadingInfo>
                I'm always happy to be a part of something big!
              </FormHeadingInfo>
            </FormHeadingContainer>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ width: "100%" }}
            >
              <FormWrapper>
                <FlexWrapper>
                  <FormLabel htmlFor="firstname">First Name</FormLabel>
                  <FormInput
                    id="firstname"
                    bgColor={theme.colors.card}
                    color={theme.colors.text.subtitle}
                    placeholderColor={theme.colors.text.placeholder}
                    type="text"
                    required
                    placeholder="First Name"
                    autoComplete="off"
                    name="first_name"
                    mr="10px"
                    width="50%"
                  />

                  <FormLabel htmlFor="lastname">Last Name</FormLabel>
                  <FormInput
                    id="lastname"
                    bgColor={theme.colors.card}
                    color={theme.colors.text.subtitle}
                    placeholderColor={theme.colors.text.placeholder}
                    type="text"
                    required
                    placeholder="Last Name"
                    autoComplete="off"
                    name="last_name"
                    width="50%"
                  />
                </FlexWrapper>

                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  id="email"
                  bgColor={theme.colors.card}
                  color={theme.colors.text.subtitle}
                  placeholderColor={theme.colors.text.placeholder}
                  type="email"
                  required
                  placeholder="Your Email"
                  name="email"
                />

                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  id="subject"
                  bgColor={theme.colors.card}
                  color={theme.colors.text.subtitle}
                  placeholderColor={theme.colors.text.placeholder}
                  type="text"
                  required
                  placeholder="Subject"
                  autoComplete="off"
                  name="subject"
                />

                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextArea
                  id="message"
                  bgColor={theme.colors.card}
                  color={theme.colors.text.subtitle}
                  placeholderColor={theme.colors.text.placeholder}
                  rows="5"
                  required
                  placeholder="Message"
                  name="message"
                />
                <SubmitButton bgColor={theme.colors.cta.bgColor} type="submit">
                  {loading ? (
                    <ReactLoading
                      type="cylon"
                      color="#59b256"
                      height={20}
                      width={20}
                    />
                  ) : (
                    <GradientText dark={isDarkMode}>SEND</GradientText>
                  )}
                </SubmitButton>
              </FormWrapper>
            </form>
          </>
        )}
        {submitted && (
          <ThankYouMessage>Thanks for getting in touch. 🙂</ThankYouMessage>
        )}
      </ContactFormContainer>
    </ContactMeContainer>
  );
};

export default ContactMe;
