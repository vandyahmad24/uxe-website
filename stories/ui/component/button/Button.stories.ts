import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Component/Button',
  component: Button,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Lorem Ipsum"
  },
};

export const Link: Story = {
  args: {
    label: "Lorem Ipsum",
    el: "a",
    href: "google.com"
  },
};