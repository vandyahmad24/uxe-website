import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';
import dt from './hero-data.json'

const meta: Meta<typeof Hero> = {
  title: 'UI/Base/Hero',
  component: Hero,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    label: "Trusted by hundreds of organizations",
    data: dt
  },
};
