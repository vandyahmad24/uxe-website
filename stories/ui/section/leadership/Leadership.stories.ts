import type { Meta, StoryObj } from '@storybook/react';

import { Leadership } from './Leadership';
import dt from './leadership-data.json'

const meta: Meta<typeof Leadership> = {
  title: 'UI/Component/Leadership',
  component: Leadership,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Leadership>;

export const Default: Story = {
  args: {
    data: dt
  },
};
