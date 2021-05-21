import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Submit } from './containers/Button';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export default {
  title: 'Homework/Button',
  component: Submit,
  argTypes: { onHover: { action: 'hover' } }
} as Meta;

const Template: Story<Parameters<typeof Submit>[0]> = (args) => <Submit {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  type: 'submit',
  value: '',
  placeholder: 'submit',
  onHover: () => { },
  onSubmit: () => { }
};

export const Hover = Template.bind({});
Hover.args = {
  disabled: true,
  type: 'submit',
  value: '',
  placeholder: 'submit',
  onHover: () => { },
  onSubmit: () => { }
};

