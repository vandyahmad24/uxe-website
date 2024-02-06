import type { Meta, StoryObj } from '@storybook/react';

import { Solution } from './Solution';
import dt from './solution-data.json'

const meta: Meta<typeof Solution> = {
  title: 'UI/Component/Solution',
  component: Solution,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Solution>;

export const Default: Story = {
  args: {
    data: dt
  },
};
