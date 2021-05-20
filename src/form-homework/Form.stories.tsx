import { Meta, Story } from "@storybook/react";
import { Form } from "./components/Form";
import { DefaultTheme, ThemeProvider } from 'styled-components';


export default {
    title: 'Homework/Form',
    component: Form,
    argTypes: { onSubmit: { action: 'clicked' } },
    decorators: [
        Story => <div style={{ maxWidth: 500, margin: '0 auto' }} >{Story()}</div>
    ],
    args: {
        
    }
} as Meta


type FormProps = Parameters<typeof Form>[0]

const Template: Story<FormProps> = (args) => <Form {...args} />

export const Primary = Template.bind({})

Primary.args = {
    
}
export const Secondary = Template.bind({})

