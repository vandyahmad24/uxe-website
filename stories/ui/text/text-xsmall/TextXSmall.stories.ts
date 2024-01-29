import type { Meta, StoryObj } from '@storybook/react';

import { TextXSmall } from './TextXSmall';

const meta: Meta<typeof TextXSmall> = {
  title: 'UI/Text/XSmall',
  component: TextXSmall,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextXSmall>;

export const Default: Story = {
  args: {
    label: "Lorem Ipsum",
    el: 'p'
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
