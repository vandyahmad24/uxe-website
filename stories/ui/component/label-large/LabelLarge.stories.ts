import type { Meta, StoryObj } from '@storybook/react';

import { LabelLarge } from './LabelLarge';

const meta: Meta<typeof LabelLarge> = {
  title: 'UI/Component/Label Large',
  component: LabelLarge,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LabelLarge>;

export const Default: Story = {
  args: {
    label: "Lorem Ipsum"
  },
};

export const Link: Story = {
  args: {
    label: "Lorem Ipsum",
  },
};