import type { Meta, StoryObj } from '@storybook/react';

import { TitleXXSmall } from './TitleXXSmall';

const meta: Meta<typeof TitleXXSmall> = {
  title: 'UI/Title/XXSmall',
  component: TitleXXSmall,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TitleXXSmall>;

export const Heading: Story = {
  args: {
    label: "Lorem Ipsum",
    el: 'h1'
  },
};

export const Decoration: Story = {
  args: {
    label: "Lorem Ipsum",
    decoration: true
  },
};

export const Hover: Story = {
  args: {
    label: "Lorem Ipsum",
    hover: true
  },
};

export const Link: Story = {
  args: {
    label: "Lorem Ipsum",
    el: "a",
    href: "https://google.com"
  },
};

export const Button: Story = {
  args: {
    label: "Lorem Ipsum",
    el: "button",
    onClick: function() {
      console.log('works!')
    }
  },
};
