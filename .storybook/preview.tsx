import { Wrapper } from "./Wrapper";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    (Story) => <>
      <Wrapper><Story /></Wrapper>
    </>,
  ]
}