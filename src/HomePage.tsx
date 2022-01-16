import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => (
  <Page>
    <div>
      <PageTitle>Unanswered Questions</PageTitle>
      <div>
        <button>Ask a Question</button>
      </div>
      <QuestionList data={getUnansweredQuestions()} />
    </div>
  </Page>
);
