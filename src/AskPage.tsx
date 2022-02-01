import React from 'react';
import { Page } from './Page';
import {
  Fieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
} from './Styles';
import { useForm } from 'react-hook-form';
type FormData = { title: string; content: string };
export const AskPage = () => {
  const { register } = useForm<FormData>();
  return (
    <Page title="Ask a Question">
      <form>
        <Fieldset>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              {...register('title')}
              id="title"
              name="title"
              type="text"
            />
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <FieldTextArea
              {...register('content')}
              id="content"
              name="content"
            />
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
          </FormButtonContainer>
        </Fieldset>
      </form>
    </Page>
  );
};
