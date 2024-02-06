import type { Meta, StoryObj } from '@storybook/react';

import { Feature } from './Feature';
import dt from './feature-data.json'

const meta: Meta<typeof Feature> = {
  title: 'UI/Section/Feature',
  component: Feature,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Feature>;

export const Default: Story = {
  args: {
    data: dt
  },
};
