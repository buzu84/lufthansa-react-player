import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from './containers/Input';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export default {
    title: 'Homework/Input',
    component: Input,
} as Meta;

const Template: Story<Parameters<typeof Input>[0]> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    disabled: false,
    type: '',
    value: '',
    placeholder: '',
    onChange: () => {  }
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    type: '',
    value: '',
    placeholder: ''
};

