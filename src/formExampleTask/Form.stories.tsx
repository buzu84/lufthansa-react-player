import { Meta, Story } from "@storybook/react";
import { Form } from "./components/Form";
import { DefaultTheme, ThemeProvider } from 'styled-components';


export default {
    title: 'Form',
    component: Form,
    // argTypes: { onEdit: { action: 'clicked' } }
    decorators: [
        Story => <div style={{ maxWidth: 500, margin: '0 auto' }} >{Story()}</div>
        // Story => <div style={{ maxWidth: 500, margin: '0 auto' }} ><Story /></div>
    ]
} as Meta


type ButtonProps = Parameters<typeof Form>[0]

const Template: Story<ButtonProps> = (args) => <Form {...args} />

export const Primary = Template.bind({})

Primary.args = {
    
}
export const Public = Template.bind({})

