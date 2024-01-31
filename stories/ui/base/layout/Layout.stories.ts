import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';
import dt from './layout-data.json'

const meta: Meta<typeof Layout> = {
  title: 'UI/Base/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    data: dt
  },
};
