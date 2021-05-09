import { Meta, Story } from "@storybook/react";
import { PlaylistDetails } from "./PlaylistDetails";


export default {
    title: 'Playlists/Details',
    component: PlaylistDetails,
    // argTypes: { onEdit: { action: 'clicked' } }
    decorators: [
        Story => <div style={{ maxWidth: 500, margin: '0 auto' }} ><Story /></div>
    ]
} as Meta


type ButtonProps = Parameters<typeof PlaylistDetails>[0]

const Template: Story<ButtonProps> = (args) => <PlaylistDetails {...args} />

export const Primary = Template.bind({})

Primary.args = {
    playlist: {
        id: '123',
        name: 'Playlista Prywatna 😇',
        public: false,
        description: 'no i co ja dzis polubie?..🤔'
    },
}
export const Public = Template.bind({})

Public.args = {
    playlist: {
        id: '123',
        name: 'Playlista Publiczna 😇',
        public: true,
        description: 'no i co ja dzis polubie?..🤔'
    },
}